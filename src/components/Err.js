import { useRouteError } from "react-router-dom";
const Err = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oopss..!</h1>
      <h2>{err.statusText}</h2>
    </div>
  );
};
export default Err;
