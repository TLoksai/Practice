import React from "react";
import "./App.css";
import { Button } from "flowbite-react";

// Regular components
import { NavbarComponent } from "./Frontend/components/NavbarComponent";
import { Footer1 } from "./Frontend/components/Footer1";
import { QA } from "./Frontend/components/QA";
import { Caesouel } from "./Frontend/components/Caesouel";
import { Draw } from "./Frontend/components/Draw";
import { Pagi } from "./Frontend/components/Pagi";
import { Table1 } from "./Frontend/components/Table1";
import { Partner } from "./Frontend/components/Partner";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <NavbarComponent />

      {/* Background Section */}
      <div
        style={{
          position: "relative",
          backgroundImage:
            "url('https://img.pikbest.com/wp/202345/desktop-wallpapers-landscape-background-wallpaper_9578952.jpg!sw800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Adjust the height as needed
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            padding: "20px",
            textAlign: "center",
            maxWidth: "80%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: for better text visibility
            borderRadius: "8px",
          }}
        >
          <h1 style={{ fontSize: "2rem", marginBottom: "15px" }}>
            The Indian Institute of Science (IISc)
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
            The Indian Institute of Science (IISc) is a public, deemed, research
            university for higher education and research in science,
            engineering, design, and management. It is located in Bengaluru,
            Karnataka. The institute was established in 1909 with active support
            from Jamsetji Tata and thus is also locally known as the Tata
            Institute. It was granted a deemed university status in 1958 and
            recognized as an Institute of Eminence in 2018.
          </p>
        </div>
      </div>

      {/* Other Components */}
      <div className="section-gap">
        <QA />
      </div>
      <div className="section-gap">
        <Caesouel />
      </div>
      <div className="section-gap">
        <Draw />
      </div>
      <div className="section-gap">
        <Pagi />
      </div>
      <div className="section-gap">
        <Table1 />
      </div>
      <div className="section-gap">
        <Partner />
      </div>
      
      <Footer1 />
    </div>
  );
};

export default App;
