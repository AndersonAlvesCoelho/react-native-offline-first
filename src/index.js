import React, { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import NetInfo from '@react-native-community/netinfo';

import { getRandomPhotos } from "./_store/actions/randomPhotos.action";

export default function Home() {
    const [isOnline, setIsOnline] = useState(true);

    // const dispatch = useDispatch();
    // const { photos, loading, errorList } = useSelector((state) => state.randomPhotos);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            console.log("state ", state)
            setIsOnline(state.isConnected);
        });


        return () => {
            unsubscribe(); // Remova o ouvinte quando o componente for desmontado
        };
    }, []);

    // console.log("photos, loading, errorList ", photos, loading, errorList)


    useEffect(() => {
        // dispatch(getRandomPhotos())
        // if (!randomPhotos.length) {
        //   persistor.persist().then(() => {
        //     if (persistor.getState().randomPhotos.length) {
        //       dispatch(setRandomPhotos(persistor.getState().randomPhotos));
        //     } else {
        //       dispatch(fetchRandomPhotos());
        //     }
        //   });
        // }
    }, []);




    return (
        <View style={styles.container}>
            <Text> {isOnline ? "Usuário Online" : "Usuário Offline"}</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
