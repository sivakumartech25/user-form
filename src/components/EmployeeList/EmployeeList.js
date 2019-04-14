import React from "react";
import Data from "../../Data/EmployeeList.json";
import EmployeeData from "./EmployeeData/EmployeeData";

export default function EmployeeList(){
    return(
        <div>
            <EmployeeData data={Data}/>
        </div>
    )
}