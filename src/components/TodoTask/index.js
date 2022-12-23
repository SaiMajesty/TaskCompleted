import {Component} from 'react'

import './index.css'

import TodoItem from '../TodoItem'

const initial = [
  {
    id: 1,
    title: 'Learning Node JS',
  },
  {
    id: 2,
    title: 'Learning React',
  },
  {
    id: 3,
    title: 'Learning Javascript',
  },
  {
    id: 4,
    title: 'Learning HTMl',
  },
  {
    id: 5,
    title: 'Learning CSS',
  },
  {
    id: 6,
    title: 'Learning SQL',
  },
]

class TodoTask extends Component {
  state = {
    todoList: initial,
  }

  deleteTodo = id => {
    const {todoList} = this.state
    const filtered = todoList.filter(each => each.id !== id)

    this.setState({
      todoList: filtered,
    })
  }

  addTodo = id => {
    const {todoList} = this.state
    const selected = todoList.filter(each => each.id === id)

    this.setState({
      todoList: selected,
    })
  }

  render() {
    const {todoList} = this.state

    return (
      <div className="container">
        <h1 className="heading">Todo-List</h1>
        <ul>
          {todoList.map(each => (
            <TodoItem
              key={each.id}
              todoDetails={each}
              deleteTodo={this.deleteTodo}
              addTodo={this.addTodo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoTask
