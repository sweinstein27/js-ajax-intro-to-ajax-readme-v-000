function getRepositories() {
  const req = new XMLHttpRequest();
  req.open('GET', 'hhtps://api.github.com/users/octocat/repos');
  req.send();
}