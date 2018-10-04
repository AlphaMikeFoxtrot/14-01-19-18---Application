import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet, 
    BackHandler, 
    AsyncStorage, 
    FlatList, 
} from 'react-native';

import ListCardItem from '../ListCardItem/ListCardItem'

export default class ExamScreen extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {  };
        console.log(`\n\n------------------------------------------------------------------------EXAM SCREEN------------------------------------------------------------------------`)
    }

    render() {
        return (
            <View style={styles.generalContainer}>
                <Text> textInComponent </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1 
    }, 
    generalContainer: {
        flex: 1, 
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});