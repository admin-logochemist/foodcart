import { Button } from '@material-ui/core'
import React from 'react'
import "./signup.css"
import { login } from '../features/UserSlice'
import { auth,provider } from '../firebase'
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
const SignUp=()=>{
    const  dispatch = useDispatch();
    function yesnoCheck(that) 
{
    if (that.value == "volvo") 
    {
        document.getElementById("adc").style.display = "block";
    }
    else
    {
        document.getElementById("adc").style.display = "none";
    }
    if (that.value == "pan")
    {
        document.getElementById("pc").style.display = "block";
    }
    else
    {
        document.getElementById("pc").style.display = "none";
    }
   
}
    const signin=()=>{
        signInWithPopup(auth, provider)
        .then(({user})=>{dispatch(login({
                displayName:user.displayName,
                email:user.email,
                photoUrl:user.photoURL,
        }))
        })
        .catch((error)=>console.log(error))
    };
    return (
        <div className="login">
            <div className="login__container">
             
              <img src="data:image/png;base64,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" className="logo" />              
              <h1>SignUp</h1>
              <form>
              <input type="text" placeholder="Full Name"/>
              <input type="email" placeholder="Phone"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
               
<select id="selector" onchange="yesnoCheck(this)">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>

<Button>LOGIN</Button>
              </form>
                
                <Button variant="contained" color="primary" onClick={signin}>GOOGLE</Button>
            </div>
        </div>
       
    )
}

export default SignUp;