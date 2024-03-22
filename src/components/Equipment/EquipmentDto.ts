export interface EquipmentDto {
    id: number;
    name: string;
    status: boolean;
    totalUnits: number;
    defectiveUnits: number;
    activityId: number;
    activityName: string;
}