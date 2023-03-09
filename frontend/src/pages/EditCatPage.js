import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const EditCatPage = ({ catForEditing }) => {

    const [name, setName] = useState(catForEditing.name);
    const [age, setAge] = useState(catForEditing.age);
    const [breed, setBreed] = useState(catForEditing.breed);

    const redirect = useNavigate();

    const editCat = async () => {
        const response = await fetch(`/cats/${catForEditing._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: name,
                age: age,
                breed: breed
            }),
            headers: { 'Content-Type': 'application/json', },
        });

        if (response.status === 200) {
            alert(`Document edited.`);
        } else {
            const errMessage = await response.json();
            alert(`Document not edited. Status: ${response.status}. ${errMessage.Error}`);
        }
        redirect("/");
    }

    return (
        <>
            <article>
                <h2>Edit a cat in the collection</h2>
                <p>Paragraph about this page.</p>
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <fieldset>
                        <legend>What cat are you adding?</legend>
                        <label for="name">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            id="name" />

                        <label for="age">Age</label>
                        <input
                            type="number"
                            value={age}
                            onChange={e => setAge(e.target.value)}
                            id="age" />

                        <label for="breed">Breed</label>
                        <input
                            type="text"
                            value={breed}
                            onChange={e => setBreed(e.target.value)}
                            id="breed" />

                        <label for="submit">
                            <button
                                onClick={editCat}
                                id="submit">
                                Save
                            </button> updates to the cat collection!</label>
                    </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditCatPage;