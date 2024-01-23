import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";

function App() {
  return (
    <div style={{ background: "#F3F2F7" }}>
      <div style={{ flex: 1, flexDirection: "row", display: "flex" }}>
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
