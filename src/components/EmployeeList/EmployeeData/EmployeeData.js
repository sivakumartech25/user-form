import React from "react";

export default function EmployeeData (props){
    return(
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>email</th>
                    <th>phoneNo</th>
                </tr>
            </thead>
            <tbody>
               {
                   props.data.user.map(row => (
                    <tr>
                        <td>{row.id}</td>
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