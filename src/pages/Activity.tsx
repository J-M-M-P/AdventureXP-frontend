// Activity.tsx

import activityCards from "../testingLists/activities";
import ActivityCard from "../components/Activity/ActivityCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Activity() {
    let { id } = useParams();

    useEffect(() => {
        if (id) {
            const element = document.getElementById(`activity-card-${id}`);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [id]);

    return (
        <>
            <h2 className="text-center">Aktivitet</h2>
            <div className="container-fluid">
                <div className="row row-cols-2 row-gap-5 column-gap-1 justify-content-center">
                    {activityCards.map((card) => (
                        <ActivityCard
                            key={card.id}
                            id={card.id}
                            image={card.image}
                            activityName={card.activityName}
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
