import React , {Component} from 'react';

import {Link} from 'react-router-dom';

class Navbar extends Component{
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-boullo">
                    <div className="container">
                        <Link to='/'>
                            <span className="navbar-brand text-teal font-weight-bold font-italic"><img src="../images/fav.ico" className="img-fluid" alt="logo"/> IDROLEC</span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item p-0">
                                    <Link to='/'>
                                        <span className='nav-link text-dark font-weight-bold'>Exercises</span>
                                    </Link>
                                </li>
                                <li className="nav-item p-0">
                                    <Link to='/create'>
                                        <span className='nav-link text-dark font-weight-bold'>Create Exercises Log</span>
                                    </Link>
                                </li>
                                <li className="nav-item p-0">
                                    <Link to='/user'>
                                        <span className='nav-link text-dark font-weight-bold'>Create Users</span>
                                    </Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-0">
                                <li>2020 &copy; Developed by <a className="text-dark" href="https://www.facebook.com/profile.php?id=100033857033325">
                                    <i className="fa fa-user"/>Mohamed Ali Boullo
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;