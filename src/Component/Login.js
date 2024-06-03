import React, { Component } from 'react'

export class Login extends Component {
  constructor(props) {
    super(props)
  
    this.props = props;
  }
  
  render() {
    return (
      <div className='container d-flex justify-contant-center mt-5'>
           <div className="w-50">
           <h3 className='text-center'>Login</h3>
           <button className='btn btn-primary w-100 rbtng'>Login via twiter</button>
           <button className='btn btn-primary w-100 rbtnf mb-4 mt-4'>Login via facebook</button>
           <span className='d-block text-center mt-4 span-ab mb-4'>OR</span>
           <form>
           <div className='input-group mb-3'>
                  <span className='input-group-text' id='basic-addon1'></span>
                  <input type="text" name='email' className='form-control' placeholder='Email address'></input>
                </div>
                <div className='input-group mb-3'>
                  <span className='input-group-text' id='basic-addon1'></span>
                  <input type="password" name='email' className='form-control' placeholder='password'></input>
                </div>
                <button className='btn btn-primary w-100 text-white'>Login</button>
           </form>
           <p className='text-center mt-4'><a className='text-primary' href='/'>create</a>an acccount</p>
           </div>
      </div>
    )
  }
}

export default Login
