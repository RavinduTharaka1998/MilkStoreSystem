import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import addResource from './components/addResource';

import addMilkTank from './components/addMilkTank';
import viewMilkTank from './components/viewMilkTank';

import addMilkMachine from './components/addMilkMachine';
import viewMilkMachine from './components/viewMilkMachine';



class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={addResource}/>

                        <Route path='/addmilktank' component={addMilkTank}/>
                        <Route path='/viewmilktank' component={viewMilkTank}/>

                        <Route path='/addmilkmachine' component={addMilkMachine}/>
                        <Route path='/viewmilkmachine' component={viewMilkMachine}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;