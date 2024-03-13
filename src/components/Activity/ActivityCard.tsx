interface ActivityCardProps {
    imageSrc: string;
    title: string;
    description: string;
    ageLimit: number;
    participantLimit: number;
}

export default function ActivityCard({ imageSrc, title, description, ageLimit, participantLimit }: ActivityCardProps) {
    return (
        <>
            <div className="card">
                <h3>Hello</h3>
            </div>
        </>
    );
}
