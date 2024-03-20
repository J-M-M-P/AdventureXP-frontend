import React, { useState, useEffect } from "react";

interface Equipment {
    name: string;
    totalUnits: number;
    defectiveUnits: number;
    value: string;
    activityName: string;
    label: string;
    // Tilføj flere egenskaber efter behov
}

export default function ComponentOne() {
    // State til at gemme de hentede data
    const [activity, setActivity] = useState<Equipment[]>([]);

    const [selectedOption, setSelectedOption] = useState<Equipment | null>(null); // Til at gemme det valgte objekt

    // Funktion til at hente data fra backend
    const fetchData = async () => {
        try {
            // Hent data fra backend (erstat URL'en med din backend-endpoint)
            const response = await fetch("http://localhost:8080/api/equipment");
            const equipmentData = await response.json();

            // Opdater state med de hentede data
            setActivity(equipmentData);
        } catch (error) {
            console.error("Fejl ved hentning af data:", error);
        }
    };

    // Kald fetchData funktionen når komponenten indlæses
    useEffect(() => {
        fetchData();
    }, []);

    // Funktion til at håndtere ændringen i dropdown'en
    const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = event.target.selectedIndex;
        setSelectedOption(activity[selectedIndex - 1]); // -1 fordi den første option er en placeholder
    };

    return (
        <>
            <p>Aktivitetsudstyr</p>
            <select className="form-select" aria-label="Default select example" onChange={handleDropdownChange}>
                <option value="">Vælg en aktivitet</option>
                {/* Brug map til at oprette options fra dataen */}
                {activity.map(
                    (
                        option: { value: string; label: string; activityName: string; },
                        index: number
                    ) => (
                        <option key={index} value={option.value}>
                            {option.activityName}
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
