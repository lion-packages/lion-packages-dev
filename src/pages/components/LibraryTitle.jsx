function LibraryTitle({ className, methodName }) {
  return (
    <div className="mb-3">
      <h2>
        {className}::<span className="text-lion-orange h3">{methodName}()</span>
      </h2>

      <hr />
    </div>
  );
}

export default LibraryTitle;
