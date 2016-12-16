import * as redux from 'redux';
import {searchTextReducer,showCompletedReducer,todosReducer} from 'reducers';
import thunk from 'redux-thunk';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers ({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });
  var store = redux.createStore(reducer,initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtention ? window.devToolsExtention() : f => f
  ));
  return store;
};
