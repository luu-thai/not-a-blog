import React,{useState} from 'react';
import { BlogsList } from './blog-list/blog';
import {Form} from './form/form';
import './sakshi.css';
export const Blog =(props)=>{
    const blogsData = [
        {id:1, title: 'Blog1', content: 'My first blogpost' },
        {id:2, title: 'Blog1', content: 'My first blogpost' },
      ]
    const[list,setList]=useState(blogsData);
    const saveBlog =(blog)=>{
        blog.id= list.length +1;
        setList([...blogsData,blog]);
    }
    return (
        <div className="Form">
            <div className="FormHeader">Welcome to my Blog site!</div>
            <Form  saveBlog={saveBlog} />
            <BlogsList list={blogsData} />
        <div className="FormFooter">Thank you for visiting!</div>
        </div>
    )
}