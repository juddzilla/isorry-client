const faqs = [
    {
      question: "How much information do you need?",
      answer:
        "The more info you give us about what happened, who was involved, the stakes, or anything you'd like to include in your personalized apology",
    },
    {
      question: "What do you do with this information?",
      answer:
        "Other than feed it to an LLM, not much. We don't sell your data.",
    },
    {
      question: "How much typing do I have to do?",
      answer:
        "Just the once when describing what you'd like to apologize for.  Everything after that are simple clicks.",
    },
    {
      question: "Can I use an iSorry.lol generated apology commercially?",
      answer:
        "Only if ChatGPT's license says you can.  We claim no ownership over what is generated.",
    },
  ]
  
  export default function FAQ() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <div key={index+1} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  