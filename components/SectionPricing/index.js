const SectionPricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12  lg:pb-[90px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-10">
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Our Pricing Plan
              </h2>
              <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
                Super simple pricing plans. You will be paying for connected
                Zoom accounts regardless of your team size.
              </p>

              <h3 className="font-bold mt-4 mb-0 text-dark text-2xl sm:text-[26px] wow fadeInUp">
                7 Days Free Trial
              </h3>
            </div>
          </div>
        </div>

        <div className="flex  items-center justify-center gap-10">
          <div className="w-full md:w-1/2 ">
            <div
              className="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white py-10 px-8 text-center shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12"
              data-wow-delay=".15s
              "
            >
              <span className="mb-2 block text-base font-medium uppercase text-dark">
                STARTING FROM
              </span>
              <h2 className="mb-9 text-[28px] font-semibold text-primary">
                $ 4/mo
              </h2>

              <div className="mb-10">
                <p className="mb-1 text-base font-medium leading-loose text-body-color">
                  Per 1 Zoom account
                </p>
                <p className="mb-1 text-base font-medium leading-loose text-body-color">
                  Create new meeting
                </p>
                <p className="mb-1 text-base font-medium leading-loose text-body-color">
                  Use my Personal Meeting Room
                </p>
                <p className="mb-1 text-base font-medium leading-loose text-body-color">
                  Free updates
                </p>
                <p className="mb-1 text-base font-medium leading-loose text-body-color">
                  Full support
                </p>
              </div>
              <div className="w-full">
                <a
                  href="https://intercom-zoom.sklabs.dev/login"
                  className="inline-block rounded-full border border-[#D4DEFF] bg-transparent py-4 px-11 text-center text-base font-medium text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white"
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 ">
            <div
              className="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-xl bg-primary bg-gradient-to-b from-primary to-[#3c378a] py-10 px-8 text-center shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12"
              data-wow-delay=".1s
              "
            >
              <span className="mb-5 inline-block rounded-full border border-white bg-white py-2 px-6 text-base font-semibold uppercase text-primary">
                POPULAR
              </span>
              <span className="mb-2 block text-base font-medium uppercase text-white">
                STARTING FROM
              </span>
              <h2 className="mb-9 text-[28px] font-semibold text-white">
                $ 38/yr
              </h2>

              <div className="mb-10">
                <p className="mb-1 text-base font-medium leading-loose text-white">
                  Save 20% with yearly subscription
                </p>
                <p className="mb-1 text-base font-medium leading-loose text-white">
                  Per 1 Zoom account
                </p>
                <p className="mb-1 text-base font-medium leading-loose text-white">
                  Create new meeting
                </p>
                <p className="mb-1 text-base font-medium leading-loose text-white">
                  Use my Personal Meeting Room
                </p>
                <p className="mb-1 text-base font-medium leading-loose text-white">
                  Free updates
                </p>
                <p className="mb-1 text-base font-medium leading-loose text-white">
                  Full support
                </p>
              </div>
              <div className="w-full">
                <a
                  href="https://intercom-zoom.sklabs.dev/login"
                  className="inline-block rounded-full border border-white bg-white py-4 px-11 text-center text-base font-medium text-dark transition duration-300 ease-in-out hover:border-dark hover:bg-dark hover:text-white"
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPricing;
