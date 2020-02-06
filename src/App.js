import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import BlogEntryDetail from "./components/blog-detail.component";
import Blogs from "./components/blogs.component";
import CreateBlogEntry from "./components/create-blogentry.component";
import EditBlogEntry from "./components/edit-blogentry.component";
import ListBlogEntries from "./components/list-blogentries.component";

function App() {
  return (
    <Router>
      <div className="App container">
      <header className="App-header">
        <h1>Tensu ReBlog Platform</h1>
        <h2>Anonymous user view - blogs list</h2>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Blogs List</Link>
            </li>
            <li className="navbar-item">
              <Link to="/anonymous" className="nav-link">Anonymous View</Link>
            </li>
            <li className="navbar-item">
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
