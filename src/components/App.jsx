import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Todo from './Todo';
import TodoBig from './TodoBig';

function App() {

  const [todos, setTodos] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
            setTodos(response.data);
        })
    }, []);

    const todoRope = (id) => {
      const todosCopy = todos.slice();
      for (let i = 0; i < todosCopy.length; i++) {
          if (id === todosCopy[i].id) {
              todosCopy[i].completed = !todosCopy[i].completed;
              break;
          }
      }
      setTodos(todosCopy);
  }

  return (
    <Router>
    <Switch>
        <Route path={'/:todoId'}>
            <div className="todo-container">
                <TodoBig todos={todos} sniuriukas={todoRope}></TodoBig>
            </div>
        </Route>
        <Route path='/'>
            <div className="todo-container">
                {todos.map((todo)=>(<Todo key={todo.id} data={todo} sniuriukas={todoRope}></Todo>))}
            </div>
        </Route>
    </Switch>
    </Router>
  );
}

export default App;
