import { useNavigate } from "react-router-dom";

interface ActivityCardProps {
    id: number;
    image: string;
    activityName: string;
    description: string;
    ageLimit: number;
    participantLimit: number;
}

export default function ActivityCard({
    id,
    image,
    activityName,
    description,
    ageLimit,
    participantLimit,
}: ActivityCardProps) {
    const navigate = useNavigate();

    const handleCompanyClick = () => {
        console.log("Book erhverv " + activityName);
        navigate("/reservation", { state: { reservationType: "Erhverv", activityName, id } });
    };

    const handlePrivateClick = () => {
        console.log("Book privat " + activityName);
        navigate("/reservation", { state: { reservationType: "Privat", activityName, id } });
    };

    return (
        <>
            <div id={`activity-card-${id}`} className="card">
                <div className="row">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid"></img>
                    </div>
                    <div className="col-md-8">
                        <h3>{activityName}</h3>
                        <h3>{description}</h3>
                        <h3>Aldersgrænse: {ageLimit} år</h3>
                        <h3>Max antal deltagere: {participantLimit}</h3>
                        <p>Reservation</p>
                        <button onClick={handleCompanyClick}>Erhverv</button>
                        <button onClick={handlePrivateClick}>Privat</button>
                    </div>
                </div>
            </div>
        </>
    );
}
