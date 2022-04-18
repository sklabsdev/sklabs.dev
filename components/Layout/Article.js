import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import Navbar from "../Navbar";
import SectionHeader from "../SectionHeader";
import Footer from "../Footer";
import BackToTop from "../BackToTop";
import MDXComponents from "../MDXComponents";

export default function Page({ meta, children }) {
  return (
    <div>
      <Head>
        <title>SKlabs | {meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        <SectionHeader header={meta.title} />

        <section
          id="products"
          className="pt-20 lg:pt-[120px] pb-8 lg:pb-[70px]"
        >
          <div className="container">
            <MDXProvider components={MDXComponents}>{children}</MDXProvider>
          </div>
        </section>

        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}
