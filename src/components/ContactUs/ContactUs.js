import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import SanoButton from "../SanoButton/SanoButton";

import content from "../../utils/content";
import { LanguageContext } from "../../utils/LanguageContext";

function ContactUS() {
  const { language } = useContext(LanguageContext);
  const contactusContent = content[language].contactus;

  const { form, h2, p, address, location, phone, mail } = contactusContent;
  const { errorText, inputs } = form;

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
          fullName: Yup.string().required(errorText.fullName),
          subject: Yup.string().required(errorText.subject),
          message: Yup.string().required(errorText.message),
          emailInput: Yup.string()
            .email(errorText.emailInput.email)
            .required(errorText.emailInput.required)
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
              Исконтактирај не
            </h2>

            <p className="text-center w-responsive mx-auto mb-5">{p}</p>

            <div className="row">
              <div className="col-md-9 mb-md-0 mb-5">
                <Form id="contact-form" name="contact-form" method="POST">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <label htmlFor="fullName">{inputs.fullName}</label>
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
                        <label htmlFor="emailInput">{inputs.email}</label>
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
                          {inputs.subject}
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
                          {inputs.message}
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
                    <SanoButton
                      variant="cta"
                      children={inputs.buttonText}
                      color="black"
                      hoverColor="black"
                      padding="12px 24px"
                    />
                  </div>
                </Form>
                <div className="status"></div>
              </div>

              <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>{location}</p>
                  </li>

                  <li>
                    <i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>{phone}</p>
                  </li>

                  <li>
                    <i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>{mail}</p>
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

export default ContactUS;
