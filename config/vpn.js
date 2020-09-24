export default {
  id: 'vpn',
  title: 'Use a VPN',
  description: `A VPN, or virtual private network, is a useful tool to secure an internet connection. It guarantees that data you are sending and receiving is encrypted, preventing people from snooping on your traffic.

  \n\nYou should use a VPN provider that you trust to not harvest and re-sell your data. The best VPNs often charge a monthly subscription - this is a good thing because it means their business model is not reliant upon reselling your data to advertisers.
    `,
  apps: [
    {
      name: 'RiseUp',
      image: '/static/img/riseup.png',
      url: 'https://riseup.net/en/vpn'
    },
    {
      name: 'ExpressVPN',
      image: '/static/img/expressvpn.jpg',
      url: 'https://www.expressvpn.com/'
    },
    {
      name: 'ProtonVPN',
      image: '/static/img/protonvpn.jpg',
      url: 'https://www.protonvpn.com/'
    },
    {
      name: 'Private Internet Access',
      image: '/static/img/privateinternetaccess.jpg',
      url: 'https://www.privateinternetaccess.com/'
    }
  ],
  resources: [
    {
      name: 'Why you should be using a VPN',
      url:
        'https://lifehacker.com/5940565/why-you-should-start-using-a-vpn-and-how-to-choose-the-best-one-for-your-needs',
    },
    {
      name: 'What is a VPN and why you need one',
      url:
        'https://www.pcmag.com/article/352757/you-need-a-vpn-and-heres-why',
    },
    {
      name: 'Why you should use a VPN on a public Wi-Fi network',
      url:
        'https://www.macworld.com/article/3322951/security/why-you-should-use-a-vpn-on-a-public-wi-fi-network.html',
    },
    {
      name: 'A detailed VPN provider comparison chart',
      url: 'https://thatoneprivacysite.net/vpn-comparison-chart/',
    },
  ],
};
