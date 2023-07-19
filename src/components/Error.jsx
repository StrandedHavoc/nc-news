const Error = ({ errorStatus, errorMessage }) => {
  console.log(errorStatus, "this is my error status");
  return (
    <div className="error">
      <p>404</p>
      <p>Not found: Page does not Exist</p>
    </div>
  );
};

export default Error;
