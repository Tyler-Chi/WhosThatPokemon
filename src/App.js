import { Text , View , Image ,ImageBackground } from 'react-native';
import React from 'react';
import Header from './components/Header';
import MainArea from './components/MainArea';

const App = () => {

    const backgroundUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDglUICWail07IX29Q7sZbIG_9H4V36XdKX4xxJMMah3pXd9SpQ';

    return (

      

            <View style={{flex : 1}}>
                <Header />
                <MainArea />
            </View>

    )
}

export default App;