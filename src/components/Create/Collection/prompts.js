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
        generating: `You will be directed to the apology when it has been generated. \n
            Crafting a sincere and thoughtful apology takes time, as we want to ensure it reflects genuine remorse and a commitment to making amends. \n
            Developing an apology that is both sincere and reflective requires a deliberate process, aimed at ensuring the apology not only expresses genuine regret but also delineates a clear plan for restitution and behavioral change. \n
            We appreciate your understanding, and we're working diligently to provide you with an apology that addresses the situation appropriately. \n
            Your patience is valued, and we aim to present to you a heartfelt message shortly.`,
        reason: `If there's something you wish to apologize for, something that's been weighing on your mind, this is a safe space for you to express those feelings. \n
            You have 2000 characters to share your thoughts and feelings. The more context provided, the better apology we can craft for you.`,
        yourFeeling: `How did this make you feel?`,
        noApology: `Select the style of Fauxpology to generate:`,
        theirFeelings: `And the person(s) you're apologizing to?`,
        targetAudience: `What is the relationship to whom you are apologizing to?`,
        type: `Will we be assisting you write a sincere apology, or a Fauxpology?`,
        yourRemorse: `How would you best describe the level of Remorse you feel?`,
        yourEmpathy: `How much can you Empathize with whom you are apologizing to?`,
        wantToChange: `Would you like to express your want to change?`,
        willingToChange: `Would you like to express your willingness to change?`,
        willDo: `What best describes the changes you will make?`,
        whenChange: `What best describes when they will be able to observe your changes?`,
    };

    return Object.keys(data).reduce((acc, key) => {
        // if (Array.isArray(data[key])) {
        //     acc[key] = data[key].map(d => ({...d, property: key}));
        // } else {
        // }
        acc[key] = { messages: data[key], property: key, type: 'system' };

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