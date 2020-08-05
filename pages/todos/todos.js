Page({
  data: {
    input: '',
    todos: [
      {name: 'Learning HTML', completed: true},
      {name: 'Learning CSS', completed: false},
      {name: 'Learning JavaScript', completed: true},
    ],
    amount: 1
  },
  updateSearch: function(e) {
    this.setData({
      input: e.detail.value
    })
  },
  setTodo: function(e){
    if(!this.data.input) return
    let todos = this.data.todos
    this.data.todos.push({
      name: this.data.input,
      completed: false
    })
    this.setData({
      todos: todos,
      input: '',
      amount: this.data.amount + 1
    }) 
  },
  scheduleManage: function(e){
    let index = e.currentTarget.dataset.index
    let item = this.data.todos[index]
    item.completed = !item.completed
    let amount = this.data.amount + (item.completed ? -1 : 1)
    this.setData({
      todos: this.data.todos,
      amount: amount
    })
  }
})