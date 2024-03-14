import { useState } from "react";
import ReservationTable from "../components/Reservation/ReservationTable";

function Reservation() {
    const [week, setWeek] = useState(1); // Tilstand for at spore den aktuelle uge

    // Funktion til at håndtere klik på knappen for at skifte til forrige uge
    const handlePrevWeek = () => {
        if (week > 1) {
            setWeek(week - 1);
        }
    };

    // Funktion til at håndtere klik på knappen for at skifte til næste uge
    const handleNextWeek = () => {
        // Antag at vi har 52 uger på året
        if (week < 52) {
            setWeek(week + 1);
        }
    };

    return (
        <>
            <div className="container-sm justify-content-center">
                <h1 className="mb-5 text-center">Reservation</h1>
                <ReservationTable week={week} /> {/* Passer ugenummeret til ReservationTable */}
            </div>
            <div className="container-sm">
                <div className="row row-cols-3">
                    <button className="btn btn-outline-secondary" type="button" onClick={handlePrevWeek}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-left"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                            />
                        </svg>
                    </button>
                    <p className="text-center">{`Uge ${week}`}</p>
                    <button className="btn btn-outline-secondary" type="button" onClick={handleNextWeek}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-right"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Reservation;
