const siteMetadata = {
  title: "Abdul Rozaqi",
  author: 'Abdul Rozaqi',
  headerTitle: 'Rozaqiw',
  description:
    'I have background in Informatics, Networking, and Application System at High School. I am very enthusiastic in the fields of Cyber Security, Cloud Computing and programming.',
  language: 'en-us',
  siteUrl: 'https://rozaqi.co',
  siteRepo: 'https://github.com/rozaqiw',
//  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.jpg',
  email: '#',
  github: 'https://github.com/rozaqiw',
  twitter: '#',
  tiktok: '#',
  youtube: '#',
  linkedin: '#',
  locale: 'en-US',
  newsletter: {
    provider: 'emailoctopus',
  },
  comment: {
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      // theme when dark mode
      darkTheme: 'dark_dimmed',
    },
  },
}

module.exports = siteMetadata
