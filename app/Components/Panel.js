import React, { Component } from "react";
import {Text,View,Image,TouchableHighlight,Animated} from 'react-native';
import { styles } from '../styles/styles';
import { Button } from "react-native-elements";

class Panel extends Component{
    constructor(props){
        super(props);

        this.icons = {
            'up'    : require('../Images/Arrowhead_UP.png'),
            'down'  : require('../Images/Arrowhead_DOWN.png')
        };

        this.state = {
            title       : props.title,
            expanded    : false,
            // animation   : new Animated.Value(),
        };
    }

    toggle(){
        let initialValue = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue   = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded : !this.state.expanded
        });

        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();
    }

    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height + 62,
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height,
            animation   : new Animated.Value(event.nativeEvent.layout.height),
        });
    }

    _createNewAnimation(){
        this.setState({
            animation: new Animated.Value(event.nativeEvent.layout.height)
        });
    }

    render(){
        let icon = this.icons['down'];

        const children = this.props.children;

        if(this.state.expanded){
            icon = this.icons['up'];
        }

        return (
            <Animated.View 
                style={[styles.PanelContainer,{height: this.state.animation}]}>
                <View style={styles.PanelTitleContainer} onLayout={this._setMinHeight.bind(this)}>
                    <Text style={styles.PanelTitle}>{this.state.title}</Text>
                    <TouchableHighlight 
                        style={styles.PanelButton} 
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
                        <Image
                            style={styles.PanelButtonImage}
                            source={icon}
                        ></Image>
                    </TouchableHighlight>
                </View>

                {children[0]}
                
                <View style={styles.PanelBody} onLayout={this._setMaxHeight.bind(this)}>
                    <View style={styles.PanelRowTop}>
                        <View style={styles.PanelColumn}>
                            <View style={styles.SearchFilterItem}>
                                {children[1]}  
                            </View>
                            <View style={{height: 8}}/>
                            <View style={styles.SearchFilterItem}>
                                {children[2]}  
                            </View>
                        </View>
                        <View style={styles.PanelColumn}>
                            {children[3]}
                            <View style={{height: 8}}/>
                            {children[4]}
                        </View>
                    </View>

                </View>

                <View style={styles.PanelRowBottom}>
                        {children[5]}
                </View>
            </Animated.View>
        );
    }
}


export default Panel;