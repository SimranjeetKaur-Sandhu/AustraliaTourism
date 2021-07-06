const upBtn = document.getElementById("up-btn");
const upImg = document.getElementById("up-img");

const drawImg = (data) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  var displayImage = new Image();
  canvas.height = 300;
  canvas.width = 500;
  displayImage.onload = function () {
    context.drawImage(displayImage, 0, 0, 500, 300);
  };
  displayImage.src = data;
  document.getElementById("image-div").appendChild(canvas);
};

const handleImageUpload = () => {
  const file = upImg.files[0];
  const formData = new FormData();
  formData.append("imgFile", file);
  console.log(file);

  const img = new Image();
  img.src = window.URL.createObjectURL(file);
  //only upload image if image is 1440p or less
  img.onload = () => {
    if (img.naturalHeight <= 1440 && img.naturalWidth <= 2560) {
      fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          drawImg(data.base64Img);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
};

const getImages = () => {
  fetch("http://localhost:5000/loadimages")
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        data.map((element) => {
          drawImg(element.img);
        });
      }
    });
};

upBtn.addEventListener("click", handleImageUpload);
getImages();
