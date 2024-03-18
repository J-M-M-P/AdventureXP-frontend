//import images from "./images";
import { getActivities } from "../service/apiFacade";

    const activityCards = await getActivities();

// const activityCards = [
//     {
//         imageSrc: images[0],
//         title: "Activity 1",
//         description: "Description of Activity 1",
//         ageLimit: 12,
//         participantLimit: 10,
//     },
//     {
//         imageSrc: images[1],
//         title: "Activity 2",
//         description: "Description of Activity 2",
//         ageLimit: 12,
//         participantLimit: 15,
//     },
//     {
//         imageSrc: images[2],
//         title: "Activity 3",
//         description: "Description of Activity 3",
//         ageLimit: 15,
//         participantLimit: 6,
//     },
//     {
//         imageSrc: images[4],
//         title: "Activity 4",
//         description: "Description of Activity 4",
//         ageLimit: 15,
//         participantLimit: 20,
//     },
//     {
//         imageSrc: images[0],
//         title: "Activity 5",
//         description: "Description of Activity 5",
//         ageLimit: 18,
//         participantLimit: 20,
//     },
//     {
//         imageSrc: images[3],
//         title: "Activity 6",
//         description: "Description of Activity 6",
//         ageLimit: 21,
//         participantLimit: 12,
//     },
// ];

export default activityCards;
