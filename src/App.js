import { Text , View  } from 'react-native';
import React from 'react';
import Header from './components/Header';
import MainArea from './components/MainArea';

const App = () => {

    return (
        <View>
            <Header />
            <MainArea />
        </View>
    )
}

export default App;