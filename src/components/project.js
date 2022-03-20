import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";

function Project(props) {
  const {
    mistryCount,
    setMistryCount,
    labourCount,
    setLabourCount,
    comment,
    setComment,
    photoVideo,
    setPhotoVideo,
    clickedPhotosNumbers,
  } = props;
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [photoTaken, setPhotoTaken] = useState([]);
  const [showCamera, setShowCamera] = useState(false);
  const showCameraHandler = () => {
    setShowCamera(!showCamera);
  };
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9);
    let video = videoRef.current;
    let photo = photoRef.current;
    photo.width = width;
    photo.height = height;
    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);
    const pht = ctx.drawImage(video, 0, 0, width, height);
    // setHasPhoto(true);
    // setPhotoTaken(ctx.drawImage(video, 0, 0, width, height).target.value);
    console.log(ctx);
  };
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const [projectSite, setProjectSite] = useState("");
  const projectSiteHandler = () => {
    setProjectSite("#31a05f");
    console.log(projectSite);
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const handleChange = (event) => {
    setSelectedFile(event.target.value);
  };
  const fileSelectHandler = (event) => {
    for (let i = 0; i < event.target.files.length; i++) {
      const newImage = event.target.files[i];
      newImage["id"] = Math.random();
      console.log(newImage);
      setPhotoVideo((prevState) => [...prevState, newImage]);
    }
    // if (event.target.files[0]) {
    //   setPhotoVideo(event.target.files[0]);
    // }
    // setPhotoVideo(event.target.value);
    // console.log(event.target.files.length);
  };
  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  }
  let xvlaue = range(0, 100);
  const siteProjects = [
    "Bungalow site 1 @ Ram Nagar",
    "Bungalow site 2 @ Ram Nagar",
    "Bungalow site 3 @ Ram Nagar",
    "Bungalow site 4 @ Ram Nagar",
  ];

  // const fileUploadHandler = () => {};
  return (
    <section>
      <div className="project">
        <div className="container">
          <div className="card">
            <h3>Select Project Site</h3>
            {siteProjects.map((projects) => {
              return (
                <div className="row align-items-center g-0 mt-2">
                  <div
                    className="col-2 circle"
                    style={{ background: projectSite }}
                    onClick={projectSiteHandler}
                  >
                    <i class="bi bi-check-lg"></i>
                  </div>
                  <div className="col-10 pt-1">
                    <a className="a" onClick={projectSiteHandler}>
                      {projects}
                    </a>
                  </div>
                </div>
              );
            })}

            {/* <div className="row align-items-center g-0 mt-2">
              <div className="col-2 circle">
                <i class="bi bi-check-lg"></i>
              </div>
              <div className="col-10 pt-1">
                <a className="a">Bungalow site 1 @ Ram Nagar</a>
              </div>
            </div>
            <div className="row align-items-center g-0 mt-2">
              <div className="col-2 circle">
                <i class="bi bi-check-lg"></i>
              </div>
              <div className="col-10 pt-1">
                <a className="a">Bungalow site 1 @ Ram Nagar</a>
              </div>
            </div>
            <div className="row align-items-center g-0 mt-2">
              <div className="col-2 circle">
                <i class="bi bi-check-lg"></i>
              </div>
              <div className="col-10 pt-1">
                <a className="a">Bungalow site 1 @ Ram Nagar</a>
              </div>
            </div> */}
            <h3 style={{ marginTop: "24px" }}>
              Select Milestone<span style={{ color: "red" }}>*</span>
            </h3>
            <div className="row dropdown mt-2 g-0">
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Milestone
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedFile}
                    label="Select Milestone"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Civil Work -1</MenuItem>
                    <MenuItem value={20}>Civil Work -2</MenuItem>
                    <MenuItem value={30}>Civil Work -3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="row mt-4">
              <div className="col-5 col-lg-3">
                <h3>
                  Mistry Count<span style={{ color: "red" }}>*</span>
                </h3>
                <FormControl sx={{ width: 100, marginTop: 1 }}>
                  <InputLabel id="demo-simple-select-label">Count</InputLabel>
                  <Select
                    // labelId="demo-simple-select-label"
                    // id="demo-simple-select"
                    value={mistryCount}
                    label="Select Milestone"
                    onChange={(event) => {
                      setMistryCount(event.target.value);
                    }}
                  >
                    {xvlaue.map((number) => {
                      return <MenuItem value={number}>{number}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              </div>
              <div className="col-2">
                <div class="d-flex" style={{ height: "100%" }}>
                  <div class="vr"></div>
                </div>
              </div>
              <div className="col-5 col-lg-3 ">
                <h3>
                  Labour Count<span style={{ color: "red" }}>*</span>
                </h3>
                <FormControl sx={{ width: 100, marginTop: 1 }}>
                  <InputLabel id="demo-simple-select-label">Count</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={labourCount}
                    label="Select Milestone"
                    onChange={(event) => {
                      setLabourCount(event.target.value);
                    }}
                  >
                    {xvlaue.map((number) => {
                      return <MenuItem value={number}>{number}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="row mt-4">
              <h3>Upload Photo</h3>
            </div>
            <div className="row mt-2">
              <input
                type="file"
                multiple
                // value={photoVideo}
                onChange={fileSelectHandler}
              />
              <div style={{ textAlign: "center", marginTop: "24px" }}>
                <button
                  style={{
                    border: "none",
                    background: "#163F58",
                    maxWidth: "400px",
                    width: "100%",
                  }}
                  onClick={props.onOpenCamera}
                >
                  <h3 style={{ paddingTop: "10px", color: "#ffffff" }}>
                    <i class="bi bi-camera"></i>&nbsp;&nbsp; Click Photo
                  </h3>
                </button>
                <div>Photo Clicked: {clickedPhotosNumbers}</div>
              </div>
            </div>
            {/* {showCamera ? (
              <Webcam
                audio={false}
                height={720}
                screenshotFormat="image/jpeg"
                screenshotQuality="1"
                width={1280}
                videoConstraints={videoConstraints}
              >
                {({ getScreenshot }) => (
                  <button
                    onClick={() => {
                      const imageSrc = getScreenshot();
                      // setPhotoVideo(imageSrc);
                      console.log(imageSrc);
                    }}
                  >
                    Capture photo
                  </button>
                )}
              </Webcam>
            ) : // <div>
            //   <video ref={videoRef}>{getVideo()}</video>
            //   <button className="takePhoto" onClick={takePhoto}>
            //     SNAP
            //   </button>
            // </div>
            null} */}

            {/* <div>
              <canvas ref={photoRef}></canvas>
            </div> */}
            <div className="row mt-4">
              <h3>Issues/ Comments</h3>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    width: "100%",
                    height: "140px",
                    marginTop: 1,
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-multiline-static"
                  label="Comment"
                  multiline
                  rows={4}
                  value={comment}
                  onChange={(event) => {
                    setComment(event.target.value);
                  }}
                  placeholder="Add a comment"
                />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Project;
