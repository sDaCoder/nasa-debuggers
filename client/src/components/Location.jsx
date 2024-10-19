import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";

const Location = () => {
  
  const [location, setLocation] = useState(null)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const onSubmit = data => setLocation(data);
  // console.log(location);
  
  const sendResponse = async () => {

    try {
      const response = await fetch('http://localhost:80/get', {
      
        // Adding method type
        method: "POST",
        
        // Adding body or contents to send
        body: JSON.stringify(location),
        
        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      
      if(response.ok){
        const data = await response.json();
        console.log(data);
      }
      else{
        console.log("Something went wrong");
      }
    }
    catch (error) {
      console.error(error);
    }
  }
  

  return (
    <>
      <form className="mt-12 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Enter the state
          </Typography>
          <Input
            type="text"
            placeholder="state"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("state", { required: true })}
          />
        </div>

        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Enter the district
          </Typography>
          <Input
            type="text"
            placeholder="district"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            {...register("district", { required: true })}
          />
        </div>
        <Button onClick={sendResponse} type="submit" fullWidth className="mt-6 py-4">Submit</Button>
      </form>
    </>
  );
};

export default Location;
