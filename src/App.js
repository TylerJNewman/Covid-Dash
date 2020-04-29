import React from "react";
import "./App.css";
import Layout from "./components/Layout.js";
import NavBar from "./components/NavBar.js";
import Container from "./components/Container.js";
import GroupItems from "./components/GroupItems.js";
import { SearchInput } from "evergreen-ui";

function App() {
  return (
    <div className="App">
      <Layout>
        <NavBar />
        <Container>
          <SearchInput
            autoFocus
            height={40}
            width="100%"
            marginTop={40}
            placeholder="Search components and foundation..."
            // value={this.state.searchQuery}
            // onChange={this.handleChange}
          />
          <GroupItems />
        </Container>
      </Layout>
    </div>
  );
}

export default App;
