"use client";
import React, { useState } from "react";
import { Input, Button } from "@mui/material";

const InputComp = () => {
  const [emailField, setEmailField] = useState("");
  const submitClicked = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setEmailField("");
    }, 500);
  };
  return (
    <form
      className="flex flex-col items-start h-[100px] justify-evenly"
      onSubmit={submitClicked}
    >
      <label className="font-bold">Get Register For Event</label>
      <Input
        type="email"
        className="h-[50px] w-[200px] mt-[10px] mb-[10px]"
        value={emailField}
        onChange={(e) => setEmailField(e.target.value)}
        id="email"
        placeholder="Please insert your email"
      />
      <Button type="submit" variant="outlined">
        Registered
      </Button>
    </form>
  );
};

export default InputComp;
