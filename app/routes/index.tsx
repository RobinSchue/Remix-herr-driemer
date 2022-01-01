import { Link } from "remix";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Moin, Ich bin Luke!</h1>
      <p>
        Weil ich zu busy bin, befindet sich diese Website aktuell noch im
        Aufbau! Sry ...
      </p>
      <a target="_blank" href="https://www.instagram.com/driem.works">
        Instagram
      </a>
      <br />

      <footer>
        <Link to="/imprint">Impressum</Link>
      </footer>
    </div>
  );
}
