import React, { Component } from 'react';

import axios from 'axios';

import BlogEntry from "./blog-entry.component";


export default class BlogEntriesList extends Component{
    constructor(props){
        super(props);
        this.state = {blogEntries: []};
    }
    
    blogEntriesList() {
        return this.state.blogEntries.map(function(currentBlogEntry, i){
            return <BlogEntry blogEntry={currentBlogEntry} 
                              key={i}
                              blogEntryId ={currentBlogEntry.id} 
                             />;
        })
    }      
    
    componentDidMount() {
        axios.get('http://localhost:4000/blogentries/')
            .then(response => {
                this.setState({ blogEntries: response.data });                
            })
            .catch(function (error){
                console.log(error);
            })
    }    
    
    render(){
        return(
            <div style={{marginTop: 10}} className="container">
                <h3>Admin View - React Blog Entries List</h3>
                <div> { this.blogEntriesList() } </div>               
            </div>
        )
    }
}