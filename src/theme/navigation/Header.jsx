import React from 'react';
import logo from '../../assets/img/logo/logo.png';
import {
    Link, withRouter
} from "react-router-dom";

let header_area;
let sticky;
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.app_header_area = React.createRef();
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged();
        }
    }

    onRouteChanged() {
        //console.log("ROUTE CHANGED");
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleSticky);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleSticky);
    }

    /** This functions does the magic or either adding or removing css sticky class to the top Navigation Menu */
    handleSticky = () => {
        header_area = this.refs.app_header_area;
        sticky = header_area.offsetTop; /* Get the offset position of the Top Menu Header */
        if (window.pageYOffset > sticky) {
            header_area.classList.add("sticky");
        } else {
            header_area.classList.remove("sticky");
        }
    }

    render() {
        var path = window.location.pathname;
        var path_routes = path.split('/');
        var header_name = (path_routes[1] != '') ? ((path_routes[1] == 'articles') ? 'Article' : 'Page') : '';
        return (
            <header>
                {/* Header Start */}
                <div className="header-area bg-white" ref="app_header_area">
                    <div className="main-header">
                        <div className="header-mid d-none d-md-block">
                            <div className="container fluid">
                                <div className="row mx-0">
                                    {/* Logo */}
                                    <div className="col-12 d-flex justify-content-center">
                                        <img src={logo} className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-bottom header-sticky">
                            <div className="container fluid px-0">
                                <div className="row mx-0">
                                    <div className="col-2 d-block d-md-none d-lg-none d-xl-none">
                                        {path === '/' && <div data-toggle="collapse" data-target="#navbarContent" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation" className="text-primary w-100 h-100 d-flex justify-content-center align-items-center navbar-toggler" style={{ fontSize: '130%' }}>
                                            <span className="fa fa-bars"></span>
                                        </div>}
                                        {path != '/' && <div className="text-primary w-100 h-100 d-flex justify-content-center align-items-center navbar-toggler" style={{ fontSize: '130%' }}>
                                            <Link to="/" className="d-block text-primary" ><span className="fas fa-arrow-left"></span></Link>
                                        </div>}
                                    </div>
                                    <div className="col-8 col-lg-10 col-md-12 header-flex">
                                        <div className="row mx-0">
                                            <div className="col-12 d-block d-md-none d-lg-none d-xl-none px-0">
                                                {header_name !== '' && <div className="d-flex justify-content-center align-items-center w-100 py-3">{header_name}</div>}
                                                {header_name === '' && <Link to="/" className="w-100"><img src={logo} alt="" className="img-fluid my-1" /></Link>}
                                            </div>
                                            <div className="col-12 d-none d-md-block d-lg-block d-xl-block px-0">
                                                {/* Main-menu */}
                                                <div className="main-menu d-none d-md-block">
                                                    <nav>
                                                        <ul id="navigation">
                                                            <li><Link to="/">Home</Link></li>
                                                            <li><Link to="/page">Page 1</Link></li>
                                                            <li><Link to="/page">Page 2</Link></li>
                                                            <li><Link to="/page">Page 3</Link></li>
                                                            <li><Link to="/page">Page 4</Link></li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 col-lg-2 col-md-4 d-flex align-items-center justify-content-end">
                                        <div className="header-right-btn f-right">
                                            <i className="fas fa-search special-tag"></i>
                                            <div className="search-box">
                                                <form>
                                                    <input type="text" placeholder="Search" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Mobile Menu */}
                                    <div className="col-12 d-block d-md-none d-lg-none d-xl-none px-0">
                                        <div className="position-absolute" style={{ left: '0px', right: '0px' }}>
                                            <nav className="navbar navbar-expand-lg navbar-light bg-white p-0 shadow-sm">
                                                <div id="navbarContent" className="collapse navbar-collapse mobile-menu">
                                                    <ul className="navbar-nav mx-auto px-2">
                                                        <li className="nav-item"><Link to="/" data-toggle="collapse" data-target="#navbarContent" className="nav-link">Home</Link></li>
                                                        <li className="nav-item"><Link to="/page" data-toggle="collapse" data-target="#navbarContent" className="nav-link">Page 1</Link></li>
                                                        <li className="nav-item"><Link to="/page" data-toggle="collapse" data-target="#navbarContent" className="nav-link">Page 2</Link></li>
                                                        <li className="nav-item"><Link to="/page" data-toggle="collapse" data-target="#navbarContent" className="nav-link">Page 3</Link></li>
                                                        <li className="nav-item"><Link to="/page" data-toggle="collapse" data-target="#navbarContent" className="nav-link">Page 4</Link></li>
                                                    </ul>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header End */}
            </header>

        )
    }
}

export default withRouter(Header);