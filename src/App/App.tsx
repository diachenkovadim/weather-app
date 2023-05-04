import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistedStore } from 'services/redux/store';

import { AppRpouter } from './App.router';
import { ThemeProvider } from '../styles/theme';

const App = () => (
  <ThemeProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <AppRpouter />
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

export default App;
