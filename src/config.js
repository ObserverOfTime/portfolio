/** @module config */

import config from '../config.toml';

/**
 * Map usernames to links.
 *
 * @private
 * @function map
 * @param {Array.<string>} arr - An array of usernames.
 * @param {Array.<Object.<string, string>>} obj - A mapping object.
 * @return {Array.<Object.<string, string>>} An array of link objects.
 */
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
  sourceforge: ['https://sourceforge.net/users/{}', 'SourceForge'],
  sourcehut: ['https://sr.ht/~{}', 'sourcehut']
}), config.links.vcs);

config.links.packages = map(Object.entries({
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
 * @function ghurl
 * @param {string} repo - The name of the repo.
 * @param {string} type - The type of the repo.
 * @return {string} The URL of the repo.
 */
const ghurl = (repo, type) => {
  const href = config.links.vcs.find(l => l.title === 'GitHub').href;
  if (!repo.includes('/')) return `${href}/${repo}`;
  if (type !== 'contribution') return `https://github.com/${repo}`;
  return href.replace(/[\w-]+$/, `${repo}/commits?author=$&`);
};

// merge repos & set urls
config.repos = Object.keys(config.repos).reduce((acc, key) =>
  acc.concat(Object.values(config.repos[key]).reduce((it, val) =>
    it.concat({url: ghurl(val.name, key), type: key, ...val}), []
  )), []
);

/**
 * An object containing information about the user.
 *
 * @member module:config~info
 * @type {Object.<string, string>}
 */

/**
 * An object containing the user's links.
 *
 * @member module:config~links
 * @type {Object.<string, Array.<Object.<string, string>>>}
 */

/**
 * An array containing the user's repositories.
 *
 * @member module:config~repos
 * @type {Array.<Object.<string, string>>}
 */

export const {info, links, repos} = config;
