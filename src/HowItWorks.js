import {
  BoltIcon,
  LockClosedIcon,
  RocketLaunchIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Filecoin Virtual Machine",
    description:
      "Onboard investors utilizing proven legal agreements without having to leave your dApp. Use zero knowledge proofs to stay compliant while continuing to push the boundaries.",
    icon: RocketLaunchIcon,
  },
  {
    name: "IPFS",
    description:
      "Sign Limited Liability wrappers on chain. Use zero knowledge proofs to check that members have signed agreements before participation. Use proposals to vote on new agreements and sign them on-chain",
    icon: ScaleIcon,
  },
  {
    name: "Filecoin",
    description:
      "Build next generation blockchain workflows utilizing e-signatures.",
    icon: BoltIcon,
  },
  {
    name: "IPLD",
    description:
      "All agreements are encrypted locally before being stored on the peer-to-peer IPFS.",
    icon: LockClosedIcon,
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
            Future Proof E-Signature Protocols
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-purple-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-slate-400">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-slate-50">
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
