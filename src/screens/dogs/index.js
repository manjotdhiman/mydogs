import React, { useEffect } from 'react';
import { Button, View, FlatList, ActivityIndicator, Text } from 'react-native';
import { state, hydrateState } from '../../models/dogs';
import { useSnapshot } from 'valtio';
import DogItem from './components/DogItem';
import FAB from 'react-native-fab';
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from '../../Constants/theme';
import styles from './styles';
export default DogsScreen = ({ navigation }) => {
    const snap = useSnapshot(state);
    console.log("snap:", snap);
    useEffect(() => {
        // Loading stored data from async storage
        hydrateState();
    }, [])
    if (!snap.hydrated) {
        return <View style={{alignItems:"center"}}><ActivityIndicator size={"large"} /></View>
    }
    return (
        <View style={{ flex: 1, alignItems: "stretch", justifyContent: 'center' }}>
            <FlatList
                data={snap.dogs}
                renderItem={({ item }) => <DogItem dog={item} navigation={navigation} />}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => <Text style={{ alignSelf: "center" }}>Swipe left on any item see more options</Text>}
                ListEmptyComponent={() => <View >
                    <Text style={styles.emptyText} >No Dogs added yet. Click on + icon to add  </Text></View>}
            />
            <FAB buttonColor="red" iconTextColor="#FFFFFF"
                onClickAction={() => { navigation.navigate("AddDog") }}
                visible={true} iconTextComponent={<Icon name="add" />} />
        </View>
    );
}
