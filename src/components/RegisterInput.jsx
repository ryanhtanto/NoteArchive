import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../customHooks/useInput';

const RegisterInput = ({ register }) => {
  const [name, setNameChange] = useInput('')
  const [email, setEmailChange] = useInput('')
  const [password, setPasswordChange] = useInput('')
  const [confirmPassword, setConfirmPasswordChange] = useInput('')

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(confirmPassword !== password){
      alert('Password konfirmasi tidak sama')
    }else{
      register({
        name: name,
        email: email,
        password: password
      })
    }
  }

  return (
      <form onSubmit={onSubmitHandler} style={{marginTop: '100px'}}>
        <h2>Daftarkan dirimu terlebih dahulu ya!</h2>
        <div className="form-group">
          <label htmlFor="resigterName">User Name</label>
          <input type="text" className="form-control" onChange={setNameChange} id="resigterName"/>
        </div>
        <div className="form-group">
          <label htmlFor="resigterEmail">Email address</label>
          <input type="email" className="form-control" onChange={setEmailChange} id="resigterEmail" />
        </div>
        <div className="form-group">
          <label htmlFor="resigterPassword">Password</label>
          <input type="password" className="form-control" onChange={setPasswordChange} id="resigterPassword"/>
        </div>
        <div className="form-group">
          <label htmlFor="resigterConfirmPassword">Confirm Password</label>
          <input type="password" className="form-control" onChange={setConfirmPasswordChange} id="resigterConfirmPassword"/>
        </div>
        <button className="btn btn-primary">Register</button>
      </form>
  )
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;