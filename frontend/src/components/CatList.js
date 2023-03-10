import React from 'react';
import Cat from './Cat';

function CatList({ cats, onDelete, onEdit }) {
    return (
        <article>
            <table id="cats">
                <caption>Add and Edit Cats</caption>
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
