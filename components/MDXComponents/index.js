const components = {
  h1: (props) => (
    <h1
      className="
    font-bold
    text-3xl
    sm:text-4xl
    md:text-[45px]
    leading-snug
    sm:leading-snug
    md:leading-snug
    mb-8
  "
      {...props}
    />
  ),
  h2: (props) => (
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
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="
        font-bold
        mb-8
        text-dark text-2xl
        sm:text-[26px]
        wow
        fadeInUp
  "
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="
      text-base 
      text-body-color
      leading-relaxed
      mb-8
      wow
      fadeInUp
  "
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="
      text-base 
      text-body-color
      leading-relaxed
      my-6
      wow
      fadeInUp
      list-disc
  "
      {...props}
    />
  ),
  ol: (props) => (
    <ul
      className="
      text-base 
      text-body-color
      leading-relaxed
      my-6
      wow
      fadeInUp
      list-decimal
  "
      {...props}
    />
  ),
  li: (props) => (
    <li
      className="
      text-base 
      text-body-color
      ml-7
      pl-2
      my-3
      wow
      fadeInUp
  "
      {...props}
    />
  ),
};

export default components;
