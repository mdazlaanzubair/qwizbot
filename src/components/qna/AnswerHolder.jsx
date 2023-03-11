import { useQnaContext } from "../../contexts/QnaContext";
import CopyToClipboard from "react-copy-to-clipboard";
import { useAppContext } from "../../contexts/AppContext";
import { toast } from "react-toastify";

const AnswerHolder = () => {
  // getting global answer state
  const { qnas } = useQnaContext();

  // grabbing global state for processing / loading
  const { isLoading } = useAppContext();

  return isLoading ? (
    <div role="status" className="w-full animate-pulse">
      <div className="alert shadow-lg">
        <div className="">
          <div>
            <h3 className="h-2.5 bg-gray-400 rounded-full w-48 mb-3"></h3>
            <h3 className="h-1 bg-gray-400 rounded-full w-96 mb-2"></h3>
            <h3 className="h-1 bg-gray-400 rounded-full w-96 mb-3"></h3>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  ) : qnas.length > 0 && !isLoading ? (
    qnas.map((qna, index) => (
      <div key={index} className="alert shadow-lg items-start mb-5">
        <div>
          <div>
            <h3 className="font-bold mb-3">{qna.q}</h3>
            <div className="text-xs">{qna.a}</div>
          </div>
        </div>
        <div className="flex-none">
          <button className="btn btn-sm btn-square btn-primary">
            <CopyToClipboard
              text={qna.a}
              onCopy={() => toast.info("Answer copied!")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                />
              </svg>
            </CopyToClipboard>
          </button>
        </div>
      </div>
    ))
  ) : (
    ""
  );
};

export default AnswerHolder;
