import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MessageArea extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.messageArea}>
                <Text style={styles.textArea}>
                    Current Streak : {this.props.totalCorrect}
                </Text>

                <Text style={styles.textArea}>
                    {this.props.message}
                </Text>

            </View>
        )
    }
}

const styles = {
    messageArea: {
        width: null,
        alignItems: 'center'
    },
    textArea: {
        fontFamily: 'AvenirNextCondensed-Bold',
        letterSpacing: 1
    }
}

export default MessageArea;