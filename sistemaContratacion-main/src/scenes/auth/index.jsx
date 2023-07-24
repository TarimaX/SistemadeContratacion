import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { login } from "../../reducers/auth.slice";
import * as Components from "../../components/Components";

import SignInForm from "../../components/SignInForm";
import SignUpForm from "../../components/SignUpForm";
import CreateAccountForm from "../../components/CreateAccountForm";

function validateIdentificationNumber(identificationNumber) {
  if (identificationNumber.length !== 10) {
    return false;
  }

  if (identificationNumber.match(/^[0-9]+$/) === null) {
    return false;
  }

  const verifierDigit = parseInt(identificationNumber.substr(9, 1));

  let sum = 0;

  for (let i = 0; i < 9; i++) {
    const digit = parseInt(identificationNumber.substr(i, 1));
    console.log(digit);

    if (i % 2 === 0) {
      const doubled = digit * 2;
      sum += doubled >= 10 ? doubled - 9 : doubled;
    } else {
      sum += digit;
    }
  }

  const modulus = sum % 10;
  const higher = 10 - modulus + sum;

  console.log(higher, modulus, sum);

  return modulus === 0 ? verifierDigit === 0 : higher - sum === verifierDigit;
}

const  Auth = ()  =>{
  const [signIn, setSignIn] = React.useState(true);
  const [fullName, setFullName] = React.useState("");
  const [identificationNumber, setIdentificationNumber] = React.useState("");
  const [identificationType, setIdentificationType] = React.useState("");
  const [senescytTitle, setSenescytTitle] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [formErrors, setFormErrors] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const identificationInput = React.useRef(null);
  const signinForm = {
    email: React.useRef(null),
    password: React.useRef(null),
  };

  useEffect(() => {
    setCurrentPage("signin");
  }, []);

  const submitSignin = () => {
    if (signinForm.email.current.value.trim().length === 0) {
      return signinForm.email.current.focus();
    }

    if (signinForm.password.current.value.trim().length === 0) {
      return signinForm.password.current.focus();
    }

    setFormErrors([]);
    dispatch(login());
  };

  const submitRegister = () => {
    setFormErrors([]);
    setCurrentPage("signin");
    setSignIn(true);
  };

  const registerButtonClicked = () => {
    setCurrentPage("signup");
    setSignIn(true);
  };

  const registerNextClick = () => {
    if (identificationNumber.trim().length === 0) {
      return identificationInput.current.focus();
    }

    if (!validateIdentificationNumber(identificationNumber)) {
      return setFormErrors(["identificación inválida"]);
    }

    setFormErrors([]);
    setFullName("DIEGO MEDARDO SAAVEDRA GARCIA");
    setIdentificationType("Cédula");
    setGender("MASCULINO");

    setSignIn(false);
  };

  const handleBackClick = () => {
    setCurrentPage("signin");
    setSignIn(true);
  };

  return (
    <div className="authPage">
      <Components.Container
        style={{
          background: "linear-gradient(180deg, #007B49 0%, #00A650 100%)",
        }}
      >
        <Components.SignUpContainer signinIn={signIn}>
          <CreateAccountForm
            fullName={fullName}
            gender={gender}
            handleBackClick={handleBackClick}
            identificationNumber={identificationNumber}
            identificationType={identificationType}
            senescytTitle={senescytTitle}
            setSenescytTitle={setSenescytTitle}
            submitRegister={submitRegister}
          />
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          {currentPage === "signin" ? (
            <SignInForm
              formErrors={formErrors}
              registerButtonClicked={registerButtonClicked}
              signinForm={signinForm}
              submitSignin={submitSignin}
            />
          ) : currentPage === "signup" ? (
            <SignUpForm
              formErrors={formErrors}
              identificationInput={identificationInput}
              handleBackClick={handleBackClick}
              identificationNumber={identificationNumber}
              registerNextClick={registerNextClick}
              setIdentificationNumber={setIdentificationNumber}
            />
          ) : null}
        </Components.SignInContainer>

        <Components.OverlayContainer
          signinIn={signIn}
          style={{
            background: "linear-gradient(180deg, #007B49 0%, #00A650 100%)",
          }}
        >
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel
              signinIn={signIn}
              style={{
                background: "linear-gradient(180deg, #007B49 0%, #00A650 100%)",
                color: "white",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/27/Logo_ESPE.png"
                alt="ESPE"
                style={{
                  maxWidth: "300px",
                  filter: "drop-shadow(-10px 10px 5px rgba(0, 0, 0, 0.5))",
                }}
              />
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel
              signinIn={signIn}
              style={{
                background: "linear-gradient(180deg, #007B49 0%, #00A650 100%)",
                color: "white",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/27/Logo_ESPE.png"
                alt="ESPE"
                style={{
                  maxWidth: "300px",
                  filter: "drop-shadow(-10px 10px 5px rgba(0, 0, 0, 0.5))",
                }}
              />
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}

export default Auth;
