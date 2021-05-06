canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
backgroundimage="racing.jpg";
car1image="car1(1).png";
car2image="download.png";
function add(){
    background_img=new Image();
background_img.onload=uploadbackground;
background_img.src=backgroundimage;
car1image_img=new Image();
car2image_img=new Image();
car1image_img.onload=uploadcar1;
car2image_img.onload=uploadcar2;
car1image_img=car1image;
car2image_img=car2image;
}
function uploadbackground(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}
car1x=10;
car1y=10;
car2x=10;
car2y=70;
car1width= 50;
car1height=50;
car2width=50;
car2height=50;
function uploadcar1(){
    ctx.drawImage(car1image_img,car1x,car1y,car1width,car1height);
  
}
    function uploadcar2(){
        ctx.drawImage(car2image_img,car2x,car2y,car2width,car2height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown (e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        car1_up();
        console.log("up arrow key");
    }
    if(keyPressed=='40')
    {
        car1_down();
        console.log("down arrow key");
    }
    if(keyPressed=='37')
    {
        car1_left();
        console.log("left arrow key");
    }
    if(keyPressed=='39')
    {
        car1_right();
        console.log("right arrow key");
    }
    if(keyPressed=='87')
    {
        car2_up();
        console.log("key W");
        
    }

    if(keyPressed=='68')
    {
        car2_down();
        console.log("key D");
    }
    if(keyPressed=='81')
    {
        car2_left();
        console.log("key Q");
    }
    if(keyPressed=='69')
    {
        car2_right();
        console.log("key E");
    }
}
