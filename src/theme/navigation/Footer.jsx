import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                {/* Footer Start*/}
                {/* footer-bottom aera */}
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="footer-border">
                            <div className="row d-flex align-items-center justify-content-between">
                                <div className="col-lg-6">
                                    <div className="footer-copy-right">
                                        <p>
                                            Copyright &copy;{new Date().getFullYear()}  | Created by Kinggeorge
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="footer-menu f-right">
                                        <ul>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer End*/}
            </footer>
        );
    }
}

export default Footer;