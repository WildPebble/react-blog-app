import axios from 'axios';
import React, {useState, useRef, useEffect} from 'react';
import { useParams } from 'react-router';

function Comments(){
  const params = useParams();
  console.log(params);
   const [comment, setComment]=useState('');
  // const [commentList, setCommentList] = useState([]);
  const [name, setName]=useState('');
  const [entries, setEntries]=useState([]);

  const addEntry = (name, comment)=>{
    setEntries([...entries, {name,comment}])
  };


  // const [nameList, setNameList] = useState([]);
  // console.log(nameList);

  // const addName = (name) => {
  //   setNameList([...nameList, name]);
  // };

  //  const addComment = (comment) => {
  //   setCommentList([...commentList, comment]);
  // }; 
  
  const textboxRef = useRef();
  const nameboxRef = useRef();

  const postComment = () => {
    axios.post(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`,{
      name: comment.name,
      body: comment.comment
      
    })
    const newEntry = {name, comment};
    setEntries([...entries, newEntry]);

    setName("");
    setComment("");
  }

  const focusOnCommentBox = ()=>{
    textboxRef.current.focus();
  };

  const focusOnNameBox = ()=>{
    nameboxRef.current.focus();
  };

  useEffect(()=>{
    focusOnCommentBox();
  }, []);

   useEffect(()=>{
    focusOnNameBox();
  }, []);


  return (
    <div>
    <h2 className="text-start px-2 text-2xl my-5 font-bold">Comments</h2>
    <textarea ref={nameboxRef} value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" className="bg-white p-3 rounded-2xl shadow-2xl w-170 h-10 text-left align-top py-2 my-2"></textarea>
    <textarea ref={textboxRef} value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add a comment" className="bg-white p-3 rounded-2xl shadow-2xl w-170 h-32 text-left align-top"></textarea>
    {/* postcomment function is successfully storing the comments but it does not display
    The comments werent displayed in video either  */}
    <button onClick={/*() => addEntry(name, comment)*/postComment}/*{addComment(comment); addName(name)}}*/ type = "submit"className=" ml-2 flex flex-col my-3 bg-green-700 px-6 py-2 text-xl rounded-2xl text-white">Submit</button>
    {entries.length ===0 ? <p>No comments yet. Be the first to comment!</p> : <div><h3 className="text-start px-2 font-bold text-">Existing Comments:</h3>
    {/* <ul className="text-start px-6">
      <li>Comment 1</li>
      {nameList.map((valuename, index)=>(
        <li className="font-bold italic text-xl"  key={index}>{valuename}</li>
      ))}
      {commentList.map((value, index)=>(
        <li key={index}>{value}</li>
      ))}
    </ul> */
    <ul className="text-start px-6 list-disc">
    {}
  {entries.map((entry, index) => (
    <li key={index}>
      <strong className="italic">{entry.name}</strong>: {entry.comment}
    </li>
  ))}
</ul>}
</div>}
    
</div>
  );
}
export default Comments;