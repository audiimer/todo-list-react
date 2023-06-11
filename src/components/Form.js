import React from 'react'
import styles from '../style.module.css'
import { useState } from 'react';

function Form() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    // Function to handle form submit
    const handleFormSubmit = (event, action) => {
        setInputValue(event.target.value);
        event.preventDefault();


        if (action === 'add') {
            if (inputValue.trim() === '') return; // Ignore empty input
            // Add the new todo to the list
            setTodos([...todos, inputValue]);
            // Clear the input value
            setInputValue('');
        } else if (action === 'remove') {
            // Remove the last todo from the list
            setTodos(todos.slice(0, -1));
        }

    };

    return (
        <div className={styles.todoform}>

            <form onSubmit={handleFormSubmit}>
                <input className={styles.todoinput} placeholder='Add Todo Item' type="text" value={inputValue} onChange={handleFormSubmit}></input>
                <div className={styles.buttonContainer}>
                    <button className={`${styles.button} ${styles.addButton}`} type="submit" onClick={(event) => handleFormSubmit(event, 'add')}>Add</button>
                    <button className={`${styles.button} ${styles.removeButton}`} type="submit" onClick={(event) => handleFormSubmit(event, 'remove')}>Remove</button>
                </div>
            </form>

            <div className={styles.todogrid}>
                {todos.map((todo, index) => (

                    <div className={`${styles.todogridItem}   ${index % 2 === 0 ? styles.even : styles.odd}`} key={index}>
                        <span className={styles.number}>{index + 1}. </span>
                        {todo}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Form
