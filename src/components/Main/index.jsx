import PropTypes from "prop-types";
import Footer from "../Footer";
import Menu from "../Menu";
import "./style.css";

const Main = ({ children }) => {
  return (
    <div className="main-layout">
      <Menu />
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
