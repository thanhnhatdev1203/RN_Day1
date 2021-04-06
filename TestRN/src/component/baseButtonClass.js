import React, { Component } from 'react'
import {
View,
Text,
TouchableOpacity,
StyleSheet,
Alert
} from 'react-native'

class BaseButton extends Component {
    render(){    
    return (
            <View>
            <TouchableOpacity onPress={() => Alert.alert("Example")}>
            <Text>"Example"</Text>
            </TouchableOpacity>
            </View>
        )
    }
}