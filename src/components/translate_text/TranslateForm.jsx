import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppContext } from "../../contexts/AppContext";
import { talkToGpt } from "../../helpers/functions/openAiHelper";
import { useTextTranslationContext } from "../../contexts/TextTranslationContext";
import languages from "../../helpers/constant/languages";
import Select from "react-tailwindcss-select";
import { useState } from "react";

const TranslateForm = () => {
  // grabbing global state for processing / loading
  const { setIsLoading } = useAppContext();

  // getting global context state
  const { setTranslatedText } = useTextTranslationContext();

  // state to hold selected language
  const [selectedLang, setSelectedLang] = useState(null);

  // function to run on language selection or change
  const languageChanged = (value) => {
    console.log(value);
    setSelectedLang(value);
  };

  // schema for grammar prompt form with custom error messages
  const grammarPromptSchema = yup.object().shape({
    text: yup
      .string("Passage must be a string.")
      .required("Passage is required.")
      .min(6, "Passage must be more than 6 characters.")
      .max(100, "Passage must not be more than 100 characters."),
  });

  // destructuring "useForm" hook and connecting to "yup" using "yupResolver"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(grammarPromptSchema),
  });
  const translateIt = async (formData) => {
    // changing loading state
    setIsLoading(true);

    // using ai helper to get answer
    const prompt =
      `Translate this text "${formData.text}" into following language(s) \n\n` +
      selectedLang.map((lang, index) => `${index + 1}. ${lang.label}\n`);

    const response = await talkToGpt(`${prompt}`);
    // splitting multi-line response to array
    const textArray = response.data.choices[0].text.split(/\r?\n/);

    setTranslatedText(textArray);

    // changing loading state
    setIsLoading(false);
  };

  return (
    <form className="card w-full" onSubmit={handleSubmit(translateIt)}>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold">
          Multi-Lingual Translation
        </h2>
        <p>Just give me the text and see the magic of AI.</p>
        <div className="form-control mb-5">
          <textarea
            {...register("text")}
            className="textarea border-neutral-200"
            placeholder="Your text goes here..."
            rows="5"
            autoFocus
          ></textarea>
          <label className="label">
            {errors.question ? (
              <span className="label-text text-error">
                {errors.question.message}
              </span>
            ) : (
              <span className="label-text text-success">
                All Good{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 inline-block self-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
              </span>
            )}
          </label>
        </div>
        <div className="form-control mb-5">
          <Select
            value={selectedLang}
            onChange={languageChanged}
            options={languages}
            isSearchable
            isMultiple
            isClearable
          />
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-success">Translate</button>
        </div>
      </div>
    </form>
  );
};

export default TranslateForm;
