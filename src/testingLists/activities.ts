import { getActivities } from "../service/apiFacade";

// Assuming getActivities returns an array of activities
const activities = await getActivities();

const activityCards = activities.map(activity => ({
    id: activity.id,
    imageSrc: activity.image,
    activityName: activity.activityName,
    description: activity.description,
    ageLimit: activity.ageLimit,
    participantLimit: activity.participantLimit,
}));

export default activityCards;