import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import addResource from './components/addResource';
import addMilkTank from './components/addMilkTank';




class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={addResource}/>
                        <Route path='/addmilktank' component={addMilkTank}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;