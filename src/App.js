import mixpanel from "mixpanel-browser";
import Features from "./Features";
import HowItWorks from "./HowItWorks";

function App() {
  return (
    <>
      <div className="relative bg-slate-900 px-4 pt-6 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between"
          aria-label="Global"
        >
          <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
            <div className="flex w-full items-center justify-between md:w-auto">
              <a href="#" rel="noreferrer">
                <span className="sr-only">ZKsig</span>
                <img alt="ZKsig" className="h-20 w-auto" src="/logo_v2.jpg" />
              </a>
            </div>
          </div>
          <div className="rounded-md shadow">
            <a
              href="https://forms.gle/F8tHsaPFsRfZpnod9"
              target="_blank"
              without
              rel="noreferrer"
              className="flex hidden w-full items-center justify-center rounded-md border border-transparent bg-fuchsia-500 px-8 py-3 text-base font-medium text-white hover:bg-fuchsia-300 hover:text-slate-900 sm:block md:py-4 md:px-10 md:text-lg"
              onClick={() => mixpanel.track("Get Early Access")}
            >
              Get Early Access
            </a>
          </div>
        </nav>
      </div>

      <section className="align-end container mx-auto mt-10 flex items-start justify-between gap-4 py-8 px-4 lg:mt-0 lg:grid lg:grid-cols-2 xl:min-h-screen">
        <div className="max-w-7xl sm:text-center lg:m-auto lg:text-left">
          <h1 className="text-5xl font-bold tracking-tight text-purple-100 sm:text-6xl lg:text-7xl">
            <span className="block xl:inline">
              The Future of Legal Agreements
            </span>
          </h1>
          <p className="mt-3 text-base text-xl text-purple-100 sm:mx-auto sm:mt-5 md:mt-5 lg:mx-0">
            Send and sign agreements utilizing decentralized e-signature
            protocols.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="https://forms.gle/F8tHsaPFsRfZpnod9"
                target="_blank"
                without
                rel="noreferrer"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-fuchsia-500 px-8 py-3 text-base font-medium text-white hover:bg-fuchsia-300 hover:text-slate-900 md:py-4 md:px-10 md:text-lg"
                onClick={() => mixpanel.track("Get Early Access")}
              >
                Get Early Access
              </a>
            </div>
          </div>
        </div>

        <div className="m-auto hidden lg:block">
          <img
            className="m-auto h-auto w-full max-w-xs xl:max-w-lg"
            src="/screen.png"
          />
        </div>
      </section>

      <Features />
      <HowItWorks />

      <footer className="w-full p-24">
        <img className="m-auto w-24" src="/logo_v2.jpg" />
      </footer>
    </>
  );
}

export default App;
