import {Equipment} from "../pages/UtilityComponent3";

const endpoint = "http://127.0.0.1:8080";

async function getEquipment() {
  const response = await fetch(`${endpoint}/api/equipment`);
  return response.json();
}

async function getActivities() {
  const response = await fetch(`${endpoint}/api/activities`);
  return response.json();
}

async function updateEquipmentInDatabase(id: number, updatedEquipment: Equipment) {
    const url = `${endpoint}/api/equipment/${id}`;
    
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEquipment),
        });

        if (!response.ok) {
            throw new Error('Failed to update equipment');
        }

        const updatedEquipmentData = await response.json();
        return updatedEquipmentData;
    } catch (error) {
        console.error('Error updating equipment:', error);
        // Handle error appropriately
        return null;
    }
}

export { getEquipment, getActivities, updateEquipmentInDatabase };
