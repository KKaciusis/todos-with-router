import User from './User';
import {useParams} from 'react-router-dom';

function Todo(props) {

const {todoId} = useParams();

    if (props.todos.length === 0) {
        return (
            <h1>Todo loadig...</h1>
        )
    }

    return (
        <div className="todo">
            <div className='id'>{props.todos[todoId -1].id}</div>
            <User id={props.todos[todoId -1].userId}></User>
            <div className="title">{props.todos[todoId -1].title}</div>
            <div className="status" onClick={()=>props.sniuriukas(props.todos[todoId -1].id)} style={
                {backgroundColor: props.todos[todoId -1].completed === false ? 'black' : 'lightblue'}
                }></div>
        </div>
    );
}


export default Todo;