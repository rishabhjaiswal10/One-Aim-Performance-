import React from "react";
import home1 from "../assets/img/home1.jpg";

export default function Booking() {
  return (
    <section className="video section" id="booking">
      <h2 className="section__title">Bookings</h2>

      <div className="video__container container">
        <p className="video__description">
          Book your favourite destination for vacation from anywhere, anytime.
        </p>

        {/* Background Image Section */}
        <div
          className="video__content"
          style={{
            backgroundImage: `url(${home1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div id="contact" className="contact-area section-padding">
            <div className="container">
              <div
                className="row"
                style={{ marginBottom: "50px", marginTop: "50px" }}
              >
                <div className="contact" style={{ textAlign: "center" }}>
                  <form className="form" name="enq">
                    <div className="row" style={{ textAlign: "center" }}>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <br />
                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <br />
                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <br />
                      <div className="col-md-12 text-center">
                        <button
                          type="submit"
                          value="Send message"
                          name="submit"
                          id="submitButton"
                          className="btn btn-contact-bg"
                          title="Submit Your Message!"
                        >
                          Submit
                        </button>
                        &nbsp;&nbsp;
                        <button
                          type="reset"
                          value="Reset message"
                          name="reset"
                          id="resetButton"
                          className="btn btn-contact-bg"
                          title="Reset Your Message!"
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
