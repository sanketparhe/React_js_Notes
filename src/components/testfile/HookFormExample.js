import { TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function HookFormExample() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
let firstNameValue = watch("Item Name")
console.log("firstNameValue",firstNameValue);
  useEffect(() => {
    setValue("Item Name", "asdfgh");
  }, []);

  const onSubmit = (dataObj) => {
    console.log("dataObj", dataObj);
  };
  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField name="firstName" {...register("Item Name")}/>

        <button type="submit" className="bg-black text-white p-3 ml-4 rounded">Save</button>
      </form>
    </div>
  );
}

export default HookFormExample;