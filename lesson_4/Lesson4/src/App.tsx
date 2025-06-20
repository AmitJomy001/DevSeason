import AuthBox from "./Components/auth";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Map from "./Components/Map";
import NavBar from "./Components/Navbar";
import RainingLetters from "./Components/RainingLetters";
import CreateAccountForm from "./Components/Register";
const App = () => {
  return (
    <div>
      <NavBar />
      <div className="mt-17 mb-17">
        <Body />
        <Map />
        <RainingLetters />
        <AuthBox/>
        <CreateAccountForm />
      </div>

      <Footer />
    </div>
  );
};

export default App;
