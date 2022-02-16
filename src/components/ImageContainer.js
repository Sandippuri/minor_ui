import React, { useState, useEffect, Component } from "react";
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import dragNdrop from '../images/drgndrop.png';
import { useDropzone } from 'react-dropzone';
import Button from '../components/Button';
import axios from "axios";

const ImageNText = styled.div`

text-align: center;
justify-content: center;

`;
const DragNdropContainer = {
  border: "1px dashed grey",
  padding: "25vh 0",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#d3d3d3"
};

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};


const thumb = {
  display: 'inline-flex',
  marginBottom: 8,
  marginRight: 8,
  justifyContent: "center",
  width: '100%',
  height: '100%',
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: "flex"

};

const img = {
  maxWidth: "100vw"
};


const ImageContainer = () => {
  const [images, setImages] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setImages(acceptedFiles.map(image => Object.assign(image, {
        preview: URL.createObjectURL(image)
      })));
    }
  });

  const thumbs = images.map(image => (
    <div style={thumb} key={image.name}>
      <div style={thumbInner}>
        <img
          src={image.preview}
          style={img}
          alt="oldImages"
        />
      </div>
    </div>
  ));

  useEffect(() => {
    images.forEach(image => URL.revokeObjectURL(image.preview));
  }, [images]);

  const handleSubmit = (e) => {
    console.log("object");
    e.preventDefault();
    let form_data = new FormData();
    if (images !== null) {
      console.log(images);
      form_data.append('image',images)
    }
    let url = 'http://localhost:8000/api/old_image/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err))
  };
  return (
    <>
      <div className="container">
          <div {...getRootProps({ className: 'dropzone' })} style={DragNdropContainer}>
        <form>
              <input {...getInputProps()} type="file"
                id="inputImage" accept="image/png, image/jpeg" required/>
            <ImageNText>
              <img src={dragNdrop} alt="dragndrop" height="120px"
                width="160px" />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </ImageNText>
        </form>
          </div>
        <aside className="container" style={thumbsContainer}>
          {thumbs}
        </aside>
      </div>
      <Button name="Convert" task={handleSubmit}></Button>
    </>
  );


};

export default ImageContainer;




// class App extends Component {

//   state = {
//     image: null
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.id]: e.target.value
//     })
//   };

//   handleImageChange = (e) => {
//     this.setState({
//       image: e.target.files[0]
//     })
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//     let form_data = new FormData();
//     form_data.append('image', this.state.image, this.state.image.name);
//     let url = 'http://localhost:8000/api/old_image/';
//     axios.post(url, form_data, {
//       headers: {
//         'content-type': 'multipart/form-data'
//       }
//     })
//         .then(res => {
//           console.log(res.data);
//         })
//         .catch(err => console.log(err))
//   };

//   render() {
//     return (
//       <div className="App">
//         <form onSubmit={this.handleSubmit}>
//           <p>
//             <input type="file"
//                    id="image"
//                    accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
//           </p>
//           <input type="submit"/>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;