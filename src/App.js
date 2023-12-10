import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/Components"> Components </Link>
          </li>
          <li>
            {" "}
            <Link to="/Contacts"> Contacts </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Components">
          <Components />
        </Route>

        <Route path="/Contacts">
          <Contacts />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;

function Home() {
  return <div>Home</div>;
}

function Components() {
  return <div>Components</div>;
}
function About() {
  return <div>About</div>;
}
function Contacts() {
  return <div>Contacts</div>;
}

function NotFound() {
  const history = useHistory();

  useEffect(() => {
    const id = setTimeout(() => {
      history.push("/");
    }, 2000);
    return () => {
      clearTimeout(id);
    };
  });

  return <div>404 Not Found</div>;
}
