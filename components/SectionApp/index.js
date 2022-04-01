/* eslint-disable @next/next/no-img-element */
const SectionApp = ({ app }) => {
  return (
    <div
      className="bg-white mb-12 group wow fadeInUp flex flex-col justify-between grow"
      data-wow-delay=".1s"
    >
      <div className="">
        <div
          className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  rounded-2xl
                  mb-7
                  relative
                  z-10
                "
        >
          <img
            src={app.logo}
            alt={`${app.name} logo`}
            className="h-[70px] w-[70px]"
          />
        </div>
        <h4 className="font-bold text-xl text-dark mb-3">{app.name}</h4>
        <p className="text-body-color mb-8 lg:mb-11">{app.description}</p>
      </div>
      <a
        href={app.link}
        className="font-medium text-base text-body-color hover:text-primary"
        target="_blank"
        rel="noreferrer"
      >
        Learn More
      </a>
    </div>
  );
};

export default SectionApp;
