import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("app"));

/* steps

set up react components
-- tiles for each mountain
-- weather widget
-- maps modal window
-- nav bar / title

database and schema setup
-- ELT ski area data to postgres

write calls and data logic for weather apis

formula for calculating distance

add in sorting feature

add in google maps API

"favorite" mountains feature

very cool additional features
  - server side rendering on initial
  - cache for storing weather data
  - cookies for storing
    - user's location
    - favorite mountains
    - sorting

*/

