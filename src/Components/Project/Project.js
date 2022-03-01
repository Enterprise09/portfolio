import React from "react";
import { BiCheck } from "react-icons/bi";
import "./Project.css";

function Project() {
  const data = [
    {
      title: "Frontend",
      features: [
        "UI/UX Design by use Adobe XD",
        "Reasponsive layout design",
        "Simple chat, vote program with React-Hooks",
        "Get data from API by use axios library",
        "Connet to server by use WebSocket",
        "Meeting program with chating by use WebRTC",
      ],
    },
    {
      title: "Mobile",
      features: [
        "Crossplatform Application",
        "Push Notification to user",
        "OAuth Login by use Firebase",
        "Scan QRCode and Barcode by use Zxing library",
        "Fast display with Recycler view",
        "MVVM Design pattern",
      ],
    },
    {
      title: "Backend",
      features: [
        "Spring boot Framework with JPA",
        "Restful API Server",
        "Send Push Notification to client by use Firebase",
        "Real time response server made with Socket.io",
        "WebSocket server that on the HTTP server",
      ],
    },
  ];
  return (
    <section id="project">
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className="container project__container">
        {data.map((item, index) => (
          <article className="project" key={index}>
            <div className="project__head">
              <h3>{item.title} Development</h3>
            </div>
            <ul className="project__list">
              {item.features.map((feature, index) => (
                <li>
                  <BiCheck className="project__list-icon" />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
