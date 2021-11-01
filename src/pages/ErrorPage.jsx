import React from "react";

class ErrorPage extends React.Component {
    render() {
        return (<div className="container-fluid animated fadeIn">
            <div className="row mx-0 w-100">
                <div className="col-12 d-flex-justify-content-center">
                    <h4> Page Not Found</h4>
                </div>
            </div>
        </div>)
    }
}

export default ErrorPage;