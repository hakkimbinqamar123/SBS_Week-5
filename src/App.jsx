import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <div className="app">
        <Header />

        <main>
          <ProfileCard />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
