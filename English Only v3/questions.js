// Love Language mapping
const LOVE_LANGUAGES = {
    A: 'Acts of Service',
    B: 'Physical Touch',
    C: 'Quality Time',
    D: 'Receiving Gifts',
    E: 'Words of Affirmation'
};

// Section A: Giving Love (15 questions)
const GIVING_QUESTIONS = [
    {
        id: 1,
        text: "I feel most loving when I...",
        options: [
            { label: "Offer to help with a task or project they're stressed about", value: 'A' },
            { label: "Give them a heartfelt, unprompted hug or touch their arm", value: 'B' },
            { label: "Sit down and give them my full, undivided attention", value: 'C' },
            { label: "Surprise them with a small gift I knew they'd like", value: 'D' },
            { label: "Tell them sincerely how much they mean to me", value: 'E' }
        ]
    },
    {
        id: 2,
        text: "My ideal way to celebrate a loved one's achievement is to...",
        options: [
            { label: "Cook them their favorite meal to free up their time", value: 'A' },
            { label: "Give them a big, celebratory high-five or hug", value: 'B' },
            { label: "Listen intently as they recount every detail of their success", value: 'C' },
            { label: "Buy them a gift to commemorate the occasion", value: 'D' },
            { label: "Write them a card or toast explaining how proud I am", value: 'E' }
        ]
    },
    {
        id: 3,
        text: "When I see my partner is stressed, my first instinct is to...",
        options: [
            { label: "Take over one of their chores to lighten their load", value: 'A' },
            { label: "Give them a shoulder rub or hold their hand", value: 'B' },
            { label: "Ask them to talk about it and just listen without solving it", value: 'C' },
            { label: "Bring them their favorite coffee or snack to cheer them up", value: 'D' },
            { label: "Encourage them with words like, 'You've got this, I believe in you'", value: 'E' }
        ]
    },
    {
        id: 4,
        text: "I express my love most frequently through...",
        options: [
            { label: "Actions and service, like making them breakfast or fixing things", value: 'A' },
            { label: "Physical closeness, like cuddling on the couch or holding hands", value: 'B' },
            { label: "Deep, focused conversations about their thoughts and feelings", value: 'C' },
            { label: "Thoughtful gifts and mementos", value: 'D' },
            { label: "Verbal affirmations, compliments, and 'I love you's", value: 'E' }
        ]
    },
    {
        id: 5,
        text: "If I had to show appreciation without using words, I'd most likely...",
        options: [
            { label: "Do something helpful for them", value: 'A' },
            { label: "Reach out and hold them", value: 'B' },
            { label: "Make eye contact and listen to them with full presence", value: 'C' },
            { label: "Leave a small, meaningful gift for them to find", value: 'D' },
            { label: "(This would be very difficult for me, as words are my main tool)", value: 'E' }
        ]
    },
    {
        id: 6,
        text: "Planning a perfect date for me involves...",
        options: [
            { label: "Doing something practical together, like building furniture or cooking a complex recipe", value: 'A' },
            { label: "An activity with lots of physical contact, like dancing or cozying up for a movie", value: 'B' },
            { label: "A long walk or quiet dinner where we can talk without distractions", value: 'C' },
            { label: "Picking up a little souvenir for them during the date", value: 'D' },
            { label: "Telling them throughout the date specific things I love about them", value: 'E' }
        ]
    },
    {
        id: 7,
        text: "When I'm away from a loved one, I show I'm thinking of them by...",
        options: [
            { label: "Taking care of something for them back home (e.g., organizing a closet)", value: 'A' },
            { label: "Sending a text about how I wish I was there to hug them", value: 'B' },
            { label: "Sending a long message asking about their day and feelings", value: 'C' },
            { label: "Bringing back a souvenir or ordering them a gift online", value: 'D' },
            { label: "Sending a text full of heart emojis and loving words", value: 'E' }
        ]
    },
    {
        id: 8,
        text: "The most satisfying 'thank you' I can give is...",
        options: [
            { label: "Returning the favor with a helpful action", value: 'A' },
            { label: "A warm, genuine hug", value: 'B' },
            { label: "Looking them in the eye and explaining exactly how their help impacted me", value: 'C' },
            { label: "Writing a thank-you note or giving a small reciprocal gift", value: 'D' },
            { label: "Telling them repeatedly and enthusiastically how grateful I am", value: 'E' }
        ]
    },
    {
        id: 9,
        text: "I believe the saying 'actions speak louder than words' is...",
        options: [
            { label: "Absolutely true. Doing things for someone is the ultimate proof", value: 'A' },
            { label: "Partly true, but physical touch can communicate what words cannot", value: 'B' },
            { label: "Not entirely accurate, because listening is an action that speaks volumes", value: 'C' },
            { label: "True, and a thoughtfully chosen gift is a powerful action", value: 'D' },
            { label: "False. Loving words are the clearest and most direct form of communication", value: 'E' }
        ]
    },
    {
        id: 10,
        text: "My love feels most tangible when I express it through...",
        options: [
            { label: "Acts of Service", value: 'A' },
            { label: "Physical Touch", value: 'B' },
            { label: "Quality Time", value: 'C' },
            { label: "Receiving Gifts", value: 'D' },
            { label: "Words of Affirmation", value: 'E' }
        ]
    },
    {
        id: 11,
        text: "If a friend is sick, I show I care by...",
        options: [
            { label: "Dropping off soup and medicine for them", value: 'A' },
            { label: "Giving them a comforting hug", value: 'B' },
            { label: "Sitting with them to keep them company", value: 'C' },
            { label: "Bringing them a 'get well soon' care package", value: 'D' },
            { label: "Calling or texting them encouraging messages", value: 'E' }
        ]
    },
    {
        id: 12,
        text: "To make a loved one feel special on an ordinary day, I...",
        options: [
            { label: "Fill up their car with gas or run an errand for them", value: 'A' },
            { label: "Initiate cuddling or put my arm around them", value: 'B' },
            { label: "Put my phone away and engage in a deep conversation", value: 'C' },
            { label: "Pick up their favorite candy or magazine", value: 'D' },
            { label: "Leave a sticky note with a compliment on the bathroom mirror", value: 'E' }
        ]
    },
    {
        id: 13,
        text: "When I'm proud of my partner, I...",
        options: [
            { label: "Take on an extra household task so they can relax and enjoy their success", value: 'A' },
            { label: "Give them an enthusiastic kiss or embrace", value: 'B' },
            { label: "Plan a distraction-free activity to hear all about their experience", value: 'C' },
            { label: "Buy them something to celebrate their hard work", value: 'D' },
            { label: "Shower them with specific praise about what they accomplished", value: 'E' }
        ]
    },
    {
        id: 14,
        text: "I feel my efforts to show love are most successful when...",
        options: [
            { label: "The other person notices and appreciates the things I do for them", value: 'A' },
            { label: "The other person reciprocates with physical affection", value: 'B' },
            { label: "The other person is fully engaged and present with me", value: 'C' },
            { label: "The other person is visibly delighted by a gift I gave", value: 'D' },
            { label: "The other person lights up after something I said", value: 'E' }
        ]
    },
    {
        id: 15,
        text: "The love language I use most instinctively is...",
        options: [
            { label: "Acts of Service", value: 'A' },
            { label: "Physical Touch", value: 'B' },
            { label: "Quality Time", value: 'C' },
            { label: "Receiving Gifts", value: 'D' },
            { label: "Words of Affirmation", value: 'E' }
        ]
    }
];

