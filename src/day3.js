import "./day3.scss";
import createProfileCard from "./components/card";

function main() {
  const root = document.getElementById("app-root");
  if (!root) return;

  const card = createProfileCard();
  root.appendChild(card);
}

main();
