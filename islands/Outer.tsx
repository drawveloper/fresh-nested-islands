/** @jsx h */
import { h } from "../client_deps.ts";
import Nested from "./Nested.tsx";

// This breaks
export default function Outer() {
  return <Nested />;
}

// This works
// export default function Outer() {
//   return (
//     <div>
//       <Nested />
//     </div>
//   );
// }
