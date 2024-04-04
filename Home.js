//IMAGE SLIDER
let imgs = ["Introduction_to_java_certificate.jpg", "Java_Intermediate_certificate.jpg", "HTML_certificate.jpg", "CSS_certificate.jpg", "Introduction_to_JavaScript_certificate.jpg"]
let imgIndex = 0;
let img = document.getElementById("certificateImg");
function nextImg(){
    ++imgIndex;
   if(imgIndex >= imgs.length){
    imgIndex = 0;
    }
    console.log(imgIndex);
    img.src = "certificates/"+imgs[imgIndex];
}
function prevImg(){
    --imgIndex;
    if(imgIndex <0){
        imgIndex = imgs.length-1;
    }
    console.log(imgIndex);
   img.src = "certificates/"+imgs[imgIndex];
}
setInterval(nextImg, 2000);