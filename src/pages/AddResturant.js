import React,{useState} from 'react'
import { Button } from '@material-ui/core'
import "./AddResturant.css";
import { collection, addDoc } from "firebase/firestore"; 
import { db, projstore} from "../firebase";
function AddResturant() {
    const [email, setEmail] = useState("");
    const [ address,setAddress ] = useState("");
    const [resName, setResName] = useState("");
    const [phone, setPhone] = useState("");
    const [cusine, setCusine] = useState("");
    const [file, setFile] = useState("");
    const [url, setURL] = useState("");
    const addImagetoPost = function (e) {
        setFile(e.target.files[0]);
    
      };
    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(file)
    
    
        const docRef = addDoc(collection(db, "resturant"),(
          {
            resName: resName,
            phone: phone,
            email: email,
            cusine: cusine,
            
          }
        )
      

        )}
    
    return (
        <div className="AddResturant">
            <div className="resturant__container">
            <h1>Add Resturant</h1>
            <form>

<input value={resName} type="text" placeholder="Restaurant Name" onChange={(e)=>setResName(e.target.value)}/>
<input value={phone} type="text" placeholder="Phone"onChange={(e)=>setPhone(e.target.value)}/>
<input value={email} type="email" placeholder="Email"onChange={(e)=>setEmail(e.target.value)}/>
<input value={address} type="text" placeholder="Address" onChange={(e)=>setAddress(e.target.value)}/>
<input value={cusine} type="text" placeholder="Cusine" onChange={(e)=>setCusine(e.target.value)}/>
<label for="file">CoverImage</label>
<input onChange={addImagetoPost} type="file" />
 


<Button  onClick={handleSubmit}>LOGIN</Button>


</form>
</div>
        </div>
    )
}

export default AddResturant
