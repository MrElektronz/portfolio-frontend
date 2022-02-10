import "./skills.scss";
import React from "react";

export default function Skills() {

  
  return <div className="skills" id="skills">
   
   <h1 className="title">Skills</h1>

<div className="s_container container grid">
  <div>

  <div className="skills_content active">
      <div className="skills_header">
        <img src="img/brackets-curly.svg" alt="" className="skills_icon"/>
        <div>
          <h1 className="skills_title">General</h1>
          <span className="skills_subtitle">More than 9 years</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="skills_arrow">
        <path
        d="M17.71,11.29a1,1,0,0,0-1.42,0L13,14.59V7a1,1,0,0,0-2,0v7.59l-3.29-3.3a1,1,0,0,0-1.42,1.42l5,5a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l5-5A1,1,0,0,0,17.71,11.29Z"/>
        </svg>
      </div>

      <div className="skills_list grid">

         <div className="skill_info">
           <div className="skill_bg">
             <img src="img/java.png" alt="" />
             <h3>Java</h3>
           </div>
         </div>
        
         <div className="skill_info">
           <div className="skill_bg">
             <img src="img/python.png" alt="" />
             <h3>Python</h3>
           </div>
         </div>

         <div className="skill_info">
           <div className="skill_bg">
             <img src="img/cpp.png" alt="" />
             <h3>C++</h3>
           </div>
         </div>

         <div className="skill_info">
           <div className="skill_bg">
             <img src="img/csharp.png" alt="" />
             <h3>C#</h3>
           </div>
         </div>


      </div>
    </div>



{/*Frontend Development */}
    <div className="skills_content inactive">
      <div className="skills_header">
        <img src="img/window.svg" alt="" className="skills_icon"/>
        <div>
          <h1 className="skills_title">Frontend Development</h1>
          <span className="skills_subtitle">Roughly a year</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="skills_arrow">
        <path
        d="M17.71,11.29a1,1,0,0,0-1.42,0L13,14.59V7a1,1,0,0,0-2,0v7.59l-3.29-3.3a1,1,0,0,0-1.42,1.42l5,5a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l5-5A1,1,0,0,0,17.71,11.29Z"/>
        </svg>
      </div>

      <div className="skills_list grid">

         <div className="skill_info">
           <div className="skill_bg">
             <img src="img/java-script.png" alt="" />
             <h3>Javascript</h3>
           </div>
         </div>
        
         <div className="skill_info">
           <div className="skill_bg">
             <img src="img/html5.png" alt="" />
             <h3>HTML</h3>
           </div>
         </div>

         <div className="skill_info">
           <div className="skill_bg">
             <img src="img/css.png" alt="" />
             <h3>CSS</h3>
           </div>
         </div>

         <div className="skill_info">
           <div className="skill_bg">
             <img src="img/sass.svg" alt="" />
             <h3>SASS</h3>
           </div>
         </div>

         <div className="skill_info">
           <div className="skill_bg">
             <img src="img/react.png" alt="" />
             <h3>ReactJS</h3>
           </div>
         </div>

      </div>
    </div>

{/*Backend Development*/}
    <div className="skills_content inactive">
      <div className="skills_header">
        <img src="img/server.svg" alt="" className="skills_icon"/>
        <div>
          <h1 className="skills_title">Backend Development</h1>
          <span className="skills_subtitle">More than 2 years</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="skills_arrow">
        <path
        d="M17.71,11.29a1,1,0,0,0-1.42,0L13,14.59V7a1,1,0,0,0-2,0v7.59l-3.29-3.3a1,1,0,0,0-1.42,1.42l5,5a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l5-5A1,1,0,0,0,17.71,11.29Z"/>
        </svg>
      </div>

      <div className="skills_list grid">

         <div className="skill_info">
           <div className="skill_bg">
             <img src="img/mysql.png" alt="" />
             <h3>MySQL</h3>
           </div>
         </div>

         <div className="skill_info">
           <div className="skill_bg">
             <img src="img/flask.png" alt="" />
             <h3>Flask</h3>
           </div>
         </div>

      </div>
    </div>


{/*Design */}
    <div className="skills_content inactive">
      <div className="skills_header">
        <img src="img/palette.svg" alt="" className="skills_icon"/>
        <div>
          <h1 className="skills_title">Design</h1>
          <span className="skills_subtitle">More than 7 years</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="skills_arrow">
        <path
        d="M17.71,11.29a1,1,0,0,0-1.42,0L13,14.59V7a1,1,0,0,0-2,0v7.59l-3.29-3.3a1,1,0,0,0-1.42,1.42l5,5a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l5-5A1,1,0,0,0,17.71,11.29Z"/>
        </svg>
      </div>

      <div className="skills_list grid">

         <div className="skill_info">
           <div className="skill_bg">
             <img src="img/blender.png" alt=""/>
             <h3>Blender</h3>
           </div>
         </div>

         <div className="skill_info">
           <div className="skill_bg">
             <img src="img/inkscape.png" alt="" />
             <h3>Inkscape</h3>
           </div>
         </div>

         <div className="skill_info">
           <div className="skill_bg">
             <img src="img/photoshop.png" alt="" />
             <h3>Photoshop</h3>
           </div>
         </div>

         <div className="skill_info">
           <div className="skill_bg">
             <img src="img/figma.png" alt="" />
             <h3>Figma</h3>
           </div>
         </div>

      </div>
    </div>

    

{/*Application Development section */}
    <div className="skills_content inactive">
      <div className="skills_header">
        <img src="img/controller2.svg" alt="" className="skills_icon"/>
        <div>
          <h1 className="skills_title">Application Development</h1>
          <span className="skills_subtitle">More than 6 years</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="skills_arrow">
        <path
        d="M17.71,11.29a1,1,0,0,0-1.42,0L13,14.59V7a1,1,0,0,0-2,0v7.59l-3.29-3.3a1,1,0,0,0-1.42,1.42l5,5a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l5-5A1,1,0,0,0,17.71,11.29Z"/>
        </svg>
        
      </div>

      <div className="skills_list grid">

         <div className="skill_info">
           <div className="skill_bg">
             <img src="img/ue4.png" alt="" />
             <h3>Unreal Engine 4</h3>
           </div>
         </div>

         <div className="skill_info">
           <div className="skill_bg">
             <img src="img/unity.png" alt="" />
             <h3>Unity</h3>
           </div>
         </div>

         <div className="skill_info">
           <div className="skill_bg">
             <img src="img/androidstudio.png" alt="" />
             <h3>Android Studio</h3>
           </div>
         </div>


      </div>
    </div>

  </div>


</div>


  </div>;
}



