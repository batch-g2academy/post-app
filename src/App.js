import { useState } from 'react';
import NavBar from './components/NavBar';
import PostsPages from './pages/PostsPages';
import Home from './pages/Home';

function App() {
  // menyimpan data yang datanya dinamis itu sebutan state
  // cara membuat state di function component itu menggunakan hooks useState
  
  const [ menu, setMenu ] = useState('home');

  return (
    <div>
      <NavBar setMenu={setMenu}/>

      { menu === 'home' ? <Home /> : (menu === 'posts') ? <PostsPages /> : <Home /> }

      {/* <InputPost setPosts={setPosts}/>
      <h1>Hello World</h1>
      <PostsPages posts={posts} setPosts={setPosts}/> */}


    </div>
  );
}

export default App;
