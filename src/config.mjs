export const SITE = {
  name: "Watheia",

  origin: "https://watheia.com",
  basePathname: "/",

  title: "Watheia Labs — Get the most from the modern web.",
  description:
    "Watheia Labs, LLC is a digital agency building impactful products for the modern web.",

  googleAnalyticsId: "G-GD3ZBX5EST", // or "G-XXXXXXXXXX",
  googleSiteVerificationId: "QSukZ02TSOzkjbeMVp3b0I0VuwWZLPvRdk-f-RWTq00",
};

export const BLOG = {
  disabled: false,
  slug: "blog",

  postsWithoutBlogSlug: true,
  postsPerPage: 6,

  category: {
    disabled: false,
    slug: "category", // set empty to change from /category/some-slug to /some-slug
  },

  tag: {
    disabled: false,
    slug: "tag",
  },
};
