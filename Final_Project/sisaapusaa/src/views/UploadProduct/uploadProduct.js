import React, { useState, useEffect  } from 'react';
import {useHistory} from "react-router-dom";
import Image from '../../utils/fileUpload';
import axios from 'axios';


    const CreatePost = () => {
        const history = useHistory();
        const [postTitle, setTitleValue] = useState("");
        const [postInfo, setInfoValue] = useState("");
        const [postCompany, setCompanyValue] = useState("");
        const [postPrice, setPriceValue] = useState(0);
        const [postPhoto, setImage] = useState("");
        const [url, setUrl] = useState("");
        useEffect(() => {
          if (url) {
            axios
              .post("http://localhost:5000/createpost", {
                postTitle,
                postInfo,
                postCompany,
                postPrice,
                postPhoto,
              postPhoto: url,
              })
              // .then((res) => res.json())
              .then((data) => {
                // console.log(data.details);
                // console.log(data);
                history.push("/product");
              });
          }
        }, [url]);
        const postDetails = () => {
          const data = new FormData();
          data.append("file", postPhoto);
          data.append("upload_preset", "Portfolio");
          data.append("cloud_name", "bisikha");
          fetch("https://api.cloudinary.com/v1_1/bisikha/image/upload", {
            method: "post",
            body: data,
          })
            .then((res) => res.json())
            .then((data) => {
              setUrl(data.url);
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            });
        };

    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }
    const onInfoChange = (event) => {
      setInfoValue(event.currentTarget.value)
  }
  const onCompanyChange = (event) => {
    setCompanyValue(event.currentTarget.value)
}
    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();

    }
        return (
            <div style={{ maxWidth: '700px', margin: 'auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h4> Upload Organic Product</h4>
            </div>
            <form onSubmit={onSubmit} style= {{ marginLeft: '20%', textItems: 'center'}} >
                <label>Title</label>
                <input
                className="border-0-login form-control-login input-border-none"
                    onChange={onTitleChange}
                    value={postTitle}
                />
                <br />
                <br />
                <label>Description</label>
                <input
                className="border-0-login form-control-login input-border-none"
                    onChange={onInfoChange}
                    value={postInfo}
                />
                <br />
                <br />
                <label>Company</label>
                <input
                className="border-0-login form-control-login input-border-none"
                    onChange={onCompanyChange}
                    value={postCompany}
                    />
                <br />
                <br />
                <label>Price(Rs)</label>
                <input
                className="border-0-login form-control-login input-border-none"
                    onChange={onPriceChange}
                    type="number"
                />
                <br/>
                <br/>
            </form>

      
      <div className="create" >
        <form  style= {{ marginLeft: '20%', textItems: 'center'}}>
        <input
          type="file"
          id="myFile"
          className="filename"
          onChange={(e) => setImage(e.target.files[0])}
        />
        
        <br />
                <br />
        <br />
        <button
                className="button-signup fondo-color-signup"
                onClick={() => postDetails()}
                >
                    Submit
                </button>
      </form>
    </div>
  </div>
);
};

        export default CreatePost;