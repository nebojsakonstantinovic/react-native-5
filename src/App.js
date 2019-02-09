import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAFNJgcQSpul9-L4oFfEjmPsgnfh0MmghY",
      authDomain: "manager-react-native-d7da1.firebaseapp.com",
      databaseURL: "https://manager-react-native-d7da1.firebaseio.com",
      projectId: "manager-react-native-d7da1",
      storageBucket: "manager-react-native-d7da1.appspot.com",
      messagingSenderId: "199260096210"
    };
    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Helllo!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
