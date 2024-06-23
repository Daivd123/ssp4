import React, {Component} from 'react';
import{Text, View} from 'react-native' ;

export default class SpaceCraftScreen extends COmponent {
    render() {
        return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
        <Text> Spacecraft Screen</Text>
        </View>
        )
    }
}