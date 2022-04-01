const BackToTop = () => {
  return (
    <a
      href="javascript:void(0)"
      className="
        hidden
        items-center
        justify-center
        bg-primary
        text-white
        w-10
        h-10
        rounded-md
        fixed
        bottom-8
        right-8
        left-auto
        z-[999]
        hover:bg-dark
        back-to-top
        shadow-md
        transition
        duration-300
        ease-in-out
      "
    >
      <span className="w-3 h-3 border-t border-l border-white rotate-45 mt-[6px]"></span>
    </a>
  );
};

export default BackToTop;
