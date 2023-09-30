import React from 'react';
import '../Main/Main.css';


const Main = (props) => {
  return (
   <div className={props.cname}>
    <img alt='mainimg' src={props.mainimg}/>

    <div className='main-text'>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <a href={props.url} className={props.btnclass}>{props.buttontext}</a>
    </div>
   </div>
  );
}

export default Main