import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Review from '../Review/Review';
import Last from '../Last/Last';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path='/'>
          <Feeling/>
        </Route>
        <Route exact path='/understanding'>
          <Understanding/>
        </Route>
        <Route exact path='/support'>
          <Support/>
        </Route>
        <Route exact path='/comments'>
          <Comments/>
        </Route>
        <Route exact path='/review'>
          <Review/>
        </Route>
        <Route exact path='/last'>
          <Last/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
