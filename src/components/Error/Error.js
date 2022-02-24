import { useContext } from "react";
import AppContext from "../../store";

const Error = () => {
  const appCtx = useContext(AppContext);
  return (
    <div className="alert alert-danger text-center" role="alert">
      {appCtx.errorMessage}
    </div>
  );
};

export default Error;
