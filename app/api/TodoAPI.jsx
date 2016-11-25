var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e){



    }
    return $.isArray(todos) ? todos : [];//to samo :O
    // if($.isArray(todos)){
    //   return todos;
    // }else {
    //   return [];
    // }
  },
  filterTodos: function (todos, showCompleted,searchText) {
    var filteredTodos = todos;

//filter by showCompleted
filteredTodos = filteredTodos.filter((todo) => {
    return !todo.completed || showCompleted;
});
// Filter by searchText

//Sort todos with non-completed first

    return filteredTodos;
  }


};
