import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderComponent } from '../components/Layout/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

function List({ navigation }) {
  return (
    <View style={styles.listContainer}>
      <HeaderComponent backgroundColor="#920000" headerTitle="Eczane Listesi" headerTitleColor="#ffffff"
        iconLeft="true" iconLeftColor="#ffffff" iconLeftName="left" iconLeftEvent={() => navigation.navigate('Search')} />
      <View style={styles.pharmacyContainer}>
        <View style={styles.iconContainer}>
          <Icon name="local-pharmacy" size={30} color="#920000" />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.pharmacyName}>
            <Text style={styles.pharmacyNameText}>Eczane Adı</Text>
          </View>
          <View style={styles.pharmacyNumber}>
            <Text style={styles.pharmacyNumberText}>Tel No</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  pharmacyContainer: {
    marginTop: 80,
    height: 60,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#cccccc',
  },
  iconContainer: {
    display: 'flex',
    flex: 1,
    borderRightWidth: 2,
    borderRightColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    display: 'flex',
    flex: 4,
    marginLeft: 20
  },
  pharmacyName: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  pharmacyNumber: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  pharmacyNameText: {
    fontWeight: "800",
    color: "#cccccc"
  },
  pharmacyNumberText: {
    fontWeight: "800",
    color: "#cccccc"
  }
})

export default List;
