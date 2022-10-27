import {
  BoltIcon,
  LockClosedIcon,
  RocketLaunchIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "DeFi",
    description:
      "Onboard investors utilizing proven legal agreements without having to leave your dApp. Use zero knowledge proofs to stay compliant while continuing to push the boundaries.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Enhanced Legal Compliance for DAOs",
    description:
      "Sign Limited Liability wrappers on chain. Use zero knowledge proofs to check that members have signed agreements before participation. Use proposals to vote on new agreements and sign them on-chain",
    icon: ScaleIcon,
  },
  {
    name: "Build the Future",
    description:
      "Build next generation blockchain workflows utilizing e-signatures.",
    icon: BoltIcon,
  },
  {
    name: "Encrypted Agreements",
    description:
      "All agreements are encrypted locally before being stored on the peer-to-peer IPFS.",
    icon: LockClosedIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-slate-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-purple-500">
            On-Chain E-Signatures
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-slate-900 sm:text-4xl">
            Sign agreements
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
            Zero knowledge proof of signature backed by the Solana blockchain.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
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
