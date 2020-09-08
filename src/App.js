import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import News from './components/News/News';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <News />
      <Footer />
    </React.Fragment>
  );
}

export default App;
