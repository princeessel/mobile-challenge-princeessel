import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

import { Provider } from 'react-redux';
import { store,persistor } from "./Redux/Reducres"
import { MainNavigation } from './navigation';
import { PersistGate } from 'redux-persist/integration/react';

export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    //Internet Subscriber
    this.unsubscribeNetInfo = NetInfo.addEventListener(state => {
      this.checkConnection(state);
    });
  }

  componentWillUnmount() {
    this.unsubscribeNetInfo && this.unsubscribeNetInfo();
  }

  checkConnection = state => {
    console.log('Internet State: ', state);
    global.isConnected = state.isConnected;
    global.isInternetReachable =
      state.isInternetReachable == null ? true : state.isInternetReachable;
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <SafeAreaView style={{ flex: 1 }}>
          <MainNavigation />
        </SafeAreaView>
        </PersistGate>
      </Provider>
    );
  }
}
