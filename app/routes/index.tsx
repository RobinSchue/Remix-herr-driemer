import Button, { links as buttonLinks } from "~/src/Button/Button";

export function links() {
  return [...buttonLinks()];
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="text-3xl mb-16">Moin, Ich bin Luke!</h1>
      <p className="font-mono mb-8">
        Weil ich zu busy bin, befindet sich diese Website aktuell noch im
        Aufbau! Sry ...
      </p>
      <Button className="mb-16 italic" labelText="labelText" />

      <br />
    </div>
  );
}
