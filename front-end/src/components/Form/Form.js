import React, { useRef } from "react";

import { FormContainer, InputArea, Input, Label } from "./style.js";

const Form = ({ onEdit }) => {
  const ref = useRef();

  return (
    <>
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
      </FormContainer>
    </>
  );
};

export default Form;
