import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} /> */}
          <Route component={NotFound} />
        </Switch>
      
    </BrowserRouter>
  );
}

export default App;
