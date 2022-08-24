import React, {useState} from "react"

function ClothingForm(){
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [frontImage, setFrontImage] = useState("")
    const [backImage, setBackImage] = useState("")
    const [event, setEvent] = useState("Casual")
    const [category, setCategory] = useState("")


  function handleClothingForm(e){
    e.preventDefault()
    let newClothingItem = {
      name : name,
      description : description,
      frontImage: frontImage,
      backImage: backImage,
      event: event,
      category : category
    }

    
    fetch("http://localhost:8004/clothes", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(newClothingItem)
    })
    .then(res => res.json())
    .then(data => data)

    setName("")
    setDescription("")
    setFrontImage("")
    setBackImage("")
    setEvent("Casual")
    setCategory("")

}

  return (
    <div className="form">
      <form onSubmit={(e) => handleClothingForm(e)}>
        <h3>Add a Clothing Item!</h3>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Item name"
        //   className="input-text"
        />
        <br />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="name"
          placeholder="Item description"
        //   className="input-text"
        />
        <br />
        <input
          value={frontImage}
          onChange={(e) => setFrontImage(e.target.value)}
          type="textarea"
          name="name"
          placeholder="Front Image Url"
          className="input-text"
        />
        <br />
        <input
          value={backImage}
          onChange={(e) => setBackImage(e.target.value)}
          type="textarea"
          name="name"
          placeholder="Back Image Url"
          className="input-text"
        />
        <br />
        <select className="select" value={event} onChange={(e) => setEvent(e.target.value)}>
            <option value="Casual">Casual</option>
            <option value="SemiFormal">SemiFormal</option>
            <option value="Formal">Formal</option>
          </select>
        <br />
        <select className="select" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Dress">Dress</option>
            <option value="Top">Top</option>
            <option value="Bottom">Bottom</option>
            <option value="Shoes">Shoes</option>
            <option value="Accessories">Accesories</option>
          </select>
          <br/>
        <input
          type="submit"
          name="submit"
          value="Create New Clothing Item"
          className="submit"
        />
      </form>
      </div>
)}



export default ClothingForm