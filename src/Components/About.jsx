// About.jsx
import React from "react";
import "../App.css";

function About(props) {
  const myStyle = {
    color: props.mode === 'dark' ? 'white' : "#383838",
    backgroundColor: props.mode === 'dark' ? '#383838' : "white",
    transition: "all 0.3s ease"
  };

  return (
    <div className="container my-3">
      <h1 className="text-center my-3">About</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Power of Text Analyzer</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Welcome to our Text Analyzer Website, where you can effortlessly enhance your text with a variety of features. After inputting your text, explore options like converting to uppercase or lowercase, utilizing text-to-speech for a dynamic presentation, and eliminating extra spaces for a polished look. Copy your modified text with ease, or start afresh by clearing the textbox. The website also provides word and character counters, adding practicality to your editing process. As a thoughtful touch, discover the average time required to read the text, making this platform not only versatile but also meticulously optimized for an engaging and efficient experience. Transform your words with just a click!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Checkout My Profile</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body text-center" style={myStyle}>
              <div>
                <b><a href="https://www.linkedin.com/in/anilkumar-k-30322322a">LinkedIn</a></b>
              </div>
              <div>
                <b><a href="https://github.com/anilk4">Github</a></b>
              </div>
              <div>
                <b><a href="https://leetcode.com/anilkumar_007/">LeetCode Coding Profile</a></b>
              </div>
              <p>
                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in Facebook, blog, books, Excel document, PDF document, essays, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
