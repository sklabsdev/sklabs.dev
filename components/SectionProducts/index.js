/* eslint-disable @next/next/no-img-element */
import SectionApp from "../SectionApp";

const products = {
  livechat: [
    {
      name: "Zoom for LiveChat",
      logo: "assets/images/apps/livechat/zoom.png",
      description:
        "Start a video call from the chat and help your customers solve their problems.",
      link: "https://www.livechat.com/marketplace/apps/zoom-for-livechat/",
    },
    {
      name: "Discord",
      logo: "assets/images/apps/livechat/discord.png",
      description: "Send out notifications to Discord channels.",
      link: "https://www.livechat.com/marketplace/apps/discord/",
    },
    {
      name: "Microsoft Teams",
      logo: "assets/images/apps/livechat/teams.png",
      description: "Send out notifications to Microsoft Teams channels.",
      link: "https://www.livechat.com/marketplace/apps/microsoft-teams/",
    },
    {
      name: "Ping",
      logo: "assets/images/apps/livechat/ping.png",
      description:
        "Send out notifications to various channels and manage them all from one place.",
      link: "https://www.livechat.com/marketplace/apps/ping/",
    },
    {
      name: "GoToMeeting for LiveChat",
      logo: "assets/images/apps/livechat/gotomeeting.png",
      description:
        "Create an online meeting directly from the chat and support your customers.",
      link: "https://www.livechat.com/marketplace/apps/gotomeeting-for-livechat/",
    },
    {
      name: "GitHub for LiveChat",
      logo: "assets/images/apps/livechat/github.png",
      description: "Manage your GitHub issues without leaving the chat.",
      link: "https://www.livechat.com/marketplace/apps/github-for-livechat/",
    },
    {
      name: "Trello for LiveChat",
      logo: "assets/images/apps/livechat/trello.png",
      description: "Manage your Trello cards without leaving the chat.",
      link: "https://www.livechat.com/marketplace/apps/trello-for-livechat/",
    },
  ],
  intercom: [
    {
      name: "Zoom Meetings",
      logo: "assets/images/apps/livechat/zoom.png",
      description:
        "Start a video call from the Messenger and help your customers solve their problems.",
      link: "https://www.intercom.com/app-store/?app_package_code=zoom-meetings",
    },
  ],
};

const SectionProducts = () => {
  return (
    <section id="products" className="pt-20 lg:pt-[120px] pb-8 lg:pb-[70px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mb-12 lg:mb-10 max-w-[620px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Products
              </span>

              <div className="flex items-center mb-6">
                <img
                  src="assets/images/products/livechat.png"
                  alt="livechat logo"
                  className="h-9 mr-2"
                />
                <h2
                  className="
                font-bold
                text-2xl
                sm:text-4xl
                2xl:text-[40px]
                sm:leading-snug
                text-dark
                
                "
                >
                  LiveChat Marketplace
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {products.livechat.map((app) => (
            <div
              className="w-full md:w-1/2 lg:w-1/4 px-4 flex flex-col"
              key={`app-${app.name}`}
            >
              <SectionApp app={app} />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mb-12 lg:mb-10 max-w-[620px]">
              <div className="flex items-center mb-6">
                <img
                  src="assets/images/products/intercom.png"
                  alt="livechat logo"
                  className="h-9 mr-2"
                />
                <h2
                  className="
                font-bold
                text-3xl
                sm:text-4xl
                2xl:text-[40px]
                sm:leading-snug
                text-dark
                
                "
                >
                  Intercom App Store
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {products.intercom.map((app) => (
            <div
              className="w-full md:w-1/2 lg:w-1/4 px-4 flex flex-col"
              key={`app-${app.name}`}
            >
              <SectionApp app={app} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionProducts;
