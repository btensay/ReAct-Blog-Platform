import React, { Component } from 'react';

import axios from 'axios';

import BlogComponent from "./anonymous-user/blog.component";


export default class AnonymousViewBlogList extends Component{
    constructor(props){
        super(props);
        this.state = {blogs: []};
    }
    
    blogEntriesList() {
        return this.state.blogs.map(function(currentBlogEntry, i){
            return <BlogComponent blogEntry={currentBlogEntry} 
                              key={i}
                              blogEntryId ={currentBlogEntry.id} 
                             />;
        })
    }      
    
    componentDidMount() {
        axios.get('http://localhost:4000/blogentries/')
            .then(response => {
                this.setState({ blogs: response.data });                
            })
            .catch(function (error){
                console.log(error);
            })
    }    
    
    render(){
        return(
            <div style={{marginTop: 10}} className="container">
                <h3>Anon View ReBlog Blogs List</h3>
                <div className="jumbotron">
                { this.blogEntriesList() }
                </div>           
            </div>
        )
    }
}