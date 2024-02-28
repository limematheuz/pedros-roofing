import Header from "../../components/Header/Header";
import OurStory from "../../components/OurStory/OurStory";
import ServicesArea from "../../components/ServicesArea/ServicesArea";
import Certificates from "../../components/Certificates/Certificates";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";


export default function HomePage() {
  return (
    <section className="home-page-container">
      <Header/>
      <OurStory />
      <ServicesArea/>
      <Certificates />
      <ContactForm/>
      <Footer/>
    </section>
  );
}
