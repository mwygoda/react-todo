var actions = require('actions');
var expect = require('expect');

describe('actions', () => {
  it('should generate searchText action',() => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some search text'
    };
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });
  it('should generate add todo action',() => {
    var action = {
      type: 'ADD_TODO',
      text: 'thing todo'
    };
    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });
  it('should generate toggleShowCompleted action',() => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });
  it('should generate toggleTodo action',() => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 1
    };
    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});