import React from 'react'
import { Text, View, Button } from 'react-native'

function List({ navigation }){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>List Screen</Text>
            <Button
              title="Go to Search... again"
              onPress={() => navigation.goBack()}
            />
          </View>
        )
}

export default List;
