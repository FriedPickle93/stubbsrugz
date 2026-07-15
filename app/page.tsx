import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import { getGalleryImages } from "@/lib/gallery";

export default function Home() {
  const images = getGalleryImages();

  return (
    <>
      <Hero />
      <Gallery images={images} />
      <About />
      <ContactForm />
      <Footer />
    </>
  );
}