// Section B: Receiving Love (15 questions)
const RECEIVING_QUESTIONS = [
    {
        id: 1,
        text: "I feel most loved and appreciated when someone...",
        options: [
            { label: "Does something practical to help me out without me asking", value: 'A' },
            { label: "Greets me with a warm, genuine hug", value: 'B' },
            { label: "Puts away their phone and actively listens to me", value: 'C' },
            { label: "Gives me a thoughtful, personalized gift", value: 'D' },
            { label: "Tells me specifically what they love or admire about me", value: 'E' }
        ]
    },
    {
        id: 2,
        text: "Nothing makes me feel more secure in a relationship than when my partner...",
        options: [
            { label: "Consistently follows through on promises and helps with responsibilities", value: 'A' },
            { label: "Is physically affectionate in small, everyday ways", value: 'B' },
            { label: "Makes and keeps plans for one-on-one time with no distractions", value: 'C' },
            { label: "Remembers special occasions with meaningful gifts or gestures", value: 'D' },
            { label: "Regularly expresses their commitment and appreciation verbally", value: 'E' }
        ]
    },
    {
        id: 3,
        text: "If I had to choose, I would rather my partner...",
        options: [
            { label: "Wash my car because they knew it was stressing me out", value: 'A' },
            { label: "Hold my hand while we watch a movie", value: 'B' },
            { label: "Spend an hour talking with me about our dreams", value: 'C' },
            { label: "Surprise me with my favorite book", value: 'D' },
            { label: "Write me a love note", value: 'E' }
        ]
    },
    {
        id: 4,
        text: "I feel deeply cared for when a friend...",
        options: [
            { label: "Offers to help me move or tackle a big project", value: 'A' },
            { label: "Puts an arm around my shoulder when I'm sad", value: 'B' },
            { label: "Checks in with a long call to see how I'm really doing", value: 'C' },
            { label: "Brings me back a souvenir from their trip", value: 'D' },
            { label: "Sends a text out of the blue saying they're grateful for me", value: 'E' }
        ]
    },
    {
        id: 5,
        text: "A romantic gesture that would mean the most to me is...",
        options: [
            { label: "My partner taking care of all the chores for a day so I can relax", value: 'A' },
            { label: "A long, slow dance in the living room", value: 'B' },
            { label: "A planned day trip with just the two of us, talking and connecting", value: 'C' },
            { label: "My partner seeing something in a store that made them think of me and buying it", value: 'D' },
            { label: "My partner listing all the reasons why they love me", value: 'E' }
        ]
    },
    {
        id: 6,
        text: "When I am upset, I am most comforted by someone who...",
        options: [
            { label: "Takes action to solve the problem causing me stress", value: 'A' },
            { label: "Offers a comforting hug or simply sits close to me", value: 'B' },
            { label: "Listens patiently without trying to immediately fix things", value: 'C' },
            { label: "Brings me something to make me feel better, like tea or a blanket", value: 'D' },
            { label: "Offers reassuring and affirming words", value: 'E' }
        ]
    },
    {
        id: 7,
        text: "I know my partner is thinking of me when they...",
        options: [
            { label: "Do a household task I usually handle", value: 'A' },
            { label: "Reach for my hand or give me a quick kiss as they walk by", value: 'B' },
            { label: "Cancel other plans to spend a quiet evening with me", value: 'C' },
            { label: "Text me a picture of something that reminded them of me, or bring me a small gift", value: 'D' },
            { label: "Send me a sweet or encouraging text message", value: 'E' }
        ]
    },
    {
        id: 8,
        text: "I feel taken for granted when my partner...",
        options: [
            { label: "Doesn't notice or appreciate the things I do for them", value: 'A' },
            { label: "Consistently avoids physical intimacy or touch", value: 'B' },
            { label: "Is always on their device during our time together", value: 'C' },
            { label: "Forgets birthdays, anniversaries, or doesn't put thought into gifts", value: 'D' },
            { label: "Rarely compliments me or says 'I love you'", value: 'E' }
        ]
    },
    {
        id: 9,
        text: "The most meaningful part of a celebration for me is...",
        options: [
            { label: "Having my loved ones help with the preparations or cleanup", value: 'A' },
            { label: "The hugs, kisses, and physical closeness with those I love", value: 'B' },
            { label: "The uninterrupted time spent laughing and talking with guests", value: 'C' },
            { label: "Receiving a thoughtful gift that shows I am known", value: 'D' },
            { label: "Hearing the heartfelt toasts and words of affirmation from others", value: 'E' }
        ]
    },
    {
        id: 10,
        text: "On a bad day, what would most lift my spirits is...",
        options: [
            { label: "Someone taking a task off my to-do list", value: 'A' },
            { label: "A long, tight hug from someone I care about", value: 'B' },
            { label: "A friend asking to go for a walk and talk it out", value: 'C' },
            { label: "A friend showing up with my favorite treat", value: 'D' },
            { label: "Someone telling me I'm capable and loved", value: 'E' }
        ]
    },
    {
        id: 11,
        text: "I feel most connected to my partner when we...",
        options: [
            { label: "Work together as a team on a shared goal or project", value: 'A' },
            { label: "Are physically intimate or cuddling", value: 'B' },
            { label: "Are having a deep, meaningful conversation", value: 'C' },
            { label: "Exchange thoughtful gifts or gestures", value: 'D' },
            { label: "Are sharing heartfelt compliments and words of appreciation", value: 'E' }
        ]
    },
    {
        id: 12,
        text: "An apology feels most sincere to me when the person...",
        options: [
            { label: "Makes a concrete effort to fix their mistake or change their behavior", value: 'A' },
            { label: "Offers a physical gesture of comfort, like a hug", value: 'B' },
            { label: "Sits down with me and fully hears how I felt", value: 'C' },
            { label: "Gives me a symbolic gift as a peace offering", value: 'D' },
            { label: "Verbally acknowledges exactly what they did wrong and expresses regret", value: 'E' }
        ]
    },
    {
        id: 13,
        text: "I feel truly 'seen' and understood by someone when they...",
        options: [
            { label: "Anticipate my needs and act on them", value: 'A' },
            { label: "Understand my need for physical space or closeness", value: 'B' },
            { label: "Remember the small details from our previous conversations", value: 'C' },
            { label: "Give me a gift that is perfectly suited to my personality", value: 'D' },
            { label: "Describe my qualities and strengths back to me accurately", value: 'E' }
        ]
    },
    {
        id: 14,
        text: "My primary love language is...",
        options: [
            { label: "Acts of Service", value: 'A' },
            { label: "Physical Touch", value: 'B' },
            { label: "Quality Time", value: 'C' },
            { label: "Receiving Gifts", value: 'D' },
            { label: "Words of Affirmation", value: 'E' }
        ]
    },
    {
        id: 15,
        text: "If I could only receive one expression of love for a year, it would be...",
        options: [
            { label: "Having my partner consistently help with daily chores", value: 'A' },
            { label: "Daily physical affection like hugging, holding hands, and kissing", value: 'B' },
            { label: "30 minutes of quality, uninterrupted conversation every day", value: 'C' },
            { label: "A small, thoughtful gift once a week", value: 'D' },
            { label: "Hearing 'I love you' and specific compliments daily", value: 'E' }
        ]
    }
];