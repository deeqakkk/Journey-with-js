const Url = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const content = document.getElementById('content');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const User = search.value;
    if (User) {
        getUser(User);
        search.value = "";
    }
});

async function getUser(username) {
    const User = await fetch(Url + username);
    const UserData = await User.json();

    CreateCard(UserData);
    GetRepos(username);
}

async function GetRepos(user) {
    const repo = await fetch(Url + user + "/repos");
    const repoData = await repo.json();
    AddRepoToCard(repoData);
}

function CreateCard(user) {
    const Card =
        `
     <div id="card">
        <div class="imgg">
            <img src="${user.avatar_url}" alt="${user.name}" class="photo">
        </div>
        
        <div class="info-div">
            <h2>${user.name}</h2>

            <p>${user.bio}</p>

            <ul class="info">
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>

            <div id="repos"></div>
        </div>
    </div>
    `;
    content.innerHTML = Card;
}

function AddRepoToCard(repos) {
    const reposEl = document.getElementById("repos");

    repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 10)
        .forEach((repo) => {
            const repoEl = document.createElement("a");
            repoEl.classList.add("repo");

            repoEl.href = repo.html_url;
            repoEl.target = "_blank";
            repoEl.innerText = repo.name;

            reposEl.appendChild(repoEl);
        });
}


