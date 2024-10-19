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
import Location from "./Location";
import Soil from "./Soil";

const Get = () => {
  const [type, setType] = useState("location");
  return (
    <>
      <Card className="w-full max-w-[85vw] container mx-auto shadow-md">
        <CardHeader
          floated={false}
          shadow={false}
          className={`${type === "location" ? "bg-[url('/get1.jpg')]" : "bg-[url('/get3.jpg')]"} bg-no-repeat bg-center bg-cover m-4 grid place-items-center px-4 py-8 text-center h-[280px]`}
        >
          <Typography variant="h2" color="white">
            {type === "location" ? "Find the best crop on your location" : "Find the best crop on your soil"}
          </Typography>
        </CardHeader>

        <CardBody>
          <Tabs value={type} className="overflow-visible">
            <TabsHeader className="capitalize relative z-0 ">
              <Tab value="location" className={`${type === "location" ? "text-deep-orange-900" : ""}`} onClick={() => setType("location")}>
                Best crop on your location
              </Tab>
              <Tab value="soil-image" className={`${type === "soil-image" ? "text-deep-orange-900" : ""}`} onClick={() => setType("soil-image")}>
                Best crop on your soil
              </Tab>
            </TabsHeader>

            <TabsBody>
              {type === "location" ? <Location /> : <Soil />}
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </>
  );
};

export default Get;
