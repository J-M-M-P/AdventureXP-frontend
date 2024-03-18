interface Props {
    currentWeek: number;
    bookedTimes: { week: number; time: string; day: string }[];
    onCellClick: (time: string, day: string) => void;
}

function ReservationTable({ currentWeek, bookedTimes, onCellClick }: Props) {
    // Funktion til at generere rækker med tidsintervaller for en given kolonne
    const generateTimeRows = () => {
        const daysOfWeek = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];

        const weekData = [
            { time: "09:00 - 10:30" },
            { time: "10:30 - 12:00" },
            { time: "12:00 - 13:30" },
            { time: "13:30 - 15:00" },
            { time: "15:00 - 16:30" },
            { time: "16:30 - 18:00" },
            { time: "18:00 - 19:30" },
            { time: "19:30 - 21:00" },
        ];

        return weekData.map((row, rowIndex) => {
            return (
                <tr key={rowIndex}>
                    <td>{row.time}</td>
                    {daysOfWeek.map((day, dayIndex) => {
                        const bookedTime = bookedTimes.find(
                            (booking) =>
                                booking.week === currentWeek && booking.time === row.time && booking.day === day
                        );
                        return (
                            <td key={dayIndex} onClick={() => onCellClick(row.time, day)}>
                                {(bookedTime && (
                                    <button
                                        type="button"
                                        className="btn btn-outline-light"
                                        data-bs-toggle="modal"
                                        data-bs-target="#reservationModal"
                                        disabled
                                    >
                                        {bookedTime ? "Booked" : "Ledig"}
                                    </button>
                                )) || (
                                    <button
                                        type="button"
                                        className="btn btn-outline-light"
                                        data-bs-toggle="modal"
                                        data-bs-target="#reservationModal"
                                    >
                                        {bookedTime ? "Booked" : "Ledig"}
                                    </button>
                                )}
                            </td>
                        );
                    })}
                </tr>
            );
        });
    };

    return (
        <>
            <table className="table table-dark table-striped table-bordered text-center">
                <thead>
                    <tr className="align-middle">
                        <th>Timer i uge {currentWeek}</th>
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
                    {/* Generer rækker med tidsintervaller for den aktuelle uge */}
                    {generateTimeRows()}
                </tbody>
            </table>
        </>
    );
}

export default ReservationTable;
