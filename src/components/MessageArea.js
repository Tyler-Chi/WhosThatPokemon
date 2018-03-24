import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MessageArea extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={styles.messageArea}>
                <Text>
                    Current Streak : {this.props.totalCorrect}
                </Text>

                <Text>
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
    }
}

export default MessageArea;