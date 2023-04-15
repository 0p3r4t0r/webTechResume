import { createSignal } from "solid-js";

export function MySolidComponent() {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      This is my solid component, and here is some state to prove it's not just react: {count()}
    </div>
  );
}
