import { useState, StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./Search";
import ThemeContext from "./Context";

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div className="body">
        <Router>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route exact path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);