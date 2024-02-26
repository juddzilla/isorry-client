import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: "Effortless Apology Crafting",
    description: "Just a few details and you're on your way. Share the essentials – who, what, when, and the pivotal moments. Enlighten us with specifics you want woven into your bespoke apology, and watch us skillfully blend them in.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Explore Your Emotions",
    description: "In the whirlwind of events, emotions run deep. Pause for a moment, delve into your feelings, and share with us the essence of your experience.",
    icon: LockClosedIcon,
  },
  {
    name: "Understand Their Perspective",
    description: "Tailored words for heartfelt impact. Let us know their reaction, and we'll fine-tune your apology to resonate with their emotions.",
    icon: ArrowPathIcon,
  },
  {
    name: "Pledge for Positive Change",
    description: "Genuine change begins with a promise. Tell us how you plan to turn over a new leaf, and we'll help you convey a commitment that's both convincing and sincere.",
    icon: FingerPrintIcon,
  }
];

export default function Features() {
  return (
    <div className="bg-white pt-12 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Apologize ASAP As Possible</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to give a sincere and heartfelt, or otherwise, apology
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            With just a few key pieces of information, we will privde you with a custom AI generated apology using your own words and experiences.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
