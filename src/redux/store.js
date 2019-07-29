// redux methods which help to configure redux store
import { createStore, applyMiddleware, compose } from 'redux';
// logger which needed only for development purposes
import { createLogger } from 'redux-logger';
// saga middleware which needed for AJAX calls
import createSagaMiddleware from 'redux-saga';
// main reducer
import { rootReducer } from './root.reducer';
// main saga
import rootSaga from './root.saga';

// functions invocations to build redux store
const sagaMiddleware = createSagaMiddleware(),
      logger = createLogger({ collapsed: true }),
      createStoreWithMiddleware = applyMiddleware(sagaMiddleware, logger),
      store = createStore(rootReducer, compose(createStoreWithMiddleware));

// run saga
sagaMiddleware.run(rootSaga);

export default store;