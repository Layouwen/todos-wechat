Page({
  //  数据
  data: {
    input: "",
    todos: [],
    amount: 0,
    all: false,
  },
  //  获取输入的信息，保存到变量中
  updateSearch(e) {
    this.setData({
      input: e.detail.value,
    })
  },
  setTodo() {
    //    判断是否输入内容
    if (!this.data.input) return
    //    将数据保存给新的变量
    let todos = this.data.todos
    //    将input的内容添加到数组中,默认为false
    todos.push({
      name: this.data.input,
      completed: false,
    })
    //    将添加后的数组更新,并清空input内容,将总数加1
    this.setData({
      todos: todos,
      input: "",
      amount: this.data.amount + 1,
    })
  },
  // 切换状态
  scheduleManage(e) {
    // 获取他的下标
    let index = e.currentTarget.dataset.index
    // 通过下标获得对于的item
    let item = this.data.todos[index]
    // 将item的值取反
    item.completed = !item.completed
    // 如果值为true则加1，为false则减1
    let amount = this.data.amount + (item.completed ? -1 : 1)
    // 保存数据
    this.setData({
      todos: this.data.todos,
      amount: amount,
    })
  },
  // 删除item
  removeTodo(e) {
    // 获取下标
    let index = e.currentTarget.dataset.index
    // 复制todos到新的变量中
    let todos = this.data.todos
    // 通过下标和splice截取1项数据，并将删除后的数据保存下来
    let item = todos.splice(index, 1)[0]
    // 通过判断数据的true和false，使用总数量相减。如果之前为true则减0，如果为false则减1。
    let amount = this.data.amount - (item.completed ? 0 : 1)
    // 保存数据
    this.setData({
      todos: todos,
      amount: amount,
    })
  },
  // 全选切换
  toggleAll() {
    // 保留this
    let that = this
    // 将all取反
    this.data.all = !this.data.all
    // 获取item数组
    let todos = this.data.todos
    // 遍历数组，将item每一项的值设置为全选的boolean值
    todos.forEach(function (item) {
      item.completed = that.data.all
    })
    // 如果全选的boolean为true则设置剩余总数为0，否则为item数组的长度
    let amount = this.data.all ? 0 : this.data.todos.length
    // 保存数据
    this.setData({
      todos: todos,
      amount: amount,
    })
  },
  // 清空已完成的任务
  clearTodo() {
    // 通过filter筛选出值为false的选项，并保存起来。结果为false忽略，结果为true筛选出来
    let todos = this.data.todos.filter(function (item) {
      return !item.completed
    })
    // 将false的选项重新保存，已实现清楚为true的内容
    this.setData({
      todos: todos,
    })
  },
})