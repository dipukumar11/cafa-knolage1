import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({clickHandelBookmark, clickMarkRead}) => {
    const [blogs, setBlog]=useState([])
    useEffect(()=>{
        fetch('cafa.json')
        .then(Response => Response.json())
        .then(data =>setBlog(data))
    },[])
    return (
        <div className="w-2/3">
               <h1>Blogs Section:{blogs.length} </h1> 
             <div className="">
             {
                blogs.map(blog=><Blog clickMarkRead={clickMarkRead} clickHandelBookmark={clickHandelBookmark} key={blog.id} blog={blog} ></Blog>)
               }  
            </div>         
        </div>
    );
};

export default Blogs;