
import React,{useState} from 'react'
import { Button } from '@material-ui/core'
import "./AddFoodCart.css";

import { db, projectStorage} from "../firebase";


function AddFood() {
    const [title, setTitle] = useState("");
    const [ price,setPrice ] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");
    const [url, setURL] = useState("");
    const addImagetoPost = function (e) {
        setFile(e.target.files[0]);
    
      };
      const handleSubmit = (e) => {

        e.preventDefault();
        console.log(file)
    
    
        db.collection("food").add(
          {
            category: category,
            type: type,
            title: title,
            price: price,
            description:description
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
                db.collection("food").doc(doc.id).set({
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
        <h1>Add Food</h1>
        <form>

<input value={category} type="text" placeholder="Category" onChange={(e)=>setCategory(e.target.value)}/>

<select value={type} onChange={(e)=>setType(e.target.value)}>
<option value="">Select Food Type</option>
  <option value="dinner">Dinner</option>
  <option value="lunch">Lunch</option>
  <option value="breakfast">Breakfast</option>
</select>
<input value={title} type="text" placeholder="Title"onChange={(e)=>setTitle(e.target.value)}/>
<input value={price} type="text" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/>
<textarea value={description} type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}/>
<label for="file">Food Picture</label>
<input onChange={addImagetoPost} type="file" />



<Button  onClick={handleSubmit}>ADD FOOD</Button>


</form>
</div>
    </div>
    )
}

export default AddFood
