import React from "react";

const Stats02Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto w-full py-12 px-6 xl:px-0">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          The perfect starting point for any project
        </h2>
        <p className="mt-6 text-lg max-w-2xl text-foreground/70">
          The world&apos;s most advanced UI kit for Figma. Meticulously crafted
          with 100% Auto Layout 5.0, variables, smart variants, and WCAG
          accessibility.
        </p>

        <div className="mt-16 sm:mt-24 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16 justify-center">
          <div>
            <span className="text-5xl font-bold text-primary">900+</span>
            <p className="mt-6 font-bold text-xl">Global styles + variables</p>
            <p className="mt-2 text-[17px] text-foreground/70 font-medium">
              Super smart global color, typography and effects styles +
              variables!
            </p>
          </div>
          <div>
            <span className="text-5xl font-bold text-primary">10,000+</span>
            <p className="mt-6 font-bold text-xl">Components and variants</p>
            <p className="mt-2 text-[17px] text-foreground/70 font-medium">
              We&apos;ve thought of everything you need so you don&apos;t have
              to.
            </p>
          </div>
          <div>
            <span className="text-5xl font-bold text-primary">420+</span>
            <p className="mt-6 font-bold text-xl">Page design examples</p>
            <p className="mt-2 text-[17px] text-foreground/70 font-medium">
              A whopping 420+ ready-to-go desktop and mobile page examples.
            </p>
          </div>
          <div>
            <span className="text-5xl font-bold text-primary">2,000+</span>
            <p className="mt-6 font-bold text-xl">Icons and logos</p>
            <p className="mt-2 text-[17px] text-foreground/70 font-medium">
              All the icons you&apos;ll need, including country flags and
              payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats02Page;
