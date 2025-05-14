// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

module.exports = {
  images: {
    domains: ["cdn.prod.website-files.com"], // Add your image source domain
  },
  async redirects() {
    return [
      {
        source: '/about/about.html',
        destination: '/about',
        permanent: true, // 301 redirect
      },
      {
        source: '/start-up/start-up.html',
        destination: '/startup',
        permanent: true, // 301 redirect
      },
      {
        source: '/contact/contact.html',
        destination: '/contact',
        permanent: true, // 301 redirect
      },
      {
        source: '/career/career.html',
        destination: '/career',
        permanent: true, // 301 redirect
      },
      {
        source: '/case-studies/case-studies.html',
        destination: '/studies',
        permanent: true, // 301 redirect
      },
      {
        source: '/blog/blog.html',
        destination: '/blog',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/fullstack/full-stack.html',
        destination: '/services/fullstackdevelopment',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/ror1/ror1.html',
        destination: '/services/ror',
        permanent: true, // 301 redirect
      },
      {
        source: '/nodejs/nodejs.html',
        destination: '/services/nodejs',
        permanent: true, // 301 redirect
      },
      {
        source: '/case-studies/full-fledged-freelance-platform.html',
        destination: '/studies/services/freelance',
        permanent: true, // 301 redirect
      },
      {
        source: '/case-studies/a-serviceable-platform-providing-awareness-of-digital-payments.html',
        destination: '/studies/services/digital',
        permanent: true, // 301 redirect
      },
      {
        source: '/heroku/heroku.html',
        destination: '/services/heroku',
        permanent: true, // 301 redirect
      },
      {
        source: '/aws-development/aws-development.html',
        destination: '/services/aws',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/uxuidevelopment/uxuidevelopment.html',
        destination: '/services/uiuxdevelopment',
        permanent: true, // 301 redirect
      },
      {
        source: '/case-studies/online-scholarship-management-platform.html',
        destination: '/studies/services/schlorship',
        permanent: true, // 301 redirect
      },
      {
        source: '/case-studies/a-remarkable-football-platform.html',
        destination: '/studies/services/platform',
        permanent: true, // 301 redirect
      },
      {
        source: '/services/reactjs/reactjs.html',
        destination: '/services/reactjs',
        permanent: true, // 301 redirect
      },
    ];
  },
};


