import React, {useState} from 'react';
import { Alert, SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native';

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [rating, setRating] = useState('');
    const [stock, setStock] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState('');

    const handleTitleChange = text => {
        setTitle(text);
    };

    const handleDescriptionChange = text => {
        setDescription(text);
    };

    const handlePriceChange = text => {
        setPrice(text);
    };

    const handleDiscountPercentageChange = text => {
        setDiscountPercentage(text);
    };

    const handleRatingChange = text => {
        setRating(text);
    };

    const handleStockChange = text => {
        setStock(text);
    };

    const handleBrandChange = text => {
        setBrand(text);
    };

    const handleCategoryChange = text => {
        setCategory(text);
    };

    const handleImagesChange = text => {
        setImages(text);
    };

    handleSubmit = () => {
        fetch('https://dummyjson.com/products/add', {
        method: 'Post',
        headers: {'label-Type': 'application/json'},
        body: JSON.stringify({
            title: title,
            description: description,
            price: price,
            discountPercentage: discountPercentage,
            rating: rating,
            stock: stock,
            brand: brand,
            category: category,
            images: images,
        }),
        })
        .then(res => res.json())
        .then(console.log);
        Alert.alert('Add successful');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Add a Product
            </Text>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput onChangeText={handleTitleChange} placeholder="Enter title" style={styles.input}/>

                <Text style={styles.label}>Description</Text>
                <TextInput
                    onChangeText={handleDescriptionChange}
                    placeholder="Enter description"
                    style={styles.input}
                />

                <Text style={styles.label}>Price</Text>
                <TextInput onChangeText={handlePriceChange} placeholder="Enter price" style={styles.input}/>

                <Text style={styles.label}>Discount Percentage</Text>
                <TextInput
                    onChangeText={handleDiscountPercentageChange}
                    placeholder="Enter discount percentage"
                    style={styles.input}
                />

                <Text style={styles.label}>Rating</Text>
                <TextInput onChangeText={handleRatingChange} placeholder="Enter rating" style={styles.input}/>

                <Text style={styles.label}>Stock</Text>
                <TextInput onChangeText={handleStockChange} placeholder="Enter stock" style={styles.input}/>

                <Text style={styles.label}>Brand</Text>
                <TextInput onChangeText={handleBrandChange} placeholder="Enter brand" style={styles.input}/>

                <Text style={styles.label}>Category</Text>
                <TextInput
                    onChangeText={handleCategoryChange}
                    placeholder="Enter category"
                    style={styles.input}
                />

                <Text style={styles.label}>Image</Text>
                <TextInput
                    onChangeText={handleImagesChange}
                    placeholder="Enter images URL(s)"
                    style={styles.input}
                />
                <TouchableOpacity
                    style={{
                    backgroundColor: 'blue',
                    alignItems: 'center',
                    justifylabel: 'center',
                    }}
                    onPress={() => handleSubmit()}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        margin: 12
    },
    title: {
        color: 'blue',
        fontSize: 20,
        fontWeight: '900',
        paddingBottom: 8
    },
    label: {
        marginTop: 4,
        fontSize: 14,
        fontWeight: '800'
    },
    input: {
        borderBottomWidth: 0.5,
        paddingVertical: 0,
        fontSize: 14
    }
})
export default AddProduct;