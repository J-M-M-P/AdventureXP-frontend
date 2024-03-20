import { useState, useEffect } from "react";
import ReservationTable from "../components/Reservation/ReservationTable";
import ReservationWeek from "../components/Reservation/ReservationWeek";
import { getReservations, getActivities } from "../service/apiFacade";
import { Activity } from "../service/apiFacade";

declare global {
    interface Date {
        getWeek(): number;
    }
}

interface ActivityProps {
    activityName: string;
}

function Reservation() {
    const [currentWeek, setCurrentWeek] = useState(new Date().getWeek());
    const [activities, setActivities] = useState([]);
    const [activeActivity, setActiveActivity] = useState("");
    const [activityId, setActivityId] = useState<number | undefined>(undefined);
    const [bookedTimes, setBookedTimes] = useState<
        { reservationWeek: number; reservationTime: string; reservationDay: string }[]
    >([]);

    // ====================== \\
    // ===== ACTIVITIES ===== \\
    // ====================== \\

    // Fetch activities from the database when the component mounts
    useEffect(() => {
        async function fetchActivities() {
            try {
                const data = await getActivities();
                setActivities(data);
            } catch (error) {
                console.error("Error fetching activities:", error);
            }
        }
        fetchActivities();
    }, []);

    const handleActivityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedActivity = event.target.value;
        setActiveActivity(selectedActivity);
        activities.find((item: Activity) => {
            if (item.activityName === selectedActivity) {
                setActivityId(item.id || undefined);
                // console.log(item.id);
                // console.log(item.activityName);
            }
        });
    };

    // ======================= \\
    // ===== RESERVATION ===== \\
    // ======================= \\

    // Fetch reservations from the database when the component mounts
    useEffect(() => {
        // Call getReservations() when the component mounts
        async function fetchReservations() {
            try {
                const reservations = await getReservations();
                setBookedTimes(reservations);
            } catch (error) {
                console.error("Error fetching reservations:", error);
            }
        }
        fetchReservations();
    }, []);

    const handleReservation = (
        newBookedTimes: { reservationWeek: number; reservationTime: string; reservationDay: string }[]
    ) => {
        setBookedTimes(newBookedTimes);
        console.log("Reservation confirmed!");
        console.log(newBookedTimes);
    };

    // =========================== \\
    // ===== WEEK NAVIGATION ===== \\
    // =========================== \\

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
                <select
                    name="changeActivity"
                    id="changeActivity"
                    onChange={handleActivityChange}
                    className="form-select mx-auto mb-5"
                    aria-label="Default select example"
                    style={{ width: "150px" }}
                >
                    <option defaultChecked>Vælg aktivitet</option>
                    {activities.map((activity: ActivityProps) => (
                        <option key={activity.activityName} value={activity.activityName}>
                            {activity.activityName}
                        </option>
                    ))}
                </select>
                <ReservationTable
                    currentWeek={currentWeek}
                    bookedTimes={bookedTimes}
                    onReservation={handleReservation}
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
