import React from 'react';
import { Text, View, Button } from 'react-native';
import { HeaderComponent } from '../components/Layout/Header';


function List({ navigation }){
        return (
            <View>
              <HeaderComponent backgroundColor="#920000" headerTitle="Eczane Listesi" headerTitleColor="#ffffff"
              iconLeft="true" iconLeftColor="#ffffff" iconLeftName="left" iconLeftEvent={() => navigation.navigate('Search')}/>
            </View>
        )  
}

export default List;
