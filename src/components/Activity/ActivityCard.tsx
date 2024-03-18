import { useNavigate } from "react-router-dom";


interface ActivityCardProps {
    image: string;
    activityName: string;
    description: string;
    ageLimit: number;
    participantLimit: number;
}

export default function ActivityCard({
    image,
    activityName,
    description,
    ageLimit,
    participantLimit,
}: ActivityCardProps) {
    const navigate = useNavigate();

    const handleCompanyClick = () => {
        console.log("Book erhverv " + activityName);
        navigate("/reservation");
    };

    const handlePrivateClick = () => {
        console.log("Book privat " + activityName);
        navigate("/reservation");
    };

    return (
        <>
            <div className="card">
                <h3>{image}</h3>
                <h3>{activityName}</h3>
                <h3>{description}</h3>
                <h3>Aldersgrænse: {ageLimit} år</h3>
                <h3>Max antal deltagere: {participantLimit}</h3>
                <p>Reservation</p>
                <button onClick={handleCompanyClick}>Erhverv</button>
                <button onClick={handlePrivateClick}>Privat</button>
            </div>
        </>
    );
}
