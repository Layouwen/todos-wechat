Page({
  data: {
    input: '',
    todos: [
      {name: 'Learning HTML', completed: true},
      {name: 'Learning CSS', completed: false},
      {name: 'Learning JavaScript', completed: true},
    ]
  },
  updateSearch: function(e) {
    this.setData({
      input: e.detail.value
    })
  },
  setTodo: function(){
    if(!this.data.input) return
    let todos = this.data.todos
    this.data.todos.push({
      name: this.data.input,
      completed: false
    })
    this.setData({
      todos: todos
    })
  }
})