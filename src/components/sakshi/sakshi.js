import React,{useState} from 'react';
import { BlogsList } from './blog-list/blog';
import {Form} from './form/form';
import './sakshi.css';
export const Blog =(props)=>{
    
    const [list, setList] = useState([])  ;
    const[title, setTitle]= useState('');
    const[content,setContent]=useState('');
    const updateForm =(event)=>{
        console.log(event.target.value);
        console.log(event.target.name);
        if (event.target.name==='title'){
        setTitle(event.target.value);
        }
        if (event.target.name==='content')
        {
        setContent(event.target.value);
        }
        // const{title,value}= event.target.value;
        // console.log("Title and Value",title,value);
        // setList({...list, [title]:value});
    }
    const handleSubmit = (event) => {
        console.log("Submit", title,content);
        setList(list.concat({ title, content }));
        event.preventDefault();
    }
    
    return (
        <div className="Form">
            <div className="FormHeader">Welcome to my Blog site!</div>
            <div className="MainContainer">
            <div className="MainContainer__Child1">
                    <BlogsList list={list} />
                </div>
                <div className="MainContainer__Child2">
                    <Form handleSubmit={handleSubmit} updateForm={updateForm} title={title} content={content} list={list} />
                </div>
            </div>
        <div className="FormFooter">Thank you for visiting!</div>
        </div>
    )
}