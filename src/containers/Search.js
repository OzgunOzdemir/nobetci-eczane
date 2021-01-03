import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth'
import RNPickerSelect from 'react-native-picker-select'

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
    <View style={styles.searchContainer}>
      <View style={styles.brandContainer}>
        <View>
          <Text style={styles.brandText}>Nöbetçi Eczane</Text>
        </View>
      </View>
      <View style={styles.selectContainer}>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          style={pickerSelectStyles}
          placeholder={{
            label: 'Lütfen il seçiniz...',
            value: null,
            color: '#9EA0A4',
          }}
          items={[
            { label: 'İstanbul', value: 'İstanbul' },
            { label: 'İzmir', value: 'İzmir' },
            { label: 'Ankara', value: 'Ankara' },
          ]}
        />
        <TouchableOpacity onPress={() => navigation.navigate('List')}
          style={styles.searchButton}
        >
          <Text style={styles.searchText}>Eczane Ara</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: "#920000",
  },

  brandContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  selectContainer: {
    display: 'flex',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },

  brandText: {
    fontSize: 30,
    color: "#ffffff"
  },

  searchButton: {
    alignItems: "center",
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: "#DDDDDD",
    padding: 10,
    height: 50,
    marginHorizontal: 50,
    marginTop: 20,
    borderRadius: 10
  },

  searchText: {
    color: "#920000",
    fontSize: 20,
  }
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginHorizontal: 50,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 4,
    color: 'gray',
    paddingRight: 30,
    backgroundColor: 'white',
    borderRadius: 10
  },
  inputAndroid: {
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginHorizontal: 50,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 4,
    color: 'gray',
    paddingRight: 30,
    backgroundColor: 'white',
    borderRadius: 10
  },
});



export default Search;