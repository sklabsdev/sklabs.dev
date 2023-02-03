const SectionContact = () => {
  return (
    <section id="contact" className="py-20 md:py-[120px] relative">
      <div
        className="
          absolute
          z-[-1]
          w-full
          h-1/2
          lg:h-[45%]
          xl:h-1/2
          bg-[#f3f4fe]
          top-0
          left-0
        "
      ></div>
      <div className="container px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="px-4 w-full lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[150px]">
                <span className="text-dark font-semibold text-base mb-5">
                  CONTACT US
                </span>
                <h2 className="text-[35px] font-semibold">
                  Love to hear from you!
                </h2>
              </div>
              <div className="flex flex-wrap justify-between mb-12 lg:mb-0">
                <div className="flex max-w-full w-[330px] mb-8">
                  <div className="text-[32px] text-primary mr-6">
                    <svg
                      width="34"
                      height="25"
                      viewBox="0 0 34 25"
                      className="fill-current"
                    >
                      <path d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mb-6">
                      How Can We Help?
                    </h5>
                    <p className="text-base text-body-color">
                      <a
                        href="mailto:support@sklabs.dev"
                        target="_blank"
                        rel="noreferrer"
                      >
                        support@sklabs.dev
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
