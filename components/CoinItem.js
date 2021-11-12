import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


const CoinItem = ({coin}) => {
    return (
        <View style={styles.containerItem}>
            <View style={styles.coinData}>
                <Image style={styles.image} source={{uri: coin.image}} />
                    <View style={styles.namesData}>
                        <Text style={styles.text}>{coin.name}</Text>
                        <Text style={styles.textSymbol}>{coin.symbol}</Text>
                    </View>
            </View>
            <View>
                <Text style={styles.textPrice}>$ {coin.current_price}</Text>
                <Text style={[styles.pricePorcentaje, coin.price_change_percentage_24h > 0 ? styles.pricePositivo: styles.priceNegativo]}> {coin.price_change_percentage_24h}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: '#121212',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        width: 30,
        height: 30,
    },
    text: {
        color: '#ffffff'
    },
    coinData: {
        flexDirection: 'row'
    },
    namesData: {
        marginLeft: 10,
    },
    textSymbol: {
        color: '#434343',
        textTransform: 'uppercase',
    },
    pricePorcentaje: {
        color: '#fff',
        textAlign: 'right'
    },
    pricePositivo: {
        color: '#00B5B9'
    },
    priceNegativo: {
        color: '#FC4422'
    },
    textPrice: {
        color: '#fff',
        textAlign: 'right',
    }
})

export default CoinItem
