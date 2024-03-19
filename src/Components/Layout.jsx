import Hero from "../Subcomponents/Hero";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="wrapper">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Layout;
