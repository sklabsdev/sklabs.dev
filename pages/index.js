import Navbar from "../components/Navbar";
import SectionHeader from "../components/SectionHeader";
import SectionProducts from "../components/SectionProducts";
import SectionTeam from "../components/SectionTeam";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <div>
        <Navbar />

        <SectionHeader
          header="Unlock Your Productivity with Powerful Integrations"
          subheader={
            <>
              We specialize in building integrations for {" "}
              <a
                href="https://www.livechat.com/marketplace/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:opacity-70"
              >
                LiveChat
              </a>.
            </>
          }
          imageUrl="assets/images/hero/hero-image.png"
        />

        <SectionProducts />

        <SectionTeam />

        <Footer />
      </div>
    </div>
  );
}
