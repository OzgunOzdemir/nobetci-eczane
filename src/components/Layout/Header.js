import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const HeaderComponent = ({ headerTitle, headerTitleColor, backgroundColor, iconLeftName, iconLeftEvent, iconRightEvent, iconRightName, iconLeftColor, iconRightColor, iconLeft, iconRight }) => {
    return (
        <View style={[styles.headerContainer, { backgroundColor: backgroundColor }]}>
            <View style={styles.headerLeftContainer}>
                {
                    iconLeft ? <Icon name={iconLeftName} size={30} color={iconLeftColor} onPress={iconLeftEvent} /> : null
                }
            </View>
            <View style={styles.headerCenterContainer}>
                <Text style={[styles.headerTitleStyle, { color: headerTitleColor }]}>{headerTitle}</Text>
            </View>
            <View style={styles.headerRightContainer}>
                {
                    iconRight ? <Icon name={iconRightName} size={30} color={iconRightColor} onPress={iconRightEvent}/> : null
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 80,
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    headerLeftContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    headerCenterContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    headerRightContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    headerTitleStyle: {
        fontSize: 20
    }
})

export { HeaderComponent };