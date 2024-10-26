import "./payment.scss";
import "./delivery.css";
import "./contact.css";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Amex from "../../svg/Amex";
import Group from "../../svg/Group";
import Gsvg from "../../svg/Gsvg";
import Visa from "../../svg/Visa";
import Lock from "../../svg/Lock";
import Four from "../../svg/Four";
import countriesAndStates from "../../utils/countries";
import WhyChoose from "./WhyChoose";
import useIsDesktop from "../../utils/screen";

const Payment = () => {
  const isDesktopSize = useIsDesktop();

  const [country, setCountry] = useState<string>("");
  const [state, setState] = useState<string>("");

  useEffect(() => {
    const firstCountry = Object.keys(countriesAndStates)[0];
    if (firstCountry) {
      setCountry(firstCountry);
    }
  }, [countriesAndStates]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
    setState("");
    formik.setFieldValue("country", e.target.value);
    formik.setFieldValue("state", "");
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
    formik.setFieldValue("state", e.target.value);
  };

  const states = countriesAndStates[country] || [];

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      country: "",
      state: "",
      zip: "",
      paymentMethod: "",
      cardNumber: "",
      expiration: "",
      securityCode: "",
      nameOnCard: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      address: Yup.string().required("Address is required"),
      zip: Yup.string()
        .required("ZIP/Postal Code is required")
        .matches(/^\d{5}(-\d{4})?$/, "Must be a valid ZIP code"),
      country: Yup.string().required("Country is required"),
      state: Yup.string().required("State/Province is required"),
      cardNumber: Yup.string()
        .matches(
          /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|7[0-9]{15})$/,
          "Invalid credit card number",
        )
        .required("Card number is required"),
      expiration: Yup.string()
        .matches(
          /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
          "Expiration date must be in MM/YY format",
        )
        .required("Expiration date is required"),
      securityCode: Yup.string()
        .matches(/^[0-9]{3,4}$/, "Invalid security code")
        .required("Security code is required"),
      nameOnCard: Yup.string().required("Name on card is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      localStorage.setItem("paymentDetails", JSON.stringify(values));
      resetForm();
    },
  });

  return (
    <>
      <form className="leftSide" onSubmit={formik.handleSubmit}>
        <div className="bg p-3 pt-4 mb-3 contactContainer">
          <h3 style={{ marginBottom: "12px" }} className="contact">
            Contact
          </h3>
          <div>
            <input
              type="email"
              className="form-control p-3"
              placeholder="Email Address"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="formikValidation">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <div className="p-3 bgColorWhite orderContainer">
          <h3 style={{ marginBottom: "12px" }} className="contact">
            Delivery
          </h3>
          <div className="form-row d-flex gap-new pb-3">
            <div className="col">
              <input
                type="text"
                className="form-control p-3"
                placeholder="First name"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="formikValidation">
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control p-3"
                placeholder="Last name"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="formikValidation">{formik.errors.lastName}</div>
              ) : null}
            </div>
          </div>
          <div className="col pb-3">
            <input
              type="text"
              className="form-control p-3"
              placeholder="Address"
              {...formik.getFieldProps("address")}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="formikValidation">{formik.errors.address}</div>
            ) : null}
          </div>

          <div className="d-flex pb-2 gap-new">
            <div className="col">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingSelect"
                  value={state}
                  onChange={handleStateChange}
                  disabled={!country}
                >
                  {states.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <label htmlFor="floatingSelect">State / Province</label>
              </div>
              {formik.touched.state && formik.errors.state ? (
                <div className="formikValidation">{formik.errors.state}</div>
              ) : null}
            </div>

            <div className="col">
              <input
                type="text"
                className="form-control p-3"
                placeholder="ZIP / Postal Code"
                {...formik.getFieldProps("zip")}
              />
              {formik.touched.zip && formik.errors.zip ? (
                <div className="formikValidation">{formik.errors.zip}</div>
              ) : null}
            </div>
          </div>

          <div className="col">
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelectGrid"
                value={country}
                onChange={handleCountryChange}
              >
                {Object.keys(countriesAndStates).map((countryOption) => (
                  <option key={countryOption} value={countryOption}>
                    {countryOption}
                  </option>
                ))}
              </select>
              <label htmlFor="floatingSelectGrid">Country</label>
            </div>
            {formik.touched.country && formik.errors.country ? (
              <div className="formikValidation">{formik.errors.country}</div>
            ) : null}
          </div>
        </div>
        <div className="p-3 bgColorWhite mt-3 orderContainer">
          <div>
            <h3 className="contact mb-2">Payment</h3>
            <p className="securedPaymentsText">
              All transactions are secure and encrypted.
            </p>
            <div
              className={`p-3 d-flex justify-content-between borderRadiusPayment`}
            >
              <div className="d-flex gap-3">
                <input className="form-check-input" type="radio" checked />
                <div>Credit Card</div>
              </div>
              <div className="d-flex" style={{ gap: "3px" }}>
                <Visa />
                <Gsvg />
                <Amex />
                <Group />
                <Four />
              </div>
            </div>
          </div>
          <div className="bgColorGrey borderPayment">
            <div className="col pb-3">
              <input
                type="text"
                className="form-control p-3"
                placeholder="Card number"
                {...formik.getFieldProps("cardNumber")}
              />
              {formik.touched.cardNumber && formik.errors.cardNumber ? (
                <div className="formikValidation">
                  {formik.errors.cardNumber}
                </div>
              ) : null}
            </div>
            <div className="form-row d-flex gap-new pb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Expiration (MM/YY)"
                  {...formik.getFieldProps("expiration")}
                />
                {formik.touched.expiration && formik.errors.expiration ? (
                  <div className="formikValidation">
                    {formik.errors.expiration}
                  </div>
                ) : null}
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Security code"
                  {...formik.getFieldProps("securityCode")}
                />
                {formik.touched.securityCode && formik.errors.securityCode ? (
                  <div className="formikValidation">
                    {formik.errors.securityCode}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="col">
              <input
                type="text"
                className="form-control p-3"
                placeholder="Name on card"
                {...formik.getFieldProps("nameOnCard")}
              />
              {formik.touched.nameOnCard && formik.errors.nameOnCard ? (
                <div className="formikValidation">
                  {formik.errors.nameOnCard}
                </div>
              ) : null}
            </div>
          </div>
          <button
            type="submit"
            className="submitButton d-flex py-3 px-4 justify-content-center align-items-center gap-2 w-100"
          >
            COMPLETE ORDER
          </button>

          <div className="d-flex justify-content-center gap-1 align-items-center mt-3">
            <Lock />
            <p className="encryptedText m-0">
              All transactions are secure and encrypted
            </p>
          </div>
        </div>
      </form>
      {!isDesktopSize && <WhyChoose />}
    </>
  );
};

export default Payment;
