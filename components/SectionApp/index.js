/* eslint-disable @next/next/no-img-element */
const SectionApp = ({ app }) => {
  return (
    <div
      className="bg-white mb-12 group wow fadeInUp flex flex-col justify-between grow rounded-md border border-gray-200 p-5"
      data-wow-delay=".1s"
    >
      <div className="">
        <div
          className="
                  w-[60px]
                  h-[60px]
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
            className="h-[60px] w-[60px]"
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
