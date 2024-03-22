// Activity.tsx

import { useState, useEffect } from "react";
import ActivityCard from "../components/Activity/ActivityCard";
import { useParams } from "react-router-dom";
import { getActivities } from "../service/apiFacade";

interface ActivityCardProps {
    id: number;
    image: string;
    activityName: string;
    description: string;
    ageLimit: number;
    participantLimit: number;
}

export default function Activity() {
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const scrollToElement = () => {
                const element = document.getElementById(`activity-card-${id}`);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            };

            // Delay scrolling to ensure elements are rendered
            setTimeout(scrollToElement, 200);
        }
    }, [id]);

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
                    {activityCards.map((card: ActivityCardProps) => (
                        <ActivityCard
                            key={card.id}
                            id={card.id}
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
