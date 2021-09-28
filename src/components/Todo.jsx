import User from './User';
import {Link} from 'react-router-dom';

function Todo(props) {

    return (
        <div className="todo">
            <div className="link-wrapper">
            <Link to={'/'+props.data.id}><div className='id'>{props.data.id}</div></Link>
            <div className="status" onClick={()=>props.sniuriukas(props.data.id)} style={
                {backgroundColor: props.data.completed === false ? 'black' : 'lightblue'}
                }></div></div>
            <User id={props.data.userId}></User>
            <div className="title">{props.data.title}</div>
        </div>
    );
}


export default Todo;