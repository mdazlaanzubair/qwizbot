import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppContext } from "../../contexts/AppContext";
import { useQnaContext } from "../../contexts/QnaContext";
import { getAnswer } from "../../helpers/functions/openAiHelper";

const QuestionForm = () => {
  // getting global answer state
  const { setAnswer, qnas, setQnas } = useQnaContext();

  // grabbing global state for processing / loading
  const { setIsLoading } = useAppContext();

  // schema for qna prompt form with custom error messages
  const qnaPromptSchema = yup.object().shape({
    question: yup
      .string("Question must be a string.")
      .required("Question is required.")
      .min(6, "Question must be more than 6 characters.")
      .max(100, "Question must not be more than 100 characters."),
  });

  // destructuring "useForm" hook and connecting to "yup" using "yupResolver"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(qnaPromptSchema),
  });

  const askItOut = async (formData) => {
    // changing loading state
    setIsLoading(true);

    // using ai helper to get answer
    const answer = await getAnswer(formData.question);
    setQnas([{ q: formData.question, a: answer }, ...qnas]);
    setAnswer(answer);

    // changing loading state
    setIsLoading(false);
  };

  return (
    <form className="form-control w-full" onSubmit={handleSubmit(askItOut)}>
      <label className="label">
        <span className="label-text">What's in your mind?</span>
      </label>
      <input
        {...register("question")}
        type="text"
        placeholder="Type you question here..."
        className="input input-bordered w-full"
        autoFocus
      />
      <label className="label">
        {errors.question ? (
          <span className="label-text text-error">
            {errors.question.message}
          </span>
        ) : (
          <span className="label-text">Ask me out</span>
        )}
      </label>
    </form>
  );
};

export default QuestionForm;
