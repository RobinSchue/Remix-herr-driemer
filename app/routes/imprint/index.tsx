import { Link } from "remix";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h3>Impressum:</h3>
      <p>
        Lukas Driemer
        <br />
        Sprakelweg 45
        <br />
        48159 Münster
      </p>
      <p>+49 176 303 214 99</p>

      <li>
        <Link to="/">back</Link>
      </li>
    </div>
  );
}
