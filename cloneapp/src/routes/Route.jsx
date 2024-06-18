import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import FullLayout from  '../fullLayout/FullLayout';
import Home from "../fullLayout/FullLayout/Home/Home";


const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path="/" element={<FullLayout />} >
     <Route index element={<Home/>} />
     </Route>
    
    </>
  )
);

export default routes;
