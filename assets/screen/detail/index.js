import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, FlatList, Pressable, SafeAreaView, View } from 'react-native';
import 'react-native-gesture-handler';
import { Color } from '../../styles/color'
import { Font } from '../../styles/font.js'
import db from '../../utilities/db.json'
import speechTypes from '../../utilities/speechTypes.json'

// const mapArrays = data => {
//     const res = [];
//     for (let i = 0; i < data.entries.length; i++) {
//         res.push({
//             speechTypes: data.speechTypes[i],
//             entries: data.entries[i]
//         })
//     };
//     return res;
// };

const Detail = ({ route, navigation }) => {
    const { word } = route.params;

    const res = [];
    const data = db.data.filter(entry => entry.words == { word }.word)[0];
    for (let i = 0; i < data.entries.length; i++) {
        res.push({
            speechTypes: data.speechTypes[i],
            entries: data.entries[i]
        })
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable
                    style={styles.backButton}
                    hitSlop={25}
                    onPress={() => navigation.navigate('Search')}
                />
                <Text style={styles.headerText}>{word}</Text>
            </View>
            <View style={styles.translation}>
                <View style={{height:20}}></View>
                <FlatList
                    data={res}
                    scrollEnabled={false}
                    keyExtractor={item => item.entries.toString()}
                    renderItem={
                        ({ item }) => (
                            <View style={styles.entriesList}>
                                <Text style={styles.speechTypesText}>{item.speechTypes}</Text>
                                <Text>{' '}</Text>
                                <Text style={styles.entriesText}>{item.entries}</Text>
                            </View>
                        )
                    }
                />
                {/* <FlatList
                    data={speechTypes.speechTypes}
                    scrollEnabled={false}
                    keyExtractor={item => item.abbr.toString()}
                    renderItem={
                        ({ item }) => (
                            <View style={styles.speechTypesList}>
                                <Text style={styles.abbrText}>{item.abbr}</Text>
                                <Text>{' '}</Text>
                                <Text style={styles.speechTypeText}>{item.speechType}</Text>
                            </View>
                        )
                    }
                /> */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.yellow,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        backgroundColor: Color.blue,
        height: 10,
        width: 10,
        position: 'absolute',
        left: 25,
    },
    headerText: {
        fontSize: 35,
        fontFamily: Font.Main,
        fontWeight: 'bold',
        color: Color.blue,
        padding: 20,
        overflow: 'hidden',
        borderRadius: 20,
        textDecorationLine: 'underline',
    },
    translation: {
        flex: 10,
        backgroundColor: Color.shallowYellow,
    },
    entriesList: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 20,
        flexWrap: 'wrap'
    },
    speechTypesText: {
        fontSize: 18,
        color: Color.blue,
        fontFamily: Font.Secondary,
        fontWeight: 'bold'
    },
    entriesText: {
        fontSize: 18,
        fontFamily: Font.Secondary,
    },
    speechTypesList: {
        flexDirection: 'row',
        marginHorizontal: 20,
        //justifyContent: 'center',
        flexGrow: 0,
    },
    abbrText: {
        fontSize: 10,
        color: Color.blue,
        fontFamily: Font.Secondary,
        fontWeight: 'bold'
    },
    speechTypeText: {
        fontSize: 10,
        fontFamily: Font.Secondary,
    },
});

export default Detail