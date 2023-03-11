import React from 'react';
import { Link } from 'react-router-dom';
import Cat from './Cat';

function CatList({ cats, onDelete, onEdit }) {
    return (
        <article>
            <table id="cats" className="customTable">
                <caption>Add and Edit Cats in the Catabase

                    <p><Link to="/cats/create" >Add a Cat</Link></p>
                </caption>
                <thead>
                    <tr>
                        <th>Portait</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Breed</th>
                        <th>Personality</th>
                        <th>Bird Count</th>
                        <th>Rodent Count</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {cats.map((cat, i) =>
                        <Cat
                            cat={cat}
                            key={i}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />)}
                </tbody>
            </table>
        </article>
    );
}

export default CatList;
