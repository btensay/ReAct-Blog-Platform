import React, { Component } from 'react';

import axios from 'axios';

export default class EditBlogEntry extends Component{

    constructor(props){
        super(props);

        this.onChangeBlogEntryDescription = this.onChangeBlogEntryDescription.bind(this);
        this.onChangeBlogEntryTitle = this.onChangeBlogEntryTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            blog_entry_description: '',
            blog_entry_title: ''           
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/blogentries/' + this.props.match.params.id)
             .then(response => {
                this.setState({
                    blog_entry_title: response.data.blog_entry_title,
                    blog_entry_description: response.data.blog_entry_description
                })   
            })
            .catch(function (error){
                console.log(error);
            })
    }
    

    onChangeBlogEntryTitle(e) {
        this.setState({
            blog_entry_title: e.target.value
        });
    }
    
    onChangeBlogEntryDescription(e) {
        this.setState({
            blog_entry_description: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Blog Entry Description: ${this.state.blog_entry_description}`);
        console.log(`Blog Entry Title: ${this.state.blog_entry_title}`);
        
        //Construct the new blog entry object
        const newBlogEntry = {
            blog_entry_description: this.state.blog_entry_description,
            blog_entry_title: this.state.blog_entry_title
        };
        console.log(newBlogEntry);
        axios.post('http://localhost:4000/blogentries/update/'+this.props.match.params.id, newBlogEntry)
             .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }
    
    render(){ 
        return(
            <div className="container">
                <h3 align="center">Update Blog Entry</h3>
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
                        <input type="text" 
                               className="form-control"
                               value={this.state.blog_entry_description}
                               onChange={this.onChangeBlogEntryDescription}
                               />
                    </div>                
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Update Blog Entry" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}