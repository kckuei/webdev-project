import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const AddCatPage = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [breed, setBreed] = useState('');

    const redirect = useNavigate();

    const addCat = async () => {
        const newCat = { name, age, breed };
        const response = await fetch('/cats', {
            method: 'post',
            body: JSON.stringify(newCat),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.status === 201) {
            alert(`Document added.`);
            redirect("/");
        } else {
            alert(`Document not added. Status code = ${response.status}`);
            redirect("/");
        }
    };


    return (
        <>
            <article>
                <h2>Add a cat to the collection</h2>
                <p>Paragraph about this page.</p>
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <fieldset>
                        <legend>What cat are you adding?</legend>
                        <label for="name">Name</label>
                        <input
                            type="text"
                            placeholder="Name of cat"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            id="name" />

                        <label for="age">Age</label>
                        <input
                            type="number"
                            value={age}
                            placeholder="Age of cat"
                            onChange={e => setAge(e.target.value)}
                            id="age" />

                        <label for="breed">Breed</label>
                        <input
                            type="text"
                            placeholder="Breed/type of cat"
                            value={breed}
                            onChange={e => setBreed(e.target.value)}
                            id="breed" />

                        <label for="submit">
                            <button
                                type="submit"
                                onClick={addCat}
                                id="submit">
                                Add
                            </button> to the cat collection!</label>
                    </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddCatPage;