import React,{useState} from 'react'
import { Button } from '@material-ui/core'
import "./AddFoodCart.css";

import { db, projectStorage} from "../firebase";
function AddFoodCart() {
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
    
    
        db.collection("foodcart").add(
          {
            resName: resName,
            phone: phone,
            email: email,
            cusine: cusine,
            address:address,
          }
        ).then(doc => {
          const uploadTask = projectStorage.ref(`/imaged/${__filename}`).put(file)
          uploadTask.on("state_changed", console.log, console.error, () => {
            projectStorage
              .ref("imaged")
              .child(__filename)
              .getDownloadURL()
              .then((url) => {
                setFile(null);
                setURL(url);
                db.collection("foodcart").doc(doc.id).set({
                  postImage: url
                }, { merge: true })
              })
    
          })
    
          // { file && <ProgressBar file={file} setFile={setFile} /> }
        }
        )
       
    
    
      }
    return (
        <div className="AddCart">
        <div className="cart__container">
        <h1>Add FoodCart</h1>
        <form>

<input value={resName} type="text" placeholder="FoodCart Name" onChange={(e)=>setResName(e.target.value)}/>
<input value={phone} type="text" placeholder="Phone"onChange={(e)=>setPhone(e.target.value)}/>
<input value={email} type="email" placeholder="Email"onChange={(e)=>setEmail(e.target.value)}/>
<input value={address} type="text" placeholder="Address" onChange={(e)=>setAddress(e.target.value)}/>
<input value={cusine} type="text" placeholder="Cusine" onChange={(e)=>setCusine(e.target.value)}/>
<label for="file">CoverImage</label>
<input onChange={addImagetoPost} type="file" />



<Button  onClick={handleSubmit}>ADD FOODCART</Button>


</form>
</div>
    </div>
    )
}

export default AddFoodCart
