import React from 'react'
import { fetchApi } from '../api'
import Button from './Button'

export default function Post({ post, setPosts }) {

  const handleClickDelete = (e) => {
    e.preventDefault()
    remove()
  }  

  const remove = async () => {
      try {
        const response = await fetchApi(`posts/${post.id}`, { method: 'DELETE' });

        if (response.status === 200) {
            console.log("delete berhasil");
            setPosts((currValue) => {
                return currValue.filter(val => {
                    // coding sendiri karna ini tugas yang kemarin
                })
            })
        }
          
      } catch(err) {
          console.log(err);
      }
  }

  return (
    <div style={{ border: "2px solid black", margin: "5px", padding: "5px" }}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <div>
            <Button title="Edit" />
            <Button title="Delete" handleOnClick={handleClickDelete}/>
        </div>
    </div>
  )
}
