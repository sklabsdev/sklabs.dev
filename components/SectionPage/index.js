const SectionPageHeader = ({ children }) => {
  return (
    <h2
      className="
      font-bold
      text-dark text-[26px]
      sm:text-3xl
      md:text-4xl
      leading-snug
      sm:leading-snug
      md:leading-snug
      mb-6
      wow
      fadeInUp
      "
      data-wow-delay=".1s"
    >
      {children}
    </h2>
  );
};

const SectionPageSubHeader = ({ children }) => {
  return (
    <h3
      className="
        font-bold
        mb-8
        text-dark text-2xl
        sm:text-[26px]
        wow
        fadeInUp
      "
      data-wow-delay=".1s"
    >
      {children}
    </h3>
  );
};

const SectionPageParagraph = ({ children }) => {
  return (
    <p
      className="
        text-base text-body-color
        leading-relaxed
        mb-8
        wow
        fadeInUp
      "
      data-wow-delay=".1s"
    >
      {children}
    </p>
  );
};

const SectionPage = () => {
  return (
    <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
      <div className="container">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-12/12 px-4">
                <div>
                  <SectionPageParagraph>
                    Last updated: September 9, 2020
                  </SectionPageParagraph>
                  <SectionPageParagraph>
                    The privacy of your data — and it is your data, not ours! In
                    this policy, we lay out: what data we collect and why; how
                    your data is handled; and your rights to your data. We
                    promise we never sell your data: never have, never will.
                  </SectionPageParagraph>
                  <SectionPageParagraph>
                    This policy applies to all products built and maintained by
                    SKlabs.
                  </SectionPageParagraph>
                  <SectionPageHeader>What we collect and why</SectionPageHeader>
                  <SectionPageParagraph>
                    Our guiding principle is to collect only what we need.
                    Here’s what that means in practice:
                  </SectionPageParagraph>
                  <SectionPageSubHeader>Identity & access</SectionPageSubHeader>
                  <SectionPageParagraph>
                    When you install an app developed by SKlabs, we store your
                    email address to identify you as a customer.
                  </SectionPageParagraph>
                  <SectionPageSubHeader>
                    Billing information
                  </SectionPageSubHeader>

                  <SectionPageParagraph>
                    We do not store any billing information on our system. This
                    is handled by our partners, such has
                    <a
                      href="https://livechat.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      https://livechat.com
                    </a>
                    , when you purchase one of our apps.
                  </SectionPageParagraph>

                  <SectionPageSubHeader>Geolocation data</SectionPageSubHeader>

                  <SectionPageParagraph>
                    Web analytics data — described further in the Website
                    Interactions section — are also tied temporarily to IP
                    addresses to assist with troubleshooting cases.
                  </SectionPageParagraph>

                  <SectionPageSubHeader>
                    Website interactions
                  </SectionPageSubHeader>

                  <SectionPageParagraph>
                    When you browse our marketing pages or applications, your
                    browser automatically shares certain information such as
                    which operating system and browser version you are using. We
                    track that information, along with the pages you are
                    visiting and page load timing.
                  </SectionPageParagraph>

                  <SectionPageSubHeader>Cookies</SectionPageSubHeader>

                  <SectionPageParagraph>
                    We do use persistent first-party cookies to store certain
                    preferences, make it easier for you to use our applications,
                    and support some in-house analytics. A cookie is a piece of
                    text stored by your browser to help it remember your login
                    information, site preferences, and more. You can adjust
                    cookie retention settings in your own browser. To learn more
                    about cookies, including how to view which cookies have been
                    set and how to manage and delete them, please visit::{" "}
                    <a
                      href="https://www.allaboutcookies.org"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.allaboutcookies.org
                    </a>
                  </SectionPageParagraph>

                  <SectionPageSubHeader>
                    Voluntary correspondence
                  </SectionPageSubHeader>

                  <SectionPageParagraph>
                    When you write SKlabs with a question or to ask for help, we
                    keep that correspondence, including the email address, so
                    that we have a history of past correspondences to reference
                    if you reach out in the future. We also store any
                    information you volunteer like surveys. Sometimes when we do
                    customer interviews, we may ask for your permission to
                    record the conversation for future reference or use. We only
                    do so if you give your express consent.
                  </SectionPageParagraph>

                  <SectionPageSubHeader>
                    Information we do not collect
                  </SectionPageSubHeader>

                  <SectionPageParagraph>
                    We don’t collect any characteristics of protected
                    classifications including age, race, gender, religion,
                    sexual orientation, gender identity, gender expression, or
                    physical and mental abilities or disabilities. You may
                    provide these data voluntarily, such as if you include a
                    pronoun preference in your email signature when writing into
                    our Support team. We also do not collect any biometric data.
                    You are given the option to add a picture to your user
                    profile, which could be a real picture of you or a picture
                    of something else that represents you best. We do not
                    extract any information from profile pictures: they are for
                    your use alone.
                  </SectionPageParagraph>

                  <SectionPageHeader>
                    When we access or share your information
                  </SectionPageHeader>

                  <SectionPageParagraph>
                    Our default practice is to not access your information. The
                    only times we’ll ever access or share your info are:{" "}
                    <b>
                      To help you troubleshoot or squash a software bug, with
                      your permission.
                    </b>{" "}
                    If at any point we need to access your account to help you
                    with a Support case, we will ask for your consent before
                    proceeding.
                  </SectionPageParagraph>

                  <SectionPageHeader>
                    Your rights with respect to your information
                  </SectionPageHeader>

                  <SectionPageParagraph>
                    At SKlabs, we apply the same data rights to all customers,
                    regardless of their location. Currently some of the most
                    privacy-forward regulations in place are the European
                    Union’s General Data Protection Regulation (“GDPR”) and
                    California Consumer Privacy Act (“CCPA”) in the US. SKlabs
                    recognizes all of the rights granted in these regulations,
                    except as limited by applicable law. These rights include:{" "}
                  </SectionPageParagraph>

                  <SectionPageParagraph>
                    <ul>
                      <li>
                        - <b>Right to Know.</b> You have the right to know what
                        personal information is collected, used, shared or sold.
                        We outline both the categories and specific bits of data
                        we collect, as well as how they are used, in this
                        privacy policy.
                      </li>
                      <li>
                        - <b>Right of Access.</b> This includes your right to
                        access the personal information we gather about you, and
                        your right to obtain information about the sharing,
                        storage, security and processing of that information.
                      </li>
                      <li>
                        - <b>Right to Correction.</b> You have the right to
                        request correction of your personal information.
                      </li>
                      <li>
                        - <b>Right to Erasure / “To be Forgotten”.</b> This is
                        your right to request, subject to certain limitations
                        under applicable law, that your personal information be
                        erased from our possession and, by extension, all of our
                        service providers. Fulfillment of some data deletion
                        requests may prevent you from using SKlabs services
                        because our applications may then no longer work. In
                        such cases, a data deletion request may result in
                        closing your account.
                      </li>
                      <li>
                        - <b>Right to Complain.</b> You have the right to make a
                        complaint regarding our handling of your personal
                        information with the appropriate supervisory authority.
                        To identify your specific authority or find out more
                        about this right, EU individuals should go to{" "}
                        <a
                          href="https://edpb.europa.eu/about-edpb/board/members_en"
                          rel="noreferrer"
                          target="_blank"
                        >
                          https://edpb.europa.eu/about-edpb/board/members_en
                        </a>
                        .
                      </li>
                      <li>
                        - <b>Right to Restrict Processing.</b> This is your
                        right to request restriction of how and why your
                        personal information is used or processed, including
                        opting out of sale of personal information. (Again: we
                        never have and never will sell your personal data.)
                      </li>
                      <li>
                        - <b>Right to Object.</b> You have the right, in certain
                        situations, to object to how or why your personal
                        information is processed.
                      </li>
                      <li>
                        - <b>Right to Portability.</b> You have the right to
                        receive the personal information we have about you and
                        the right to transmit it to another party.
                      </li>
                      <li>
                        -{" "}
                        <b>
                          Right to not be subject to Automated Decision-Making.
                        </b>{" "}
                        You have the right to object and prevent any decision
                        that could have a legal, or similarly significant,
                        effect on you from being made solely based on automated
                        processes. This right is limited, however, if the
                        decision is necessary for performance of any contract
                        between you and us, is allowed by applicable law, or is
                        based on your explicit consent.
                      </li>
                      <li>
                        - <b>Right to Non-Discrimination.</b> This right stems
                        from the CCPA. We do not and will not charge you a
                        different amount to use our products, offer you
                        different discounts, or give you a lower level of
                        customer service because you have exercised your data
                        privacy rights. However, the exercise of certain rights
                        (such as the right “to be forgotten”) may, by virtue of
                        your exercising those rights, prevent you from using our
                        Services.
                      </li>
                    </ul>
                  </SectionPageParagraph>

                  <SectionPageParagraph>
                    If you have questions about exercising these rights or need
                    assistance, please contact us at{" "}
                    <a href="mailto:hey@sklabs.dev">hey@sklabs.dev</a>. For
                    requests to delete personal information or know what
                    personal information has been collected, we will first
                    verify your identity using a combination of at least two
                    pieces of information already collected including your user
                    email address. If an authorized agent is corresponding on
                    your behalf, we will first need written consent with a
                    signature from the account holder before proceeding.
                  </SectionPageParagraph>

                  <SectionPageParagraph>
                    If you are in the EU, you can identify your specific
                    authority to file a complaint or find out more about GDPR,
                    at{" "}
                    <a
                      href="https://edpb.europa.eu/about-edpb/board/members_en"
                      rel="noreferrer"
                      target="_blank"
                    >
                      https://edpb.europa.eu/about-edpb/board/members_en
                    </a>
                    .
                  </SectionPageParagraph>

                  <SectionPageHeader>How we secure your data</SectionPageHeader>

                  <SectionPageParagraph>
                    All data is encrypted via{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Transport_Layer_Security"
                      rel="noreferrer"
                      target="_blank"
                    >
                      SSL/TLS
                    </a>{" "}
                    when transmitted from our servers to your browser.
                  </SectionPageParagraph>

                  <SectionPageHeader>
                    Data retention and deletion of data
                  </SectionPageHeader>

                  <SectionPageParagraph>
                    Generally, we retain your Personal Information for as long
                    as you have our apps installed. When you uninstall one of
                    our apps, the data is trashed and then completely removed
                    after 60 days.
                  </SectionPageParagraph>

                  <SectionPageHeader>
                    Location of site and data
                  </SectionPageHeader>

                  <SectionPageParagraph>
                    Our products and other web properties are operated in the
                    United Kingdom.
                  </SectionPageParagraph>

                  <SectionPageSubHeader>
                    We commit to resolving all complaints
                  </SectionPageSubHeader>

                  <SectionPageParagraph>
                    In compliance with the EU-US Privacy Shield Principles and
                    the Swiss-US Privacy Shield Principles, we commit to resolve
                    complaints about your privacy and our collection or use of
                    your personal information. European Union, United Kingdom,
                    or Swiss individuals with inquiries or complaints regarding
                    this privacy policy should contact SKlabs at hey@sklabs.dev.
                  </SectionPageParagraph>

                  <SectionPageParagraph>
                    If your EU-US Privacy Shield complaint cannot be resolved
                    through these described channels, under certain conditions,
                    you may invoke binding arbitration for some residual claims
                    not resolved by other redress mechanisms. To learn more,
                    please view the Privacy Shield Annex 1 at{" "}
                    <a
                      href="https://www.privacyshield.gov/article?id=ANNEX-I-introduction"
                      rel="noreferrer"
                      target="_blank"
                    >
                      https://www.privacyshield.gov/article?id=ANNEX-I-introduction
                    </a>
                    .
                  </SectionPageParagraph>

                  <SectionPageHeader>Changes & questions</SectionPageHeader>

                  <SectionPageParagraph>
                    We may update this policy as needed to comply with relevant
                    regulations and reflect any new practices.
                  </SectionPageParagraph>

                  <SectionPageParagraph>
                    Have any questions, comments, or concerns about this privacy
                    policy, your data, or your rights with respect to your
                    information? Please get in touch by emailing us at{" "}
                    <a href="mailto:hey@sklabs.dev">hey@sklabs.dev</a> and we’ll
                    be happy to answer them!
                  </SectionPageParagraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPage;
