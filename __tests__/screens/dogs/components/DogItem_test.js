/**
 * @format
 */

 import 'react-native';
 import React from 'react';
import DogItem from "../../../../src/screens/dogs/components/DogItem"
 
 
 import renderer from 'react-test-renderer';
 const nav= {navigation:{navigate: jest.fn()
}}
 const dog = {Name:"tommy",Color:"Black",Breed:"Bulldog",Age:33, id:1};
 it('renders correctly', () => {
   renderer.create(<DogItem dog={dog} navigation={nav} />);
 });
 