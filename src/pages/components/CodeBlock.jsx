import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard-ts";
import { MdCheck, MdContentCopy } from "react-icons/md";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodeBlock({ language, content }) {
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    setTimeout(() => setCopy(false), 2000);
  }, [copy]);

  return (
    <div className="parentDiv shadow">
      <CopyToClipboard
        className="copyButton text-light"
        text={content}
        onCopy={() => setCopy(true)}
      >
        {!copy ? <MdContentCopy role="button" /> : <MdCheck role="button" />}
      </CopyToClipboard>

      <SyntaxHighlighter
        customStyle={{ position: "relative" }}
        language={language}
        style={darcula}
        className="rounded p-3 font-code"
        showLineNumbers={!["bash"].includes(language)}
        wrapLines
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
