import { useState, useEffect } from "react";
import ActivityCard from "../components/Activity/ActivityCard";
import { getActivities } from "../service/apiFacade";

export default function Activity() {
    const [activityCards, setActivityCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getActivities();
                setActivityCards(data);
            } catch (error) {
                console.error("Error fetching activities:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h2 className="text-center">Aktivitet</h2>
            <div className="container-fluid">
                <div className="row row-cols-2 row-gap-5 column-gap-1 justify-content-center">
                    {activityCards.map((card, index) => (
                        <ActivityCard
                            key={index}
                            image={card.image}
                            activityName={card.activityName} // "title" i stedet for "activityName"
                            description={card.description}
                            ageLimit={card.ageLimit}
                            participantLimit={card.participantLimit}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
