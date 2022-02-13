import * as React from 'react';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import styles from '../styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { colors } from '../../../Constants/theme';
import Ionicons from "react-native-vector-icons/Ionicons";
import { removeDog } from '../../../models/dogs';
export default ({ dog, navigation }) => {

    const RightActions = () => (
        <View style={styles.rightContainer}>
            <TouchableOpacity style={styles.rightEdit} onPress={() => navigation.navigate("EditDog", { dog })}>

                <Ionicons size={30} color={colors.textButtonColor} name='ios-arrow-redo-circle' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.right} onPress={() => removeDog(dog)}>

                <Ionicons size={30} color={colors.textButtonColor} name='remove-circle' />
            </TouchableOpacity></View>
    )

    return (
        <GestureHandlerRootView><Swipeable renderRightActions={RightActions}>
            <View style={styles.itemContainer}>
                <Text style={styles.name}>{dog.Name}</Text>
                <View style={styles.detail}>

                    <Text style={styles.color}>Color: {dog.Color}</Text>
                    <Text style={styles.color}>Breed: {dog.Breed}</Text>
                    <Text style={styles.color}>Age: {dog.Age}</Text>
                </View>
            </View></Swipeable></GestureHandlerRootView>
    );

}
