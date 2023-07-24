import * as Components from "./Components";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import ReCAPTCHA from "react-google-recaptcha";


const SignUpForm = ({
  identificationInput,
  identificationNumber,
  setIdentificationNumber,
  formErrors,
  handleBackClick,
  registerNextClick
}) => {
  <Components.Form>
    <Components.Title>Registro</Components.Title>
    <Components.Subtitle>Ingrese su cédula</Components.Subtitle>
    <div style={{ display: "flex", alignItems: "center" }}>
      <Components.NumericInput
        ref={identificationInput}
        value={identificationNumber}
        onChange={(e) => setIdentificationNumber(e.target.value)}
        type="number"
        placeholder="Cédula"
        maxDigits={10}
        style={{ marginRight: "10px" }}
      />
      <ContactEmergencyIcon style={{ color: "#777" }} />
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
    <ReCAPTCHA
      sitekey="6Ldicg4TAAAAAMXRFd5wWjZa5ihYFlmb95106bPR"
      size="normal"
    />
    {/* '6Ldicg4TAAAAAEIi-Tlg7YgHxcPCNVHvac92lrdX' */}
    <div style={{ width: "50px", height: "25px" }}></div>
    {/* Use anchor attribute to navigate to the "createAccount" section */}
    <div className="row">
      <Components.Button
        type="button"
        onClick={handleBackClick}
        style={{
          borderColor: "white",
          color: "white",
          marginRight: "15px",
        }}
      >
        Volver
      </Components.Button>
      <Components.Button
        onClick={registerNextClick}
        type="button"
        anchor
        href="#createAccount"
        style={{ backgroundColor: "#007B49", color: "white" }}
      >
        Siguiente
      </Components.Button>
    </div>
  </Components.Form>;
};

export default SignUpForm;
