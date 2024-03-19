import { useState } from "react";
import { addReservation } from "../../service/apiFacade";

interface Props {
    currentWeek: number;
    bookedTimes: { reservationWeek: number; reservationTime: string; reservationDay: string }[];
    onReservation: (
        newBookedTimes: { reservationWeek: number; reservationTime: string; reservationDay: string }[]
    ) => void;
}

function ReservationTable({ currentWeek, bookedTimes, onReservation }: Props) {
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedWeek, setSelectedWeek] = useState(0);
    const [name, setName] = useState("");

    const handleReservation = () => {
        if (name !== "") {
            const newReservation = {
                reservationWeek: selectedWeek,
                reservationTime: selectedTime,
                reservationDay: selectedDay,
                // name: name,
                bookedStatus: true,
            };
            // Tilføj reservation til databasen
            addReservation(newReservation)
                .then(() => {
                    // Opdater frontend, hvis reservationen blev tilføjet succesfuldt
                    const newBookedTimes = [
                        ...bookedTimes,
                        {
                            reservationWeek: selectedWeek,
                            reservationTime: selectedTime,
                            reservationDay: selectedDay,
                            name: name,
                        },
                    ];
                    onReservation(newBookedTimes);
                    setName("");
                })
                .catch((error) => {
                    console.error("Error adding reservation:", error);
                    alert("Der skete en fejl under reservationen. Prøv venligst igen.");
                });
        } else {
            alert("Indtast venligst et navn.");
        }

        // if (name !== "") {
        //     const newBookedTimes = [
        //         ...bookedTimes,
        //         {
        //             reservationWeek: selectedWeek,
        //             reservationTime: selectedTime,
        //             reservationDay: selectedDay,
        //             name: name,
        //         },
        //     ];
        //     onReservation(newBookedTimes);
        //     setName("");
        // } else {
        //     alert("Indtast venligst et navn.");
        // }
    };

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
                                booking.reservationWeek === currentWeek &&
                                booking.reservationTime === row.time &&
                                booking.reservationDay === day
                        );
                        return (
                            <td
                                key={dayIndex}
                                onClick={() => {
                                    setSelectedTime(row.time);
                                    setSelectedDay(day);
                                    setSelectedWeek(currentWeek);
                                }}
                            >
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
            <div
                className="modal fade"
                id="reservationModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="reservationModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="reservationModalLabel">
                                Reservation
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p>Tid: {selectedTime}</p>
                            <p>Dag: {selectedDay}</p>
                            <p>Uge: {selectedWeek}</p>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Indtast dit navn"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Luk
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleReservation}
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                Bekræft reservation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReservationTable;
