import React, { useState, useEffect } from "react";
import { getActivities, getEquipment, updateEquipmentInDatabase } from "../service/apiFacade";

interface Activity {
    activityName: string;
    // Add other properties as needed
}

export interface Equipment {
    id: number;
    name: string;
    activityName: string;
    defectiveUnits: number;
    activityId: number;
    status: boolean
    // Add other properties as needed
}

function Utility() {
    const [activity, setActivity] = useState("");
    const [utilityType, setUtilityType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [activities, setActivities] = useState<Activity[]>([]);
    const [equipment, setEquipment] = useState<Equipment[]>([]);
    const [filteredEquipment, setFilteredEquipment] = useState<Equipment[]>([]);

    useEffect(() => {
        async function fetchData() {
            const activitiesData = await getActivities();
            const equipmentData = await getEquipment();
            setActivities(activitiesData);
            setEquipment(equipmentData);
        }
        fetchData();
    }, []);

    const handleActivityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedActivity = event.target.value;
        setActivity(selectedActivity);
        const filteredEquipment = equipment.filter(item => item.activityName === selectedActivity);
        setFilteredEquipment(filteredEquipment);
        setUtilityType("");
    };

    const handleUtilityTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setUtilityType(event.target.value);
    };

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(event.target.value);
    };

        async function handleSend() {
            // Check if activity and utilityType are selected
            if (!activity || !utilityType || !quantity) {
                console.error('Activity, Utility Type, or Quantity is not selected');
                // Handle the error appropriately, maybe show a message to the user
                return;
            }
        
            // Find the equipment object corresponding to the selected utilityType
            const selectedEquipment = equipment.find(item => item.name === utilityType);
            
            // Check if the selected equipment is found
            if (!selectedEquipment) {
                console.error('Selected equipment not found');
                // Handle the error appropriately, maybe show a message to the user
                return;
            }
        
            // Check if the selected activity matches the activity name associated with the selected equipment
            if (selectedEquipment.activityName !== activity) {
                console.error('Selected activity does not match the activity associated with the selected equipment');
                // Handle the error appropriately, maybe show a message to the user
                return;
            }
        
            // Update the defectiveUnits property of the selected equipment
            const updatedDefectiveUnits = selectedEquipment.defectiveUnits + parseInt(quantity);
        
            // Create an updated equipment object with the new defectiveUnits value
            const updatedEquipment = { ...selectedEquipment, defectiveUnits: updatedDefectiveUnits };
            console.log('Updated equipment:', updatedEquipment);
            // Send a PUT request to update the equipment in the database
            try {
                const updatedEquipmentData = await updateEquipmentInDatabase(selectedEquipment.id, updatedEquipment);
                console.log('Equipment updated successfully:', updatedEquipmentData);
                // Optionally, you can show a success message to the user
            } catch (error) {
                console.error('Failed to update equipment:', error);
                // Handle the error appropriately, maybe show a message to the user
            }
            };

    return (
        <>
            <div className="container">
                <div className="row row-cols-2">
                    <div className="col px-0">
                        <h5>1</h5>
                    </div>
                    <div className="col">
                        <div className="row row-cols-1 row-gap-5">
                            <div className="col px-0">
                                <h5>2</h5>
                            </div>
                            <div className="col px-0">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th colSpan={3}>Report Utility Damage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <select value={activity} onChange={handleActivityChange} className="form-control" style={{ fontSize: '0.8rem' }}>
                                                    <option value="">Select Activity</option>
                                                    {activities.map((activity, index) => (
                                                        <option key={index} value={activity.activityName}>{activity.activityName}</option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td>
                                                <select value={utilityType} onChange={handleUtilityTypeChange} className="form-control" style={{ fontSize: '0.8rem' }}>
                                                    <option value="">Select Utility Type</option>
                                                    {filteredEquipment.map((item, index) => (
                                                        <option key={index} value={item.name}>{item.name}</option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" value={quantity} onChange={handleQuantityChange} className="form-control" style={{ fontSize: '0.8rem' }} placeholder="Quantity" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="btn btn-dark" style={{ fontSize: '0.8rem' }} onClick={handleSend}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Utility;
