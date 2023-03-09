import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CatList from '../components/CatList.js';

function CatPage({ setCatForEditing }) {
    // Use the Navigate for redirection.
    const redirect = useNavigate();

    // Use state to bring in the data.
    const [cats, setCats] = useState([]);

    // RETRIEVE the entire list of movies.
    const loadCats = async () => {
        const response = await fetch('/cats');
        const cats = await response.json();
        setCats(cats);
    }


    // UPDATE a single movie.
    const onEditCat = async cat => {
        setCatForEditing(cat);
        redirect("/update");
    }


    // DELETE a single movie.
    const onDeleteCat = async _id => {
        const response = await fetch(`/cats/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/cats');
            const cats = await getResponse.json();
            setCats(cats);
        } else {
            console.error(`Failed to delete movie with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the movies, executes on initial mount.
    useEffect(() => {
        loadCats();
    }, []);

    // DISPLAY the movies.
    return (
        <>
            <h2>List of Cats</h2>
            <p>Paragraph about this page.</p>
            <CatList
                cats={cats}
                onEdit={onEditCat}
                onDelete={onDeleteCat}
            />
        </>
    );
}

export default CatPage;