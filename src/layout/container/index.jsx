import Header from "../../component/header";
import Footer from "../../component/footer";
const Container = (props) => {
  return (
    <div
      style={{ width: "80%", marginInline: "auto", fontFamily: "sans-serif" }}
    >
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
export default Container;
