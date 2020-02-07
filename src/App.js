import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import BlogEntryDetail from "./components/blog-detail.component";
import Blogs from "./components/anonymous-user/blog-entries.component";
import CreateBlogEntry from "./components/admin/create-blogentry.component";
import EditBlogEntry from "./components/admin/edit-blogentry.component";
import ListBlogEntries from "./components/admin/list-blogentries.component";

function App() {
  return (
    <Router>
      <div className="App container">
      <header className="App-header">
        <h1 className="header">React Blog Platform</h1>       
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav">
            <li className="navbar-item nav-link">
              <Link to="/anonymous" className="nav-link">Anonymous View</Link>
            </li>         
            <li className="navbar-item nav-link">
              <Link to="/" className="nav-link">Admin View</Link>
            </li>
            <li className="navbar-item nav-link">
              <Link to="/create" className="nav-link">Create Blog Entry</Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
      <Route path="/" exact component={ListBlogEntries} />  
      <Route path="/anonymous" exact component={Blogs} />       
      <Route path="/detail/:id" exact component={BlogEntryDetail} />
      <Route path="/create" exact component={CreateBlogEntry} />
      <Route path="/edit/:id" exact component={EditBlogEntry} />
    </Router>    
  );
}

export default App;
