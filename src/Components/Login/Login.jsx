import React from "react";
import { Field, reduxForm } from "redux-form";
import { createField, Input } from "../common/FormControls/FormControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { connect } from 'react-redux';
import { login } from '../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from "../common/FormControls/FormControls.module.css"


const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Enter email', "email", Input, [required])}
            {createField('Password', "password", Input, [required], {type:"password"} )}
            {createField(null, "rememberMe", Input, [], {type:"checkbox"}, "remember me" )}

            {error && <div className={style.summaryError}>
                {error}
            </div>}
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}



const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.iaAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { login })(Login);


