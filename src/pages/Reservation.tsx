import { useState } from "react";
import ReservationTable from "../components/Reservation/ReservationTable";
import ReservationWeek from "../components/Reservation/ReservationWeek";
import { Reservation as APIReservation, getReservations, getReservationById, addReservation } from "../service/apiFacade";

declare global {
    interface Date {
        getWeek(): number;
    }
}

function Reservation() {
    const [currentWeek, setCurrentWeek] = useState(new Date().getWeek());

    const handlePrevWeek = () => {
        setCurrentWeek(currentWeek - 1);
    };

    const handleNextWeek = () => {
        setCurrentWeek(currentWeek + 1);
    };

    //logging crud operations
    // console.log(getReservations());
    // console.log(getReservationById(2));
    console.log(addReservation({ dateTime: "2025-06-30T13:30:00", bookedStatus: true, companyId: 2, customerId: null}));
    console.log(addReservation({ dateTime: "2025-07-30T16:30:00", bookedStatus: true, companyId: null, customerId: 1}));
    console.log(addReservation({ dateTime: "2025-08-30T19:30:00", bookedStatus: false, companyId: null, customerId: null}));

    return (
        <>
            <div className="container-sm justify-content-center">
                <h1 className="mb-5 text-center">Reservation</h1>
                <ReservationTable
                    currentWeek={currentWeek}
                    bookedTimes={[{ week: 14, time: "19:30 - 21:00", day: "Fredag" }]}
                />
            </div>
            <div className="container-sm justify-content-center">
                <ReservationWeek currentWeek={currentWeek} onPrevWeek={handlePrevWeek} onNextWeek={handleNextWeek} />
            </div>
        </>
    );
}

// Extend the Date object with a method to get the week number
Date.prototype.getWeek = function (): number {
    const d: Date = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    const dayNum: number = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart: Date = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
};

export default Reservation;
