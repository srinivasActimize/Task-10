import { StyleSheet } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
// import colors from "./colors";
import colors from "./Colors";
import { useFonts } from "expo-font";
export const fonts = () => {
    console.log('📝 Loading fonts...');
    const [fontsLoaded] = useFonts({
        'Sen-SemiBold': require('../Theme/Fonts/Sen-SemiBold.ttf'),
        'Sen-Medium': require('../Theme/Fonts/Sen-Medium.ttf'),
        'Sen-Regular': require('../Theme/Fonts/Sen-Regular.ttf'),
    });
    useEffect(() => {
        if (fontsLoaded) {
            console.log('✅ Fonts loaded successfully');
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
 
    return fontsLoaded;
}
export const Theme = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },  
    headings: {
        fontFamily: 'Sen-SemiBold',
        fontSize: 24,
        color: colors.mainTextColor,
    },
    inputText: {
        fontFamily: 'Sen-Regular',
        fontSize: 16,
        color: colors.mainTextColor,
    },
    errorText: {
        fontFamily: 'Sen-Regular',
        fontSize: 12,
        color: colors.danger,
        marginBottom: 8,
        marginLeft: 4,
       
    },
    font12: {
        fontFamily: 'Sen-Regular',
        fontSize: 12,
        color: colors.white,
    },
    font10Regular: {
        fontFamily: 'Sen-Regular',
        fontSize: 10,
        color: colors.white,
    },
    font16Medium: {
        fontFamily: 'Sen-Medium',
        fontSize: 16,
        color: colors.subTextColor,
    },
    font16SemiBold: {
        fontFamily: 'Sen-SemiBold',
        fontSize: 16,
        color: colors.mainTextColor,
    },
    font24SemiBold: {
        fontFamily: 'Sen-SemiBold',
        fontSize: 24,
        color: colors.mainTextColor,
    },
    font15SemiBold: {
        fontFamily: 'Sen-SemiBold',
        fontSize: 15,
        color: colors.mainTextColor,
    },
    font16Regular: {
        fontFamily: 'Sen-Regular',
        fontSize: 16,
        color: colors.mainTextColor,
    },
    font14SemiBold: {
        fontFamily: 'Sen-SemiBold',
        fontSize: 14,
        color: colors.mainTextColor,
    },
    font14Regular: {
        fontFamily: 'Sen-Regular',
        fontSize: 14,
        color: colors.mainTextColor,
        // borderWidth: 1
    },
    font14Medium: {
        fontFamily: 'Sen-Medium',
        fontSize: 14,
        color: colors.mainTextColor,
    },
    font18SemiBold: {
        fontFamily: 'Sen-SemiBold',
        fontSize: 18,
        color: colors.mainTextColor,
    },
    font12SemiBold: {
        fontFamily: 'Sen-SemiBold',
        fontSize: 12,
        color: colors.mainTextColor,
    },
    font12Medium: {
        fontFamily: 'Sen-Medium',
        fontSize: 12,
        color: colors.mainTextColor,
    },
    font20SemiBold: {
        fontFamily: 'Sen-SemiBold',
        fontSize: 20,
        color: colors.mainTextColor,
    },
    font36SemiBold: {
        fontFamily: 'Sen-SemiBold',
        fontSize: 36,
        color: colors.mainTextColor,
    },
    font30SemiBold: {
        fontFamily: 'Sen-SemiBold',
        fontSize: 30,
        color: colors.mainTextColor,
    },
    font32SemiBold: {
        fontFamily: 'Sen-SemiBold',
        fontSize: 32,
        color: colors.mainTextColor,
    },
   
   
   
});