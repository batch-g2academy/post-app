import React, { useState, useEffect } from 'react'
import { fetchApi } from '../api';
import InputPost from '../components/InputPost';
import Post from '../components/Post'

export default function PostsPages() {
  const [ posts, setPosts ] = useState([]);

  // hooks life cycle useEffect
  useEffect(() => {
    fetchPost()
  }, []);


  async function fetchPost() {
    try {
      const response = await fetchApi('posts')
      const data = await response.json();

      setPosts(data);
    } catch (err) {
      console.log(err);
    }
    
    // fetch(`https://jsonplaceholder.typicode.com/posts`)
    // .then(response => {
    //   return response.json()
    // })
    // .then(data => {
    //   setPosts(data)
    // })
    // .catch(err => {
    //   console.log(err);
    // })
  }

  return (
    <div>
      <InputPost setPosts={setPosts}/>
        { posts.map(post => (
          <Post key={post.id} post={post} setPosts={setPosts}/>
        ))}
      </div>
  )
}
