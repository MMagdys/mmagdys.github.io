import {BrowserRouter} from 'react-router-dom';
import { createBrowserHistory } from "history";

import Main from './layouts/Main';
const hist = createBrowserHistory();


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} history={hist}>
      <Main />
    </BrowserRouter>
  );
}

export default App;
