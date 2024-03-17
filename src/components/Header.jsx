import React from "react";
import logo from "../../public/assets_new/government-dubai.png";
import Rta from "../../public/assets_new/RTA.png";

function Header() {
  return (
    <div className="headerRTA">
      <div className="container">
        <div className="logosSection">
          <a
            href="https://www.digitaldubai.ae/ar"
            title="Government of Dubai"
            className="governmentDubai _updated">
            <img src={logo} />
          </a>
          <a
            href="https://www.rta.ae/wps/portal/rta/ae/home"
            title="RTA Dubai"
            className="RTADubai _updated">
            <img src={Rta} />
          </a>
        </div>
        {/* <nav className="navbar navbar-default menuParent">
          <ul className="nav navbar-nav">
            <li className="home active">
              <em>
                <svg className="normal" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <image href="/public/icons8-home-100.png" width={31} height={32} />
                </svg>
              </em>
            </li>
            <li>
              <a href="https://www.rta.ae/wps/portal/rta/ae/driver-and-carowner">Driver and Car Owner</a>
              <em className="header__icon">
                <svg className="normal" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <image href="/public/icons8-driver-100.png" width={31} height={32} />
                </svg>

              </em>
            </li>
            <li>
              <a href="https://www.rta.ae/wps/portal/rta/ae/public-transport">Public Transport</a>
              <em className="header__icon">
                <svg className="normal" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <image href="/public/icons8-metro-100.png" width={31} height={32} />
                </svg>
              </em>
            </li>
            <li>
              <a href="https://www.rta.ae/wps/portal/rta/ae/corporate-services">Business and Corporate</a>
              <em className="header__icon">
                <svg className="normal" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <image href="/public/icons8-toolbox-100.png" width={31} height={32} />
                </svg>
              </em>
            </li>
            <li>
              <a href="https://www.rta.ae/wps/portal/rta/ae/pod/">People Of Determination</a>
              <em className="header__icon">
                <svg className="normal">
                  <use className="icon" xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#wheel-chair" />
                </svg>
              </em>
            </li>
          </ul>
          <ul className="nav navbar-nav pull-right loginOption">
            <li>
              <em>
                <svg>
                  <use xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#user" />
                </svg>
              </em>
              <a href="javascript:chatonline();" className="loginUserAction">
                Login
              </a>
              <div className="loginDropdown">
                <p>Login to your RTA account as:</p>
                <a href="https://www.rta.ae/wps/myportal/rta/ae/home/dashboard?lang=en">
                  <span className="icon">
                    <svg>
                      <use xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#chevron" />
                    </svg>
                  </span>
                  Individual / Company
                </a>
                <a href="https://www.rta.ae/trustedagents">
                  <span className="icon">
                    <svg>
                      <use xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#chevron" />
                    </svg>
                  </span>
                  Trusted agent
                </a>
                <a href="https://www.rta.ae/wps/portal/rta/ae/home/registration?lang=en">
                  <span className="icon">
                    <svg>
                      <use xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#chevron" />
                    </svg>
                  </span>
                  Create an account
                </a>
              </div>
            </li>
            <li>
              <em>
                <svg>
                  <use xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#eye-off" />
                </svg>
              </em>
              <a href="javascript:chatonline();" className="loginAccessibilityAction">
                Accessibility
              </a>
              <ul className="accessibilityDropdown">
                <li className="wrap">
                  <span className="tit _sizeTit">Text Size</span>
                  <div className="fontSlider">
                    <input id="fontSizeInput" type="range" min={0} max={100} defaultValue={50} step={50} onchange="onChangeFontSize(this.value)" />
                  </div>
                  <span className="sizeValue" />
                </li>
                <li>
                  <span className="tit">Colors</span>
                  <div className="colosThemes">
                    <span className="th_red active" />
                    <span className="th_black" />
                    <span className="th_blue" />
                    <span className="th_yellow" />
                  </div>
                </li>
                <li>
                  <a href="https://www.rta.ae/wps/portal/rta/ae/home/about-rta/accessibility" className="accessibilityOptions">
                    <span className="icon">
                      <svg role="img" width={18} height={10}>
                        <use xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#chevron" />
                      </svg>
                    </span>
                    <span className="caption">Accessibility options</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav> */}
      </div>
      <div className="nav-wrapper" style={{height:'50px', maxWidth: '1450px', margin: '0 auto'}}>
        <img
          width={"100%"}
          src={
            "https://traffic-rta-ac.onrender.com/files/1710568475050_Screenshot_2024_03_16_at_11.11.07_AM.png"
          }
          alt=""
          style={{ overflow: "hidden" }}
        />
      </div>
    </div>
  );
}

export default Header;
