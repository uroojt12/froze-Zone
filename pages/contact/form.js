import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <section className="contact-us">
        <div className="shape">
          <img src="images/h-shape.png" alt="" />
        </div>
        <div className="contain">
          <div className="sec_heading">
            <h5>Contact Us</h5>
            <h2>Drop us a line</h2>
          </div>
          <div className="sec-cntnt">
            <p>Any questions of remarks? Just wirte us a message!</p>
          </div>
          <div className="inner">
            <h3>Let's Start</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-12">
                  <div className="txtGrp">
                    <input
                      className="txtBox"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      {...register("name", {
                        required: "Required",
                        pattern: {
                          value: /^[a-zA-Z]+([- '][a-zA-Z]+)*$/,
                          message: "Invalid value!",
                        },
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="name"
                      render={({ message }) => (
                        <p className="error">
                          <i className="fa-solid fa-warning"></i> {message}
                        </p>
                      )}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <input
                      className="txtBox"
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Email Address"
                      {...register("email", {
                        required: "Required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address",
                        },
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="email"
                      render={({ message }) => (
                        <p className="error">
                          <i className="fa-solid fa-warning"></i> {message}
                        </p>
                      )}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <input
                      className="txtBox"
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="Phone"
                      {...register("phone", {
                        required: "Required",
                        pattern: {
                          value: /^\+?[0-9()-]*$/,
                          message: "Invalid value!",
                        },
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="phone"
                      render={({ message }) => (
                        <p className="error">
                          <i className="fa-solid fa-warning"></i> {message}
                        </p>
                      )}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <input
                      className="txtBox"
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      {...register("subject", { required: "Required" })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="subject"
                      render={({ message }) => (
                        <p className="error">
                          <i className="fa-solid fa-warning"></i> {message}
                        </p>
                      )}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <textarea
                      id="message"
                      placeholder="Enter Your Message Here"
                      className="txtBox txtArea"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp btn-box">
                    <button className="site_btn theme-btn-one">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="shape-1">
          <img src="images/contact-1.png" alt="" />
        </div>
        <div className="shape-2">
          <img src="images/t-1.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Form;
