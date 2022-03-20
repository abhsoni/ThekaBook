function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row justify-content-end">
          <div style={{ textAlign: "end" }}>
            <span
              style={{
                color: "#ffffff",
                marginTop: "30px",
                fontFamily: "Roboto",
              }}
            >
              powered by
            </span>
            <img
              style={{ height: "50px", marginTop: "5px" }}
              src="assets\img\icon.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
