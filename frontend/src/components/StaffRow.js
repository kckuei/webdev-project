import React from 'react';


function StaffRow({ person }) {
    return (
        <tr>
            <td>
                <img src={person.picture.medium}
                    width="100"
                    className="portrait"
                    alt={`${person.name.first} ${person.name.last}`}
                />
            </td>
            <td>
                <div>
                    <h3 className="staffName">{person.name.first} {person.name.last}</h3>
                </div>
                <div>{person.gender.charAt(0).toUpperCase() + person.gender.slice(1)}, {person.dob.age}</div>
                <div>{person.email}</div>
                <div>@{person.login.username}</div>
            </td>
            <td>
                <div>Phone: {person.phone}</div>
                <div>Cell: {person.cell}</div>
            </td>
            <td>{person.location.city}, {person.location.country}</td>
        </tr>
    );

}

export default StaffRow;