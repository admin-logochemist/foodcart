import { Button } from '@material-ui/core'
import React from 'react'
import { login } from '../features/UserSlice'
import { auth,provider } from '../firebase'
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
const SignUp=()=>{
    const  dispatch = useDispatch()
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
              <h1>SignUp</h1>
                <Button variant="contained" color="primary" onClick={signin}>LOGIN</Button>
            </div>
        </div>
       
    )
}

export default SignUp;
