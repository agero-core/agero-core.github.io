Organization = function(name, repos) {
  this.name = name;
  this.repos = repos || [];
}

Organization.prototype.regularRepos = function() {
  regular = [];
  this.repos.forEach(function(repo) {
    if (!repo.fork) {
      regular.push(repo);
    }
  });

  return regular;
}

Organization.prototype.addReposToContainer = function(container, repos) {
  repos.forEach(function(repo, i) {
    container.append(repo.getContainer(i+1));
  });
}


