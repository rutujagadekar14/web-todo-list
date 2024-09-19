import React, { useState } from 'react'
import './Style.css';

function Todo() {
    const [initial, setInitial] = useState();
    const [data, setData] = useState([]);

    const getInput = (event) => {
        console.log(event.target.value);
        setInitial(event.target.value);
    }

    const getData = () => {
        console.log(initial);
        let store = [...data, initial]
        setData(store);
        setInitial("")    //when we enter a task in input box and then click on Add button after that input box sees blank
    }

    const deleteTask = (index) => {
        console.log(index);
        let filterData = data.filter((curElem, id) => {
            return id !== index
        })
        setData(filterData);
    }
    console.log(data);

    return (
        <>
            <div className='container'>
                <div className='inputTask1'>
                    <input type='text' placeholder='Enter Your task' value={initial} onChange={getInput}></input>
                    <button onClick={getData}>Add</button>
                </div>
                {data.map((curVal, index) => {
                    return (
                        <>
                            <div className='taskData'>
                                <p> {curVal} </p>
                                <i id='deleteIcon' onClick={() => deleteTask(index)} class="fa-solid fa-trash-can"></i>
                            </div>
                        </>
                    )
                })}
            </div>

        </>
    )
}

export default Todo