import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Products from './src/Products';
import Product_Add from './src/Product_Add';
import Product_Search from './src/Product_Search';
import Product_Detail from './src/Product_Detail';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialBottomTabNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Products" component={Products} 
                    options={{
                        tabBarActiveTintColor: '#000000',
                        tabBarLabel: 'Products',
                        tabBarIcon: ({color}) => (
                            <FontAwesome name="bomb" color={color} size={20} />
                        )
                    }}
                />
                <Tab.Screen name="Add" component={Product_Add}
                    options={{
                        tabBarActiveTintColor: '#000000',
                        tabBarLabel: 'Add',
                        tabBarIcon: ({color}) => (
                            <FontAwesome name="bomb" color={color} size={20} />
                        )
                    }}
                />
                <Tab.Screen name="Search" component={Product_Search}
                    options={{
                        tabBarActiveTintColor: '#000000',
                        tabBarLabel: 'Search',
                        tabBarIcon: ({color}) => (
                            <FontAwesome name="search" color={color} size={20} />
                        )
                    }}
                />
                <Tab.Screen name="Detail" component={Product_Detail}
                    options={{
                        tabBarActiveTintColor: '#000000',
                        tabBarLabel: 'Detail',
                        tabBarIcon: ({color}) => (
                            <FontAwesome name="file" color={color} size={20} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
        
    )
}




