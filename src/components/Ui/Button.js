import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonComponent = ({ onPress, children, backgroundColor, width, height, borderRadius, borderWidth, borderColor }) => {
    return (
        <TouchableOpacity onPress={onPress}
         style={[styles.buttonStyle, { backgroundColor, width, height, borderRadius, borderWidth, borderColor  }]}>
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10, 
        paddingBottom: 10
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export { ButtonComponent };