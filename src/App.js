//import logo from './logo.svg';
import React, {useContext, useEffect, useState} from  'react';
import './App.css';
const PostStore = React.createContext();
const PostList = () => {
  const data = useContext(PostStore);
  console.log(data);
  useEffect(()=> {
     fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((response)=> { 
        console.log("response", response) 
      });
  }, [])

  return 
     <div> Post Listing</div>
  
};

const PostDetail = () => {
  // const data = useContext(PostStore);
  // console.log(data);

  return <div>Post Detail</div>;
};
function App() {
  //const[text, setText]= useState('') // useState render text(create state)
   const[PostList, setPostList] = useState([]);
   //const[selectedPostId, setSelectedPostId]= useState(null) 
  return (       // setText is fun when we call onCLICK IT MAKE state
    <div className="App">
      <PostStore.Provider value={{ PostList, setPostList}}>
        <PostList />
      </PostStore.Provider>
      <PostDetail />
      
    </div>
  );
}
export default App;
