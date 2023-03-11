import AnswerHolder from "../components/qna/AnswerHolder";
import QuestionForm from "../components/qna/QuestionForm";

const QuestionAnswer = () => {
  return (
    <div className="container">
      <div className="flex flex-col w-full md:w-3/4 lg:w-1/2 mx-auto justify-center items-center mb-5">
        <QuestionForm />
      </div>

      <div className="flex flex-col w-full md:w-3/4 lg:w-1/2 mx-auto justify-center items-center mb-5">
        <AnswerHolder />
      </div>
    </div>
  );
};

export default QuestionAnswer;
