import React, { useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import auth from '@react-native-firebase/auth';

function Search({ navigation }) {

    useEffect(() => {
        auth()
        .signInAnonymously()
        .then(() => {
          console.log('User signed in anonymously');
        })
        .catch(error => {
          if (error.code === 'auth/operation-not-allowed') {
            console.log('Enable anonymous in your firebase console.');
          }
      
          console.error(error);
        });
      }, []);

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