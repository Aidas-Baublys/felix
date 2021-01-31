import { Header, Footer } from "../../components";

import "./index.scss";

export default function Layout({ children }) {
  return (
    <div className="App">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
