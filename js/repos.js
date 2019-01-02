Repository = function(repo) {
  // attributes
  this.name        = repo.name;
  this.language    = repo.language;
  this.url         = repo.html_url;
  this.description = repo.description;
  this.fork        = repo.fork;
  this.watchers    = repo.watchers;
  this.forks       = repo.forks;
}

Repository.prototype.classes = function() {
}

Repository.prototype.getBlogLink = function() {
  if (this.blogPost()) {
    return '<a href="'+ this.blogPost() +'" target="_blank"><span class="octicon octicon-file-text"></span> Usage</a> ';
  }
}

Repository.prototype.getContainer = function(index) {
  var last = '';
  if (index % 4 == 0) { last = 'last-in-row' }

  return [
    '<div class="project island-light island-stack island ', this.language, ' ', this.classes(), ' ', last, '">',
      this.repoContent(),
      this.bottomLinks(),
    '</div>'
  ].join('');
}

Repository.prototype.repoContent = function() {
  return [
    '<div class="island-item">',
      '<h3>',
        '<a href="', this.url, '" target="_blank">', this.name, '</a>',
      '</h3>',
      '<div class="repo-info">',
        '<span><i class="octicon octicon-star"></i> ', this.watchers, '</span> ',
        '<span><i class="octicon octicon-repo-forked"></i> ', this.forks, '</span>',
        '<span class="language ', this.language ,'">', this.language, '</span>',
      '</div>',
      '<p>', this.description, '</p>',
    '</div>'
  ].join('');
}

Repository.prototype.bottomLinks = function() {
  if (this.blogPost()) {
    return [
      '<div class="island-item bottom-links">',
        this.getBlogLink(),
      '</div>'
    ].join('');
  }
}

// vim: sw=2 sts=2 expandtab
