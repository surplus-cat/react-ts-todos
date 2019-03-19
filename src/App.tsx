import * as React from 'react';
import './App.css';

import AddTodo from './container/addTodo';
import Footer from './components/footer';
import VisibleTodoList from './container/visibleTodoList';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
