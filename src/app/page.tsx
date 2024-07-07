import Image from "next/image";
import ProductHeading from "@/components/products-heading";
import ProductCards from "@/components/product-cards";
import CardWithImage from "@/components/card-with-image";
import PeopleSayAboutUs from "@/components/people-say-about-us";
import HowCanIHelpYou from "@/components/how-can-we-help-u";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ContactUsNow from "@/components/contact-us-know";

export default function Home() {
  return (
    <main className="w-full">
     <Hero />
     <ProductCards />
     <ProductHeading />
     <PeopleSayAboutUs />
     <ContactUsNow />
     <Footer />
    </main>
  );
}
