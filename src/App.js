import "./App.css";
import { Router } from "@reach/router";
import Home from "./Pages/Home";
import { Fragment } from "react";
import MenuBar from "./Components/MenuBar";
import Post from "./Pages/Post";

function App() {
  return (
    <Fragment>
      <MenuBar >
      <Router>
        <Home path="/" />
        <Post path="/post/:postId" />
      </Router>
      </MenuBar>
     
    </Fragment>
  );
}

export default App;
