import React from "react";
import css from "./ContactList.module.css";

export default function ContactList ({items}) {
const contacts = items.map(({name, number, id})=>{
    return (
        <tr key = {id}>
            <td>{name}</td>
            <td>{number}</td>
        </tr>
    )
    })
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                </tr>
            </thead>

            <tbody>
                {contacts}
            </tbody>
        </table>
    )
}