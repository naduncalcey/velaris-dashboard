import React from "react";
import { AppSideBar } from "./SideBar.styled";
import Logo from "../../assets/images/logo-mono.svg";
import { Home, People, Activity, Document, Setting3, LogoutCurve } from "iconsax-react";

function SideBar() {
  const menuLinks = [
    { title: "Dashboard", icon: <Home size="24" />, active: false },
    { title: "Customers", icon: <People size="24" />, active: true },
    { title: "Activities", icon: <Activity size="24" />, active: false },
    { title: "Reports", icon: <Document size="24" />, active: false },
  ];

  const utilLinks = [
    { title: "Settings", icon: <Setting3 size="24" />, active: false },
    { title: "Logout", icon: <LogoutCurve size="24" />, active: false },
  ];

  return (
    <AppSideBar>
      <div className="image-container">
        <img src={Logo} alt="app-logo" />
      </div>
      <div className="menu">
        <div>
          {menuLinks.map(({ title, icon, active }, index) => (
            <div className={`menu-link ${active ? "active" : ""}`} key={index}>
              <div className="menu-link-content">
                {active && <div className="menu-link-content--bar"></div>}
                {React.cloneElement(icon, {
                  color: active ? "#fff" : "#C2C0FF",
                })}
                <h2
                  style={{
                    color: active ? "" : "#C2C0FF",
                  }}
                  className="menu-link-content--text"
                >
                  {title}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div>
          {utilLinks.map(({ title, icon, active }, index) => (
            <div className={`menu-link ${active ? "active" : ""}`} key={index}>
              <div className="menu-link-content">
                {active && <div className="menu-link-content--bar"></div>}
                {React.cloneElement(icon, {
                  color: active ? "#fff" : "#C2C0FF",
                })}
                <h2
                  style={{
                    color: active ? "" : "#C2C0FF",
                  }}
                  className="menu-link-content--text"
                >
                  {title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppSideBar>
  );
}

export default SideBar;
