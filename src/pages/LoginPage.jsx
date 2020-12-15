import React, { Component, useState } from 'react';

class LoginPage extends Component {


    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="col s12">
                        <div className="card-panel teal">
                            <span className="white-text">Login</span>
                        </div>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">

                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="password" type="password" className="validate" />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="email" type="email" className="validate" />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;