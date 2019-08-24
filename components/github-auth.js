import axios from "axios";

const github = axios.create({
    baseURL: 'https://api.github.com/',
});

const token = process.env.GITHUB_AUTH;
if (token) {
    github.defaults.headers.common.Authorization = `token ${token}`;
}
console.log(github.defaults.headers.common.Authorization);

export default github;