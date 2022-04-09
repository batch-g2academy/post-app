import React, { useState } from 'react'
import { fetchApi } from '../api';
import Button from './Button';

export default function InputPost({ setPosts }) {
  const [ newPost, setNewPost ] = useState({ userId: '', title: '', body: ''} );

  const handleChangeInput = (e) => {
    console.log(e.target.id)
    setNewPost((currValue) => {
        return { ...currValue, [e.target.id]: e.target.value }
    })
  }

  const savePost = (e) => {
      e.preventDefault();
      saveData();
  }

   const saveData = async() => {
      try {
        const response = await fetchApi('posts', {
                                                    method: 'POST',
                                                    body: JSON.stringify(newPost),
                                                    headers: {
                                                      'Content-type': 'application/json; charset=UTF-8',
                                                    },
                                                  })

        // const response = await fetch('https://jsonplaceholder.typicode.co.id/posts', {
        //                     method: 'POST',
        //                     body: JSON.stringify(newPost),
        //                     headers: {
        //                     'Content-type': 'application/json; charset=UTF-8',
        //                     },
        //                 })
        const savedPost = await response.json();
        
        setPosts((currValue) => {
           return [ ...currValue, savedPost ] 
        })

      } catch(err) {
        console.log(err);
      }
  }

  return (
    <div>
        <form>
            <input id="userId" value={newPost.userId} placeholder='input your userID' onChange={handleChangeInput}/>
            <input id="title" value={newPost.title} placeholder='input your title' onChange={handleChangeInput}/>
            <input id="body" value={newPost.body} placeholder='input your posts' onChange={handleChangeInput}/>
            <Button title='Save' handleOnClick={savePost}/>
        </form>
    </div>
  )
}
