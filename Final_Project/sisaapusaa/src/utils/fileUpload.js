import React, { useState } from 'react'
import Dropzone from 'react-dropzone';
import axios from 'axios';


function FileUpload(props) {
const [Images, setImages] = useState([])

const onDrop = (files) => {

    let formData = new FormData();
    const config = {
        header: { 'content-type': 'multipart/form-data' }
    }
    formData.append("file", files[0])
    //save the Image we chose inside the Node Server 
    axios.post('/product/uploadImage', formData, config)
        .then(response => {
            if (response.data.success) {

                setImages([ response.data.image])
                props.refreshFunction([response.data.image])

            } else {
                alert('Failed to save the Image in Server')
            }
        })
}


const onDelete = (image) => {
    const currentIndex = Images.indexOf(image);

    let newImages = [...Images]
    newImages.splice(currentIndex, 1)

    setImages(newImages)
    props.refreshFunction(newImages)
}

return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Dropzone
            onDrop={onDrop}
            multiple={false}
            maxSize={800000000}
        >
            {({ getRootProps, getInputProps }) => (
                <div style={{
                    width: '300px', height: '240px', border: '1px solid lightgray',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
                    {...getRootProps()}
                >
                    {console.log('getRootProps', { ...getRootProps() })}
                    {console.log('getInputProps', { ...getInputProps() })}
                    <input {...getInputProps()} />
                    <i className="fa fa-plus" aria-hidden="true"  style={{ fontSize: '3rem'}} > </i> 

                </div>
            )}
        </Dropzone>

        <div style={{ display: 'flex', width: '350px', height: '240px', overflowX: 'scroll' }}>

            {Images.map((image, id) => (
                <div onClick={() => onDelete(image)}>
                    <img style={{ minWidth: '300px', width: '300px', height: '240px' }} src={`http://localhos8848/${image}`} alt={`productImg-${id}`} />
                </div>
            ))}


        </div>

    </div>
)
}

export default FileUpload