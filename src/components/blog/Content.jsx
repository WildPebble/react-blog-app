import React from 'react';

function Content({title, content, author/*, date*/}){
  return(
    <main >
      <h1 className="text-3xl text-start px-2 text-top font-bold">{title}</h1>
      <p className="text-start px-2"><strong>Author: </strong>{author}</p>
      {/* <p className="text-start px-2"><strong>Date: </strong>{date}</p> */}
      <p className="text-xl">{content}</p>
      
    </main>
  );
}

export default Content;