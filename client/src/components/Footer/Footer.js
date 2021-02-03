import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footerbody">
      <div className="row  justify-content-center py-5 mr-0">
        <div className="col-11">
          <div className="row">
            <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
              <h3 className="text-muted mb-md-0 mb-5 watermark">JTCC.</h3>
            </div>
            <div className="col-xl-2 col-md-4 col-sm-4 col-12">
              <h6 className="mb-3 mb-lg-4 bold-text ">
                <b>MENU</b>
              </h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-md-4 col-sm-4 col-12">
              <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                <b>ADDRESS</b>
              </h6>
              <p className="mb-1">Az Zarqa' / Amman, Jordan</p>
              <p>Lana AlRamahi Co. </p>
              <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                <b>Created for</b>
              </h6>
              <p>Jordainian Tech Companies Community</p>
            </div>
          </div>
          <div className="row ">
            <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
              <p className="social text-muted mb-0 pb-0 bold-text">
                <a href="http://www.github.com/LanaALramahi" target="_blank">
                  <img
                    alt="social1"
                    src={github}
                    style={{ height: "42px", padding: "8px" }}
                  ></img>
                </a>
                <a
                  href="http://www.linkedin.com/in/lana-t-alramahi/"
                  target="_blank"
                >
                  <img
                    alt="social2"
                    src={linkedin}
                    style={{ height: "42px", padding: "8px" }}
                  ></img>
                </a>
              </p>
              <small className="rights">
                <span>&#174;</span> JTCC All Rights Reserved.
              </small>
            </div>
            <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
              <h6 className="mt-55 mt-2 text-muted bold-text">
                <b>Lana AlRamahi</b>
              </h6>
              <small>
                {" "}
                <span>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>{" "}
                <a href="mailto:lanaalramahi00@gmail.com">
                  lanaalramahi00@gmail.com
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
