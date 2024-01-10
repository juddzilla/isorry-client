import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Minimal Input Needed',
    description:
      "Tell us what happened - who did what, when, and how.  Give us any important details you'd like us to include into your tailored apology, and we'll best find a way to incorporate it.",
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Tell Us How You Feel',
    description:
      'A lot can happen in a little time.  Take a second to reflect, and see how you really felt.',
    icon: LockClosedIcon,
  },
  {
    name: 'Tell Us How They Feel',
    description:
      "We will cater your words to fit how they responded.",
    icon: ArrowPathIcon,
  },
  {
    name: "Convince Them That You'll Change",
    description:
      "It takes some change to make some change.",
    icon: FingerPrintIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
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
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
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
