import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, View, Pressable } from 'react-native';
import 'react-native-gesture-handler';
import { Color } from '../../styles/color.js'
import { Font } from '../../styles/font.js'

const Entry = ({navigation}) => {

    setTimeout(() => { navigation.navigate('Search') }, 2000);

    return (
        <SafeAreaView style={styles.container}>
                <Pressable
                    style={styles.container}
                    onPress={() => navigation.navigate('Search')}
                >
                <Text style={styles.logoText}>lipu nimi pi toki pona</Text>
                <Image source={require('../../image/logo-tokiPona.png')} style={styles.logo} />
                <View style={styles.credit}>
                    <Text style={styles.creditText}>App Author - HS Yang</Text>
                    <Text style={styles.creditText}>Lexicographer - jProgr</Text>
                    {/* <Text style={styles.creditText}>Colanger - Sonja Lang</Text> */}
                </View>
                </Pressable>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Color.yellow,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    logoText: {
        fontSize: 20,
        fontFamily: Font.Main,
        fontWeight: 'bold',
        color: Color.blue,
        padding: 20,
        marginBottom: 20,
        backgroundColor: Color.shallowYellow,
        overflow: 'hidden',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: Color.blue,
    },
    logo: {
        width: '50%',
        height: '40%',
        resizeMode: 'contain',
    },
    credit: {
        position: 'absolute',
        bottom: 80,
    },
    creditText: {
        fontSize: 15,
        fontFamily: Font.Secondary,
        fontWeight: "500",
        color: Color.blue,
    }
});

export default Entry