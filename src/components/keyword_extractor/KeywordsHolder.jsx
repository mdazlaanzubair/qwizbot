import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { useKeywordContext } from "../../contexts/KeywordContext";

const KeywordsHolder = () => {
  // grabbing global context states
  const { keywords } = useKeywordContext();
  return keywords.length > 0 ? (
    <div>
      <div className="flex flex-wrap">
        {keywords.map((keyword, index) => (
          <button className="btn btn-info btn-xs m-1" key={index}>
            <CopyToClipboard
              text={keyword}
              onCopy={() => toast.info("Keyword copied!")}
            >
              <span>{keyword}</span>
            </CopyToClipboard>
          </button>
        ))}
      </div>

      <button className="btn btn-primary mt-5">
        <CopyToClipboard
          text={keywords}
          onCopy={() => toast.info("All keywords copied!")}
        >
          <span>Copy All</span>
        </CopyToClipboard>
      </button>
    </div>
  ) : (
    ""
  );
};

export default KeywordsHolder;
