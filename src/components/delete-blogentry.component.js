import React, { Component } from 'react';

import axios from 'axios';

export default class DeleteBlogEntry extends Component{
    constructor(props){
        super(props);

        this.onDeleteBlogEntryTitle = this.onDeleteBlogEntryTitle.bind(this);

        this.state = {
            blog_entry_description: '',
            blog_entry_title: '',
            blog_entry_is_deleted: true  
        }
    }
   
    onDeleteBlogEntryTitle(e){
        e.preventDefault();

        //Construct the new blog entry object
        const newBlogEntry = {
            blog_entry_description: this.state.blog_entry_description,
            blog_entry_title: this.state.blog_entry_title
        };

        //Make an http post to add the new blog entry
        axios.post('http://localhost:4000/blogentries/delete', newBlogEntry)
        .then(res => console.log(res.data));

        this.setState({
            blog_entry_description: '',
            blog_entry_title: ''
        });
    }

    render(){
        return(
            <div style={{marginTop: 10}} className="container">
                <h3>Create New Blog Entry</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.blog_entry_title}
                                onChange={this.onChangeBlogEntryTitle}
                                />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input 
                        type="text" 
                        className="form-control"
                        value={this.state.blog_entry_description}
                        onChange={this.onChangeBlogEntryDescription}
                        />
                    </div>
           
                    <div className="form-group">
                        <input type="submit" value="Create Blog Entry" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )        
    }
}
