import { useEffect, useState } from "react";
import Comments from "./Comments";
import Content from "./Content";
import axios from "axios";
import { useParams } from "react-router";
import {useUsername } from '../authWrapper/AuthContext';

function BlogPost(){
  const username= useUsername();
  const params = useParams();
  const [postData, setPostData]=useState();
  const [loading, setLoading] = useState(true);
  const [authorData, setAuthorData]=useState();

  console.log(postData, authorData);
  //API Call
  useEffect(() => {
    //Fetch example (need to pass as json first when using this)
  // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // //.then(data => setPosts(data))
    // .then((json) => console.log(json))
    // .catch(error => console.error('Error fetching posts:', error));

    //Axios example (preferred lightweight and more features)
    // axios
    // .get(`https://jsonplaceholder.typicode.com/posts/${params.post_id}`)
    // .then((res)=>{setPostData(res.data)})
    // .catch((e) => alert("An error occured"))

    const fetchData = async () => {
      try{
        const postRes = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${params.post_id}`
          
        );
        setPostData(postRes.data);

        const authorRes = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`
        );
        setAuthorData(authorRes.data);
      } catch (e){
        console.log(e);
      }finally{
        setLoading(false);
      }
    };
    fetchData();
}, []);

  // const postContent = {
  //   title: "Post " +params.post_id,
  //   content: "This is the content of my first blog post",
  //   author: "Jane Doe",
  //   date: "2025-10-10",  
  // };

return(
  <div className="bg-green-100 my-5 py-6 rounded-2xl h-screen">
    <Content
    //react components are render once before the useEffect finsihes fetching data so kept getting errors
    //got from chatGPT to add ? and it will display the catch in the axios
    //think it would be better looking to just have the loading displayed instead of the error 
 
    title={postData?.title}
    content={postData?.body}
//  date={postContent.date}
    author={authorData?.name}
 />
  {username? <Comments/>: <h1 className="italic font-bold m-20">Login to leave a comment!</h1>}
 
  </div>
 
);
}

export default BlogPost;