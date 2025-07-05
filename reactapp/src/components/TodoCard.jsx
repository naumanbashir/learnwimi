import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";

function TodoCard(props) {

    const children = props.children;
    const {handleDeleteTodo, handleEditTodo, index} = props;



    return (
        <li className="todoItem">
            {children}
            <div className="actionsContainer">
                <button onClick={() => handleEditTodo(index)}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button onClick={() => handleDeleteTodo(index)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </li>
    );
}

export default TodoCard;