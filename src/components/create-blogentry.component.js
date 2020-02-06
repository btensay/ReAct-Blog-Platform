import React, { Component } from 'react';

import axios from 'axios';
import FilesUploadComponent from "./files-upload.component";

export default class CreateBlogEntry extends Component{
    constructor(props){
        super(props);

        this.onChangeBlogEntryDescription = this.onChangeBlogEntryDescription.bind(this);
        this.onChangeBlogEntryTitle = this.onChangeBlogEntryTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            blog_entry_description: '',
            blog_entry_title: '',
            selectedFile: null           
        }
    }

    onChangeBlogEntryDescription(e){
    this.setState({
        blog_entry_description: e.target.value
        });
    }

    onChangeBlogEntryTitle(e){
    this.setState({
        blog_entry_title: e.target.value
        });
    }
    
    onSubmit(e){
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Blog Entry Description: ${this.state.blog_entry_description}`);
        console.log(`Blog Entry Title: ${this.state.blog_entry_title}`);

        //Construct the new blog entry object
        const newBlogEntry = {
            blog_entry_description: this.state.blog_entry_description,
            blog_entry_title: this.state.blog_entry_title
        };

        //Make an http post to add the new blog entry
        axios.post('http://localhost:4000/blogentries/add', newBlogEntry)
        .then(res => console.log(res.data));

        this.setState({
            blog_entry_description: '',
            blog_entry_title: ''
        });
        
        //Redirect to the homepage
        this.props.history.push('/');
    }

    onChangeHandler=event=>{
        this.setState({
          selectedFile: event.target.files
        })
      }
    
   onClickHandler = () => {
    const data = new FormData() 
    
    data.append('file', this.state.selectedFile)
    
    axios.post("http://localhost:4000/upload", data, { 
      // receive two    parameter endpoint url ,form data
    }).then(res => { // then print response status
        console.log(res.statusText)
    })
    
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
                    {/* Image file upload form - start <form method="post" action="#" id="#"> */}
                    <div className="form-group">
                                              
                        <div className="row">
                            <div className="col-md-8"> 
                                <FilesUploadComponent />
                            </div>
                        </div>
                    </div>
                    {/* Image file upload form - start </form>	 */}

                    <div className="form-group">
                        <input type="submit" value="Create Blog Entry"  className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )        
    }
}
