import React from 'react'
import { Text, View, Button } from 'react-native'

function Search({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Search Screen</Text>
            <Button
                title="Go to List"
                onPress={() => navigation.navigate('List')}
            />
        </View>
    )
}


export default Search;