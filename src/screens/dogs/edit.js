import React from "react";
import { updateDog } from '../../models/dogs';
import Form from "./components/Form";
export default ({navigation,route})=> {

  const onSubmit = data => {
        data.id = route.params.dog.id;
        updateDog(data);
        toast.show('Dog Updated!',3000);
        navigation.goBack();
};

  return (<Form onSubmit={onSubmit} defaultValues={route.params.dog} buttonText={"Update"} />
  );
}
