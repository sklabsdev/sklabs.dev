import Head from "next/head";
import Script from "next/script";

const Header = ({
  title = "Unlock Your Productivity with Powerful Integrations",
  description = "Unlock Your Productivity with Powerful Integrations",
}) => {
  return (
    <>
      <Head>
        <title>SKlabs | {title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {process.env.NEXT_PUBLIC_HOTJAR_ID && (
        <Script id="hotjar" strategy="afterInteractive">
          {`
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `}
        </Script>
      )}

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
        `}
      </Script>

      <Script
        id="wow-init"
        strategy="afterInteractive"
        src="/assets/js/wow.min.js"
        onLoad={() => {
          new WOW().init();
        }}
      />

      <Script
        id="main-init"
        strategy="afterInteractive"
        src="/assets/js/main.js"
      />
    </>
  );
};

export default Header;
