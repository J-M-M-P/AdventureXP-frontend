import UtilityComponent3 from "../pages/UtilityComponent3";


import ComponentOne from "../components/Equipment/ComponentOne";

function Utility() {
    
    return (
        <>
            <div className="container">
                <div className="row row-cols-2">
                    <div className="col px-0">
                        <h5>
                            <ComponentOne />
                        </h5>
                    </div>
                    <div className="col">
                        <div className="row row-cols-1 row-gap-5">
                            <div className="col px-0">
                                <h5>2</h5>
                            </div>
                            <div className="col px-0">
                                {<UtilityComponent3 />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Utility;
