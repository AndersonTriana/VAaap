import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toolbar from './components/toolbar';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        

        <Footer />
      </div>
    );
  }
}



export default App;
