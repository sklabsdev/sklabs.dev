import Image from "next/image";
import { GitHubLogo, TwitterLogo, LinkedinLogo } from "../SectionBrands";

const team = [
  {
    avatar: "/assets/images/team/kasparas-galdikas.jpeg",
    fullName: "Kasparas Galdikas",
    title: "Cofounder of SKlabs",
    github: "https://github.com/kasparasg",
    twitter: "https://twitter.com/kasparasg",
    linkedin: "https://www.linkedin.com/in/kasparasg/",
  },
  {
    avatar: "/assets/images/team/jakub-sikora.png",
    fullName: "Jakub Sikora",
    title: "Cofounder of SKlabs",
    github: "https://github.com/jakubsikora",
    twitter: "https://twitter.com/JakubSikoraJS",
    linkedin: "https://www.linkedin.com/in/jbsikora/",
  },
];

const SectionTeam = () => {
  return (
    <section id="team" className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] max-w-[620px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Our Team
              </span>
              <h2
                className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[42px]
                  text-dark
                  mb-4
                "
              >
                Meet Our Team
              </h2>
              <p
                className="
                  text-lg
                  sm:text-xl
                  leading-relaxed
                  sm:leading-relaxed
                  text-body-color
                  px-12
                "
              >
                Making quality software is what we do. Get to know the faces behind SKlabs.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center -mx-4">
          {team.map((person) => (
            <div
              className="w-full sm:w-1/2 lg:w-1/4 px-4"
              key={person.fullName}
            >
              <div className="mb-10 wow fadeInUp" data-wow-delay=".1s">
                <div
                  className="
                    relative
                    w-[170px]
                    h-170px]
                    rounded-full
                    z-10
                    mx-auto
                    mb-6
                  "
                >
                  <Image
                    width={170}
                    height={170}
                    src={person.avatar}
                    alt="image"
                    className="w-full rounded-full"
                  />

                  <span className="absolute top-0 left-0 z-[-1]">
                    <svg
                      width="71"
                      height="82"
                      viewBox="0 0 71 82"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="1.29337"
                        cy="80.7066"
                        r="1.29337"
                        transform="rotate(-90 1.29337 80.7066)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.6747"
                        cy="80.7066"
                        r="1.29337"
                        transform="rotate(-90 12.6747 80.7066)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="24.0575"
                        cy="80.7066"
                        r="1.29337"
                        transform="rotate(-90 24.0575 80.7066)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="35.4379"
                        cy="80.7066"
                        r="1.29337"
                        transform="rotate(-90 35.4379 80.7066)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="46.8197"
                        cy="80.7066"
                        r="1.29337"
                        transform="rotate(-90 46.8197 80.7066)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="68.807"
                        cy="80.7066"
                        r="1.29337"
                        transform="rotate(-90 68.807 80.7066)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="57.9443"
                        cy="80.7066"
                        r="1.29337"
                        transform="rotate(-90 57.9443 80.7066)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.29337"
                        cy="69.3249"
                        r="1.29337"
                        transform="rotate(-90 1.29337 69.3249)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.6747"
                        cy="69.3249"
                        r="1.29337"
                        transform="rotate(-90 12.6747 69.3249)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="24.0575"
                        cy="69.3249"
                        r="1.29337"
                        transform="rotate(-90 24.0575 69.3249)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="35.4379"
                        cy="69.3249"
                        r="1.29337"
                        transform="rotate(-90 35.4379 69.3249)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="46.8197"
                        cy="69.325"
                        r="1.29337"
                        transform="rotate(-90 46.8197 69.325)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="68.807"
                        cy="69.325"
                        r="1.29337"
                        transform="rotate(-90 68.807 69.325)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="57.9433"
                        cy="69.325"
                        r="1.29337"
                        transform="rotate(-90 57.9433 69.325)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.29337"
                        cy="57.9433"
                        r="1.29337"
                        transform="rotate(-90 1.29337 57.9433)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.29337"
                        cy="24.0568"
                        r="1.29337"
                        transform="rotate(-90 1.29337 24.0568)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.6747"
                        cy="57.9433"
                        r="1.29337"
                        transform="rotate(-90 12.6747 57.9433)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.6747"
                        cy="24.0568"
                        r="1.29337"
                        transform="rotate(-90 12.6747 24.0568)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="24.0575"
                        cy="57.9433"
                        r="1.29337"
                        transform="rotate(-90 24.0575 57.9433)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="24.0575"
                        cy="24.0568"
                        r="1.29337"
                        transform="rotate(-90 24.0575 24.0568)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="35.4379"
                        cy="57.9433"
                        r="1.29337"
                        transform="rotate(-90 35.4379 57.9433)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="35.4379"
                        cy="24.0568"
                        r="1.29337"
                        transform="rotate(-90 35.4379 24.0568)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="46.8197"
                        cy="57.9431"
                        r="1.29337"
                        transform="rotate(-90 46.8197 57.9431)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="46.8197"
                        cy="24.0567"
                        r="1.29337"
                        transform="rotate(-90 46.8197 24.0567)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="68.807"
                        cy="57.9431"
                        r="1.29337"
                        transform="rotate(-90 68.807 57.9431)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="68.807"
                        cy="24.0567"
                        r="1.29337"
                        transform="rotate(-90 68.807 24.0567)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="57.9433"
                        cy="57.9431"
                        r="1.29337"
                        transform="rotate(-90 57.9433 57.9431)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="57.9443"
                        cy="24.0567"
                        r="1.29337"
                        transform="rotate(-90 57.9443 24.0567)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.29337"
                        cy="46.5615"
                        r="1.29337"
                        transform="rotate(-90 1.29337 46.5615)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.29337"
                        cy="12.6751"
                        r="1.29337"
                        transform="rotate(-90 1.29337 12.6751)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.6747"
                        cy="46.5615"
                        r="1.29337"
                        transform="rotate(-90 12.6747 46.5615)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.6747"
                        cy="12.6751"
                        r="1.29337"
                        transform="rotate(-90 12.6747 12.6751)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="24.0575"
                        cy="46.5615"
                        r="1.29337"
                        transform="rotate(-90 24.0575 46.5615)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="24.0575"
                        cy="12.6751"
                        r="1.29337"
                        transform="rotate(-90 24.0575 12.6751)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="35.4379"
                        cy="46.5615"
                        r="1.29337"
                        transform="rotate(-90 35.4379 46.5615)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="35.4379"
                        cy="12.6751"
                        r="1.29337"
                        transform="rotate(-90 35.4379 12.6751)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="46.8197"
                        cy="46.5615"
                        r="1.29337"
                        transform="rotate(-90 46.8197 46.5615)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="46.8197"
                        cy="12.6751"
                        r="1.29337"
                        transform="rotate(-90 46.8197 12.6751)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="68.807"
                        cy="46.5615"
                        r="1.29337"
                        transform="rotate(-90 68.807 46.5615)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="68.807"
                        cy="12.6751"
                        r="1.29337"
                        transform="rotate(-90 68.807 12.6751)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="57.9433"
                        cy="46.5615"
                        r="1.29337"
                        transform="rotate(-90 57.9433 46.5615)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="57.9443"
                        cy="12.6751"
                        r="1.29337"
                        transform="rotate(-90 57.9443 12.6751)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.29337"
                        cy="35.1798"
                        r="1.29337"
                        transform="rotate(-90 1.29337 35.1798)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.29337"
                        cy="1.2933"
                        r="1.29337"
                        transform="rotate(-90 1.29337 1.2933)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.6747"
                        cy="35.1798"
                        r="1.29337"
                        transform="rotate(-90 12.6747 35.1798)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.6747"
                        cy="1.2933"
                        r="1.29337"
                        transform="rotate(-90 12.6747 1.2933)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="24.0575"
                        cy="35.1798"
                        r="1.29337"
                        transform="rotate(-90 24.0575 35.1798)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="24.0575"
                        cy="1.29336"
                        r="1.29337"
                        transform="rotate(-90 24.0575 1.29336)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="35.4379"
                        cy="35.1798"
                        r="1.29337"
                        transform="rotate(-90 35.4379 35.1798)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="35.4379"
                        cy="1.29336"
                        r="1.29337"
                        transform="rotate(-90 35.4379 1.29336)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="46.8197"
                        cy="35.18"
                        r="1.29337"
                        transform="rotate(-90 46.8197 35.18)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="46.8197"
                        cy="1.29354"
                        r="1.29337"
                        transform="rotate(-90 46.8197 1.29354)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="68.807"
                        cy="35.18"
                        r="1.29337"
                        transform="rotate(-90 68.807 35.18)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="68.807"
                        cy="1.29354"
                        r="1.29337"
                        transform="rotate(-90 68.807 1.29354)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="57.9443"
                        cy="35.18"
                        r="1.29337"
                        transform="rotate(-90 57.9443 35.18)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="57.9443"
                        cy="1.29354"
                        r="1.29337"
                        transform="rotate(-90 57.9443 1.29354)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                  <span className="absolute right-0 bottom-0">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.5 21.5L0.505701 21.5C0.767606 10.023 10.023 0.767604 21.5 0.505697L21.5 21.5Z"
                        stroke="#13C296"
                      />
                    </svg>
                  </span>
                </div>
                <div className="text-center">
                  <h4 className="font-medium text-lg text-dark mb-2">
                    {person.fullName}
                  </h4>
                  <p className="font-medium text-sm text-body-color mb-5">
                    {person.title}
                  </p>
                  <div className="flex items-center justify-center">
                    <a
                      href={person.github}
                      rel="noreferrer"
                      className="
                        text-[#cdced6]
                        hover:text-primary
                        w-8
                        h-8
                        mx-2
                        flex
                        items-center
                        justify-center
                      "
                      target="_blank"
                    >
                      <GitHubLogo />
                    </a>
                    <a
                      href={person.twitter}
                      rel="noreferrer"
                      className="
                        text-[#cdced6]
                        hover:text-primary
                        w-8
                        h-8
                        mx-2
                        flex
                        items-center
                        justify-center
                      "
                      target="_blank"
                    >
                      <TwitterLogo />
                    </a>
                    <a
                      href={person.linkedin}
                      rel="noreferrer"
                      className="
                        text-[#cdced6]
                        hover:text-primary
                        w-8
                        h-8
                        mx-2
                        flex
                        items-center
                        justify-center
                      "
                      target="_blank"
                    >
                      <LinkedinLogo />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTeam;
