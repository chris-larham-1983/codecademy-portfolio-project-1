//initializes an array of fifty pronouns/names that can be used in the 'subject' position of a 'subject - verb - adverb' sentence construction:
const subjects = ['I', 'You', 'He', 'She', 'They', 'Zie', 'Sie', 'Ey', 'Ve', 'Tey', 'E', 'Christopher', 'Charlotte', 'William', 'Seth', 'Alyssa', 'Roger', 'Judi', 'Beth', 'Benjad', 'Matthew', 'Steen', 'Jamie', 'Simon', 'Karen', 'Elle', 'Lauren', 'Kyra', 'Jon', 'Hilary', 'Brett', 'Victoria', 'Codey', 'Jowan', 'Nikita', 'Ben', 'Edwyn', 'Morley', 'Connor', 'Jake', 'Josh', 'Bailey', 'Alfie', 'Joe', 'Riley', 'Ollie', 'Thomas', 'Daisy', 'Lacey', 'Maddison'];

//initializes an array of fifty verbs that can be used in the 'verb' position of a 'subject - verb - adverb' sentence construction (many verbs were suggested by https://www.citationmachine.net/resources/grammar-guides/verb/list-verbs/):
const verbs = ['act', 'answer', 'approve', 'arrange', 'avenge', 'awaken', 'brake', 'build', 'burp', 'buy', 'coach', 'chuckle', 'cough', 'cry', 'cycle', 'dance', 'daydream', 'drink', 'drive', 'eat', 'exercise', 'jog', 'jump', 'laugh', 'moan', 'paint', 'plan', 'play', 'plot', 'read', 'row', 'run', 'rise', 'scream', 'shout', 'sing', 'skip', 'sleep', 'sneeze', 'socialize', 'spasm', 'sprint', 'stroll', 'study', 'teach', 'thieve', 'turn', 'walk', 'whinge', 'whistle'];

//initializes an array of fifty adverbs that can be used in the 'adverb' position of a 'subject - verb - adverb' sentence construction (many adverbs were suggested by https://grammar.yourdictionary.com/parts-of-speech/adverbs/list-of-100-adverbs.html):
const adverbs = ['abundantly', 'boldly', 'bravely', 'brightly', 'cheerfully', 'deftly', 'devotedly', 'eagerly', 'elegantly', 'faithfully', 'gleefully', 'gracefully', 'happily', 'innocently', 'merrily', 'obediently', 'perfectly', 'politely', 'powerfully', 'safely', 'victoriously', 'angrily', 'anxiously', 'badly', 'foolishly', 'irritably', 'lazily', 'poorly', 'wearily', 'annually', 'frequently', 'hourly', 'occasionally', 'regularly', 'weekly', 'yearly', 'quickly', 'rapidly', 'slowly', 'awkwardly', 'belligerently', 'crazily', 'deliberately', 'dramatically', 'madly', 'nervously', 'precisely', 'shakily', 'silently', 'wildly'];

//function that conjugates the verb correctly based on the subject, and takes into account the following irregularities: coach --> coaches (not 'coachs'); cry --> cries (not 'crys'); study --> studies (not 'studys'); teach --> teaches (not 'teachs')
const conjugateVerb = (subject, verb) => {
    if(subject === 'I' || subject === 'You' || subject === 'They') {
        return verb;
    }
    else {
        if(verb === 'coach') {
            return 'coaches';
        } else if(verb === 'cry') {
            return 'cries';
        } else if(verb === 'study') {
            return 'studies';
        } else if(verb === 'teach') {
            return 'teaches';
        } else {
            return verb + 's';
        }
    }
};

//function that selects a random 'subject'
const randomSubject = () => {
    let randomNum = Math.floor(Math.random() * 50); //initializes a 'randomNum' variable that is equal to a random number between 0 and 49 (inclusive)
    return subjects[randomNum]; //returns a random 'subject'
};

//function that selects a random verb
const randomVerb = () => {
    let randomNum = Math.floor(Math.random() * 50); //initializes a 'randomNum' variable that is equal to a random number between 0 and 49 (inclusive)
    return verbs[randomNum]; //returns a random verb
};

//function that selects a random adverb
const randomAdverb = () => {
    let randomNum = Math.floor(Math.random() * 50); //initializes a 'randomNum' variable that is equal to a random number between 0 and 49 (inclusive)
    return adverbs[randomNum]; //returns a random adverb
};

//function that creates a random 'subject - verb - adverb' sentence
const subjectVerbAdverb = () => {
    let subject = randomSubject(); //initializes a random subject
    let verb = randomVerb(); //initializes a random verb
    let adverb = randomAdverb(); //initializes a random adverb
    verb = conjugateVerb(subject, verb); //conjugates the verb correctly
    let sentence = `${subject} ${verb} ${adverb}.`; //formats the 'subject - verb - adverb' sentence correctly
    return sentence; //returns a random 'subject - verb - adverb' sentence
};

//logs a random sentence of the form 'subject - verb - adverb' to the console
console.log(subjectVerbAdverb());