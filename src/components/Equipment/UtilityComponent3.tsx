import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { getActivities, getEquipment, updateEquipmentInDatabase } from "../../service/apiFacade";
import { EquipmentDto } from "./EquipmentDto";
import { Activity } from "../../service/apiFacade";

export interface Equipment {
    id: number;
    name: string;
    totalUnits: number;
    activityName: string;
    defectiveUnits: number;
    activityId: number;
    status: boolean;
    // Add other properties as needed
}

export default function UtilityComponent3() {
    const [activity, setActivity] = useState("");
    const [utilityType, setUtilityType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [activities, setActivities] = useState<Activity[]>([]);
    const [equipment, setEquipment] = useState<Equipment[]>([]);
    const [filteredEquipment, setFilteredEquipment] = useState<Equipment[]>([]);
    const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null); // State to hold selected equipment
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            const activitiesData = await getActivities();
            const equipmentData = await getEquipment();
            setActivities(activitiesData);
            setEquipment(equipmentData);
        }
        fetchData();
    }, []);

    const showErrorDialog = (message: string) => {
        setErrorMessage(message);
        setOpenDialog(true);
    };

    const handleActivityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedActivity = event.target.value;
        setActivity(selectedActivity);
        const filteredEquipment = equipment.filter((item) => item.activityName === selectedActivity);
        setFilteredEquipment(filteredEquipment);
        setUtilityType("");
    };

    const handleUtilityTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setUtilityType(event.target.value);
        // Find the selected equipment from the equipment list based on the utility type
        const selected = equipment.find((item) => item.name === event.target.value);
        setSelectedEquipment(selected || null); // Update selected equipment state
    };

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(event.target.value);
    };

    const handleSend = async () => {
        if (!selectedEquipment) {
            console.error("No equipment selected");
            return;
        }

        const updatedDefectiveUnits = selectedEquipment.defectiveUnits + parseInt(quantity);

        if (updatedDefectiveUnits > selectedEquipment.totalUnits) {
            showErrorDialog(`Antal er højere end samlede antal ${selectedEquipment.name}`);
            return;
        }

        const updatedEquipment: EquipmentDto = {
            id: selectedEquipment.id,
            name: selectedEquipment.name,
            status: selectedEquipment.status,
            totalUnits: selectedEquipment.totalUnits,
            defectiveUnits: updatedDefectiveUnits,
            activityId: selectedEquipment.activityId,
            activityName: selectedEquipment.activityName,
            activity: { id: selectedEquipment.activityId },
        };

        console.log("Updated equipment:", updatedEquipment);

        try {
            const updatedEquipmentData = await updateEquipmentInDatabase(selectedEquipment.id, updatedEquipment);
            console.log("Equipment updated successfully:", updatedEquipmentData);
            // Optionally, you can show a success message to the user
        } catch (error) {
            console.error("Failed to update equipment:", error);
            // Handle the error appropriately, maybe show a message to the user
        }
    };

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan={3}>Rapporter Ødelagt Udstyr</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <select
                                value={activity}
                                onChange={handleActivityChange}
                                className="form-control"
                                style={{ fontSize: "0.8rem" }}
                            >
                                <option value="">Vælg Aktivitet</option>
                                {activities.map((activity, index) => (
                                    <option key={index} value={activity.activityName}>
                                        {activity.activityName}
                                    </option>
                                ))}
                            </select>
                        </td>
                        <td>
                            <select
                                value={utilityType}
                                onChange={handleUtilityTypeChange}
                                className="form-control"
                                style={{ fontSize: "0.8rem" }}
                            >
                                <option value="">Vælg Udstyr</option>
                                {filteredEquipment.map((item, index) => (
                                    <option key={index} value={item.name}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </td>
                        <td>
                            <input
                                type="text"
                                value={quantity}
                                onChange={handleQuantityChange}
                                className="form-control"
                                style={{ fontSize: "0.8rem" }}
                                placeholder="Antal"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className="btn btn-dark" style={{ fontSize: "0.8rem" }} onClick={handleSend}>
                Send
            </button>
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Fejl</DialogTitle>
                <DialogContent>
                    <DialogContentText>{errorMessage}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
