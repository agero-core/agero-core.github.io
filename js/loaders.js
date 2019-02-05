function loadRepositoryData(repoData) {
  var org = new Organization('agero-core');
  org.repos = [];

  repoData.forEach(function(repoDatum) {
    org.repos.push(new Repository(repoDatum));
  });

  $('.projects .featured').empty();
  $('.projects .not-featured').empty();

  org.addReposToContainer($('.projects .not-featured'), org.regularRepos());
}

function loadMemberData(members) {
  $('.dev-count').html(members.length);
}

// vim: sw=2 sts=2 expandtab
