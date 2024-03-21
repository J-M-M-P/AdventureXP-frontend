import { NavLink } from "react-router-dom";

interface ActivityCardProps {
    id: number;
    imageSrc: string;
    title: string;
    description: string;
}

export default function ActivityCardMini({ id, imageSrc, title, description }: ActivityCardProps) {
    return (
        <>
<NavLink to={`/activity/${id}`} className={"px-0 link-underline link-underline-opacity-0"}>
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={imageSrc}
                                className="img-fluid rounded-start"
                                alt="..."
                                style={{ width: "150px", height: "100%" }}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    );
}
