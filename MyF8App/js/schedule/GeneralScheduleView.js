import React, { Component } from "react";
import { View, Text, SafeAreaView, SomeOtherWidget } from "react-native";

export default class GeneralScheduleView extends React.Component {
    render(){
        return(
            <SafeAreaView>
                <Text>GeneralScheduleView</Text>
                <Blink text="I love to blink"></Blink>
                <Blink text='Yes blinking is so great'></Blink>
                <Blink text='Why did they ever take this out of HTML'></Blink>
                <Blink text='Look at me look at me look at me'></Blink>
            </SafeAreaView>
        )
    }
}

class Blink extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };

        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}