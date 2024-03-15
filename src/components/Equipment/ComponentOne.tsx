import React, { useState, useEffect } from "react";

export default function ComponentOne() {
    // State til at gemme de hentede data
    const [options, setOptions] = useState([]);

    // Funktion til at hente data fra backend
    const fetchData = async () => {
        try {
            // Hent data fra backend (erstat URL'en med din backend-endpoint)
            const response = await fetch("http://localhost:8080/api/activities");
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

    return (
        <>
            <p>Component 1</p>
            <select className="form-select" aria-label="Default select example">
                <option value="">
                    Vælg en mulighed
                </option>
                {/* Brug map til at oprette options fra dataen */}
                {options.map((option: { value: string, label: string, activityName: string }, index: number) => (   
                    <option key={index} value={option.value}>
                        {option.activityName}
                    </option>
                ))}
            </select>
        </>
    );
}
