import * as Components from "./Components";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";

const CreateAccountForm = ({
    fullName,
    identificationNumber,
    identificationType,
    gender,
    senescytTitle,
    setSenescytTitle,
    handleBackClick,
    submitRegister
}) =>{

    return (
        <Components.Form id="createAccount">
            <Components.Title>
              FORMULARIO DE ADMISIÓN PARA DOCENTES
            </Components.Title>
            <div className="authForm">
              <div className="row">
                <label>Nombres Completos</label>
                <span>{fullName}</span>
              </div>
              <div className="row">
                <div className="col">
                  <label>Tipo de identificación</label>
                  <span>{identificationType}</span>
                </div>
                <div className="col">
                  <label>Número de identificación</label>
                  <span>{identificationNumber}</span>
                </div>
              </div>
              <div className="row">
                <label htmlFor="gender">Sexo</label>
                <span>{gender}</span>
              </div>
              <div className="row">
                <label htmlFor="senescytTitle">
                  Selecciona tu titulo Senescyt
                </label>
                <Components.TitleSelect
                  value={senescytTitle}
                  onChange={(e) => setSenescytTitle(e.target.value)}
                >
                  <option value="">Selecciona tu título Senescyt</option>
                  <option value="Magíster">Magíster</option>
                  <option value="Doctor/a">Doctor/a</option>
                  <option value="Licenciado/a">Licenciado/a</option>
                  <option value="Ingeniero/a">Ingeniero/a</option>
                  <option value="Arquitecto/a">Arquitecto/a</option>
                  <option value="Médico/a">Médico/a</option>
                </Components.TitleSelect>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="email">
                    <EmailIcon />
                  </label>
                  <Components.Input type="email" placeholder="Email" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="password">
                    <KeyIcon />
                  </label>

                  <Components.Input type="password" placeholder="Contraseña" />
                </div>
              </div>
              <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                <Components.Button
                  type="button"
                  onClick={handleBackClick}
                  style={{
                    borderColor: "white",
                    color: "white",
                    marginRight: "10px",
                  }}
                >
                  Volver
                </Components.Button>
                <Components.Button
                  type="button"
                  onClick={submitRegister}
                  style={{ backgroundColor: "#007B49", color: "white" }}
                >
                  Registro
                </Components.Button>
              </div>
            </div>
          </Components.Form>
    )
}

export default CreateAccountForm