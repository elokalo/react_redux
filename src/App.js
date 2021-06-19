import React from 'react';
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux'
import store from './redux/store'
import HookCakeContainer from './components/HookCakeContainer';
import UserContainer from './components/UserContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import HookUserContainer from './components/HookUserContainer';

function App() {
  return (
    /**
     * The Provider makes the redux store avaible to the
     * connect calls in the components hierachy below
     */
    <Provider store={store}>
      <div className="App">
          <CakeContainer />
          <HookCakeContainer />
          <IceCreamContainer />
          <NewCakeContainer />
          <ItemContainer cake />
          <ItemContainer />
          <UserContainer />
          <HookUserContainer />
      </div>
    </Provider>
  );
}

export default App;
