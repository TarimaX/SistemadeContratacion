import * as Components from "./Components";

import EmailIcon from "@mui/icons-material/Email";

import KeyIcon from "@mui/icons-material/Key";

const SignInForm = ({
  signinForm,
  formErrors,
  registerButtonClicked,
  submitSignin,
}) => {
  return (
    <Components.Form>
      <Components.Title>Formulario de Admisión para docentes</Components.Title>
      <Components.Subtitle></Components.Subtitle>
      <div className="authForm">
        <div className="row">
          <div className="col">
            <label htmlFor="email">
              <EmailIcon />
            </label>
            <Components.Input
              type="email"
              placeholder="Email"
              ref={signinForm.email}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="password">
              <KeyIcon />
            </label>
            <Components.Input
              type="password"
              placeholder="Contraseña"
              ref={signinForm.password}
            />
          </div>
        </div>
        {formErrors.length !== 0 ? (
          <div className="formErrors">
            <ul>
              {formErrors.map((error, index) => (
                <li>{error}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {/* '6Ldicg4TAAAAAEIi-Tlg7YgHxcPCNVHvac92lrdX' */}
        <div style={{ width: "50px", height: "25px" }}></div>
        {/* Use anchor attribute to navigate to the "createAccount" section */}
        <div>
          <div className="row">
            <Components.Button
              onClick={submitSignin}
              type="button"
              anchor
              style={{
                backgroundColor: "#007B49",
                color: "white",
                marginRight: "15px",
              }}
            >
              Ingresar
            </Components.Button>
            <Components.Button
              onClick={registerButtonClicked}
              type="button"
              anchor
              href="#createAccount"
              style={{ backgroundColor: "#007B49", color: "white" }}
            >
              Registro
            </Components.Button>
          </div>
        </div>
      </div>
    </Components.Form>
  );
};

export default SignInForm;
