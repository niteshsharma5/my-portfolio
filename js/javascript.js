//enlarge the image on mouseover
function imageEnlarge1(elementId) 
 {
	elementId.style.transition="transform .3s";
	elementId.style.width="430px";
	elementId.style.height="auto";
	elementId.style.margin="2px";
	elementId.style.border="solid blue";
	document.getElementById("myPara1").innerHTML="An algorithm is a step by step procedure to solve logical and mathematical problems. A recipe is a good example of an algorithm because says what must be done, step by step. ... For the purpose of computing, algorithms are written in pseudocode, flow charts, or programming languages.In this course from Coursera, I learnt about various coding algorithms used in computer science in particular Dynammic programming, Greedy algorithms, Graph algorithms and several others.";
 }
 function imageEnlarge2(elementId) 
 {
	elementId.style.transition="transform .3s";
	elementId.style.width="430px";
	elementId.style.height="auto";
	elementId.style.margin="2px";
	elementId.style.border="solid blue";
	document.getElementById("myPara1").innerHTML="In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data. In this course, I learnt about various data structures used in computer science in particular arrays, trees, graphs, stack and queue.";
 }
 function imageEnlarge3(elementId) 
 {
	elementId.style.transition="transform .3s";
	elementId.style.width="430px";
	elementId.style.height="auto";
	elementId.style.margin="2px";
	elementId.style.border="solid blue";
	document.getElementById("myPara1").innerHTML="I received certificate for Python basic from Hackerrank and it was coding test where I was supposed to solve one question out of two to be eligible for getting this certificate and hopefully, I was able to solve both of them.";
 }
 function imageEnlarge4(elementId) 
 {
	elementId.style.transition="transform .3s";
	elementId.style.width="430px";
	elementId.style.height="auto";
	elementId.style.margin="2px";
	elementId.style.border="solid blue";
	document.getElementById("myPara2").innerHTML="Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. It's all becauseof HTML only that allowed me to share my views and experiences with you through this web page.";
 }
 function imageEnlarge5(elementId) 
 {
	elementId.style.transition="transform .3s";
	elementId.style.width="430px";
	elementId.style.height="auto";
	elementId.style.margin="2px";
	elementId.style.border="solid blue";
	document.getElementById("myPara2").innerHTML="After HTML comes CSS(Css stands for Cascading Style Sheets and it is used to make your web pages look more beautiful to the user.) in the journey of learning web development. if you are a web developer, then you as well have went through the same journey of learning HTML and then css and then the list goes on throught JavaScript and several other languages and libraries.";
 }
 function imageEnlarge6(elementId) 
 {
	elementId.style.transition="transform .3s";
	elementId.style.width="430px";
	elementId.style.height="auto";
	elementId.style.margin="2px";
	elementId.style.border="solid blue";
	document.getElementById("myPara2").innerHTML="After learning HTML and JavaScript, I got enrolled in this course of javascript where I learnt about producing interactivity into our web pages with the user. There are many other courses to come further in order to be a full stack developer and hope I learn them quickly. At the end, I would like to thank Coursera and team for such a good content.";
 }
 //bring back the image to it's normal state on mouseout
function backToNormal(elementId)
 {
	elementId.style.transition="transform .3s";
	elementId.style.width="380px";
	elementId.style.height="auto";
	elementId.style.margin="15px";
	elementId.style.border="solid green";
	document.getElementById("myPara1").innerHTML="Bring mouse pointer over any certificate to know more:";
	document.getElementById("myPara2").innerHTML="Bring mouse pointer over any certificate to know more:";
	
 }
 //function to implement responsive navigation bar when window width is changed
function myFunction() 
 {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav")
   {
    x.className += " responsive";
   } 
  else
   {
    x.className = "topnav";
   }
 }
