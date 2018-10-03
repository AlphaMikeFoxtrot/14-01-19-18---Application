import React, { Component } from 'react';
import { 
    View, 
    Text,
    ScrollView,
    BackHandler
} from 'react-native';
import ListCardItem from './ListCardItem'

class GalleryScreen extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
    }

    componentWillMount = () => {
        BackHandler.addEventListener("hardwareBackPress", this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        this.props.navigation.navigate("HomeScreen")
        return true;
    }

    render() {
        return (
        <ScrollView>
            <ListCardItem />
            <ListCardItem />
            <ListCardItem />
            <ListCardItem />
            <ListCardItem />
        </ScrollView>
        );
    }
}

export default GalleryScreen;
