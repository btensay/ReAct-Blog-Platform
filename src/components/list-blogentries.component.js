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
                <h3>ReBlog Entries List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        { this.blogEntriesList() }
                    </tbody>
                </table>            
            </div>
        )
    }
}