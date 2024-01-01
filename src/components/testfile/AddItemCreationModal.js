import ClearIcon from "@mui/icons-material/Clear";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import * as React from "react";
import { useForm } from "react-hook-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};


export default function BasicModal(props) {
  console.log("props.editRow", props.editRow);
  
  const {register, handleSubmit, watch}= useForm();
  let firstNameValue = watch("First Name");
  const onSubmit = (dataObj) => {
    console.log("dataObj", dataObj);
  };
 
  

  return (
    <div>
      <Modal
        open={props.handleOpenModal}
        //
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between">
              <h1 className=" font-bold">User</h1>
              <button
                type="button"
                className="border border-red-600 text-red-600 rounded"
                onClick={() => {
                  props.handleCloseModal();
                  props.setEditRow(null);
                }}
              >
                <ClearIcon />
              </button>
            </div>
            <div className="flex space-x-2 mt-4 ">
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  {...register("Gender ")}
                >
                  <MenuItem value={"Mr"}>Mr</MenuItem>
                  <MenuItem value={"Miss"}> Miss </MenuItem>
                </Select>
              </FormControl>

              <TextField
                fullWidth
                size="small"
                name="First Name"
                label="First Name"
                {...register("First Name")}
              />

              <TextField
                fullWidth
                size="small"
                name="Middle Name"
                label="Middle Name"
                {...register("Middle Name")}
              />
            </div>
            <div className="flex justify-between mt-2">
              <TextField size="small" name="Last Name" label="Last Name" {...register("Last Name")} />

              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  {...register("Select")}
                >
                  <FormLabel className="mt-2 mr-3 ">Gender :</FormLabel>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                    {...register("Select")}

                     
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                    {...register("Select")}
                   
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                    {...register("Select")}
                    
                  />
                </RadioGroup>
              </FormControl>

              <TextField
                size="small"
                name="Mobile Number"
                label="Mobile Number"
                {...register("Mobile Number")}
              />
            </div>

            <div className="mt-3">
              <TextField size="small" name="Age" label="Age"    {...register("Select")}/>
              <Checkbox inputProps={{ "aria-label": "controlled"  }} {...register("Active")}/>
              Active
            </div>

            <div className="flex  justify-end">
              <button
                type="submit"
                className="border bg-blue-600 text-white rounded p-2 w-16"
                          
              >
                Save
              </button>
            </div>
          
          </form>
        </Box>
      </Modal>
    </div>
  );
}