/** 28.01.2022 but splitted progress bars
 *     <div className="skills_content inactive">
      <div className="skills_header">
        <img src="img/brackets-curly.svg" alt="" className="skills_icon"/>
        <div>
          <h1 className="skills_title">Programming Languages</h1>
          <span className="skills_subtitle">More than 8 years</span>
        </div>
        <img src="img/arrow-down.svg" alt="" className="skills_arrow"/>
      </div>

      <div className="skills_list grid">

      <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">Java</h3>
          </div>
          <div className="skillbar_container">
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 ">
            </div>
          </div>
        </div>

        <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">Python</h3>
          </div>
          <div className="skillbar_container">
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 ">
            </div>
            <div className="skills_bar2 ">
            </div>
            <div className="skills_bar2 ">
            </div>
          </div>
        </div>

        <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">C++</h3>
          </div>
          <div className="skillbar_container">
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 ">
            </div>
            <div className="skills_bar2 ">
            </div>
            <div className="skills_bar2 ">
            </div>
            <div className="skills_bar2 ">
            </div>
          </div>
        </div>

        <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">SQL</h3>
          </div>
          <div className="skillbar_container">
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 ">
            </div>
            <div className="skills_bar2 ">
            </div>
          </div>
        </div>

        <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">C#</h3>
          </div>
          <div className="skillbar_container">
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 ">
            </div>
            <div className="skills_bar2 ">
            </div>
            <div className="skills_bar2 ">
            </div>
            <div className="skills_bar2 ">
            </div>
          </div>
        </div>

        <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">Javascript</h3>
          </div>
          <div className="skillbar_container">
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 a">
            </div>
            <div className="skills_bar2 ">
            </div>
            <div className="skills_bar2 ">
            </div>
            <div className="skills_bar2 ">
            </div>
            <div className="skills_bar2 ">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>


 */

/** 28.01.2022
 *     <div className="skills_content inactive">
      <div className="skills_header">
        <img src="img/brackets-curly.svg" alt="" className="skills_icon"/>
        <div>
          <h1 className="skills_title">Programming Languages</h1>
          <span className="skills_subtitle">More than 8 years</span>
        </div>
        <img src="img/arrow-down.svg" alt="" className="skills_arrow"/>
      </div>

      <div className="skills_list grid">

      <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">Java</h3>
            <span className="skills_number">90%</span>
          </div>
          <div className="skills_bar">
            <span className="skills_percentage skills_java"></span>
          </div>
        </div>

        <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">Python</h3>
            <span className="skills_number">70%</span>
          </div>
          <div className="skills_bar">
            <span className="skills_percentage skills_python"></span>
          </div>
        </div>

        <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">C++</h3>
            <span className="skills_number">50%</span>
          </div>
          <div className="skills_bar">
            <span className="skills_percentage skills_cpp"></span>
          </div>
        </div>


      </div>
    </div>

    <div className="skills_content inactive">
      <div className="skills_header">
        <img src="img/brackets-curly.svg" alt="" className="skills_icon"/>
        <div>
          <h1 className="skills_title">Programming Languages</h1>
          <span className="skills_subtitle">More than 8 years</span>
        </div>
        <img src="img/arrow-down.svg" alt="" className="skills_arrow"/>
      </div>

      <div className="skills_list grid">

      <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">Java</h3>
            <span className="skills_number">90%</span>
          </div>
          <div className="skills_bar">
            <span className="skills_percentage skills_java"></span>
          </div>
        </div>

        <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">Python</h3>
            <span className="skills_number">70%</span>
          </div>
          <div className="skills_bar">
            <span className="skills_percentage skills_python"></span>
          </div>
        </div>

        <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">C++</h3>
            <span className="skills_number">50%</span>
          </div>
          <div className="skills_bar">
            <span className="skills_percentage skills_cpp"></span>
          </div>
        </div>


      </div>
    </div>
 */


