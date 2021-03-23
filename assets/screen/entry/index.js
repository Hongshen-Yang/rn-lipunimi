import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { Color } from '../../styles/color.js'

const Entry = ({navigation}) => {

    setTimeout(() => { navigation.navigate('Search') }, 2000);

    return (
        <SafeAreaView style={styles.container}>
                <Text style={styles.logoText}>lipu nimi pi toki pona</Text>
                <Image source={require('../../image/logo-tokiPona.png')} style={styles.logo} />
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
        fontFamily: 'Hoefler Text',
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
    }
});

export default Entry