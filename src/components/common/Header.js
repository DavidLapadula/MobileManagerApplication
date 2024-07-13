
// import necessary libraries to make a component
import React from 'react'; 
import { Text, View } from 'react-native'; 

// make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles; 

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    ); 
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8', 
        justifyContent: 'center', 
        alignItems: 'center', 
        setHeight: '60', 
        // only works for ios platform, can be access with Platform.OS api from react-native
            // paddingTop: '15px', 
            // shadowColor: '#000', 
            // shadowOffset: { width: 0, height: 20 }, 
            // shadowOpacity: 0.2
        elevation: 10, 
        position: 'relative'
    }, 
    textStyle: {
        fontSize: 20, 
        // set margin for android on child because padding for parent doesn work on android
        margin: 10
    }
}; 
// make it availabe to other parts of the application

export { Header }; 

