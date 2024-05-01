//Imports
import React from 'react'
import 'react-native-reanimated'
import 'react-native-gesture-handler'

//Routes
import Routes from './src/Routes/routes';

//Redux
import { Provider } from 'react-redux';
import { store } from './src/store/store';

//Talk is cheap, show me the code!
export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}