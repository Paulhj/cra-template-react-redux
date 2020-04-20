import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import PageNotFound from "./PageNotFound";
import ItemsPage from "./items/ItemsPage";
// eslint-disable-next-line import/no-named-as-default
import ManageItemPage from "./items/ManageItemPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/items" component={ItemsPage} />
        <Route path="/item/:slug" component={ManageItemPage} />
        <Route path="/item" component={ManageItemPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
