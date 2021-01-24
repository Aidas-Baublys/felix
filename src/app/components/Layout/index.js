import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import "./index.scss";

export default function Layout({ children }) {
  return (
    <div className="App">
      <Header></Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </div>
  );
}
