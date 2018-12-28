import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './stores/configureStore';

const render = Component => {
  const store = configureStore();

  ReactDOM.render(
    <BrowserRouter>
      <AppContainer>
        <Provider store={store}>
          <Component />
        </Provider>
      </AppContainer>
    </BrowserRouter>,
    document.getElementById('root')
  )
}

render(App);

if (module.hot) {
  module.hot.accept('./App', () => { 
    const NextApp = require('./App').default;
    render(NextApp); 
  })
}
