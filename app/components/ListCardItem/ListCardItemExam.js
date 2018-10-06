import React, { Component } from 'react';
import { 
    Image, 
    Text,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import {
    Card,
    CardItem,
    Thumbnail,
    Button,
    Icon,
    Left,
    Body,
    Right
} from 'native-base';

export default class ListCardItemExam extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </Left>
                    <Right>
                        <TouchableOpacity>
                            <Image resizeMode="contain" source={require('../../assets/icons/download.png')} style={styles.icons} />
                        </TouchableOpacity>
                    </Right>
                </CardItem>
                <CardItem>
                    <View style={styles.hr} />
                </CardItem>
                <CardItem cardBody>
                    <Image source={{uri: this.props.imageUrl}} resizeMode="contain" style={{height: 500, width: null, flex: 1}}/>
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: "#000", 
        fontWeight: "bold",
        margin: 4,
    }, 
    icons: {
        height: 32,
        width: 32
    }, 
    hr: {
        backgroundColor: "#000", 
        width: "100%",
        height: 0.55
    }
})