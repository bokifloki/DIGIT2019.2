import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import SanoButton from "../SanoButton/SanoButton";

function FormModule() {
  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          subject: "",
          message: ""
        }}
        validationSchema={Yup.object().shape({
          fullName: Yup.string().required("Не внесовте име"),
          subject: Yup.string().required("Не внесовте тема"),
          message: Yup.string().required("Не внесовте порака"),
          email: Yup.string()
            .email("Внесовте неправлен email")
            .required("Не внесовте email")
        })}
        onSubmit={fields => {
          console.log(JSON.parse(JSON.stringify(fields, null, 4)));
          // alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
        }}
        render={({ errors, status, touched }) => (
          <div
            style={{
              marginBottom: "0px"
            }}
          >
            <div>
              <h2 className="h1-responsive font-weight-bold text-center my-4">
                Пријави се
              </h2>

              <div className="row">
                <div className="col-md-9 mb-md-0 mb-5 mx-auto">
                  <Form id="contact-form" name="contact-form" method="POST">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <label htmlFor="fullName">Вашето име</label>
                          <Field
                            name="fullName"
                            type="text"
                            style={{ color: "red" }}
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
                          <label htmlFor="email" className="">
                            Вашиот email
                          </label>
                          <Field
                            name="email"
                            type="text"
                            className={
                              "form-control" +
                              (errors.email && touched.email
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name="email"
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
                        children="Испрати"
                        color="black"
                        hoverColor="black"
                        padding="12px 24px"
                      />
                    </div>
                  </Form>
                  <div className="status"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </>
  );
}

export default FormModule;
