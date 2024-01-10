import Hero from './Anatomy/Hero';
import CTA from './Anatomy/CTA';


const faqs = [
    {
      question: 'Nature of the Offense',
      answer:
        'What specifically happened that requires an apology? Are there any specific actions or words that caused the issue?',
    },
    {
        question: 'Context',
        answer:
          'What was the context or background of the situation? Were there any external factors contributing to the situation?',
    },    
    {
        question: "Recipient's Perspective",
        answer:
          'How does the other person feel about the situation? What might be their perspective or feelings about what occurred?',
      },
      {
          question: 'Your Feelings and Intentions',
          answer:
            'Are you willing to take responsibility for your actions or words? Do you understand the impact of what happened on the other person?',
      },    
      {
        question: 'Acknowledgment of Responsibility',
        answer:
          "Can you express genuine remorse for any harm caused? Are you able to empathize with the other person's feelings?",
      },
      {
          question: 'Remorse and Empathy',
          answer:
            'What specifically happened that requires an apology? Are there any specific actions or words that caused the issue?',
      },          
      {
        question: 'Commitment to Change',
        answer:
          'What steps, if any, are you willing to take to make amends or prevent a recurrence? Can you communicate your commitment to avoiding similar situations in the future?',
      },
      {
          question: 'Timing and Delivery',
          answer:
            'Is there a specific timeframe or deadline for the apology? How would you like to deliver the apology (in person, written, etc.)?',
      },                
  ]
  
  const Component = () => {
    return (
        <>
        <Hero />
        <div className="bg-gray-900" id="parts">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">The Components of an Effective Apology</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
            Writing an apology effectively requires understanding the context of the situation and the dynamics between you and the other person. To craft a sincere and meaningful apology, answer for yourself some key questions.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-white">{faq.question}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">{faq.answer}</dd>
              </div>
            ))}
          </dl>
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