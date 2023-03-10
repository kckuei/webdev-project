import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { VscGithubAlt } from 'react-icons/vsc';

export const AddCatPage = () => {

    // Use state for saving new cat info.
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [breed, setBreed] = useState('');
    const [portraitUrl, setPortraitUrl] = useState('');
    const [personality, setPersonality] = useState('');
    const [birdCount, setBirdCount] = useState(0);
    const [rodentCount, setRodentCount] = useState(0);

    const redirect = useNavigate();

    // Aggregate the new cat info and POST it to the CREATE route.
    const addCat = async () => {
        const newCat = {
            name,
            age,
            breed,
            portraitUrl,
            personality,
            birdCount,
            rodentCount
        };
        const response = await fetch('/cats', {
            method: 'post',
            body: JSON.stringify(newCat),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.status === 201) {
            alert(`Document added.`);
            redirect("/cats");
        } else {
            alert(`Document not added. Status code = ${response.status}`);
            redirect("/cats");
        }
    };


    return (
        <>
            <article>
                <h2 className="pageTitle">Add Cat  <VscGithubAlt /></h2>
                <p>Add a cat to the collection using the data model <strong>SCHEMA</strong>.</p>
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <fieldset>
                        <legend>What cat are you adding?</legend>
                        <label for="name">Name (Required)</label>
                        <input
                            type="text"
                            placeholder="Name of cat"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            id="name" />

                        <label for="age">Age (Required)</label>
                        <input
                            type="number"
                            value={age}
                            placeholder="Age of cat"
                            onChange={e => setAge(e.target.value)}
                            id="age" />

                        <label for="breed">Breed (Required)</label>
                        <input
                            type="text"
                            placeholder="Breed/type of cat"
                            value={breed}
                            onChange={e => setBreed(e.target.value)}
                            id="breed" />

                        <label for="portrailUrl">Portrail URL</label>
                        <input
                            type="text"
                            placeholder="Portrait url"
                            value={portraitUrl}
                            onChange={e => setPortraitUrl(e.target.value)}
                            id="portrailUrl" />

                        <label for="personality">Personality</label>
                        <textarea
                            type="text"
                            placeholder="Personality of cat"
                            value={personality}
                            onChange={e => setPersonality(e.target.value)}
                            id="personality" />

                        <label for="birdCount">Bird Count</label>
                        <input
                            type="number"
                            placeholder="Bird count"
                            value={birdCount}
                            onChange={e => setBirdCount(e.target.value)}
                            id="birdCount" />

                        <label for="rodentCount">Rodent Count</label>
                        <input
                            type="number"
                            placeholder="Rodent count"
                            value={rodentCount}
                            onChange={e => setRodentCount(e.target.value)}
                            id="rodentCount" />

                        <label for="submit">
                            <button
                                type="submit"
                                onClick={addCat}
                                id="submit"
                                class="submitButton">
                                Add cat
                            </button>
                        </label>

                        <label for="cancel">
                            <button
                                onClick={() => { redirect("/cats") }}
                                id="cancel"
                                class="cancelButton">
                                Cancel
                            </button>
                        </label>
                    </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddCatPage;