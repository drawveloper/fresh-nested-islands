/** @jsx h */
import { h } from "../client_deps.ts";
import Outer from "../islands/Outer.tsx";

export default function Home() {
  return (
    <div>
      <p>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Outer />
    </div>
  );
}
