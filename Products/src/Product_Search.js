import React, {useState, useEffect} from 'react';
import {TextInput, StyleSheet, View, FlatList,Button} from 'react-native';
import {Card, Text } from 'react-native-paper';

const ProductSearch = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    const [search, onChangeText] = useState('');
    let filePath = '';

    if(value!='') {
        filePath = 'https://dummyjson.com/products/search?q=' + value;
    } else {
        filePath = 'https://dummyjson.com/products';
    }
    useEffect(() => {
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
            return response.json();
            })
            .then((d) => {
                setData(d.products)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
    },[value]);
    handleSearch = () => {
        setValue(search);
    }
    const Item = ({ title, description, price, discountPercentage, rating, stock, brand, category, thumbnail}) => (
        <Card style={{marginTop: 10}}>
            <Card.Content>
                <Text style={{fontSize: 20, paddingBottom: 10, fontWeight: '400'}}>Product Detail</Text>
            </Card.Content>
            <Card.Cover source={{ uri: thumbnail}} />
            <Card.Content>
                <Text style={styles.title}>Title: {title} </Text>
                <Text>Description: {description} </Text>
                <Text>Price: {price} </Text>
                <Text>Discount: {discountPercentage} </Text>
                <Text>Rating: {rating} </Text>
                <Text>Stock: {stock} </Text>
                <Text>Branch: {brand} </Text>
                <Text>Category: {category} </Text>
            </Card.Content>
            
        </Card>
    );
    const renderItem = ({item}) => (
        <Item 
            thumbnail={item.thumbnail} 
            title={item.title}
            description={item.description}
            price={item.price}
            discountPercentage={item.discountPercentage}
            rating={item.rating}
            stock={item.stock}
            brand={item.brand}
            category={item.category}
        />
    );
    
    return (
        <View style={styles.container}>
            <TextInput
                autoCapitalize='none'
                placeholder='Search'
                style={{
                    backgroundColor: '#fff'
                }}
                textStyle={{ color: '#000' }}
                onChangeText={text => onChangeText(text)}
                value={search}
            />
            <Button title='SEARCH' onPress={handleSearch}></Button>
            <View>
                <Text style={{fontSize: 24, margin: 6}}>Product List</Text>
            </View>
            {data && (
                <FlatList
                data={data}
                renderItem={renderItem}
                />
            )}
        </View>
    )
};

export default ProductSearch;

const styles = StyleSheet.create({ 
    container :{ 
        alignContent:'center', 
        margin: 8
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
})