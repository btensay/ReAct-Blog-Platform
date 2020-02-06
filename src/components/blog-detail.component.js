import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

export default class BlogEntryDetail extends Component{

    constructor(props){
        super(props);

        this.onChangeBlogEntryDescription = this.onChangeBlogEntryDescription.bind(this);
        this.onChangeBlogEntryTitle = this.onChangeBlogEntryTitle.bind(this);
        
        this.state = {
            blog_entry_description: '',
            blog_entry_title: ''           
        }
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

render(){
        return(
            <div className="container">
                <h3 align="center"> Blog Entry Details </h3>
                    <div className="form-group"> 
                        <label>Title: </label>
                        <input  type="text"
                                className="form-control"
                                readOnly={true}
                                value={this.state.blog_entry_title}                                
                                />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="textarea"                                 
                                readOnly={true}                            
                                className="form-control" 
                                value={this.state.blog_entry_description}                            
                            />
                    </div>                
                    <br />     
                    <Link to={"/"} className="btn btn-primary">Back to Blog Entries</Link>                                  
            </div>
        )
    }
}