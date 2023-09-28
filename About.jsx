import React from "react";
import "./About.css";
import { CheckCircleTwoTone } from "@ant-design/icons";
export default function About() {
  return (
    <div style={{marginTop:"100px"}}>
      <h2 className="text-center text-4xl">About Us</h2>
      <hr />
      <div className="About_section">
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            accusantium dolorum quos enim repellat! Deserunt ab fugiat
            distinctio, soluta maxime officia repellendus tempora ipsam
            voluptatum! Deleniti odio blanditiis ipsum nam?
          </p>
          <button>Read More</button>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=740&t=st=1693749746~exp=1693750346~hmac=29be56b70cf419b847a57ac88e24a7748c8d1b8d1d3a8aa33e6a08d0c91ebc74"
           
            alt=""
          />
        </div>
      </div>
      <div className="About-section-bottom">
        <div>
          <img
            src="about2.jpg"
            alt=""
          />
        </div>
        <div className="About-large-section">
          <h2 className="font-bold text-4xl">Who Are We?</h2>
          <h4 className="font-bold text-1xl">
            We are highly passionate about Web and Mobile application
            Development Service.
          </h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            doloremque veritatis dolor consequatur, eveniet cupiditate nam?
            Temporibus at dolores hic mollitia iure vel, ipsam sunt rerum eaque.
            Repudiandae, vel vero! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quod, consequuntur fuga. Culpa repudiandae dolor
            maiores porro, nihil suscipit, eveniet perferendis omnis ipsam
            pariatur eos placeat repellat id vel? Ut, illo.
          </p>
          <div  className="check_about">
            <p>
              <CheckCircleTwoTone /> Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <p>
              <CheckCircleTwoTone /> Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <p>
              <CheckCircleTwoTone /> Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <p>
              <CheckCircleTwoTone /> Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="About-section3">
        <h2 className="font-bold text-2xl" >How We Aid in Brand Development</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          temporibus itaque ipsam libero repudiandae placeat expedita
          repellendus iusto nisi autem necessitatibus accusantium. Porro.
        </p>
      </div>
    </div>
  );
}
