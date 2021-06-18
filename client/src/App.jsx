import Home from "./components/Home";

import { Provider } from "react-redux";
import generateStore from "./redux/store";
//Para las rutas generadas
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Componets
import Windows from "./components/WindowsArch";
import Linux from "./components/LinuxArch";
import LnxReplic from './components/LnxReplic';
import WinReplic from './components/WinReplic';

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/windows" component={Windows} />
          <Route path="/linux" component={Linux} />
          <Route path="/windows/replic" component={WinReplic} />
          <Route path="/linux/replic" component={LnxReplic} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
