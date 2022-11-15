const features = [
  {
    name: "Filecoin Virtual Machine",
    description:
      "We utilize the Filecoin Virtual Machine to attribute digital signatures to users and associate digital signatures with agreements.",
    icon: <img src="/fvm.png" className="h-full w-full" aria-hidden="true" />,
  },
  {
    name: "IPFS",
    description:
      "We utilize IPFS and content addressing to associate digital signatures with agreements.",
    icon: <img src="/ipfs.png" className="h-full w-full" aria-hidden="true" />,
  },
  {
    name: "Filecoin",
    description:
      "We utilize Filecoin for decentralized and verifiable agreement retention.",
    icon: (
      <img src="/filecoin.png" className="h-full w-full" aria-hidden="true" />
    ),
  },
  {
    name: "IPLD",
    description:
      "We utilize IPLD for data model standardization that allows us to build a zero knowledge proof protocol for agreements.",
    icon: <img src="/ipld.png" className="h-full w-full" aria-hidden="true" />,
  },
];

export default function HowItWorks() {
  return (
    <div className="w-full bg-slate-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-slate-50 sm:text-4xl">
            How it works
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 lg:mx-auto">
            Future Proof Digital Signature Protocols
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-20 w-20 items-center justify-center rounded-md">
                    {feature.icon}
                  </div>
                  <p className="ml-24 text-lg font-medium leading-6 text-slate-400">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-24 text-base text-slate-50">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
