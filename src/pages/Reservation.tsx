import ReservationTable from "../components/Reservation/ReservationTable";
import ReservationWeek from "../components/Reservation/ReservationWeek";

function Reservation() {
    return (
        <>
            <div className="container-sm justify-content-center">
                <h1 className="mb-5 text-center">Reservation</h1>
                <ReservationTable />
            </div>
            <div className="container-sm justify-content-center">
                <ReservationWeek />
            </div>
        </>
    );
}

export default Reservation;
