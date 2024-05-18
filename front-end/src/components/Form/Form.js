import React, { useRef, useEffect } from "react";
import { toast } from "react-toastify";

import { FormContainer, InputArea, Input, Label, Button } from "./style.js";

const Form = ({ onEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.name.value = onEdit.name;
      user.email.value = onEdit.email;
      user.phone.value = onEdit.phone;
      user.birth_date.value = onEdit.birth_date;
    }
  }, [onEdit]);

  return (
    <FormContainer ref={ref}>
      <InputArea>
        <Label>Name</Label>
        <Input name="name" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Phone</Label>
        <Input name="phone" />
      </InputArea>
      <InputArea>
        <Label>Date of Birth</Label>
        <Input name="birth_date" type="date" />
      </InputArea>

      <Button type="submit">SAVE</Button>
    </FormContainer>
  );
};

export default Form;
