import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Sobre from "./components/Sobre/Sobre";
import Projetos from "./components/Projetos/Projetos";
import Contato from "./components/Contato/Contato"; 
import Footer from "./components/Footer/Footer"; 
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="sobre">
          <Sobre />
        </section>
        <section id="projetos">
          <Projetos />
        </section>
        <section id="contato">
          <Contato />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
