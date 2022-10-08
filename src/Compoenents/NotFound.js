import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found">
      <h3> Sorry..404</h3>
      <p>This page is Not Found..</p>
      <Link to="/">{<h5>Back to Home Page.</h5>}</Link>
    </div>
  );
};

export default NotFound