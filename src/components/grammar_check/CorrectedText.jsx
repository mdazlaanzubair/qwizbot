import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { useAppContext } from "../../contexts/AppContext";
import { useGrammarContext } from "../../contexts/GrammarContext";

const CorrectedText = () => {
  // grabbing global context states
  const { correctedText } = useGrammarContext();
  const { isLoading } = useAppContext();

  return correctedText.length > 0 || correctedText !== "" ? (
    <form className="card w-full">
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold">Correction Completed</h2>
        <p className="bg-slate-50 shadow-sm p-3 rounded-box">{correctedText}</p>
        <div className="card-actions mt-5">
          <button type="button" className="btn btn-sm btn-ghost normal-case">
            <CopyToClipboard
              text={correctedText}
              onCopy={() => toast.info("Text copied!")}
            >
              <p>Copy to Clipboard</p>
            </CopyToClipboard>
          </button>
        </div>
      </div>
    </form>
  ) : isLoading ? (
    <div className="card w-full animate-pulse">
      <div className="card-body">
        <h2 className="bg-slate-300 rounded-full h-3 w-3/4"></h2>
        <p className="bg-slate-300 rounded-full h-1.5 w-2/3"></p>
        <p className="bg-slate-300 rounded-full h-1.5 w-1/3"></p>
        <p className="bg-slate-300 rounded-full h-1.5 w-1/3"></p>
        <p className="bg-slate-300 rounded-full h-1.5 w-2/4"></p>
        <p className="bg-slate-300 rounded-full h-5 w-20 mt-5"></p>
      </div>
    </div>
  ) : (
    ""
  );
};

export default CorrectedText;
