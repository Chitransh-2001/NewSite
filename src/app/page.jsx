"use client";
import Carousel from "../components/home/Carousel";
import OurProcess from "../components/home/OurProcess";
import TestiMonials from "../components/home/Testimonials";
import OurBlog from "../components/home/OurBlog";
import Footer from "../components/footer/Footer";
import HomeContent from "../components/home/HomeContent";
import Services from "../components/home/Services";
import Head from "next/head";
import OurCaseStudies from "../components/home/OurCaseStudies";
export default function Home() {
  const CarouselData = [
    {
      title: "Best Ruby on Rails Development Company",
      backgroundColor: "#650909",
      backgroundImage: "url(/assets/img/ror-banner.svg)",
      des: "Get scalable, secure, and well-supported features web applications by embracing exclusive Ruby on rails development services from InfoKoders technologies. As one of the top specialists in ROR development services.",
      button: "Read More",
      path: "/services/ror",
    },
    {
      title: "Hire Skilled Software Developers with InfoKoders technologies",
      backgroundColor: "#0c5e66",
      backgroundImage: "url(/assets/img/hire.png",
      des: "Looking for expert software developers? InfoKoders technologies connects you with top talent to help you build and scale your tech team efficiently. Find the right developers for your business today!",
      button: "Get free consulation",
      path: "/contact",
    },
    {
      title: "Web Development",
      backgroundColor: "#340F3D",
      backgroundImage: "url(/assets/img/web-technology.svg)",
      des: "For offering enhanced user experience and result-oriented solutions we are having unmatch capabilities. A team of experienced web developers at InfoKoders technologies works dedicatedly to produce web solutions that can help to grow your business.",
      button: "Read More",
      path: "/services/reactjs",
    },
    {
      title: "We are start-up uplifters",
      backgroundColor: "#3c004b",
      backgroundImage: "url(/assets/img/web-technology.svg)",
      des: "Fulfill your tech and non-tech startup dreams through embracing winning technological solutions from a successful tech team holding up a track record of developing 100+ innovative tech products for start-ups over 5+ years.",
      button: "Get the Recognition with us",
      path: "/startup",
    },
    {
      title:
        "Let your enterprise rock with our world-class technological services",
      backgroundColor: "#364F6E",
      backgroundImage: "url(/assets/img/right.png)",
      des: "InfoKoders technologies is admired as a leading software Development Company for exceeding business goals consistently thereby offering end-to-end web, mobile, and software development services.",
      button: "Technologize with us",
      path: "/services/fullstackdevelopment",
    },
    {
      title: "Online Scholarship Management Platform",
      backgroundColor: "#032B44",
      backgroundImage: "url(/assets/img/schlorshipimage.png)",
      des: "A Minneapolis-based start-up wished to eradicate the student’s  financial struggle in an educational realm by taking the advantage of new-age technologies. He narrated his entire vision of building an online scholarship management platform for revolutionizing the  process school is paid, helping deserving students, and effective management of award programs.",
      button: "Read More",
      path: "/studies/services/schlorship",
    },
    {
      title: "Startup Growth",
      backgroundColor: "#340F3D",
      backgroundImage: "url(/assets/img/start-up.svg)",
      des: "Navigating the tech and Non- tech Start-ups towards success heights with our durable software development solutions. We are here to breathe life into your start-up dreams. InfoKoders Technologies is been recognized as a one-stop source to embrace winning software development solutions at a budget-friendly cost.",
      button: "Read More",
      path: "/startup",
    },
    {
      title: "Agile Developments",
      backgroundColor: "#032B44",
      backgroundImage: "url(/assets/img/right2.png)",
      des: "We follow Agile Development Process, which enables us to deliver the project with the highest quality and a solid product.App development takes time, but by using agile development methodologies, our full-stack web developers make it look easy.",
      button: "Read More",
      path: "/services/fullstackdevelopment",
    },
  ];
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "InfoKoders Technologies",
              url: "https://www.infokoders.com",
              telephone: "0731-4105427",
              email: "hr@infokoders.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "213, Satguru Parinay Opp. C21 mall, AB Rd",
                addressLocality: "Indore",
                addressRegion: "MP",
                postalCode: "452001",
                addressCountry: "IN",
              },
              sameAs: [
                "https://in.linkedin.com/company/infokoders-technologies",
              ],
            }),
          }}
        />
      </Head>
      <main className="flex flex-col items-center">
        <Carousel data={CarouselData} />
        <HomeContent />
        <OurProcess />
        <Services />
        <TestiMonials />
        <OurBlog />
        <OurCaseStudies />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
