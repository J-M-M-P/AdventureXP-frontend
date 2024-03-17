interface Props {
    currentWeek: number;
}

function ReservationTable({ currentWeek }: Props) {
    // Funktion til at generere rækker med tidsintervaller for en given kolonne
    const generateTimeRows = () => {
        // Skift denne del ud med din logik til at hente data for den givne uge
        const weekData = [
            {
                week: currentWeek,
                time: "09:00 - 10:30",
                Monday: "Ledig",
                Tuesday: "Ledig",
                Wednesday: "Ledig",
                Thursday: "Ledig",
                Friday: "Ledig",
                Saturday: "Ledig",
                Sunday: "Ledig",
            },
            {
                week: currentWeek,
                time: "10:30 - 12:00",
                Monday: "Ledig",
                Tuesday: "Ledig",
                Wednesday: "Ledig",
                Thursday: "Ledig",
                Friday: "Ledig",
                Saturday: "Ledig",
                Sunday: "Ledig",
            },
            {
                week: currentWeek,
                time: "12:00 - 13:30",
                Monday: "Ledig",
                Tuesday: "Ledig",
                Wednesday: "Ledig",
                Thursday: "Ledig",
                Friday: "Ledig",
                Saturday: "Ledig",
                Sunday: "Ledig",
            },
            {
                week: currentWeek,
                time: "13:30 - 15:00",
                Monday: "Ledig",
                Tuesday: "Ledig",
                Wednesday: "Ledig",
                Thursday: "Ledig",
                Friday: "Ledig",
                Saturday: "Ledig",
                Sunday: "Ledig",
            },
            {
                week: currentWeek,
                time: "15:00 - 16:30",
                Monday: "Ledig",
                Tuesday: "Ledig",
                Wednesday: "Ledig",
                Thursday: "Ledig",
                Friday: "Ledig",
                Saturday: "Ledig",
                Sunday: "Ledig",
            },
            {
                week: currentWeek,
                time: "16:30 - 18:00",
                Monday: "Ledig",
                Tuesday: "Ledig",
                Wednesday: "Ledig",
                Thursday: "Ledig",
                Friday: "Ledig",
                Saturday: "Ledig",
                Sunday: "Ledig",
            },
            {
                week: currentWeek,
                time: "18:00 - 19:30",
                Monday: "Ledig",
                Tuesday: "Ledig",
                Wednesday: "Ledig",
                Thursday: "Ledig",
                Friday: "Ledig",
                Saturday: "Ledig",
                Sunday: "Ledig",
            },
            {
                week: currentWeek,
                time: "19:30 - 21:00",
                Monday: "Ledig",
                Tuesday: "Ledig",
                Wednesday: "Ledig",
                Thursday: "Ledig",
                Friday: "Ledig",
                Saturday: "Ledig",
                Sunday: "Ledig",
            },
        ];

        return weekData.map((row, index) => {
            // console.log(row.week);
            // console.log(index);
            return (
                <tr key={index}>
                    <td>{row.time}</td>
                    <td>{row.Monday}</td>
                    <td>{row.Tuesday}</td>
                    <td>{row.Wednesday}</td>
                    <td>{row.Thursday}</td>
                    <td>{row.Friday}</td>
                    <td>{row.Saturday}</td>
                    <td>{row.Sunday}</td>
                </tr>
            );
        });
    };

    return (
        <>
            <table className="table table-dark table-striped table-hover table-bordered text-center">
                <thead>
                    <tr className="align-middle">
                        <th>Tider for uge: {currentWeek}</th>
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
