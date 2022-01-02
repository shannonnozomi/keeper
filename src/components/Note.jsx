import React, { useState } from "react";
import { Card } from "./Card";
import { NewNote } from "./NewNote";


export function Note() {
    const [input, setInput] = useState({title:"", note:""});
    const [inputList, setInputList] = useState([]);
    function handleChange(e){
        setInput({...input, [e.target.name]: e.target.value})
    console.log(input)
    }
     function makeNote(){
       setInputList(oldArray => [...oldArray, input])
    }
    const handleRemoveItem = (e)  => {
        const name = e.target.id;
        setInputList(inputList.filter(m => m.note !== name));
    }
    return (
        <div>
        <Card onChange={handleChange} buttonClick={makeNote} title="" content=""/>
       {inputList.map((m, i) => <NewNote onRemove={handleRemoveItem} key={i} title={m.title} note={m.note} />)}
        
           </div>
    )}