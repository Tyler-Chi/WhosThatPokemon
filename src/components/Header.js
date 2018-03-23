import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Header extends Component {

    render(){

        return (
            <View style={styles.viewArea}>
                <Text>
                    WHO'S THAT POKEMON?
                </Text>
            </View>
        )
    }
}

const styles = {
    viewArea: {
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        backgroundColor: '#abb8ce'
    }
}

export default Header;