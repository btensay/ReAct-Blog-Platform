import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

class BlogEntry extends Component{
      constructor(props){
        super(props);   
        this.handleDelete = this.handleDelete.bind(this);             
    }
  
    handleDelete(){
        console.log('delete blog entry handler called with id ' + this.props.blogEntry._id);
        
        //Make an http post to add the new blog entry
        axios.post('http://localhost:4000/blogentries/delete/'+this.props.blogEntry._id)
             .then(res => console.log(res.data));                
        
        window.location.reload(true);
    }
    
    render(){
        return(
            <tr>
                <td>{this.props.blogEntry.blog_entry_title}</td>        
                <td>{this.props.blogEntry.blog_entry_description}</td>
                <td>
                    <Link to={"/detail/"+this.props.blogEntry._id}>Detail</Link>
                </td>     
                <td>
                    <Link to={"/edit/"+this.props.blogEntry._id}>Edit</Link>
                </td>
                <td>  
                    <button onClick={this.handleDelete}>Delete</button>               
                </td>
            </tr>
        )
    }
}

export default BlogEntry;