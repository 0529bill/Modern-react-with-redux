import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate';
import StreamDelete from './Streams/StreamDelete';
import StreamList from './Streams/StreamList';
import StreamShow from './Streams/StreamShow';
import StreamEdit from './Streams/StreamEdit';
import Header from './Header';
import history from '../history';
const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/Streams/new" component={StreamCreate} />
            {/* <Route path="/Streams/edit/" component={StreamEdit} /> */}
            <Route path="/Streams/edit/:id" component={StreamEdit} />
            {/* router parms(:id) are important in order to show what's inside the history/match/location of react-router-dom */}
            <Route path="/Streams/delete/:id" component={StreamDelete} />
            <Route path="/Streams/:id" component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
