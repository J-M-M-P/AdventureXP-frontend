import React, { useState, useEffect } from "react";

export default function ComponentOne() {
    // State til at gemme de hentede data
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null); // Til at gemme det valgte objekt

    // Funktion til at hente data fra backend
    const fetchData = async () => {
        try {
            // Hent data fra backend (erstat URL'en med din backend-endpoint)
            const response = await fetch("http://localhost:8080/api/equipment");
            const data = await response.json();
            console.log(data);

            // Opdater state med de hentede data
            setOptions(data);
        } catch (error) {
            console.error("Fejl ved hentning af data:", error);
        }
    };

    // Kald fetchData funktionen når komponenten indlæses
    useEffect(() => {
        fetchData();
    }, []);

    // Funktion til at håndtere ændringen i dropdown'en
    const handleDropdownChange = (event) => {
        const selectedIndex = event.target.selectedIndex;
        // console.log("selectedIndex", selectedIndex);
        // console.log("options", selectedOption);
        setSelectedOption(options[selectedIndex - 1]); // -1 fordi den første option er en placeholder
    };

    return (
        <>
            <p>Component 1</p>
            <select className="form-select" aria-label="Default select example" onChange={handleDropdownChange}>
                <option value="">Vælg en mulighed</option>
                {/* Brug map til at oprette options fra dataen */}
                {options.map(
                    (
                        option: { value: string; label: string; activity: object; activityName: string },
                        index: number
                    ) => (
                        <option key={index} value={option.value}>
                            {option.activity.activityName}
                        </option>
                    )
                )}
            </select>
            {/* Tabel til at vise egenskaberne for det valgte objekt */}
            {selectedOption && (
                <table>
                    <thead>
                        <tr>
                            <th>Udstyr</th>
                            <th>Udstyr i alt</th>
                            <th>Defekt udstyr</th>
                            {/* Tilføj flere kolonner efter behov */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{selectedOption.name}</td>
                            <td>{selectedOption.totalUnits}</td>
                            <td>{selectedOption.defectiveUnits}</td>
                            {/* Insert more properties as needed */}
                        </tr>
                    </tbody>
                </table>
            )}
        </>
    );
}
