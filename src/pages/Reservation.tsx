import { useState } from "react";
import ReservationTable from "../components/Reservation/ReservationTable";
import ReservationWeek from "../components/Reservation/ReservationWeek";
import initialBookedTimes from "../testingLists/reservationer";

declare global {
    interface Date {
        getWeek(): number;
    }
}

function Reservation() {
    const [currentWeek, setCurrentWeek] = useState(new Date().getWeek());
    const [bookedTimes, setBookedTimes] = useState<{ week: number; time: string; day: string }[]>(initialBookedTimes);

    const handleReservation = (time: string, day: string) => {
        // Tilføj logikken til at foretage reservationen, f.eks. ved at opdatere bookedTimes-tilstanden
        const newBookedTimes = [...bookedTimes, { week: currentWeek, time, day }];
        setBookedTimes(newBookedTimes);
    };

    const handlePrevWeek = () => {
        setCurrentWeek(currentWeek - 1);
    };

    const handleNextWeek = () => {
        setCurrentWeek(currentWeek + 1);
    };

    return (
        <>
            <div className="container-sm justify-content-center">
                <h1 className="mb-5 text-center">Reservation</h1>
                <ReservationTable currentWeek={currentWeek} bookedTimes={bookedTimes} onCellClick={handleReservation} />
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
