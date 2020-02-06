import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Blog extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-xl-8">
                    <div className="text-capitalize">
                    {this.props.blogEntry.blog_entry_title}
                    </div>
                    <div className="text">
                    {this.props.blogEntry.blog_entry_description}
                    </div>              
                    
                </div>
                <div className="col-xl-4">
                    {/*<HTMLImageElement src={'./logo.png'} alt="blog entry image alt text" ></HTMLImageElement>*/}
                    <div className="nav-link">
                    <Link className="button-big" to={"/detail/"+this.props.blogEntry._id}>
                        <button> Detail </button>
                    </Link>
                    </div>
                </div>              
                <div className="col-xl-12">
                    <hr/>
                </div>               
            </div>
        )
    }
}

export default Blog;