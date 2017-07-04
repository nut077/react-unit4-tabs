import React, {Component} from 'react';
import {Tabs, TabLists, TabPanel, Tab} from "../components";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  render() {
    return (
      <div className="container mt-2">
        <Tabs selectedIndex={0}>
          <TabLists>
            <Tab tabIndex={0}>Tab#1</Tab>
            <Tab tabIndex={1}>Tab#2</Tab>
            <Tab tabIndex={2}>Tab#3</Tab>
          </TabLists>
          <TabPanel tabIndex={0}>TabPanel#1</TabPanel>
          <TabPanel tabIndex={1}>TabPanel#2</TabPanel>
          <TabPanel tabIndex={2}>TabPanel#3</TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
