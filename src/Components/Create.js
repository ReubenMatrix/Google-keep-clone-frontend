import React, { useState } from 'react'
import {IoIosAdd} from "react-icons/io"

function Create({submitButton,onAdd}) {
    const [isexpanded, setexpanded]=useState(false);
    
    const[note, setNote]=useState({
        title:"",
        content:""
    });

    function handleChange(e){
        
       const{name,value}=e.target;
        setNote((preValue)=>{
            return{
                ...preValue,
                [name]:value,
            };
        });
    }

    function submitButton(event){
        onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
        
    }

    function handleExpand(){
      setexpanded(true);
    }

    return (
        <div>
          <form>

          {isexpanded &&(
            <input
              value={note.title}
              className="title"
              type="text"
              placeholder="Title"
              onChange={handleChange}
              name="title"
            />
          )}
        
            <p>
              <textarea
                value={note.content}
                className="content"
                placeholder="Write a note..."
                onChange={handleChange}
                onClick={handleExpand}
                name="content"
              />
            </p>
            <button onClick={submitButton}>
            <IoIosAdd/></button>
          </form>
        </div>
      );

}

export default Create
