import config from '../config.toml';

// map usernames to links
const map = (arr, obj) => arr.reduce((acc, [k, v]) =>
  obj[k] && acc.concat({
    href: v[0].replace('{}', obj[k]),
    title: v[1], icon: k
  }) || acc, []
);

config.links.social = map(Object.entries({
  facebook: ['https://www.facebook.com/{}', 'Facebook'],
  linkedin: ['https://www.linkedin.com/in/{}', 'LinkedIn'],
  reddit: ['https://reddit.com/user/{}', 'Reddit'],
  trello: ['https://trello.com/{}', 'Trello'],
  tumblr: ['https://www.tumblr.com/blog/{}', 'Tumblr'],
  twitch: ['https://www.twitch.tv/{}', 'Twitch.tv'],
  twitter: ['https://twitter.com/{}', 'Twitter'],
  youtube: ['https://www.youtube.com/user/{}', 'YouTube']
}), config.links.social);

config.links.vcs = map(Object.entries({
  bitbucket: ['https://bitbucket.org/{}', 'Bitbucket'],
  codeberg: ['https://codeberg.org/{}', 'Codeberg'],
  framagit: ['https://framagit.org/{}', 'Framagit'],
  fsci: ['https://git.fosscommunity.in/{}', 'FSCI GitLab'],
  gitea: ['https://gitea.com/{}', 'Gitea'],
  github: ['https://github.com/{}', 'GitHub'],
  gitlab: ['https://gitlab.com/{}', 'GitLab'],
  gnome: ['https://gitlab.gnome.org/{}', 'Gnome GitLab'],
  kde: ['https://invent.kde.org/{}', 'KDE Invent'],
  sourceforge: ['https://sourceforge.net/users/{}', 'SourceForge']
}), config.links.vcs);

config.links.packages = map(Object.entries({
  aur: [
    'https://aur.archlinux.org/packages/?SeB=m&K={}',
    'Arch User Repository'
  ],
  copr: [
    'https://copr.fedorainfracloud.org/coprs/{}',
    'Cool Other Package Repo'
  ],
  cpan: [
    'https://metacpan.org/author/{}',
    'Comprehensive Perl Archive Network'
  ],
  crates: [
    'https://crates.io/users/{}',
    'Rust Package Registry'
  ],
  docker: [
    'https://hub.docker.com/publishers/{}',
    'Docker Hub'
  ],
  gpr: [
    'https://github.com/{}?tab=packages',
    'GitHub Package Registry'
  ],
  launchpad: [
    'https://launchpad.net/~{}',
    'Launchpad'
  ],
  npmjs: [
    'https://www.npmjs.com/~{}',
    'Node Package Registry'
  ],
  nuget: [
    'https://www.nuget.org/profiles/{}',
    'NuGet Gallery'
  ],
  obs: [
    'https://build.opensuse.org/users/{}',
    'Open Build Service'
  ],
  pypi: [
    'https://pypi.org/user/{}',
    'Python Package Index'
  ],
  rubygems: [
    'https://rubygems.org/profiles/{}',
    'Ruby Gems'
  ]
}), config.links.packages);

// get the GitHub URL of a repo
const ghurl = (repo, type) => {
  const href = config.links.vcs.find(l => l.title === 'GitHub').href;
  if(!repo.includes('/')) return `${href}/${repo}`;
  if(type !== 'contribution') return `https://github.com/${repo}`;
  return href.replace(/[\w-]+$/, `${repo}/commits?author=$&`);
};

// merge repos & set urls
config.repos = Object.keys(config.repos).reduce((acc, key) =>
  acc.concat(Object.values(config.repos[key]).reduce((it, val) =>
    it.concat({url: ghurl(val.name, key), type: key, ...val}), []
  )), []
);

export const {info, links, repos} = config;
