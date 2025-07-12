import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1 className="test">WordWise</h1>
      <PageNav />
      <AppNav />
      <Link to="./app">Go to the app</Link>
    </div>
  );
}

export default Homepage;
