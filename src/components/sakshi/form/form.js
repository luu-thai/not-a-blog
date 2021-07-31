import { List } from '@material-ui/core';
import React,{useState} from 'react';
import { BlogsList } from '../blog-list/blog';
import './form.css';
export const Form = (props)=>{
    const initialFormState = { id: null, title: '', content: '' }
    const [list, setList] = useState(initialFormState)  ;

    const updateBlog=(event)=>{
        const{title,value}= event.target.value;
        setList({...list, [title]:value});

    }
    return(
        <div>
            <form className="FormBody">
                <label>
                    Title:
                    <input type="text" name="title" value={list.title} onChange={updateBlog}/>
                </label>
                <label>
                    Content
                    <input type="text" name="content" value={list.content} onChange={updateBlog}/>
                </label>
                <button type="submit" >Save</button>
                <button type="button">Edit</button>
                <button type="button">Delete</button>
            </form>
        </div>
    )
}