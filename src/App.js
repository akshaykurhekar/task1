import {Route,Switch } from 'react-router-dom'

import './App.css';
import MainPage from './container/main';
import Analytics from './container/analytics';
import Error from './component/error';

function App() {
  return (
   
       <Switch>
           <Route path="/" exact component={MainPage} />
           <Route path="/analytics" exact component={Analytics} />
           <Route component={Error}  /> 
       </Switch>

      
   

  );
}

export default App;
