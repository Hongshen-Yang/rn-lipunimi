import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, ScrollView, FlatList, Pressable, View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { Color } from '../../styles/color.js'
import LangContext from '../../utilities/context.js';
import db from '../../db.json'

const WordList = (props) => {

    const langs = useContext(LangContext);
    const [words, setWords] = useState(db.data);

    useEffect(
        () => { 
            setWords(
                db.data.filter(
                    word => word.words.includes(props.keyword) || word.translation.includes(props.keyword)
                )
            )
        },
        [props.keyword]
    );

    if (words === null || words.length === 0) {
        return (
            <View style={styles.WordListContainer}>
                <Text style={styles.WordNotFound}>Record not found</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.WordListContainer}>
                <FlatList
                    style={styles.ScrollWorldList}
                    data={words}
                    renderItem={({ item }) => (
                        <Pressable style={styles.WordsPressable}>
                            <Text style={{ fontSize: 20 }}>{item.words}</Text>
                            <Text style={{ fontSize: 15 }}>{item.translation}</Text>
                        </Pressable>
                    )}
                    keyExtractor={(item) => item.words.toString()}
                />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    WordListContainer: {
        flex: 10,
        backgroundColor: Color.shallowYellow,
    },
    ScrollWorldList: {
        flex: 10,
        margin: 20,
        backgroundColor: Color.shallowYellow,
    },
    WordNotFound: {
        margin: 20,
    },
    WordsPressable: {
        flex: 1,
        marginHorizontal: 5,
        marginVertical: 15,
    }
});

export default WordList