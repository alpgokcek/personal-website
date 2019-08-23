import axios from "axios";

const github = axios.create({
    baseURL: 'https://api.github.com/',
});

const token = 'ec2a88af65de41758f258af2f4872a40b9b8eaae';
if (token) {
    github.defaults.headers.common.Authorization = `token ${token}`;
}
console.log(github.defaults.headers.common.Authorization);

export default github;