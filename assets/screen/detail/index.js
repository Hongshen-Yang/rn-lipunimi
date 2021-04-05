import React from 'react';
import { StyleSheet, Text, FlatList, Pressable, SafeAreaView, View } from 'react-native';
import 'react-native-gesture-handler';
import { Color } from '../../styles/color'
import db from '../../db.json'

const mapArrays = data => {
    const res = [];
    for (let i = 0; i < data.entries.length; i++) {
        res.push({
            speechTypes: data.speechTypes[i],
            entries: data.entries[i]
        })
    };
    return res;
};

const Detail = ({ route, navigation }) => {
    const { word } = route.params;
    const records = mapArrays(db.data.filter(entry => entry.words == { word }.word)[0]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable
                    style={styles.backButton}
                    hitSlop={26}
                    onPress={() => navigation.navigate('Search')}
                />
                <Text style={styles.headerText}>{word}</Text>
            </View>
            <View style={styles.translation}>
                <FlatList
                    data={records}
                    keyExtractor={item => item.entries.toString()}
                    renderItem={
                        ({ item }) => (
                            <View style={styles.entries}>
                                <Text style={styles.speechTypesText}>{item.speechTypes}</Text>
                                <Text>{' '}</Text>
                                <Text style={styles.entriesText}>{item.entries}</Text>
                            </View>
                        )
                    }
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.yellow,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        backgroundColor: Color.blue,
        height: 12,
        width: 12,
        position: 'absolute',
        left: 26,
    },
    headerText: {
        fontSize: 40,
        fontFamily: 'Hoefler Text',
        fontWeight: 'bolder',
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
    entries: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    speechTypesText: {
        fontSize: 20,
        color: Color.blue,
        fontFamily: 'Hoefler Text',
        fontWeight: 'bold'
    },
    entriesText: {
        fontSize: 20,
        fontFamily: 'Hoefler Text',
    }
});
require
export default Detail