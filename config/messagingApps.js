export default {
  id: 'messagingApps',
  title: 'Use encrypted messaging apps when sharing sensitive information',
  description: `When sharing sensitive information over chat, you should be using a secure, end-to-end encrypted messaging service. End-to-end encryption ensures that only you and your intended recipient are able to view messages. Your messages will appear scrambled (and will be nearly-impossible to unscramble) to anyone else, including app developers and ISPs.
  `,
  apps: [
    {
      name: 'Signal',
      image: '/static/img/signal.jpg',
      url: 'https://www.signal.org/'
    },
  ],
  resources: [
    {
      name: 'What is end-to-end encryption?',
      url: 'https://www.lifewire.com/what-is-end-to-end-encryption-4028873',
    },
    {
      name: 'Hacker lexicon: end-to-end encryption',
      url:
        'https://www.wired.com/2014/11/hacker-lexicon-end-to-end-encryption/',
    },
    {
      name: 'Encrypted messaging isn’t magic',
      url: 'https://www.wired.com/story/encrypted-messaging-isnt-magic/',
    },
    {
      name:
        'Why you need a better handle on the WhatsApp, Signal and Telegram apps',
      url:
        'https://www.cnet.com/news/you-might-not-really-understand-how-encrypted-messaging-apps-work/',
    },
    {
      name: 'The best and worst encrypted messaging apps',
      url:
        'https://gizmodo.com/the-best-and-worst-encrypted-messaging-apps-1782424449',
    },
  ],
};
