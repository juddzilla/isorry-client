import { Link } from 'react-router-dom';
import { CheckCircleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/20/solid'
import Smirking from '../images/emoji/smirking-face_1f60f.png';


const Component = () => {
    const apologyScenarios = [
        {
          category: "Public Relations and Damage Control",
          description: "Often used by public figures, politicians, and corporations when they need to address a scandal or public outcry. In such cases, the aim is to mitigate damage to reputation or to placate public opinion without admitting legal or moral wrongdoing."
        },
        {
          category: "Personal Relationships",
          description: "In personal conflicts, some individuals might use non-apology apologies to superficially address an issue without truly accepting blame. This can be due to a reluctance to admit fault, a desire to avoid conflict, or an inability to empathize with the other person."
        },
        {
          category: "Workplace Conflicts",
          description: "In professional settings, these types of apologies might be used to sidestep accountability while still making an effort to diffuse tension. This can happen in situations where admitting fault may have repercussions on one’s career or standing in the workplace."
        },
        {
          category: "Deflecting Responsibility",
          description: "When individuals are not ready to confront their own mistakes or when acknowledging fault might lead to serious consequences, non-apology apologies can be a way to deflect responsibility while giving the appearance of addressing the issue."
        },
        {
          category: "Cultural and Personal Beliefs",
          description: "Sometimes, cultural norms or personal beliefs about authority, honor, or face-saving can lead to the use of non-apology apologies. In some cultures or in certain upbringings, admitting fault might be seen as a sign of weakness."
        },
        {
          category: "Lack of Self-Awareness",
          description: "Some individuals may not fully understand the impact of their actions on others or may lack the emotional intelligence to provide a genuine apology. In such cases, they might resort to a non-apology apology, believing it to be sufficient."
        }
      ];

      const nonApologyFeaturesWithExamples = [
        {
          feature: "Avoidance of Responsibility",
          description: "Instead of directly acknowledging their own mistake or wrongdoing, the person might make vague or general statements that avoid pinpointing their own actions or behavior.",
          example: "Mistakes were made, and things could have been handled better.",
          attribution: "A public figure addressing a scandal"
        },
        {
          feature: "Use of Conditional Language",
          description: "Phrases like 'I’m sorry if...' or 'I apologize to those who might have felt...' are common. This conditional language implies that harm or offense might not have occurred or is only a possibility, rather than a definite outcome of their actions.",
          example: "I’m sorry if you were offended by what I said.",
          attribution: "A colleague giving a half-hearted apology at work"
        },
        {
          feature: "Shifting Blame",
          description: "Often, these apologies subtly or overtly shift blame to the offended party, suggesting that the issue lies in how the other person interpreted the actions, rather than in the actions themselves.",
          example: "I’m sorry you misunderstood what I was trying to say.",
          attribution: "A friend trying to evade responsibility"
        },
        {
          feature: "Minimizing the Issue",
          description: "The apology might downplay the significance of the wrongdoing or its impact on the affected party, making it seem trivial or unimportant.",
          example: "I’m sorry you’re upset; it wasn’t that big of a deal, really.",
          attribution: "A family member downplaying an argument"
        },
        {
          feature: "Focus on the Apologizer’s Feelings",
          description: "Instead of focusing on the feelings of the person harmed, non-apology apologies often center on the apologizer’s own feelings (e.g., 'I’m sorry you feel that I did something wrong').",
          example: "I feel terrible that you took it the wrong way.",
          attribution: "A partner avoiding true acknowledgment in a personal relationship"
        },
        {
          feature: "Lack of Commitment to Change",
          description: "There is typically no promise or indication of a desire to change behavior or ensure the issue does not recur.",
          example: "I’m sorry this happened, but that’s just who I am.",
          attribution: "An individual resistant to self-improvement"
        }
      ];
      
      
    return (
        <div className="bg-white px-6 pt-16 pb-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <p className="text-base font-semibold leading-7 text-primary">iSorry.lol</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Fauxpologies</h1>
            <p className="mt-6 text-xl leading-8">
                Have you ever encountered a 'Non-Apology Apology' aka 'fauxpology'? It’s an apology that, in essence, lacks sincerity and true remorse, often characterized by a subtle shifting of blame or a justification of the behavior that caused harm, rather than a straightforward admission of wrongdoing. This type of apology skirts around true accountability, leaving the real issue unresolved and potentially deepening the hurt feelings of those involved.
            </p>
            <div className="mt-10 max-w-2xl">
              <p>                
                People typically resort to non-apology apologies in various situations, often when they wish to appear as though they are apologizing without admitting fault or changing their behavior. These situations include
              </p>
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                {
                    apologyScenarios.map((scenario) => (
                        <li className="flex gap-x-3">
                            <XCircleIcon className="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900 inline-block mr-2">{scenario.category}</strong> 
                                {scenario.description}
                            </span>
                        </li>
                    ))
                }
               
              </ul>
              <p className="mt-8">
              In all these scenarios, the common thread is the reluctance or inability to engage in the vulnerability and honesty required for a true apology. While non-apology apologies can temporarily smooth over issues, they often fail to resolve the underlying problem and can lead to further misunderstandings and resentment.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Identify non-apology apologies</h2>
              <p className="mt-6">
              These apologies are often perceived as insincere and can be frustrating or invalidating to those who are on the receiving end, as they fail to provide acknowledgment, empathy, or assurance of change. They are more about evading the negative consequences of one’s actions than about reconciliation or understanding.  Below are classic examples of some.
              </p>

              {
                nonApologyFeaturesWithExamples.map((apology) => (
                    <>
                        <h3 className="mt-16 text-xl font-bold tracking-tight text-gray-900">{apology.feature}</h3>
                        <p className="mt-6">{apology.description}</p>
                        <figure className="mt-6 border-l border-secondary pl-9">
                            <blockquote className="font-semibold text-gray-900">
                            <p>
                                “{apology.example}”
                            </p>
                            </blockquote>
                            <figcaption className="mt-6 flex gap-x-4">
                            <img
                                className="h-6 w-6 flex-none rounded-full bg-gray-50"
                                src={Smirking}
                                alt=""
                            />
                            <div className="text-sm leading-6">
                                <strong className="font-semibold text-gray-900">- </strong> {apology.attribution}
                            </div>
                            </figcaption>
                        </figure>
                    </>
                ))
              }
              
              <p className="mt-10">                
                People give fauxpologies, or insincere apologies, for various reasons, often stemming from a desire to evade true responsibility while still attempting to placate the situation. 
              </p>
            </div>
            <figure className="mt-16">
              <img
                className="aspect-video rounded-xl bg-gray-50 object-cover"
                src="https://images.unsplash.com/photo-1660922771242-c598e0808188?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              
              <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
                To some it's just a game
              </figcaption>
            </figure>
            <div className="mt-16 max-w-2xl pb-20">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Recognize the Insincerity in Apologies</h2>
              <p className="mt-6">
              In the realm of interpersonal dynamics, the phenomenon of fauxpologies presents a curious but unfortunately common occurrence. These insincere apologies often stem from a reluctance to fully embrace responsibility, acting as a shield to protect one's ego from the discomfort of admitting fault. At times, they are driven by the fear of facing serious consequences, whether these are legal, professional, or related to personal reputation. Rooted in a lack of genuine empathy, fauxpologies can also surface due to social or cultural pressures to conform to expected norms of apology, without the apologizer truly feeling remorseful. In scenarios marked by power imbalances, such superficial apologies may be tactically employed to maintain control or assert dominance. This is compounded by a lack of self-awareness or a state of denial about one's role in the hurtful situation. In some cases, fauxpologies are even wielded as tools of manipulation, strategically used to gloss over issues without real resolution. Ultimately, these half-hearted apologies tend to serve the interests of the apologizer more than providing any real solace or validation to the aggrieved party, bypassing the genuine vulnerability, honesty, and transformation inherent in a heartfelt apology.
              </p>
              <p className="mt-8">
              Acknowledging the emptiness of a fauxpology is the first step towards cultivating an environment where heartfelt remorse and sincere change are valued and practiced.
              </p>
            </div>
          </div>

          <div className="bg-primary">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Don't let a fauxpology ruin your relationships.                         
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
                        Learn how to apologize sincerely. Click for helpful resources on writing meaningful apologies.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                        to="/apologize"
                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                        Get started
                        </Link>
                        <Link to="/anatomy" className="text-sm font-semibold leading-6 text-white">
                        Learn more <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
      )
}


const Route = {
    element: <Component />,
    path: "/fauxpologies",
};
  
export default Route;