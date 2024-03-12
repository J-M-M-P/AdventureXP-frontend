import ActivityCard from "../components/ActivityCard";
import RotatingImage from "../components/ImageRotation";
import images from "../components/images";

export default function Home() {
    return (
        <>
            <div className="container ">
                <h2 className="text-center">AdventureXP - Hvor hvert øjeblik er et eventyr</h2>
                <div className="card mb 3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <RotatingImage />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">AdventureXP</h5>
                                <p className="card-text">
                                    AdventureXP er en virksomhed, der tilbyder en bred vifte af aktiviteter og
                                    oplevelser. Vi har alt fra paintball og lasergame til escape rooms og
                                    teambuilding-arrangementer. Vi har noget for enhver smag, og vi er sikre på, at vi
                                    kan give dig og dine venner en oplevelse, I sent vil glemme.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="row row-cols-3">
                    {activityCards.map((card, index) => (
                        <ActivityCard key={index} imageSrc={card.imageSrc} title={card.title} text={card.text} />
                    ))}
                </div>
            </div>
        </>
    );
}
const activityCards = [
    {
        imageSrc: images[0],
        title: "Activity 1",
        text: "Description of Activity 1",
    },
    {
        imageSrc: images[1],
        title: "Activity 2",
        text: "Description of Activity 2",
    },
    {
        imageSrc: images[2],
        title: "Activity 3",
        text: "Description of Activity 3",
    },
    {
        imageSrc: images[4],
        title: "Activity 4",
        text: "Description of Activity 4",
    },
    {
        imageSrc: images[0],
        title: "Activity 5",
        text: "Description of Activity 5",
    },
    {
        imageSrc: images[3],
        title: "Activity 6",
        text: "Description of Activity 6",
    },
];
