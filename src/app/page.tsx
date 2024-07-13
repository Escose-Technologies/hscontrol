import ProductHeading from "@/components/products-heading";
import ProductCards from "@/components/product-cards";
import PeopleSayAboutUs from "@/components/people-say-about-us";
import Hero from "@/components/hero";
import ContactUsNow from "@/components/contact-us-know";
import KnowMoreProducts from "@/components/know-more-products";
import HowCanIHelpYou from "@/components/how-can-we-help-u";

export default function Home() {
  return (
    <main className="w-full">
     <Hero />
     <ProductCards />
     <ProductHeading />
     <KnowMoreProducts />
     <HowCanIHelpYou />
     <PeopleSayAboutUs />
     <ContactUsNow />
    </main>
  );
}
