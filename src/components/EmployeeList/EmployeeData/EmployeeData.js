import React from "react";
import classes from "./EmployeeData.css";

export default function EmployeeData (props){
    return(
        <table className={classes.table}>
            <thead>
                <tr>
                    <th className={classes.th}>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>email</th>
                    <th>phoneNo</th>
                </tr>
            </thead>
            <tbody className={classes.tbody}>
               {
                   props.data.user.map(row => (
                    <tr>
                        <td className={classes.td}>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.age}</td>
                        <td>{row.gender}</td>
                        <td>{row.email}</td>
                        <td>{row.phoneNo}</td>
                    </tr>
                   ))        
               }
            </tbody>
        </table>
    )
}