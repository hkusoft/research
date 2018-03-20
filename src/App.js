import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ResearchTimeline from "./components/ResearchTimeline";


class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <h1 className="App-title">Research</h1>
          <h2 className="App-intro">CAD/CAM, CG, Optimization, HCI, Algorithm</h2>
        </header>

        <ResearchTimeline />
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {this.renderMainTabs()} */}
      </div>;
  }

  renderMainTabs = () => {
    console.log("Rendering Tabs");
    return (
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    );
  };
}

export default App;
