import { proxy, subscribe } from 'valtio'
import AsyncStorage from '@react-native-async-storage/async-storage';


export const state = proxy(
    {
        dogs: [],
        dogColors: ["Red", "White", "Black", "Orange", "Brown"],
        hydrated: false
    });

export const addDog = (dog) => {
    state.dogs.push(dog);
    toast.show('Dog Added!', 3000);
}

export const updateDog = (dog) => {
    console.log("update dog", dog);
    state.dogs = state.dogs.map(d => d.id == dog.id ? dog : d);
    toast.show('Dog Updated!', 3000);
}
export const removeDog = (dog) => {
    state.dogs = state.dogs.filter(d => d.id != dog.id);
    toast.show('Dog Removed!', 3000);
}
export const setLoading = (loading) => {
    state.loading = loading;
}
export const hydrateState = async () => {
    const storedDogsString = await AsyncStorage.getItem('dogsState');
    if (storedDogsString) {
        state.dogs = JSON.parse(storedDogsString);
    }
    state.hydrated = true;
}

// Suscribe to all state changes
const unsubscribe = subscribe(state, () => AsyncStorage.setItem('dogsState', JSON.stringify(state.dogs)))
// Unsubscribe by calling the result


