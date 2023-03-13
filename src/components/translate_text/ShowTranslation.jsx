import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { useAppContext } from "../../contexts/AppContext";
import { useTextTranslationContext } from "../../contexts/TextTranslationContext";

const ShowTranslation = () => {
  // grabbing global context states
  const { translatedText } = useTextTranslationContext();
  const { isLoading } = useAppContext();

  return translatedText !== "" ? (
    <div className="card w-full">
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold">Translated Text</h2>
        <CopyToClipboard
          text={translatedText}
          onCopy={() => toast.info("Text copied!")}
        >
          <p className="bg-slate-50 shadow-sm p-3 rounded-box mb-3 hover:bg-slate-200">
            {translatedText}
          </p>
        </CopyToClipboard>
      </div>
    </div>
  ) : translatedText !== "" && isLoading ? (
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

export default ShowTranslation;
