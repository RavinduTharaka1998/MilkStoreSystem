import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import addResource from './components/addResource';

import addMilkTank from './components/addMilkTank';
import viewMilkTank from './components/viewMilkTank';
import editMilkTank from './components/editMilkTank';

import addMilkMachine from './components/addMilkMachine';
import viewMilkMachine from './components/viewMilkMachine';
import editMilkMachine from './components/editMilkMachine';


class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={addResource}/>

                        <Route path='/addmilktank' component={addMilkTank}/>
                        <Route path='/viewmilktank' component={viewMilkTank}/>
                        <Route path='/editmilktank/:id' component={editMilkTank}/>

                        <Route path='/addmilkmachine' component={addMilkMachine}/>
                        <Route path='/viewmilkmachine' component={viewMilkMachine}/>
                        <Route path='/editmilkmachine/:id' component={editMilkMachine}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;