import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistedStore } from 'services/redux/store';

import { AppRpouter } from './App.router';
import { ThemeProvider } from '../styles/theme';
import { SnackbarProvider } from 'notistack';

const App = () => (
  <ThemeProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <SnackbarProvider
          preventDuplicate
          autoHideDuration={5000}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          <AppRpouter />
        </SnackbarProvider>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

export default App;
