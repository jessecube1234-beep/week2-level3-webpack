/**
 * Creates the profile card component for Day 3.
 *
 * @returns {HTMLElement} A fully constructed profile card element.
 */
function createProfileCard() {
  const card = document.createElement("div");
  card.className = "profile-card";

  /* ----- Top Section ----- */
  const top = document.createElement("div");
  top.className = "card-top";

  const avatar = document.createElement("img");
  avatar.className = "card-avatar";
  avatar.src = "https://i.stack.imgur.com/l60Hf.png"; // Generic placeholder
  avatar.alt = "User avatar";

  top.appendChild(avatar);

  /* ----- Info Section ----- */
  const info = document.createElement("div");
  info.className = "card-info";

  const name = document.createElement("h2");
  name.textContent = "Victor Crest ";

  const age = document.createElement("span");
  age.textContent = "26";

  name.appendChild(age);

  const city = document.createElement("p");
  city.textContent = "London";

  info.appendChild(name);
  info.appendChild(city);

  /* ----- Stats Section ----- */
  const stats = document.createElement("div");
  stats.className = "card-stats";

  stats.appendChild(createStat("80K", "Followers"));
  stats.appendChild(createStat("803K", "Likes"));
  stats.appendChild(createStat("1.4K", "Photos"));

  /* Assemble Card */
  card.appendChild(top);
  card.appendChild(info);
  card.appendChild(stats);

  return card;
}

/**
 * Helper function to create a stats block (Followers, Likes, Photos)
 *
 * @param {string} value
 * @param {string} label
 * @returns {HTMLElement}
 */
function createStat(value, label) {
  const stat = document.createElement("div");
  stat.className = "card-stat";

  const statValue = document.createElement("h3");
  statValue.textContent = value;

  const statLabel = document.createElement("p");
  statLabel.textContent = label;

  stat.appendChild(statValue);
  stat.appendChild(statLabel);

  return stat;
}

export default createProfileCard;
