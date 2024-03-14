function ReservationTable() {
    // Funktion til at generere rækker med tidsintervaller for en given kolonne
    const generateTimeRows = () => {
        const rows = [];
        let startTime = 9; // Initialize the start time to 9

        // Loop gennem timer fra 9 til 21
        for (let hour = 9; hour <= 21; hour++) {
            // Hvis timen er ulige, tilføj en række
            if (hour % 2 !== 0) {
                const startHour = Math.floor(startTime); // Få hele timen
                const startMinute = (startTime % 1) * 60; // Få resten af divisionen i minutter

                // Formater starttid som en streng
                const startTimeString =
                    startHour < 10
                        ? `0${startHour}:${startMinute === 0 ? "00" : startMinute}`
                        : `${startHour}:${startMinute === 0 ? "00" : startMinute}`;

                // Beregn sluttid
                const endHour = Math.floor(startTime + 1.5); // 1.5 timer senere
                const endMinute = ((startTime + 1.5) % 1) * 60; // Få resten af divisionen i minutter

                // Formater sluttid som en streng
                const endTimeString =
                    endHour < 10
                        ? `0${endHour}:${endMinute === 0 ? "00" : endMinute}`
                        : `${endHour}:${endMinute === 0 ? "00" : endMinute}`;

                rows.push(
                    <tr key={hour}>
                        <td>{`${startTimeString} - ${endTimeString}`}</td>
                        {/* Tilføj celler for hver dag i ugen baseret på columnCount */}
                        {Array.from({ length: 7 }, (_, index) => (
                            <td key={index}></td>
                        ))}
                    </tr>
                );
                startTime += 1.5; // Increment the start time by 1.5 hours
            }
        }
        return rows;
    };

    return (
        <>
            <table className="table table-dark table-striped table-hover table-bordered  text-center">
                <thead>
                    <tr className="align-middle">
                        <th>Time</th>
                        <th>Mandag</th>
                        <th>Tirsdag</th>
                        <th>Onsdag</th>
                        <th>Torsdag</th>
                        <th>Fredag</th>
                        <th>Lørdag</th>
                        <th>Søndag</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Generer rækker med tidsintervaller for hver kolonne */}
                    {generateTimeRows()}
                </tbody>
            </table>
        </>
    );
}

export default ReservationTable;
