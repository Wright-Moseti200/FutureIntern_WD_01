/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect,useState} from "react";
import { createRoot } from "react-dom/client"; 
import menuopen from "./menu_open.svg";
import menuclose from "./menu_close.svg";
import "./index.css";

const App = () => {

  let [result, setResult] = useState(true);
  let [position, setposition] = useState(610);
  let [images, setImages] = useState(menuopen);
  const onSubmit = async (event) => {
  
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "47bd7ea9-4143-497b-86c1-a3b133f7f8fc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  
  let changeicon = () =>
  {
    
if (result === true)
{
  setposition(610)
      setImages(menuopen);
      setResult(!result);
    }
    else if (result === false)
{
  setposition(295);
      setImages(menuclose);
      setResult(!result);
    }
  }
  
  return (
    <div className="original">
      <nav className="even1" id="home">
        <p className="head">Wright</p>
        <div className="even3">
          <div className="icon-item">
            <img onClick={changeicon} src={images} />
          </div>
          <div style={{ left: position }} className="even">
            <p className="control">
              <a href="#home" offset="50" style={{ scrollBehavior: "smooth" }}>
                Home
              </a>
            </p>
            <p className="control">
              <a
                href="#About-me"
                offset="50"
                style={{ scrollBehavior: "smooth" }}
              >
                About-me
              </a>
            </p>
            <p className="control">
              <a
                href="#My-services"
                offset="50"
                style={{ scrollBehavior: "smooth" }}
              >
                Services
              </a>
            </p>
            <p className="control">
              <a
                href="#latest-work"
                offset="50"
                style={{ scrollBehavior: "smooth" }}
              >
                Portfolio
              </a>
            </p>
            <p className="control">
              <a href="#touch" offset="50">
                Contact
              </a>
            </p>
          </div>
        </div>
        <button className="btn">
          <a href="#touch">Connect with me</a>
        </button>
      </nav>
      <br />
      <br />
      <div className="section1">
        <div className="img"></div>
        <p className="par1">
          <span>I`m Wright Gichana,</span>Frontend developer based in Kenya
        </p>
        <p className="par2">
          I am a frontend developer from Kenya with 2 years experience in
          multiple languages like HTML,CSS,JAVASCRIPT,REACT JS and SQL
        </p>
        <br />
        <br />
        <div className="button-group">
          <button className="btn2">
            <a>Connect with me</a>
          </button>
          <button className="btn1">
            <a href="#About-me">My resume</a>
          </button>
        </div>
      </div>
      <p className="header" id="About-me">
        About me
      </p>
      <br />
      <div>
        <div className="About-me">
          <div className="image2 item1"></div>
          <p className="item2">
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field.
            <br />
            Throughout my career,I have had the priviledge of collaborating with
            presigious organization,contributing
            <br />
            to their success and growth
          </p>
          <p className="item3">
            My passion for frontEnd development is not only reflected in my
            extensive experience but also in the
            <br />
            enthusiasm and dedication i bring to each project
          </p>
          <div className="item4 item">
            <p>
              <div>HTML&CSS</div>
              <input type="range" value="95" id="input" />{" "}
            </p>
          </div>
          <div className="item5 item">
            <p>
              <div>React Js</div>
              <input type="range" value="0" id="input" />
            </p>
          </div>
          <div className="item6 item">
            <p>
              <div>JavaScript</div>
              <input type="range" value="85" id="input" />{" "}
            </p>
          </div>
          <div className="item7 item">
            <p>
              <div>SQL</div>
              <input type="range" value="65" id="input" />
            </p>
          </div>
        </div>
        <br />
        <div className="group">
          <div className="subgroup1">
            <h2>10+</h2>
            <p>YEARS OF EXPERINCE</p>
          </div>
          <div className="subgroup2">
            <h2>90+</h2>
            <p>PROJECTS COMPLETED</p>
          </div>
          <div className="subgroup3">
            <h2>15+</h2>
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <p className="header" id="My-services">
        My Services
      </p>
      <br />
      <br />
      <div className="services-group">
        <div className="services-subgroup">
          <h2>01</h2>
          <h2 id="par">Web Design</h2>
          <p>Web development is the process of building.programming..</p>
          <p>
            Read more <i class="fa-solid fa-arrow-right"></i>
          </p>
        </div>
        <div className="services-subgroup">
          <h2>02</h2>
          <h2 id="par">Graphics Design</h2>
          <p>Web development is the process of building.programming..</p>
          <p>
            Read more <i class="fa-solid fa-arrow-right"></i>
          </p>
        </div>
        <div className="services-subgroup">
          <h2>03</h2>
          <h2 id="par">Social Media</h2>
          <p>Web development is the process of building.programming..</p>
          <p>
            Read more <i class="fa-solid fa-arrow-right"></i>
          </p>
        </div>
        <div className="services-subgroup">
          <h2>04</h2>
          <h2 id="par">App Design</h2>
          <p>Web development is the process of building.programming..</p>
          <p>
            Read more <i class="fa-solid fa-arrow-right"></i>
          </p>
        </div>
        <div className="services-subgroup">
          <h2>05</h2>
          <h2 id="par">Digital marketing</h2>
          <p>Web development is the process of building.programming..</p>
          <p>
            Read more <i class="fa-solid fa-arrow-right"></i>
          </p>
        </div>
        <div className="services-subgroup">
          <h2>06</h2>
          <h2 id="par">Content writing</h2>
          <p>Web development is the process of building.programming..</p>
          <p>
            Read more <i class="fa-solid fa-arrow-right"></i>
          </p>
        </div>
      </div>
      <br />
      <br />
      <p className="header" id="latest-work">
        My latest work
      </p>
      <br />
      <div className="services-group">
        <div className="work1"></div>
        <div className="work2"></div>
        <div className="work3"></div>
        <div className="work4"></div>
        <div className="work5"></div>
        <div className="work6"></div>
      </div>
      <br />
      <br />
      <p className="header" id="touch">
        Get in touch
      </p>
      <br />
      <div class="touch-section">
        <main>
          <h1 className="par">Let`s talk</h1>
          <p>
            I`m currently available to take on new projects, so feel free to
            send
            <br />
            me a message about anything that you me to work on. You can
            <br />
            contact anytime
          </p>
          <br />
          <p>
            <i class="fa-solid fa-message"></i> Wrightgichana@gmail.com
          </p>
          <br />
          <p>
            <i class="fa-solid fa-phone"></i> 0714471627
          </p>
          <br />
          <p>
            <i class="fa-solid fa-location-dot"></i> KE,Mombasa
          </p>
        </main>
        <form onSubmit={onSubmit}>
          <p>Your Name</p>
          <input
            class="input"
            type="text"
            placeholder="Enter your name"
            name="name"
          />
          <br />
          <p>Your Email</p>
          <input
            class="input"
            type="email"
            placeholder="Enter your email"
            name="email"
          />
          <br />
          <p>Write your message</p>
          <textarea
            className="area"
            placeholder="Enter your message"
            name="comment"
          ></textarea>
          <br />
          <br />
          <input className="input1" type="submit" />
        </form>
      </div>
      <br />
      <br />
      <div className="main-footer">
        <div className="footer">
          <div className="footer1">
            <div className="footer11">
              <h1>Wright</h1>
              <p>
                I am a frontend developer from, USA with 10 years of
                <br />
                experience in companies like Microsoft, Tesla and Apple.
              </p>
            </div>
            <div className="footer12">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
            <br/>
          </div>
        </div>
        <div className="footer2">
          <p>@2024 Wright Gichana. All rights reserved.</p>
          <div className="footer21">
            <p>Term of Services</p>
            <p>Privacy poilicy</p>
            <p>Connect With me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const app = document.querySelector("#root");
const root = createRoot(app);
root.render(<App/>);