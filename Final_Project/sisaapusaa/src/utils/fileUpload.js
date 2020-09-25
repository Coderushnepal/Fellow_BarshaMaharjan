import React from 'react';
import axios from 'axios';


class Image extends React.Component {
    state = {
      image: [],
    };
  
    componentDidMount() {
      axios.get(`http://localhost:5000/allposts`).then((res) => {
        const image = res.data.data;
        // console.log("This is imageeeeeeee", image);
        this.setState({ image });
      });
    }
  
    render() {

return (
    <div className="image-container">
    {this.state.image.map((img, index) => (
      <div index={index}>
        <div
          className="image-wrapper image-container"
          key={`image-${img.id}`}
        >
          <img
            src={img.postPhoto}
            className="gallery-image image"
          />
        </div>
      </div>
    ))}
  </div>

 );

}
}

export default Image;


               