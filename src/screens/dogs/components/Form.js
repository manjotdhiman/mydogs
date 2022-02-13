import React from "react";
import { Text, View, TextInput, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Picker } from '@react-native-picker/picker';
import styles from "./../styles";
import { state, addDog } from '../../../models/dogs';
import { useSnapshot } from 'valtio';
import Button from "../../../Components/Button";
export default ({ onSubmit, defaultValues, buttonText }) => {
    const dogColors = useSnapshot(state.dogColors);
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues
    });

    return (<>
        <View style={{ flex: 1 }}>
            <Text style={styles.label}>Name</Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="Name"
            />
            {errors.Name && <Text style={styles.error}>Name is required.</Text>}
            <Text style={styles.label}>Color</Text>
            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Picker
                        style={styles.inputPicker}

                        selectedValue={value}
                        onValueChange={onChange}>
                        {dogColors.map(c => <Picker.Item label={c} value={c} />)}

                    </Picker>
                )}
                name="Color"
            />
            <Text style={styles.label}>Breed</Text>
            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="Breed"
            />
            <Text style={styles.label}>Age</Text>
            <Controller
                control={control}
                rules={{
                    max: 100,
                    min: 1
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value + ""}
                        keyboardType="numeric"
                    />
                )}
                name="Age"
            />
            {errors.Age && <Text style={styles.error}>Age should be between 1-100.</Text>}


        </View>
        <Button onPress={handleSubmit(onSubmit)} title={buttonText} />
    </>
    );
}
