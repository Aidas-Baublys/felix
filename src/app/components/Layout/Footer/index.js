import "./index.scss";

export default function Footer() {
  const date = new Date();

  return (
    <footer className="footer">
      <div className="footer--copyright">
        Never. Go. Out. Again. Copyright © 2019-{date.getFullYear()} felix.com
      </div>
      <div className="footer--payment">
        <img
          src="https://www.shift4shop.com/images/credit-card-logos/cc-sm-4.png"
          alt="accepted credit cards"
        ></img>
      </div>
    </footer>
  );
}
