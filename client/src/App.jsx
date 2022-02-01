import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Home, User, Search, Duel } from "./components";
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />

      <Route exact path="/" component={Home} />
      <Route exact path="/inspect" component={Search} />
      <Route exact path="/duel" component={Duel} />
    </Router>
  );
}

export default App;
