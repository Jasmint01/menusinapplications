var nav= document.body.querySelector(".nav");
var display= document.body.querySelector(".display");
var counter=document.createElement("div");
var addmore=document.createElement("button");
var count=0;
var pages= [
  {
    title:"Home",
    content:""
  },
    {
    title:"About",
    content:""
  },
    {
    title:"Interact",
    content:""
  }
]

addmore.innerHTML="Counter"
counter.innerHTML="Total: "+count;

addmore.addEventListener("click",function(){
count+=1;
counter.innerHTML="Total: "+count;
});
document.body.appendChild(addmore);
document.body.appendChild(counter);
for(var i=0; i<pages.length; i++){
new pageMaker(pages[i]);
}

function pageMaker(pg){
  this.button=document.createElement("button");
  this.button.addEventListener("click", function(){    
   writestuff(pg.content,pg.title);
  })
  this.button.innerHTML=pg.title;
  nav.appendChild(this.button);
}
function writestuff(stuff,pg){
  if(pg=="About") {
  AboutPage();  
  }if (pg=="Interact") {
    InteractPage();
  }if (pg=="Home") {
    HomePage();
  }
}

function AboutPage(){
display.innerHTML="";
var heading = document.createElement("h1");
var subheading=document.createElement("h3");
  heading.innerHTML="About";
  subheading.innerHTML="Jasmin Tlazca";
  addmore.style.visibility="hidden";
  counter.innerHTML="";
  display.appendChild(heading);
  display.appendChild(subheading);
}
function InteractPage(){
display.innerHTML="";
var interactheading = document.createElement("h1");
  interactheading.innerHTML="Interact";
  addmore.style.visibility="visible";
  counter.innerHTML="";
  display.appendChild(interactheading);
}
function HomePage(){
display.innerHTML="";
var homeheading = document.createElement("h1");
  homeheading.innerHTML="Home";
  addmore.style.visibility="hidden";
  counter.innerHTML="";
  display.appendChild(homeheading);
}
counter.onclick=function(){
  count+=1;
  counter.innerHTML="You have clicked: "+count;
}

writestuff(pages[0].content,"Home","About","Interact");


// Code done by Jasmin Tlazca 2021