function LibraryTitle({ className, methodName }) {
  return (
    <div className="mb-3">
      <h2 className={'text-light'}>
        {className}::<span className="text-lion-orange fs-4">{methodName}()</span>
      </h2>

      <hr />
    </div>
  );
}

export default LibraryTitle;
