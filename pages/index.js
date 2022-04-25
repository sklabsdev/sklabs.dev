import Navbar from "../components/Navbar";
import SectionHeader from "../components/SectionHeader";
import SectionProducts from "../components/SectionProducts";
import SectionArticle from "../components/SectionArticle";
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
          header="Powerful integrations for your productivity"
          subheader={
            <>
              We specialize in building powerful integrations for a number of
              platforms, such as{" "}
              <a
                href="https://www.livechat.com/marketplace/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:opacity-70"
              >
                LiveChat
              </a>{" "}
              and{" "}
              <a
                href="https://www.intercom.com/app-store"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:opacity-70"
              >
                Intercom
              </a>
              .
            </>
          }
          imageUrl="assets/images/hero/hero-image.png"
        />
        <SectionProducts />

        <SectionArticle
          id="notifications"
          title="Sending Notifications"
          header="We specialize with sending notifications to various channels and manage them all from one place"
          body="Try our Ping integration that allow you to send notifications about chat events to popular channels like: Slack, Microsoft Teams, Discord, SMS and email."
          imageUrl="assets/images/articles/notifications.png"
          link="https://www.livechat.com/marketplace/apps/ping"
        />

        <SectionTeam />

        <Footer />
      </div>
    </div>
  );
}
