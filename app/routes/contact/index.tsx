import { Link } from "remix";

export default function Index() {
  return (
    <div
      className="p-8"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
    >
      <h3 className="text-lg mb-4">Contact</h3>
      <p className="mb-4">
        Lukas Driemer
        <br />
        Sprakelweg 45
        <br />
        48159 Münster
      </p>
      <p className="mb-4">+49 176 303 214 99</p>

      <Link to="/" className="text-sm italic">
        back
      </Link>
    </div>
  );
}
