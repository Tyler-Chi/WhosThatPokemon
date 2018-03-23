import React, { Component } from 'react';
import { View, Text , ActivityIndicator , Image , TextInput , TouchableOpacity } from 'react-native';
import axios from 'axios';


class MainArea extends Component {

    constructor(props){
        super(props);
        this.state = {
            totalCorrect: 0,
            currentPokemon: null,
            loading: true,
            guess: '',
            message: ''
        }
    }

    componentWillMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon/5/')
            .then(res => {
                this.setState({currentPokemon: res.data})
            })
            .catch(err => console.log(err));
    }

    renderImageArea(){
        if(this.state.currentPokemon === null){
            return (
                <ActivityIndicator size={'large'} color={'red'} />
            )
        } else {
            return (
                <Image style={styles.imageStyle} source = {{uri: this.state.currentPokemon.sprites.front_default}}/>
            )
        }
    }

    handleSubmit(){
       
        if (this.checkCorrect(this.state.currentPokemon.name, this.state.guess)){
            let newStreak = this.state.totalCorrect + 1;
            this.setState({totalCorrect: newStreak});
            this.setState({message: 'nice work! you are a true pokemon master.'})
        } else {
            
            this.setState({totalCorrect: 0})
            this.setState({message: "lol did u even have a childhood?"})
        }

        setTimeout(this.newPokemon.bind(this), 2000)
        
    }

    newPokemon(){

        this.setState({loading: true , guess: "" , message: "", currentPokemon: null});

        let newPokemon = Math.floor(125 * Math.random());

        axios.get('https://pokeapi.co/api/v2/pokemon/' + newPokemon + '/')
            .then(res => {
                this.setState({ currentPokemon: res.data })
            })
            .catch(err => console.log(err));
    }

    checkCorrect(string1,string2){

        if (string1.length !== string2.length){
            return false;
        }

        return string1.toUpperCase() === string2.toUpperCase()


    }


    render(){

        console.log(this.state)

        return (
            <View>
                <View style={styles.imageArea}>
                    {this.renderImageArea()}
                </View>
            
                <View style = {styles.inputArea}>
                    <TextInput
                        style = {styles.textInputArea}
                        value={this.state.guess}
                        onChangeText = {guess => this.setState({guess})}
                    />
                    <TouchableOpacity onPress={this.handleSubmit.bind(this)}>
                        <Text> Submit Answer </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text>
                        Current Streak: {this.state.totalCorrect}
                    </Text>
                    <Text>
                        {this.state.message}
                    </Text>
                </View>

            </View>
        )
    }

}

const styles = {
    imageArea: {
        height: 350,
        width: null,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        height: 300,
        width: 300
    },
    inputArea: {
        width: null,
        alignItems: 'center'

    },
    textInputArea: {
        height: 20,
        width: 300,
        borderColor: 'black',
        borderWidth: 1
    }
}

export default MainArea;