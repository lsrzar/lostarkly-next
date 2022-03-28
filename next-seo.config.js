/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "LostArkly",
  titleTemplate: "%s | LostArkly",
  defaultTitle: "LostArkly",
  description: "Keep track of your Lost Ark daily & weekly tasks.",
  canonical: "https://lostarkly.vercel.app",
  openGraph: {
    url: "https://lostarkly.vercel.app",
    title: "LostArkly",
    description: "Keep track of your Lost Ark daily & weekly tasks.",
    images: [
      {
        url: "https://i.imgur.com/dSEYWvM.png",
        alt: "lostarkly og-image",
      },
    ],
    site_name: "lostarkly",
  },
};

export default defaultSEOConfig;
