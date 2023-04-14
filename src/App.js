import React from "react";
import './App.css';
import HeaderContainer from "./Components/Header/HeaderContainer"
import Navbar from "./Components/Navbar/Navbar";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import { Route, Routes } from "react-router-dom";
//import ProfileContainerDyn from "./Components/Profile/ProfileContainerFunctional";
import LoginPage from "./Components/Login/Login";
import { connect } from 'react-redux';
import { initializeApp } from '../src/Components/redux/app-reducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Preloader from "./Components/common/preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    {/* <Routes> */}
                        <Route path="/dialogs" element={<DialogsContainer />} />
                        <Route path="/profile/:userId?" element={<ProfileContainer />} />
                        {/* <Route path="/profile/:userId" element={<ProfileContainerFunctional />} /> */}
                        <Route path="/users" element={<UsersContainer />} />
                        <Route path="/login" element={<LoginPage />} />
                    {/* </Routes> */}
                </div>
            </div>
        );
    }
}

const mapSateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapSateToProps, { initializeApp }))(App);



    // return (<BrowserRouter>      //! 90 перенос BrowserRouter в index чтобы не было конфликта с withRouter
    //     <div className='app-wrapper'>
    //         <HeaderContainer />
    //         <Navbar />
    //         <div className='app-wrapper-content'>
    //             <Routes>
    //                 <Route path="/dialogs" element={<DialogsContainer />} />
    //                 <Route path="/profile/:userId?" element={<ProfileContainer />} />
    //                 {/* <Route path="/profile/:userId" element={<ProfileContainerFunctional />} /> */}
    //                 <Route path="/users" element={<UsersContainer />} />
    //                 <Route path="/login" element={<LoginPage />} />
    //             </Routes>
    //         </div>
    //     </div>
    // </BrowserRouter>
    // );