import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect,  Switch} from "react-router-dom";
import { connect } from 'react-redux';


//import data from './assets/theshivers/data.json';

import Nav from './components/Nav';
import Header from './components/Header';
import Home from './containers/Home';
import About from './containers/About';





import {
   // initData,
   restart,
} from './actions'

class App extends Component {

  /*
    constructor(props) {
        super(props)

    }
    */
    componentDidMount() {
        //Inital state
        //Could do a fetch here if..
        //.. i want to put the json on the server
        //..but for now just import it

       //this.props.dispatch(initData(data));
       this.props.dispatch(restart());
   
    }

    render() {
      const {gameTitle } = this.props;
      if(gameTitle){
      console.log(gameTitle)
      }else{
        return <div>NOT READY</div>
      }
        return ( 
           
           <Router>
             
             <div className='main'>
             
             
            
              <Nav/>
              <Header title={gameTitle}/>
              <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Redirect from="/" to="home" />
              </Switch>
            
            </div>
          </Router>
        );
    }
}

App.propTypes = {};
/*
export default connect()(App);
*/
function mapStateToProps(state) {

 
 
  const {gameTitle } =state.gameData;
  return {
    gameTitle,
   

  }
}
export default connect(mapStateToProps)(App)