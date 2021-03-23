import React, { useContext } from 'react';
import { StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { Color } from '../../styles/color.js'
import LangContext from '../../utilities/context'

const LangBtn = () => {
    
    const { lang, setLang } = useContext(LangContext);
    const toggleLang = () => { lang === 'T' ? setLang("E") : setLang("T") }

    return (
        <Pressable
            style={styles.langBtnContainer}
            onPress={toggleLang}
        >
            <Text style={styles.Btn}>
                {lang}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    langBtnContainer: {
        flex: 1,
        backgroundColor: Color.yellow,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Btn: {
        fontSize: 50,
        color: Color.blue,
    },
});

export default LangBtn