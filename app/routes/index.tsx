import { Link } from "remix";
import { Button, links as buttonLinks } from "~/components/button";

export function links() {
  return [...buttonLinks()];
}

export default function Index() {
  return (
    <div
      className="p-8"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
    >
      <h1 className="text-3xl mb-16">Moin, Ich bin Luke!</h1>
      <p className="font-mono mb-8">
        Weil ich zu busy bin, befindet sich diese Website aktuell noch im
        Aufbau! Sry ...
      </p>
      <Button className="mb-16 italic" />
      <a
        target="_blank"
        href="https://www.instagram.com/driem.works"
        className="mb-4"
      >
        Instagram
      </a>
      <br />
      <Link to="/imprint">Impressum</Link>

      <footer></footer>
    </div>
  );
}
