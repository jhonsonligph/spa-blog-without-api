import React from 'react';
import Header from './components/Header';
// import Slider from './components/Slider';
// import News from './components/News/News';
import Home from './page/HomePage'
import SinglePage from './page/SinglePage'
import Footer from './components/Footer';
import { useHistory } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const history = useHistory()
  console.log(history)
  
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:postId' component={SinglePage}/>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
