import React, {useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Converter from './components/Converter/Converter';
import MainPage from './components/MainPage';
import { useDispatch } from 'react-redux';
import { loaderData } from './store/action';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loaderData());
  }, [dispatch]);

  return (

      <BrowserRouter>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/converter" component={Converter} exact />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
