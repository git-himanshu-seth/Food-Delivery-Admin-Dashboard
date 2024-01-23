import Logo from "../utilits/images/Logo.svg";
import Home from "../utilits/images/Home.svg";
const Header = () => {
  return (
    <div
      style={{
        width: "345px",
        height: "1872px",
        flexShrink: "0",
        background: "#FFF",
      }}
    >
      <div style={{ width: "250px", marginLeft: "49px", marginTop: "41px" }}>
        <img src={Logo} alt="Sepad Logo" width={177} height={86} />
        <p
          style={{
            top: "120px",
            position: "absolute",
            fontFeatureSettings: "clig off, liga off",
            color: "#B9BBBD",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
          }}
        >
          Modern Admin Dashboard
        </p>
        <div
          style={{
            width: "250px",
            height: "54.035px",
            marginTop: "78px",
            background: "rgba(0, 176, 116, 0.15)",
            borderRadius: "8px",
            display: "flex",
            // alignContent: "center",
            // textAlign: "center",
            alignItems: "center",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
          }}
        >
          <img src={Home} style={{ marginLeft: "18px" }} alt="Home Logo" />
          <p
            style={{
              color: "#00B074",
              textAlign: "center",
              marginLeft: "24px",
            }}
          >
            Dashboard
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
