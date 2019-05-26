import React from 'react';
import './Contact.css';

const Contact = (props)=> {
  
  let name = props.name
  let popularity = props.popularity
  let pictureUrl = props.pictureUrl
  let clickToDelete = props.clickToDelete
  
  return (
    <div class="contactList">
      <div className="card"> 
          <img src={pictureUrl}/>       
          <h1>{name}</h1>
          <h2>{popularity}</h2>
          <button onClick={clickToDelete}>Delete</button>
      </div>
    </div>
)}

export default Contact;

