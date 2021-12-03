import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="container1">
        <div style={{ textAlign: "center" }}>
          <h3 style={{ fontSize: "30px", fontWeight: "900" }}>GET IN TOUCH</h3>
          <p style={{ fontSize: "20px", fontWeight: "900" }}></p>
        </div>
        <div className="row1">
          <div className="column1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Biswa_Bangla_Gate_in_Kolkata_01.jpg/1200px-Biswa_Bangla_Gate_in_Kolkata_01.jpg"
              style={{ width: "100%",height:"100%" }}
              alt="img7"
            />
          </div>
          <div className="column1">
            <form>
              <label for="fname">
                <b>First Name</b>
              </label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
              <label for="lname">
                <b>Last Name</b>
              </label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
              <label for="lname">
                <b>Email Address</b>
              </label>
              <input
                type="text"
                id="email"
                name="emailaddress"
                placeholder="Enter Your Email Address.."
              />

              <label for="subject">
                <b>Subject</b>
              </label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "170px" }}
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
