import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const mainDiv = {
  paddingBottom: "20%",
  paddingLeft: "20%",
  paddingRight: "20%",
  paddingTop: "5%"
};

class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <div style={mainDiv}>
          <h2 style={{ textAlign: "center" }}>Write to Us</h2>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              message: ""
            }}
            validationSchema={Yup.object().shape({
              firstName: Yup.string().required("First Name is required"),
              lastName: Yup.string().required("Last Name is required"),
              email: Yup.string()
                .email("Email is invalid")
                .required("Email is required")
            })}
            onSubmit={fields => {
              alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
            }}
            render={({ errors, status, touched }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    name="firstName"
                    type="text"
                    className={
                      "form-control" +
                      (errors.firstName && touched.firstName
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    name="lastName"
                    type="text"
                    className={
                      "form-control" +
                      (errors.lastName && touched.lastName ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    type="text"
                    className={
                      "form-control" +
                      (errors.email && touched.email ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Message</label>
                  <Field
                    name="message"
                    type="text"
                    id="comment"
                    className={
                      "form-control" +
                      (errors.lastName && touched.lastName ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="messsage"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary mr-2">
                    Send Message
                  </button>
                </div>
              </Form>
            )}
          />
        </div>
      </div>
    );
  }
}

export default ContactUs;
