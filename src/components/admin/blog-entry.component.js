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
        <div className="row">
            <div className="col-md-9">
                <div>{this.props.blogEntry.blog_entry_title}</div>        
                <div>{this.props.blogEntry.blog_entry_description}</div>                
            </div>
            
            <div className="col-md-3">
                <div className="row"> 
                    <div className="col-md-3">
                        <Link to={"/detail/"+this.props.blogEntry._id}>Detail</Link>
                    </div>     
                    <div className="col-md-3">
                        <Link to={"/edit/"+this.props.blogEntry._id}>Edit</Link>
                    </div>
                    <div className="col-md-3">  
                        <button onClick={this.handleDelete}>Delete</button>               
                    </div>          
                </div>                
            </div>
            <div className="col-md-12"><hr/></div>
        </div>
        )
    }
}

export default BlogEntry;