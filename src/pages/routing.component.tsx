import * as React from "react";
import { Route, Switch } from "react-router-dom";

// importing pages

// Home page
import Home from "./Home";

// Photo pages
import ShowPhotos from "./Photo/";

// Album Photo pages
import Albums from "./Album";

const Routing: React.FC = () => {
     return (
          <Switch>
               <Route exact path='/' component={Home} />
               <Route path='/photos' component={ShowPhotos} />
               <Route path='/albums' component={Albums} />
          </Switch>
     );
};

export default Routing;
