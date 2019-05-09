import React from 'react';

 class AddTodo extends React.Component {

  state = {
      title: ''
    }

    onSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({
        title: '' 
      });
     }

    //fonction permettant d'enregister les valeurs dans l'input
    onChange = (e) => this.setState({[e.target.name] : e.target.value });

  render () {
    return (
      <form 
        onSubmit={this.onSubmit}
        style={{ display:'flex' }}>
        <input
        type="text" 
        name="title" 
        style={{ flex: '10', padding: '5px' }}
        placeholder="Ajouter des tâches..."
        value= {this.state.title}
        onChange={this.onChange}
        />

        <input
        type="submit"
        value="Ajouter"
        className="btn"
        style={{flex: '1'}}
        />

      </form>
    );
  }
}




export default AddTodo;