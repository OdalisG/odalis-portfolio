import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './homepage';

import Resume from './resume';
import Contact from './contact';
import Projects from './projects';
import Api from './api';
import Crud from './crud';

//all my routers
const Main = () => 
    <Switch>
      
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/api" component={Api} />
        <Route path="/crud" component={Crud} />
       
 </Switch>


export default Main;