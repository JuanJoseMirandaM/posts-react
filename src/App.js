import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import UserDetails from './pages/UserDetails';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/:userId" component={UserDetails} />
          {/* <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} /> */}
          <Route component={NotFound} />
        </Switch>
      
    </BrowserRouter>
  );
}

export default App;
