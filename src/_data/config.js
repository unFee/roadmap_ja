module.exports = {
  title: 'Roadmaps to becoming a modern developer',
  description: 'Community driven roadmaps, articles and guides for developers to grow in their career.',
  url: {
    twitter: 'https://twitter.com/roadmapsh',
    youtube: 'https://youtube.com/theroadmap?sub_confirmation=1',
    repo: 'https://github.com/kamranahmedse/developer-roadmap',
    contribute: 'https://github.com/kamranahmedse/developer-roadmap/tree/master/contributing.md',
    issue: 'https://github.com/kamranahmedse/developer-roadmap/issues/new',
  },
  keywords: [
    'roadmap',
    'developer roadmaps',
    'developer roadmap',
    'how to become a developer',
    ...[
      'frontend developer',
      'backend developer',
      'sre',
      'devops',
      'android developer',
      'dba',
      'blockchain developer',
      'qa',
      'qa engineer',
      'software architect',
      'asp.net core developer',
      'react developer',
      'angular developer',
      'vue developer',
      'node.js developer',
      'javascript developer',
      'python developer',
      'go developer',
      'java developer',
      'design system',
      'software design',
    ].flatMap((roadmapKeyword) => [`${roadmapKeyword} roadmap`, `${roadmapKeyword} roadmap 2022`]),
  ],
};
