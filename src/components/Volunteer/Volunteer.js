import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Volunteer() {
  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          emailInput: "",
          subject: "",
          message: ""
        }}
        validationSchema={Yup.object().shape({
          fullName: Yup.string().required("Не внесовте име"),
          subject: Yup.string().required("Не внесовте тема"),
          message: Yup.string().required("Не внесовте порака"),
          emailInput: Yup.string()
            .email("Внесовте неправлен email")
            .required("Не внесовте email")
        })}
        onSubmit={fields => {
          console.log(JSON.parse(JSON.stringify(fields, null, 4)));
          // alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
        }}
        render={({ errors, status, touched }) => (
          <section
            className="mb-4"
            style={{ padding: "20%", paddingTop: "50px" }}
          >
            <h2 className="h1-responsive font-weight-bold text-center my-4">
              Волонтирај
            </h2>

            <p className="text-center w-responsive mx-auto mb-5">
              Do you have any questions? Please do not hesitate to contact us
              directly. Our team will come back to you within a matter of hours
              to help you.
            </p>

            <div className="row">
              <div className="col-md-9 mb-md-0 mb-5">
                <Form id="contact-form" name="contact-form" method="POST">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <label htmlFor="fullName">Вашето име</label>
                        <Field
                          name="fullName"
                          type="text"
                          className={
                            "form-control" +
                            (errors.fullName && touched.fullName
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="fullName"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <label htmlFor="emailInput">Вашиот email</label>
                        <Field
                          name="emailInput"
                          type="text"
                          className={
                            "form-control" +
                            (errors.emailInput && touched.emailInput
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="emailInput"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-0">
                        <label htmlFor="subject" className="">
                          Тема
                        </label>
                        <Field
                          type="text"
                          id="subject"
                          name="subject"
                          className={
                            "form-control" +
                            (errors.subject && touched.subject
                              ? " is-invalid"
                              : "")
                          }
                        ></Field>
                        <ErrorMessage
                          name="subject"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form">
                        <label htmlFor="message" className="">
                          Вашата порака
                        </label>
                        <Field
                          row="3"
                          type="text"
                          id="message"
                          name="message"
                          className={
                            "form-control" +
                            (errors.message && touched.message
                              ? " is-invalid"
                              : "")
                          }
                        ></Field>
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-md-left">
                    <button type="submit" className="btn btn-primary">
                      Испрати
                    </button>
                  </div>
                </Form>
                <div className="status"></div>
              </div>

              <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Скопје, Центар, Македонија</p>
                  </li>

                  <li>
                    <i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                  </li>

                  <li>
                    <i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@mdbootstrap.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}
      />
    </>
  );
}

export default Volunteer;
