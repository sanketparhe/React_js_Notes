// import "./App.css";
 

// import { useState } from "react";
 
 
// mport ItemCreation from "./components/testfile/ItemCreation";
// import FormListing from "./components/form/FormListing";
// import Stage  from "./components/comman/new.js/Stage";
// import MyContext from "./components/contexapi/MyContext";
// import { NewContext } from "./components/contexapi/NewContext";
 import StepperEx from "./components/contexapi/StepperEx";

function App() {
  // const[text,setText]=useState("")
  return (
    <div >


{/* <NewContext.Provider value={{text, setText}} >
        {text}
        <MyContext/> */}

       <StepperEx/> 

      {/* </NewContext.Provider> */}
      {/* export  */}
      {/* <Navbar />
      <HomePage />  */}
      {/* <ItemCreation /> */}
      {/* <HookFormExample /> */}
      {/* <FormListing /> */}
      {/* <Form /> */}
      {/* <Stage/> */}
       
    </div >
  );
}

export default App;