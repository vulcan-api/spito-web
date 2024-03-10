import Logo from "/logo.svg";

export default function Footer(): JSX.Element {
  return (
    <footer className="border-t-2">
      <div className="container flex flex-col sm:flex-row gap-8 justify-between p-4 max-w-screen-2xl font-poppins text-muted-foreground">
        <div className="flex flex-col gap-4">
          <p>
            <a
              href="https://github.com/avorty/"
              target="_blank"
              title="https://github.com/avorty"
              className="underline hover:no-underline block mt-4"
            >
              <img
                src="https://avatars.githubusercontent.com/u/121884644?s=200&v=4"
                alt="Avorty logo"
                className="w-8 h-8 rounded-full inline-block mr-2"
              />
              Avorty Team
            </a>
          </p>
          <p>
            Source code at{" "}
            <a
              href="https://github.com/avorty/spito.avorty.org"
              target="_blank"
              title="Site source code"
              className="underline hover:no-underline"
            >
              spito.avorty.org
            </a>{" "}
            repository
          </p>
          <p>
            Built with{" "}
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              title="https://ui.shadcn.com"
              className="underline hover:no-underline"
            >
              Shadcn/ui
            </a>{" "}
            and{" "}
            <a
              href="https://ui.aceternity.com/"
              target="_blank"
              title="https://ui.aceternity.com"
              className="underline hover:no-underline"
            >
              Aceternity UI
            </a>
          </p>
        </div>
        <div className="items-center justify-center flex text-foreground">
          <img src={Logo} alt="" className="w-12 h-12" />
          <span className="inline-block font-bold text-4xl">spito</span>
        </div>
      </div>
    </footer>
  );
}
