interface Props {
    currentWeek: number;
    bookedTimes: { week: number; time: string; day: string }[];
}

function ReservationTable({ currentWeek, bookedTimes }: Props) {
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

        return weekData.map((row, index) => {
            const bookedDay = bookedTimes.find((booking) => booking.week === currentWeek && booking.time === row.time);

            return (
                <tr key={index}>
                    <td>{row.time}</td>
                    {daysOfWeek.map((day, idx) => (
                        <td key={idx}>{bookedDay && bookedDay.day === day ? "Booked" : "Ledig"}</td>
                    ))}
                </tr>
            );
        });
    };

    return (
        <>
            <table className="table table-dark table-striped table-hover table-bordered text-center">
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
                    {/* Generer rækker med tidsintervaller for den aktuelle uge */}
                    {generateTimeRows()}
                </tbody>
            </table>
        </>
    );
}

export default ReservationTable;
