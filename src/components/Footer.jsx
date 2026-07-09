import footerPic from "../assets/images/bg-cta.jpg";

const Footer = () => {
  return (
    <section id="contact">
      <div
        className="relative bg-cover bg-center bg-no-repeat py-24"
        style={{ backgroundImage: `url(${footerPic})` }}
      >
        <div className="absolute inset-0 bg-slate-950/80"></div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Let’s build something polished, modern, and memorable.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            If you need a website that feels professional and connects with your
            audience, I’d love to hear about your project.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm sm:flex-row sm:items-center">
            <a
              href="mailto:inayat@example.com"
              className="rounded-full bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500"
            >
              Say Hello
            </a>
            <a
              href="#home"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-slate-100 transition hover:border-violet-400 hover:text-violet-200"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
