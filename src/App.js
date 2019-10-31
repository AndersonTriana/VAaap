import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toolbar from './components/toolbar';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Toolbar />
        </nav>  

        <section className="col-md-6 col-md-offset-3">

        </section>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}



export default App;
