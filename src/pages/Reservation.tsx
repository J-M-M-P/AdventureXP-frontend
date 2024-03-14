function Reservation() {
    // Funktion til at generere rækker med tidsintervaller for en given kolonne
    const generateTimeRows = () => {
        const rows = [];
        // Loop gennem timer fra 9 til 21
        for (let hour = 9; hour <= 21; hour++) {
            // Hvis timen er ulige, tilføj en række
            if (hour % 2 !== 0) {
                const timeString = hour < 10 ? `0${hour}:00` : `${hour}:00`;
                rows.push(
                    <tr key={hour}>
                        <td>{timeString}</td>
                        {/* Tilføj celler for hver dag i ugen baseret på columnCount */}
                        {Array.from({ length: 7 }, (_, index) => (
                            <td key={index}></td>
                        ))}
                    </tr>
                );
            }
        }
        return rows;
    };

    return (
        <div className="container-xl">
            <h1>Reservation</h1>
            <table className="table table-dark table-striped table-hover table-bordered">
                <thead>
                    <tr>
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
        </div>
    );
}

export default Reservation;
