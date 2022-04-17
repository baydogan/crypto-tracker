const Error = ({ error }) => {
  return (
    <>
      <div
        class="p-4 mb-4 text-sm bg-gray-400 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
        role="alert"
      >
        <span class="font-medium">{error && error}</span>
      </div>
    </>
  );
};

export default Error;
