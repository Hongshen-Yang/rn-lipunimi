import React, { useState } from 'react';
import { Platform, StatusBar, KeyboardAvoidingView, StyleSheet, View, SafeAreaView, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import { Color } from '../../styles/color.js'
import LangBtn from './LangBtn.js'
import WordList from './WordList.js'

const langs = {
    english: 'E',
    tokipona: 'T'
}

const LangContext = React.createContext(langs.english);

const Search = ({ navigation }) => {

    const [keyword, setKeyword] = useState('');

    return (
        <LangContext.Provider value={langs.english}>
            <SafeAreaView style={styles.container}>
                <View style={styles.searchBoxContainer}>
                    {/* < LangBtn /> */}
                    < TextInput
                        style={styles.searchBox}
                        autoCorrect={false}
                        value={keyword}
                        clearButtonMode='always'
                        onChangeText={setKeyword}
                    />
                </View>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "positions" : "height"}
                    style={{flex:10}}
                >
                    <WordList keyword={keyword} navigation={navigation} />
                </KeyboardAvoidingView>
            </SafeAreaView>
        </LangContext.Provider >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.yellow,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    searchBoxContainer: {
        height: 60,
        flexGrow: 0,
        flexDirection: 'row',
        //alignItems: 'stretch',
    },
    switchLanguageButton: {
        flex: 1,
        backgroundColor: 'green',
    },
    searchBox: {
        flex: 1,
        height: 40,
        backgroundColor: Color.shallowYellow,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderWidth: 2,
    },
});

export default Search