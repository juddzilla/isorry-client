import CTA from './Anatomy/CTA';

const faqs = [
  {
    answer: "In giving an apology, it's crucial to begin by gently but clearly addressing the nature of the offense, much like how we would carefully explain a misunderstanding to a friend. It's about acknowledging what we did and the impact it had. Just like when we accidentally step on a friend's toy and break it, we need to describe what happened, focusing on our actions and their consequences. This step is fundamental; it's about being clear, specific, and honest about what we did wrong, without drifting into making excuses or deflecting the blame. By doing so, we allow the person we've hurt to see that we truly understand the extent of what we did and that we are not trying to shy away from the truth. It sets the foundation for a sincere apology, showing that we are taking the first step towards making amends.",
    question: "Nature of the Offense",
  },
  {
    answer: "While offering an apology, it can sometimes be helpful to share the context of our actions, akin to explaining why we arrived late at a dear friend's gathering. It's important to remember that providing context is not about excusing our behavior but about painting a fuller picture of the situation. Just as in our favorite stories, where every character has a backstory, explaining the circumstances can offer a deeper understanding. This does not diminish our responsibility but helps in conveying that our actions were not out of malice. Remember, understanding each other's stories can bring us closer, fostering empathy and compassion. It can be a bridge to healing, showing the person we've hurt that we respect them enough to share the whole picture, trusting them with our vulnerabilities and our truth.",
    question: "Context",
  },
  {
    answer: "In the heart of every apology, considering the recipient's perspective is vital. It’s like putting ourselves in their shoes, similar to how we imagine being different characters when we play. By earnestly trying to understand their feelings, we show a deep level of care and respect. It's about acknowledging the hurt from their viewpoint, validating their emotions, and recognizing the impact of our actions. Just like when we listen to a friend sharing a sad story, it's important to be present and empathetic. Understanding their perspective isn't just about hearing their words; it's about feeling their emotions and seeing the situation through their eyes. This empathy can be a powerful tool in mending the rift caused by our actions, as it shows a sincere effort to connect with and understand their experience, which is a fundamental step in healing a wounded relationship.",
    question: "Recipient's Perspective",
  },
  {
    answer: "While crafting an apology, it’s important to express our own feelings and intentions. This part of the apology is like opening the doors to our heart and letting the other person see our true intentions. It involves conveying our emotions surrounding the incident and ensuring that the person knows we didn’t mean to cause harm. Expressing regret and taking responsibility go hand-in-hand; it's about saying, 'I am truly sorry for what I did,' and underlining that our intentions were not to cause pain. Sharing our feelings helps in making our apology more genuine and heartfelt. It's about being transparent with our emotions, whether it's sadness, guilt, or regret, and showing that we understand the gravity of the situation. This sincerity can foster a deeper connection and pave the way for forgiveness and reconciliation.",
    question: "Your Feelings and Intentions",
  },
  {
    answer: "A central element of a meaningful apology is the acknowledgment of responsibility. It’s akin to picking up the pieces after we’ve accidentally broken something, not just with our hands but with our words and actions. It involves openly accepting responsibility for our actions and their impact, without excuses or deflection. This acknowledgment is the heart of any true apology; it's about saying, 'I understand what I did was wrong, and I am sorry for the hurt I caused.' It’s a sign of maturity and growth, showing that we’re not only aware of what we did but are also willing to own up to it. Expressing genuine remorse for the harm caused and being able to empathize with the other person's feelings are essential. It’s a step towards rebuilding trust, showing that we are committed to making things right and learning from our mistakes.",
    question: "Acknowledgment of Responsibility",
  },
  {
    answer: "Expressing genuine remorse and showing empathy are like offering a warm, heartfelt embrace through our words. It's crucial to convey that we understand the pain we’ve caused and feel sincerely sorry about it. Showing remorse isn’t just about saying 'I'm sorry'; it’s about communicating our regret in a way that resonates with sincerity and depth. This can be soothing and healing in a situation marred by hurt. Empathy involves putting ourselves in the other person's place, feeling their pain, and understanding the impact of our actions from their perspective. It’s a powerful act of human connection, bridging the gap that the offense might have created. By effectively communicating our remorse and empathy, we're not just offering words, but we're reaching out with our emotions, seeking to heal the emotional wounds inflicted.",
    question: "Remorse and Empathy",

  },
  {
    answer: "In any heartfelt apology, it’s essential to express a commitment to change. This is like making a promise to do better and taking steps to ensure we uphold it. It involves outlining specific actions we will take to rectify the situation and prevent it from happening again in the future. This step is about more than just words; it's a pledge to transform our behavior and make amends. It's important to communicate this commitment clearly, ensuring that it's understood as a sincere intention to improve and not repeat the hurtful actions. Such a commitment can significantly aid in rebuilding trust and restoring the bond. It shows that our apology is not just about expressing regret but also about actively working towards positive change and growth.",
    question: "Commitment to Change",
  },
  {
    answer: "The timing and method of delivering an apology are as crucial as the words we choose. It's about understanding when the other person is ready to hear our apology and choosing the most appropriate way to convey it. Timing is key; just like knowing when to offer a comforting word, an apology should be given at a moment when it can be meaningfully received. The method of delivery – whether in person, through a letter, or another form – should be chosen with care, considering what would be most comfortable and meaningful for the recipient. A thoughtful delivery can make a significant difference, showing that we respect their feelings and are sincere in our efforts to make amends. It's about showing empathy not just in our words but in how and when we choose to express them, ensuring that our apology is as heartfelt as it is timely.",
    question: "Timing and Delivery",
  },
];
  
  const Component = () => {
    return (
      <>
        <div className="" id="parts">
          <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <svg
                className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                    width={200}
                    height={200}
                    x="50%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                  <path
                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                    strokeWidth={0}
                  />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
              </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <p className="text-base font-semibold leading-7 text-primary">iSorry.lol</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dissecting Mistakes, One Sorry at a Time.</h1>
                    <p className="mt-6 text-xl leading-8 text-gray-700">
                    From the sincere and heartfelt to the faux and cunning - navigate the delicate terrain of remorse, dissecting mistakes and unraveling the layers of contrition, one sorry at a time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <img
                  className="w-[36rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
                  src='https://images.unsplash.com/photo-1618939304347-e91b1f33d2ab?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt=""
                />
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                    <p>
                    In this exploration, we delve into the art and nuance of apologizing, a journey that often goes unnoticed in our daily interactions. Apologies are not just simple admissions of wrongdoing; they are complex tapestries woven with threads of empathy, understanding, and growth. Each apology tells a story — a story of missteps and learning, of hurt and healing. As we dissect these stories, we uncover the subtleties that differentiate a genuine expression of regret from a hollow utterance of obligation. We learn that true remorse goes beyond mere words; it encompasses a genuine recognition of our impact on others, a deep reflection on our actions, and, most importantly, a commitment to personal change and growth. Join us as we navigate this intricate landscape, understanding that every 'I'm sorry' is more than just a phrase — it's an opportunity for transformation and a step towards better understanding ourselves and those around us.
                    </p>

                    {faqs.map((faq) => {                    
                    return (
                      <div key={faq.id} className="mb-10 text-base leading-7 flex-2 mb-2">
                        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">{faq.question}</h2>
                        <p className="mt-6">{faq.answer}</p>
                      </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        
        <CTA />
      </>      
    )
  }
  

const Route = {
    element: <Component />,
    path: "/anatomy",
};
  
export default Route;