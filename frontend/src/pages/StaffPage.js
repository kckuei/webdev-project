import React, { useState, useEffect } from 'react';
import StaffRow from "../components/StaffRow.js"


function Staff() {

    // State variable for results from Random Person API.
    let [results, setResults] = useState([]);

    // Use the useEffect hook to call the API once for initial page load. 
    // We'll use the same random seed for the same staff.
    useEffect(() => {
        const url = 'https://randomuser.me/api/?results=10&seed=727302ead8068e47';
        getData({ target: { id: "browserButton" } }, url);
    }, [])

    // Function for calling the Random Person API and setting the state of the results.
    // Implementation using recommended async await syntax. 
    async function getData(e, url = 'https://randomuser.me/api/?results=10&gender=female') {
        if (e.target.id === "browserButton") {
            // Call random person API through browser.
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setResults(data.results);
            }
            catch (error) {
                console.log(error);
                alert("The API doesn't seem to be unavailable. Try again, later.");
            }
        } else {
            // Otherwise call random person API through server endpoint.
            const response = await fetch("/random");

            if (response.status === 200) {
                // If response status is good, then parse the JSON.
                const stringData = await response.json();
                const data = JSON.parse(stringData);
                console.log(data);
                setResults(data.results);
            } else {
                // Otherwise return an alert same as through the browser.
                console.log("Backend failed to deliver random person API data.")
                alert("The API doesn't seem to be unavailable. Try again, later.");
            }
        }

    }

    return (
        <>
            <h2 className="pageTitle">Staff</h2>
            <p className="pageSubtitle">
                Hire new staff by asynchronously calling the <strong><a href="https://randomuser.me/">Random Person API</a></strong>!
                Two flavors are available. The first button calls the API through the browser. The second button
                sends a request to an endpoint of our backend, which calls the API and forwards the data back to
                the browser. Changes in state trigger page re-renders using the React <strong><code>useState</code></strong>
                and <strong><code>useEffect</code></strong> hooks.
            </p>
            <article>
                <div className="buttonContainer">
                    <button onClick={getData}
                        id="browserButton"
                        className="hireButton">
                        Call Random Person API through <strong className="highlight">Browser</strong>
                    </button>
                    <button onClick={getData}
                        id="serverButton"
                        className="hireButton">
                        Call Random Person API through <strong className="highlight">Server</strong>
                    </button>
                </div>
                <div className="staffTableContainer">
                    <table id="staff" className="customTable">
                        <caption>Staff Directory</caption>
                        <thead id="tableHead">
                            <tr>
                                <td>Portrait</td>
                                <td>Name & Email</td>
                                <td>Telephone</td>
                                <td>City</td>
                            </tr>
                        </thead>
                        <tbody id="tableBody">
                            {results.map((person, i) => <StaffRow person={person} key={i} />)}
                        </tbody>
                    </table>
                </div>
            </article>
        </>
    );
}

export default Staff;