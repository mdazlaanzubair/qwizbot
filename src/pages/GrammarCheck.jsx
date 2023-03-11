import CorrectedText from "../components/grammar_check/CorrectedText";
import GrammarForm from "../components/grammar_check/GrammarForm";

const GrammarCheck = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="">
          <GrammarForm />
        </div>
        <div className="">
          <CorrectedText />
        </div>
      </div>
    </div>
  );
};

export default GrammarCheck;
