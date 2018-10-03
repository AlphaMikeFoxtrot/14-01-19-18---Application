import React, { Component } from 'react';
import { Image, Text } from 'react-native';
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

export default class ListCardItem extends Component {
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
                        <Thumbnail source={{uri: "https://cdn2.vectorstock.com/i/1000x1000/14/01/cute-handsome-man-round-avatar-icon-symbol-vector-16831401.jpg"}} />
                        <Body>
                            <Text>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{uri: "https://hdqwalls.com/wallpapers/small-memory-lp.jpg"}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                    <Text>{`Qui nulla in non sint sint. Commodo veniam reprehenderit occaecat cillum esse occaecat nostrud ullamco nostrud aute proident quis laborum incididunt. Adipisicing ad consequat nulla non ipsum nisi. Incididunt ipsum elit nisi sunt aute amet aute proident do. Ipsum pariatur eiusmod voluptate Lorem non mollit do. Fugiat deserunt duis nostrud consequat non ex esse nostrud elit minim anim excepteur excepteur est.

Ipsum tempor minim Lorem excepteur incididunt mollit non. Dolore quis quis duis labore. Duis qui labore cillum commodo consequat tempor commodo nulla enim consequat est incididunt duis occaecat. Irure non in mollit culpa aliquip. Exercitation reprehenderit nostrud ex esse ut est. Amet deserunt nostrud laboris cupidatat anim voluptate qui occaecat ipsum exercitation deserunt.

Irure eiusmod consectetur voluptate qui eiusmod sunt exercitation ullamco ullamco laboris veniam amet. Adipisicing irure anim ipsum exercitation esse in esse nisi est ipsum dolor ipsum culpa. Laborum irure esse deserunt deserunt sit qui nulla aliquip sit laboris est proident id.`}</Text>
                </CardItem>
            </Card>
        );
    }
}
