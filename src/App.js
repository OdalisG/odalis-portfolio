import React, { Component } from "react";
import "./App.css";
//import all the tags
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      //reference: https://tleunen.github.io/react-mdl/components/layout/
      //linked routers into the URL
      // added uigradients color to the header/title bar
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Title" scroll>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/api">Api</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/api">Api</Link>
              <Link to="/crud">CRUD</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
