import React, { Component } from 'react';
import { ImageBackground, View, Text , ActivityIndicator , Image , TextInput , TouchableOpacity } from 'react-native';
import axios from 'axios';
import MessageArea from './MessageArea';
import Ripple from 'react-native-material-ripple';

const test = require('../Test');


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


        test.test1();


        axios.get('https://pokeapi.co/api/v2/pokemon/25/')
            .then(res => {
                this.setState({currentPokemon: res.data})
                this.setState({message: ''});
            })
            .catch(err => console.log(err));
    }

    renderImageArea(){
        if(this.state.currentPokemon === null){
            return (
                <ActivityIndicator style={ styles.spinner }size={'large'} color={'red'} />
            )
        } else {
            return (
                <Image style={styles.imageStyle} source = {{uri: this.state.currentPokemon.sprites.front_default}}/>
            )
        }
    }

    handleSubmit(){

        if (this.state.currentPokemon === null){
            this.setState({message: 'Please wait for app to load next Pokemon :)'});
            return;
        }
       
        if (this.checkCorrect(this.state.currentPokemon.name, this.state.guess)){
            let newStreak = this.state.totalCorrect + 1;
            this.setState({totalCorrect: newStreak});
            this.setState({message: 'nice work! you are a true pokemon master.'})

            setTimeout(this.newPokemon.bind(this), 2000)
        } else {
            
            this.setState({totalCorrect: 0})

            let pokeName = this.state.currentPokemon.name;

            pokeName = pokeName[0].toUpperCase() + pokeName.slice(1);
            
            let output = "Did you even have a childhood...? That's: " + pokeName;

            this.setState({message: output })

            setTimeout(this.newPokemon.bind(this), 4000)
        }

        
        
    }

    newPokemon(){

        this.setState({loading: true , guess: "" , message: "", currentPokemon: null});

        let newPokemon = Math.floor(151 * Math.random());

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

        const backgroundUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDglUICWail07IX29Q7sZbIG_9H4V36XdKX4xxJMMah3pXd9SpQ';


        console.log(this.state)

        return (
            <ImageBackground
                source={{ uri: backgroundUrl }}
                style={{ marginTop: 10,height: '80%', width: '100%', }}
            >
            <View>
                <Image />
                <View style={styles.imageArea}>
                    {this.renderImageArea()}
                </View>
            
                <View style = {styles.inputArea}>
                    <TextInput
                        style = {styles.textInputArea}
                        value={this.state.guess}
                        onChangeText = {guess => this.setState({guess})}
                    />
                    <TouchableOpacity style = {styles.buttonStyle} onPress={this.handleSubmit.bind(this)}>
                        <Text style = {styles.textArea}> Submit Answer </Text>
                    </TouchableOpacity>

                </View>

                <MessageArea currentPokemon= {this.state.currentPokemon} message={this.state.message} totalCorrect={this.state.totalCorrect}/>

            </View>

            </ImageBackground>
        )
    }

}

const styles = {
    textArea: {
        fontFamily: 'AvenirNextCondensed-Bold',
        letterSpacing: 1
    },
    buttonStyle: {
        marginTop: 10,
        marginBottom: 8,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'black',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: '#ffb363'
    },
    imageArea: {
        height: 350,
        width: null,
        // backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        height: 400,
        width: 400,
        marginLeft: 35,
        marginTop: 30
    },
    inputArea: {
        width: null,
        alignItems: 'center'

    },
    textInputArea: {
        fontSize: 20,
        height: 30,
        width: 300,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 90,
        textAlign: 'center',
        borderRadius: 2,
        paddingTop: 5,
        paddingBottom: 5
    },
    spinner: {
        marginLeft: 3,
        marginTop: 30
    }
}

export default MainArea;