import React from 'react';
import {Link} from 'react-router';

class MainPage extends React.Component {
  render() {
    return (



<body style="background-color:black">
  <header>

    <h3 id="profile">
      <img src="icon.png" alt="myprofile" style="width: 25px;height: 25px"/>
      <a href="loginPage.html">LogIn</a>&nbsp;&nbsp;<a href="registerPage.html">Register</a>
    </h3>
    <h1><a href="mainPage.html">PHOTAGRAM</a></h1>
  </header>
  <nav>
    <ul>
     <li><a href="Pictures.html">Photographs</a></li>
     <li><a href="Videos.html">Videos</a></li>
     <li><a href="Paintings.html">Paintings</a></li>
   </ul>
 </nav>


 <h1 style="color:white">Editor's Pick</h1>

 <div className="row">
   <div className="column">
    <img id="myImg6" onClick="fun1(this.id)" ondblclick="fun2(this.id)" src="6.jpg" style="width:100%" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg7" onClick="fun1(this.id)" ondblclick="fun2(this.id)" src="7.jpg" style="width:100%" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg8" onClick="fun1(this.id)" ondblclick="fun2(this.id)" src="8.jpg" style="width:100%" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg14" onClick="fun1(this.id)" ondblclick="fun2(this.id)" src="14.jpg" style="width:100%" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg14" onClick="fun1(this.id)" ondblclick="fun2(this.id)" src="15.jpg" style="width:100%" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
</div>


<div id="myModal" className="modal">
  <span className="close">&times;</span>
  <img className="modal-content" id="img01" />
  <div id="caption"></div>
</div>



<h1 style="color:white">Photographs  <a href="Pictures.html" target="_top">(View All)</a></h1> 
<div className="row">
   <div className="column">
    <img id="myImg1" onClick="fun1(this.id)" ondblclick="fun2(this.id)" src="1.jpg" style="width:100%" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg2" onClick="fun1(this.id)" ondblclick="fun2(this.id)" src="2.jpg" style="width:100%" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg3" onClick="fun1(this.id)" ondblclick="fun2(this.id)" src="3.jpg" style="width:100%" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg4" onClick="fun1(this.id)" ondblclick="fun2(this.id)" src="4.jpg" style="width:100%" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg5" onClick="fun1(this.id)" ondblclick="fun2(this.id)" src="5.jpg" style="width:100%" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
</div>

<h1 style="color:white">Videos  <a href="Videos.html" target="_top">(View All)</a></h1>

<div className="row">
  <div className="column">
    <iframe src="https://www.youtube.com/embed/raNzEp6S7X8" ></iframe>
    <a href="profiles.html">➣➣➣</a>
  </div>

  <div className="column">
    <iframe src="https://www.youtube.com/embed/Ml90FJK-emo"></iframe>
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <iframe src="https://www.youtube.com/embed/cOtigA2G1GQ"></iframe>
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <iframe src="https://www.youtube.com/embed/ZCIb-R38XeU"></iframe>
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <iframe src="https://www.youtube.com/embed/rDLJCQpExJA"></iframe>
    <a href="profiles.html">➣➣➣</a>
  </div>
</div>


<h1 style="color:white">Paintings  <a href="Paintings.html" target="_top">(View All)</a></h1>      
<div className="row">
   <div className="column">
    <img id="myImg11" onClick="fun1(this.id)" ondblclick="fun2(this.id)" src="11.jpg" style="width:100%" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg12" onClick="fun1(this.id)" ondblclick="fun2(this.id)" src="12.jpg" style="width:100%" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg13" onClick="fun1(this.id)" ondblclick="fun2(this.id)" src="13.jpg" style="width:100%" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg14" onClick="fun1(this.id)" ondblclick="fun2(this.id)" src="14.jpg" style="width:100%" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
  <div className="column">
    <img id="myImg15" onClick="fun1(this.id)" ondblclick="fun2(this.id)" src="15.jpg" style="width:100%" className="hover-shadow cursor" />
    <a href="profiles.html">➣➣➣</a>
  </div>
</div>
<footer>
  <div className="popup" onClick="pop()">About Us</div>
  <p>Copyright &copy;photagram.com</p>
</footer>


  </body>

);
  }

}

export default MainPage;

