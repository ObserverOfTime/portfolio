import config from '../config.toml';

/** @type {Config} */
const copy = {info: config.info, links: {}, repos: {}};

/**
 * Map usernames to links.
 *
 * @private
 * @param {[string, [string, string]][]} arr An array of usernames.
 * @param {Record<string, string>[]} obj A mapping object.
 * @return {Link[]} An array of link objects.
 */
const map = (arr, obj) => arr.reduce((acc, [k, v]) =>
  obj[k] && acc.concat({
    href: v[0].replace('{}', obj[k]),
    title: v[1], icon: k
  }) || acc, []
);

const {mastodon, matrix} = config.links.social;

copy.links.social = map(Object.entries({
  facebook: ['https://www.facebook.com/{}', 'Facebook'],
  linkedin: ['https://www.linkedin.com/in/{}', 'LinkedIn'],
  reddit: ['https://reddit.com/user/{}', 'Reddit'],
  trello: ['https://trello.com/{}', 'Trello'],
  tumblr: ['https://www.tumblr.com/blog/{}', 'Tumblr'],
  twitch: ['https://www.twitch.tv/{}', 'Twitch.tv'],
  twitter: ['https://twitter.com/{}', 'Twitter'],
  youtube: ['https://www.youtube.com/@{}', 'YouTube']
}), config.links.social);

if (mastodon.username && mastodon.server) {
  if (!mastodon.server) mastodon.server = 'mastodon.social';
  copy.links.social.push({
    href: `https://${mastodon.server}/@${mastodon.username}`,
    title: 'Mastodon', icon: 'mastodon'
  });
}

if (matrix.username && matrix.server) {
  if (!matrix.server) matrix.server = 'matrix.org';
  matrix.username += ':' + matrix.server;
  copy.links.social.push({
    href: `https://matrix.to/#/@${matrix.username}`,
    title: 'Matrix', icon: 'matrix'
  });
}

// ensure the links are sorted
copy.links.social = copy.links.social
  .sort((a, b) => a.icon.localeCompare(b.icon));

copy.links.vcs = map(Object.entries({
  arch: ['https://gitlab.archlinux.org/{}', 'Arch Linux GitLab'],
  bitbucket: ['https://bitbucket.org/{}', 'Bitbucket'],
  codeberg: ['https://codeberg.org/{}', 'Codeberg'],
  collabora: ['https://codeberg.org/{}', 'Collabora GitLab'],
  darcs: ['https://hub.darcs.net/{}', 'Darcs Hub'],
  debian: ['https://salsa.debian.org/{}', 'Debian Salsa'],
  disroot: ['https://git.disroot.org/{}', 'Disroot Git'],
  femgit: ['https://fem.mint.lgbt/{}', 'femgit'],
  framagit: ['https://framagit.org/{}', 'FramaGit'],
  freedesktop: ['https://gitlab.freedesktop.org/{}', 'freedesktop.org'],
  fsci: ['https://git.fosscommunity.in/{}', 'FSCI GitLab'],
  gitdab: ['https://gitdab.com/{}', 'Gitdab'],
  gitea: ['https://gitea.com/{}', 'Gitea'],
  gitgud: ['https://gitgud.io/{}', 'GitGud'],
  github: ['https://github.com/{}', 'GitHub'],
  gitlab: ['https://gitlab.com/{}', 'GitLab'],
  gitrip: ['http://git.rip/{}', 'git.rip'],
  gnome: ['https://gitlab.gnome.org/{}', 'Gnome GitLab'],
  kde: ['https://invent.kde.org/{}', 'KDE Invent'],
  notabug: ['https://notabug.org/{}', 'NotABug.org'],
  sourceforge: ['https://sourceforge.net/users/{}', 'SourceForge'],
  sourcehut: ['https://sr.ht/~{}', 'sourcehut']
}), config.links.vcs);

copy.links.packages = map(Object.entries({
  aur: [
    'https://aur.archlinux.org/packages/?SeB=M&K={}',
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
  ctan: [
    'https://ctan.org/home/{}',
    'Comprehensive TeX Archive Network'
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

/**
 * Get the GitHub URL of a repo.
 *
 * @private
 * @param {string} repo The name of the repo.
 * @param {string} type The type of the repo.
 * @return {string} The URL of the repo.
 */
const ghurl = (repo, type) => {
  const user = config.links.vcs.github;
  if (!user) throw Error('links.vcs.github is required');
  if (!repo.includes('/')) return `https://github.com/${user}/${repo}`;
  if (type !== 'contribution') return `https://github.com/${repo}`;
  return `https://github.com/${repo}/commits?author=${user}`;
};

// merge repos & set urls
copy.repos = Object.keys(config.repos).reduce((acc, key) =>
  acc.concat(Object.values(config.repos[key]).reduce((it, val) =>
    it.concat({url: ghurl(val.name, key), type: key, ...val}), []
  )), []
);

/**
 * @typedef {Object} Link
 * @property {string} href
 * @property {string} title
 * @property {string} icon
 */

/**
 * @typedef {Object} Repo
 * @property {string} url
 * @property {string} type
 * @property {string} name
 * @property {string} description
 * @property {string[]} tags
 * @property {string?} source
 */

/**
 * @typedef {Object} Config
 * @property {Record<string, string>} info The user's general info.
 * @property {Record<string, Link[]>} links The user's links.
 * @property {Repo[]} repos The user's repositories.
 */

export const {info, links, repos} = copy;
