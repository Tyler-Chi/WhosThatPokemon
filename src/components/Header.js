import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Header extends Component {

    render(){

        return (
            <View style={styles.viewArea}>
                <Text style={styles.text}>
                    WHO'S THAT POKEMON?
                </Text>
            </View>
        )
    }
}

const styles = {
    viewArea: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0 , height: 2},
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10
    
    },
    text: {
        fontFamily: 'AvenirNextCondensed-Bold',
        letterSpacing: 3,
    }
}

export default Header;