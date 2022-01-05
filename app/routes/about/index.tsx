import { Link } from "remix";

export default function Index() {
  return (
    <div
      className="p-8"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
    >
      <h3 className="text-lg mb-4">About</h3>

      <Link to="/" className="text-sm italic">
        back
      </Link>
    </div>
  );
}
