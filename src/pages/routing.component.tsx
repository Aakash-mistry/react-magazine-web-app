import * as React from "react";
import { Route, Switch } from "react-router-dom";

// importing pages
import Home from "./Home/";
import ShowPhotos from "./Photo/";
import Albums from "./Album/";
import Chart from "./Chart/";

const Routing: React.FC = () => {
     return (
          <Switch>
               <Route exact path='/' component={Home} />
               <Route path='/photos' component={ShowPhotos} />
               <Route path='/albums' component={Albums} />
               <Route path='/charts' component={Chart} />
          </Switch>
     );
};

export default Routing;
