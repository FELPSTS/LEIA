import React from "react";
import MenuButton from "./images/menubar.png";
import LogoLeia from "../../images/logoleia_arquivo.png";
import BasicCard from "./components/Card";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  let navigate = useNavigate();
  const [btnState, setBtnState] = React.useState(false);

  const { state } = 1; //useLocation()
  const { userId } = 1; //state

  function openNav() {
    setBtnState((btnState) => !btnState);
    document.querySelector('.user',)
        .classList.toggle('open');
    
    document.querySelector('.user-container',)
        .classList.toggle('open');
  }

  React.useEffect(() => {
    console.log(state);
  }, []);

  let toggleClassCheck = btnState ? "-open" : "";

  return (
    <div className="homePage">
      <div className={`sideMenu${toggleClassCheck}`}>
        <div className="menu-separate">
          <div className="top-align">
            <div className="menubutton">
              <img
                src={MenuButton}
                id="menubutton"
                alt="menubutton"
                onClick={() => {
                  openNav();
                }}
              />
            </div>
            <div className="bottom-align">
              <div className="user-container">
                <FontAwesomeIcon className="ft" icon={faUser} />
                <p className="user">User</p>
              </div>
            </div>
          </div>
          <div className="bottom-align">
            <img
              src={LogoLeia}
              className="logo lateral"
              onClick={() => navigate("/")}
            ></img>
          </div>
        </div>
      </div>
      <div className="content homePage">
        <h1 id="title-home">Seus Arquivos:</h1>
        <div className="cards">
          <div onClick={() => navigate("/work-page", { state: state })}>
            <BasicCard />
          </div>
          <div onClick={() => navigate("/work-page", { state: state })}>
            <BasicCard />
          </div>
          <div onClick={() => navigate("/work-page", { state: state })}>
            <BasicCard />
          </div>
        </div>
      </div>
    </div>
  );
}
