import CodeBlock from "./CodeBlock";

export default function Example({ number, language = "php", content }) {
  return (
    <div className="mb-3">
      <h4 className="text-lion-orange mb-3">Example #{number}</h4>

      <CodeBlock language={language} content={content} />
    </div>
  );
}
