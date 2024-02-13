export const order = [
    'reason',
    'yourFeeling',
    'theirFeelings',
    'targetAudience',
    'type',
    'yourRemorse',
    'yourEmpathy',
    'wantToChange',
    'willingToChange',
    'willDo',
    'whenChange',
];

export function getOrder(authed) {
    const order = [
        'reason',
        'yourFeeling',
        'theirFeelings',
        'targetAudience',
        'type',
        'yourRemorse',
        'yourEmpathy',
        'wantToChange',
        'willingToChange',
        'willDo',
        'whenChange',
    ];

    if (!authed) {
        const typeIndex = order.indexOf('type');
        order.splice(typeIndex, 1);
    }

    return order;
}

export function getPrompts() {
    const data = {
        generating: [            
            { type: 'system', message: 'You will be directed to the apology when it has been generated.'},            
            { type: 'system', message: 'Crafting a sincere and thoughtful apology takes time, as we want to ensure it reflects genuine remorse and a commitment to making amends.'},
            { type: 'system', message: 'Developing an apology that is both sincere and reflective requires a deliberate process, aimed at ensuring the apology not only expresses genuine regret but also delineates a clear plan for restitution and behavioral change.'},
            { type: 'system', message: "We appreciate your understanding, and we're working diligently to provide you with an apology that addresses the situation appropriately."},
            { type: 'system', message: 'Your patience is valued, and we aim to present to you a heartfelt message shortly.'},           
            { type: 'system', message: '...'},
        ],
        reason: [        
            {type: 'system', message: "If there's something you wish to apologize for, something that's been weighing on your mind, this is a safe space for you to express those feelings."},
            {type: 'system', message: 'You have 2000 characters to share your thoughts and feelings. The more context provided, the better apology we can craft for you.'},
        ],
        yourFeeling: {type: 'system', message: 'How did this make you feel?'},
        noApology: {type: 'system', message: 'Select the style of Fauxpology to generate:'},
        theirFeelings: {type: 'system', message: "And the person(s) you're apologizing to?"},
        targetAudience: {type: 'system', message: 'What is the relationship to whom you are apologizing to?'},
        type: [
            {type: 'system', message: 'Will we be assisting you write a sincere apology, or a Fauxpology?'},
        ],
        yourRemorse: {type: 'system', message: 'How would you best describe the level of Remorse you feel?'},
        yourEmpathy: {type: 'system', message: 'How much can you Empathize with whom you are apologizing to?'},
        wantToChange: {type: 'system', message: 'Would you like to express your want to change?'},
        willingToChange: {type: 'system', message: 'Would you like to express your willingness to change?'},
        willDo: {type: 'system', message: 'What best describes the changes you will make?'},
        whenChange: {type: 'system', message: 'What best describes when they will be able to observe your changes?'}
    };

    return Object.keys(data).reduce((acc, key) => {
        if (Array.isArray(data[key])) {
            acc[key] = data[key].map(d => ({...d, property: key}));
        } else {
            acc[key] = { ...data[key], property: key };
        }

        return acc;
    }, {})
}

export const remorseOptions = [
    'Negligible',
    'Limited',
    'Partial',
    'Genuine',
    'Sincere',
    'Profound',
    'Overwhelming',
];

export const empathyOptions = [
    'Limited',
    'Partial',
    'Basic',
    'Moderate',
    'High',
    'Deep',
    'Exceptional'
];

export const targetAudienceOptions = [
    'Family',
    'Friend',
    'Coworker',
    'Neighbor',
    'Child',
    'Pet',
    'Acquaintance',
    'Other',
];