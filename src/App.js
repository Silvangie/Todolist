import React from 'react';
import Header from './components/layout/Header';
import './App.css';
import Todos from './components/Todos'; 
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.markComplete = this.markComplete.bind(this)
    this.delTodo = this.delTodo.bind(this)
    this.addTodo = this.addTodo.bind(this)
    // this.onSubmit = this.onSubmit.bind(this)
    // this.onChange = this.onChange.bind(this)
  }

  state = {
    title: '',
    todos : [
      {
        id: uuid.v4(),
        title: 'Acheter des pommes',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Finir la présentation "Meeting 2020"',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dîner avec Gautier à 20h',
        completed: false
      },
    ]
  }

  // Cette fonction permet de supprimer les tâches.
  delTodo(id) {
    console.log ('id #delTodo :', id);
    this.setState({   
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }
  
  // ajouter les taches via l'input
  addTodo(title){
    console.log('title #addTodo', title);
    const newTodo ={
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }




  // Cette fonction permet de barrer les tâches déjà réalisées.
  markComplete (id) { 
    console.log ('id #markComplete :', id);
    // const newTodos = this.state.todos;
    // console.log('newTodos', newTodos)
    this.setState ({
      todos : this.state.todos.map((todo =>{
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      }))
    });
  }


  render () {
    console.log('this.state.todos #App #render :', this.state.todos);
    return (
      <div className="App">
        <div className="container">
            <Header/>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete}
            delTodo={this.delTodo}/>
        </div>
      
      </div>
    );
  }
}
export default App;
