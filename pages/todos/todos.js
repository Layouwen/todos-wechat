Page({
  data: {
    input: '',
    todos: [
      {name: 'Learning HTML', completed: true},
      {name: 'Learning CSS', completed: false},
      {name: 'Learning JavaScript', completed: true},
    ],
    amount: 1,
    all: false
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
  },
  removeTodo: function(e){
    let index = e.currentTarget.dataset.index
    let todos = this.data.todos
    let item = todos.splice(index, 1)[0]
    let amount = this.data.amount - (item.completed ? 0 : 1)
    this.setData({
      todos: todos,
      amount: amount
    })
  },
  toggleAll: function(){
    let that = this
    this.data.all = !this.data.all
    let todos = this.data.todos
    todos.forEach(function (item) {
      item.completed = that.data.all
    })
    this.setData({
      todos: todos
    })
  },
  clearTodo: function(){
    let todos = this.data.todos.filter(function(item){
      return !item.completed
    })
    this.setData({
      todos: todos
    })
  }
})