import React from "react";
import { addDog } from '../../models/dogs';
import Form from "./components/Form"
export default ({ navigation }) => {

    const defaultValues = {
        Name: '',
        Color: 'Brown',
        Breed: '',
        Age: ''
    }

    const onSubmit = data => {
        const min = 1;
        const max = 10000000;
        data.id = min + Math.random() * (max - min);

        addDog(data);
        toast.show('Dog Added!', 3000);
        navigation.goBack();
    };

    return (<Form onSubmit={onSubmit} defaultValues={defaultValues} buttonText={"Add"} />

    );
}
