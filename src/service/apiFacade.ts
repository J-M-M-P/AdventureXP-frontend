import { Equipment } from "../components/Equipment/UtilityComponent3";
import { makeOptions, handleHttpErrors } from "./fetchUtils";

const endpoint = "http://127.0.0.1:8080";

// ----- INTERFACES ----- \\
interface Activity {
    id: number | null;
    activityName: string;
    ageLimit: number | null;
    participantLimit: number | null;
    description: string;
    image: string;
    reservations: Reservation[];
}

interface Reservation {
    id?: number | null;
    dateTime: string;
    bookedStatus: boolean;
    companyId?: number | null;
    customerId?: number | null;
}

let reservations: Array<Reservation> = [];

// ----- ACTIVITIES ----- \\
async function getActivities() {
    const response = await fetch(`${endpoint}/api/activities`);
    return response.json();
}

// ----- RESERVATIONS ----- \\
async function getReservations() {
    const response = await fetch(`${endpoint}/api/reservations`).then(handleHttpErrors);
    reservations = [...response];
    console.log(reservations);
    return reservations;
}

async function getReservationById(id: number){
    const response = await fetch(`${endpoint}/api/reservations/${id}`).then(handleHttpErrors);
    console.log(response);
    return response.json();
}

async function addReservation(reservation: Reservation){
    const options = makeOptions("POST", reservation);
    const response = await fetch(`${endpoint}/api/reservations`, options).then(handleHttpErrors);
    console.log(response);
    return response.json();
}

// ----- EQUIPMENT ----- \\
async function getEquipment() {
    const response = await fetch(`${endpoint}/api/equipment`);
    return response.json();
}

async function updateEquipmentInDatabase(id: number, updatedEquipment: Equipment) {
    const url = `${endpoint}/api/equipment/${id}`;

    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedEquipment),
        });

        if (!response.ok) {
            throw new Error("Failed to update equipment");
        }
        console.log(response);

        const updatedEquipmentData = await response.json();
        return updatedEquipmentData;
    } catch (error) {
        console.error("Error updating equipment:", error);
        // Handle error appropriately
        return null;
    }
}

// ----- EMPLOYEES ----- \\
//get by id

// ----- EXPORTS ----- \\
export type { Activity, Reservation };
export { getActivities, getReservations, getReservationById, addReservation, getEquipment, updateEquipmentInDatabase };
