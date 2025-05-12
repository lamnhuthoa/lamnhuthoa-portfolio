import Introduction from "./sections/Introduction";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import { Contact } from "./sections/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./sections/Gallery";
import HonorsAwards from "./sections/HonorsAwards";

export default function Home() {
    return (
        <div className="bg-light-gray text-primary-color">
            <Header pageType="" page="" />

            <section className="intro">
                <Introduction />
            </section>

            <section className="experience">
                <Experience />
            </section>

            <section className="projects">
                <Projects />
            </section>

            <section className="gallery">
                <Gallery />
            </section>

            {/* <section className="honors">
                <HonorsAwards />
            </section> */}

            <section className="contact">
                <Contact />
            </section>

            <Footer />
        </div>
    );
}
