import React, { Component } from "react";
import {Text,View,Image,TouchableHighlight,Animated} from 'react-native';
import { styles } from '../styles/styles';

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
            maxHeight   : event.nativeEvent.layout.height,
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
                
                <View style={styles.PanelBody} onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>

            </Animated.View>
        );
    }
}


export default Panel;