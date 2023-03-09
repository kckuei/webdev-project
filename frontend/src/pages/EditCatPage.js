import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const EditCatPage = ({ catForEditing }) => {

    // Use state for saving cat edit updates. 
    // Initialize state to the hoisted catForEditing values. 
    // Inputs will be updated on click. 
    const [name, setName] = useState(catForEditing.name);
    const [age, setAge] = useState(catForEditing.age);
    const [breed, setBreed] = useState(catForEditing.breed);
    const [portraitUrl, setPortraitUrl] = useState(catForEditing.portraitUrl);
    const [personality, setPersonality] = useState(catForEditing.personality);
    const [birdCount, setBirdCount] = useState(catForEditing.birdCount);
    const [rodentCount, setRodentCount] = useState(catForEditing.rodentCount);

    const redirect = useNavigate();

    // Aggregates the edited states and PUTS it to the UPDATE route.
    const editCat = async () => {
        const response = await fetch(`/cats/${catForEditing._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: name,
                age: age,
                breed: breed,
                portraitUrl: portraitUrl,
                personality: personality,
                birdCount: setBirdCount,
                rodentCount: rodentCount
            }),
            headers: { 'Content-Type': 'application/json', },
        });

        if (response.status === 200) {
            alert(`Document edited.`);
        } else {
            const errMessage = await response.json();
            alert(`Document not edited. Status: ${response.status}. ${errMessage.Error}`);
        }
        redirect("/cats");
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

                        <label for="portraitUrl">Portrait URL</label>
                        <input
                            type="text"
                            value={portraitUrl}
                            onChange={e => setPortraitUrl(e.target.value)}
                            id="portraitUrl" />

                        <label for="personality">Personality</label>
                        <textarea
                            type="text"
                            value={personality}
                            onChange={e => setPersonality(e.target.value)}
                            id="personality" />

                        <label for="birdCount">Bird Count</label>
                        <input
                            type="number"
                            value={birdCount}
                            onChange={e => setBirdCount(e.target.value)}
                            id="birdCount" />

                        <label for="rodentCount">Rodent Count</label>
                        <input
                            type="number"
                            value={rodentCount}
                            onChange={e => setRodentCount(e.target.value)}
                            id="rodentCount" />

                        <label for="submit">
                            <button
                                onClick={editCat}
                                id="submit">
                                Save
                            </button> updates to the cat collection!</label>

                        <label for="cancel">
                            <button
                                onClick={() => { redirect("/cats") }}
                                id="cancel">
                                Cancel
                            </button> edit.</label>
                    </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditCatPage;