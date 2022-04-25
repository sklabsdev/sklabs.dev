import { MDXProvider } from "@mdx-js/react";
import Header from "../Header";
import Navbar from "../Navbar";
import SectionHeader from "../SectionHeader";
import Footer from "../Footer";
import MDXComponents from "../MDXComponents";

export default function Page({ meta, children }) {
  return (
    <div>
      <Header title={meta.title} description={meta.description} />

      <div>
        <Navbar isLandingPage />
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
      </div>
    </div>
  );
}
