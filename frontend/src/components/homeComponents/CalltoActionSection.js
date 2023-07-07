import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Precisando de ajuda?</h2>
              <p>Cadastre-se e nos conheça mais.</p>
              <form className="form-section">
                <input placeholder="Seu Email..." name="email" type="email" />
                <input value="Sim... Enviar!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
