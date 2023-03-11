import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CatList from '../components/CatList.js';

function CatPage({ setCatForEditing }) {
    // Use the Navigate for redirection.
    const redirect = useNavigate();

    // Use state to bring in the data.
    const [cats, setCats] = useState([]);

    // RETRIEVE the entire list of cats.
    const loadCats = async () => {
        const response = await fetch('/cats');
        const cats = await response.json();
        // console.log(cats)
        setCats(cats);
    }

    // UPDATE a single cat.
    const onEditCat = async cat => {
        setCatForEditing(cat);
        redirect("/cats/update");
    }

    // DELETE a single cat.
    const onDeleteCat = async _id => {
        const response = await fetch(`/cats/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/cats');
            const cats = await getResponse.json();
            setCats(cats);
            alert(`Deleted cat. Id: ${_id}`);
        } else {
            console.error(`Failed to delete movie with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the cats, executes on initial mount.
    useEffect(() => {
        loadCats();
    }, []);

    // DISPLAY the cats.
    return (
        <>
            <h2 className="pageTitle">Cats</h2>
            <p className="pageSubtitle">
                Perform <strong>CRUD</strong> operations by making asynchronous
                calls to the endpoints of our <strong>REST</strong> API.
            </p>
            <CatList
                cats={cats}
                onEdit={onEditCat}
                onDelete={onDeleteCat}
            />
        </>
    );
}

export default CatPage;