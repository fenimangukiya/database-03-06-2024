import React, { Component } from 'react'

export class Register extends Component {
  constructor(props) {
    super(props)
  
    this.props = props;
  }
  
  render() {
    return (
      <div className='container d-flex justify-contant-center mt-5'>
          <div className="w-50">
              <h3 className='text-center'>create Account</h3>
              <p className='text-center'>Get Started With your free Account</p>
              <button className='btn btn-primary w-100' onClick={this.props.google}>Google</button>
              <button className='btn btn-primary w-100 mt-2'>signup via facebook</button>
              <span className='d-block text-center mt-4 span-ab mb-4'></span>
              <form onSubmit={this.props.submit}>
                <div className='input-group mb-3'>
                  <span className='input-group-text' id='basic-addon1'></span>
                  <input type="text" name='email' className='form-control' placeholder='Email address'></input>
                </div>
                <div className='input-group mb-3'>
                  <span className='input-group-text' id='basic-addon1'></span>
                  <input type="password" name='password' className='form-control' placeholder='create password'></input>
                </div>
                <div className='input-group mb-3'>
                  <span className='input-group-text' id='basic-addon1'></span>
                  <input type="password" name='repassword' className='form-control' placeholder='repeat password'></input>
                </div>
                <button className='btn btn-primary w-100 text-white' type='submit'  >create an account</button>
              </form>
              <p className='text-center mt-4'>Have an Account?<a className='text-primary' href='/' onClick={this.props.pagechange}>Log in</a></p>
              <p className='text-center'>{this.props.errMassage}</p>
          </div>                                      
      </div>
    )
  }
}

export default Register
