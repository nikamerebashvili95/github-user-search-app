const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const title = document.querySelector(".title");
const themeText = document.querySelector(".theme-text");
const input = document.querySelector("#user");
const btn = document.querySelector(".btn");
const cards = document.querySelectorAll(".card");
const avatarMobile = document.querySelector(".avatar-mobile");
const avatarDesktop = document.querySelector(".avatar-desktop");
const nameEl = document.querySelector(".name");
const login = document.querySelector(".login");
const joinDate = document.querySelector(".join-date");
const bio = document.querySelector(".bio");
const repos = document.querySelector("#repos");
const followers = document.querySelector("#followers");
const following = document.querySelector("#following");
const city = document.querySelector("#city");
const blog = document.querySelector("#blog");
const twitter = document.querySelector("#twitter");
const company = document.querySelector("#company");
const errorMsg = document.querySelector(".error");
const octocat = {
  avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
  bio: null,
  blog: "https://github.blog",
  company: "@github",
  created_at: "2011-01-25T18:44:36Z",
  email: null,
  events_url: "https://api.github.com/users/octocat/events{/privacy}",
  followers: 8413,
  followers_url: "https://api.github.com/users/octocat/followers",
  following: 9,
  following_url: "https://api.github.com/users/octocat/following{/other_user}",
  gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
  gravatar_id: "",
  hireable: null,
  html_url: "https://github.com/octocat",
  id: 583231,
  location: "San Francisco",
  login: "octocat",
  name: "The Octocat",
  node_id: "MDQ6VXNlcjU4MzIzMQ==",
  organizations_url: "https://api.github.com/users/octocat/orgs",
  public_gists: 8,
  public_repos: 8,
  received_events_url: "https://api.github.com/users/octocat/received_events",
  repos_url: "https://api.github.com/users/octocat/repos",
  site_admin: false,
  starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
  twitter_username: null,
  type: "User",
  updated_at: "2023-01-22T12:13:51Z",
  url: "https://api.github.com/users/octocat",
};
input.addEventListener("input", () => {
  errorMsg.textContent = "";
});
const dateTransformer = (date) => {
  const dateObj = new Date(date);
  const dateString = dateObj.toDateString();
  const [weekday, month, day, year] = dateString.split(" ");
  return `${day} ${month} ${year}`;
};
const displayInfo = (user) => {
  avatarMobile.src = user.avatar_url;
  avatarDesktop.src = user.avatar_url;
  nameEl.textContent = user.name;
  login.textContent = "@" + user.login;
  const date = dateTransformer(user.created_at);
  joinDate.textContent = "Joined " + date;
  bio.textContent =
    user.bio ||
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.";
  repos.textContent = user.public_repos;
  followers.textContent = user.followers;
  following.textContent = user.following;
  if (user.location) {
    city.textContent = user.location;
  } else {
    city.textContent = "Not Avaliable";
    city.parentElement.style.opacity = 0.5;
  }
  if (user.twitter_username) {
    twitter.textContent = user.twitter_username;
  } else {
    twitter.textContent = "Not Avaliable";
    twitter.parentElement.style.opacity = 0.5;
  }
  if (user.blog) {
    blog.textContent = user.blog;
    blog.href = user.blog;
  } else {
    blog.textContent = "Not Avaliable";
    blog.href = "#";
    blog.parentElement.style.opacity = 0.5;
  }
  if (user.company) {
    company.textContent = user.company;
  } else {
    company.textContent = "Not Avaliable";
    company.parentElement.style.opacity = 0.5;
  }
};
displayInfo(octocat);
const flitTheme = (theme) => {
  if (theme === "dark") {
    moon.style.display = "none";
    sun.style.display = "block";
    document.body.style.backgroundColor = "#141D2F";
  } else {
    moon.style.display = "block";
    sun.style.display = "none";
    document.body.style.backgroundColor = "#f6f8ff";
  }
  title.classList.toggle("dark");
  themeText.classList.toggle("dark");
  user.classList.toggle("dark");
  Array.from(cards).forEach((card) => card.classList.toggle("dark"));
};
moon.addEventListener("click", () => flitTheme("dark"));
sun.addEventListener("click", () => flitTheme("light"));
btn.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    const response = await axios.get(
      "https://api.github.com/users/" + input.value
    );
    const user = response.data;
    input.value = "";
    displayInfo(user);
  } catch (error) {
    console.log(error);
    errorMsg.textContent = "No results";
  }
});
