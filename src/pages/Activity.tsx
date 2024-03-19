import activityCards from "../testingLists/activities";
import ActivityCard from "../components/Activity/ActivityCard";

export default function Activity() {
    return (
        <>
            <h2 className="text-center">Aktivitet</h2>
            <div className="container-fluid">
                <div className="row row-cols-2 row-gap-5 column-gap-1 justify-content-center">
                    {activityCards.map((card, index) => (
                        <ActivityCard
                            key={index}
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
