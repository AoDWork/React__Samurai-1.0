import React from "react";
import Header from './Header'
import { connect } from 'react-redux';
import {setAuthUserData} from '../redux/auth-reducer'
import userAuth from '../../api/api';


class HeaderContainer extends React.Component {

    componentDidMount() {
        userAuth().then(responce => {
            if(!responce.data.resultCode === 0) {
                let { id, login, email} = responce.data.data;
                this.props.setAuthUserData( id, login, email );
            }
        });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ( { 
    isAuth: state.auth.isAuth,
    login: state.auth.login
 } );

export default  connect(mapStateToProps, { setAuthUserData } )(HeaderContainer);