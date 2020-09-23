import React, { useState  } from 'react';
import FileUpload from '../../utils/fileUpload';
import axios from 'axios';


    function UploadProduct(props) {

        const [TitleValue, setTitleValue] = useState("")
        const [DescriptionValue, setDescriptionValue] = useState("")
        const [PriceValue, setPriceValue] = useState(0)
      
    
        const [Images, setImages] = useState([])
    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

   

     const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();

    }

    const variables = {
       
        title: TitleValue,
        description: DescriptionValue,
        price: PriceValue,
        images: Images,
    }
     
    axios.post('/product/uploadProduct', variables)
    .then(response => {
        if (response.data.success) {
            alert('Product Successfully Uploaded')
            props.history.push('/')
        } else {
            alert('Failed to upload Product')
        }
    })




        return (
            <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h4> Upload Organic Product</h4>
            </div>


            <form onSubmit={onSubmit} >

                {/* DropZone */}
                { <FileUpload refreshFunction={updateImages} />}
                <FileUpload/>
                <br />
                <br />
                <label>Title</label>
                <input
                className="border-0-login form-control-login input-border-none"
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Description</label>
                <input
                className="border-0-login form-control-login input-border-none"
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label>Price(Rs)</label>
                <input
                className="border-0-login form-control-login input-border-none"
                    onChange={onPriceChange}
                    type="number"
                />
                <br />
                <br />

                <button
                className="button-signup fondo-color-signup"
                    onClick={onSubmit}
                >
                    Submit
                </button>

            </form>

        </div>
        )
}
        export default UploadProduct;