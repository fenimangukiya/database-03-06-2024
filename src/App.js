import React, { Component } from "react";
import Register from "./Component/Register";
import Login from "./Component/Login";
import './App.css'
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import app from "./Firebase";


const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      pagechange:false,
      errMassage:"" 
    }
  }

  pageChangeHandler=(e)=>{
   // alert('hgfhgfg')
    e.preventDefault();
    this.setState({
      pagechange:!this.state.pagechange
    })
  }

  registerSubmitHandler=(e)=>{
    e.preventDefault();
    //alert('cdgj')
    const email=e.target.name.value
    const password=e.target.password.value
    const repassword=e.target.repassword.value
    console.log(email,password,repassword);

    if(password !== repassword){
        this.setState({
            errMassage:"password don't match....."
        })
    }else{
      this.setState({
        errMassage:"password  match.....",
        pagechange:true
    })
    }

    createUserWithEmailAndPassword(auth, email, password)
  .then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err);
  })
  }

  GoogleHandeler=()=>{
    //alert('dkhsjk')
    signInWithPopup(auth, provider)
  .then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err);
  })
  }
  
  render() {
    return (
      <div>
        {
          this.state.pagechange===false?<Register pagechange={this.pageChangeHandler} submit={this.registerSubmitHandler} errMassage={this.state.errMassage} google={this.GoogleHandeler}></Register>:<Login pagechange={this.pageChangeHandler} ></Login>
        }  
      </div>
    );
  }
}

export default App;
