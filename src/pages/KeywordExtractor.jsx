import KeywordsHolder from "../components/keyword_extractor/KeywordsHolder";
import PassageForm from "../components/keyword_extractor/PassageForm";

const KeywordExtractor = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="">
          <PassageForm />
        </div>
        <div className="">
          <KeywordsHolder />
        </div>
      </div>
    </div>
  );
};

export default KeywordExtractor;
