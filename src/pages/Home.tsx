import RotatingImage from "../components/ImageRotation";

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
            <div className="container"></div>
        </>
    );
}
