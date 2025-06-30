import HeroAboutUsSection from "@/components/About/HeroAboutUsSection";
import HomeCustomerReviewSection from "@/components/Home/HomeCustomerReviewSection";
import HomeHeddingSection from "@/components/Home/HomeHeddingSection";
import HomeHeroDeliveryPartnersSection from "@/components/Home/HomeHeroDeliveryPartnersSection";
import HomeHeroSection from "@/components/Home/HomeHeroSection";
import HeroServiceFeaturesSection from "@/components/Service/HeroServiceFeaturesSection";
import HeroServiceProcessSection from "@/components/Service/HeroServiceProcessSection";
import HeroServiceSection from "@/components/Service/HeroServiceSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* Page title displayed in the browser tab and search results */}
        <title>Finex - Home</title>
        {/* Description meta tag for search engines and previews */}
        <meta
          name="description"
          content="Finex: Your go-to courier service for fast, reliable, and affordable international shipping. Explore our services, meet our team, and discover how we can assist with your shipping needs."
        />
        {/* Keywords meta tag for SEO purposes */}
        <meta
          name="keywords"
          content="Finex, Courier Services, International Shipping, Fast Delivery, Reliable Courier, Affordable Shipping, DHL, Fedex, Aramex"
        />
        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Finex - Home" />
        <meta
          property="og:description"
          content="Finex provides fast, reliable, and affordable international shipping solutions. Learn about our services and how we can help with your shipping needs."
        />
        <meta property="twitter:image" content="Twitter link preview image URL"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="og:image" content="Link preview image URL"></meta>
        <meta property="og:site_name" content="Link preview site name"></meta>
        <meta property="og:url" content="Canonical link preview URL"></meta>
      </Head>
      <HomeHeroSection />
      <HeroServiceSection />
      <HeroAboutUsSection />
      <HomeHeddingSection />
      <HeroServiceFeaturesSection />
      <HeroServiceProcessSection />
      <HomeHeroDeliveryPartnersSection />
      <HomeCustomerReviewSection />
    </>
  );
}
