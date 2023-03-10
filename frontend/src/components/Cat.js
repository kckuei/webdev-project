import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Cat({ cat, onEdit, onDelete }) {
    return (
        <tr>
            <td><img src={cat.portraitUrl} width="100" alt={cat.name} /></td>
            <td>{cat.name}</td>
            <td>{cat.age}</td>
            <td>{cat.breed}</td>
            <td>{cat.personality}</td>
            <td>{cat.birdCount}</td>
            <td>{cat.rodentCount}</td>
            <td><MdDeleteForever onClick={() => onDelete(cat._id)} /></td>
            <td><MdEdit onClick={() => onEdit(cat)} /></td>
        </tr>
    );
}

export default Cat;