import ShowTranslation from "../components/translate_text/ShowTranslation";
import TranslateForm from "../components/translate_text/TranslateForm";

const TranslateText = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="">
          <TranslateForm />
        </div>
        <div className="">
          <ShowTranslation />
        </div>
      </div>
    </div>
  );
};

export default TranslateText;
