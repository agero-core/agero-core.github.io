function loadRepositoryData(repoData) {
  var org = new Organization('agero-core');
  org.repos = [];

  repoData.forEach(function(repoDatum) {
    org.repos.push(new Repository(repoDatum));
  });

  $('.projects .not-featured').empty();

  org.addReposToContainer($('.projects .not-featured'), org.regularRepos());
}


