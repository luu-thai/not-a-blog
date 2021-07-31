import { List } from '@material-ui/core';
import React,{useState} from 'react';
import './form.css';
import {BlogsList}  from './../blog-list/blog';
export const Form = (props)=>{
    const{handleSubmit,updateForm}=props;
    return(
        <div>
            <form className="FormBody" onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title"  onChange={updateForm}/>
                </label>
                <label>
                    Content
                    <textarea type="text" name="content"  onChange={updateForm}/>
                </label>
                <button type="submit" value="Submit" >Save</button>
                <button type="button">Edit</button>
                <button type="button">Delete</button>
            </form>
            {/* <BlogsList list={list} /> */}
        </div>

    )
}