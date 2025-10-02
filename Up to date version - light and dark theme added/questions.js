// Love Language mapping
const LOVE_LANGUAGES = {
    A: {
        en: 'Acts of Service',
        bg: 'Услуги и обгрижване'
    },
    B: {
        en: 'Physical Touch',
        bg: 'Физически контакт и ласки'
    },
    C: {
        en: 'Quality Time',
        bg: 'Пълноценно време'
    },
    D: {
        en: 'Giving and Receiving Gifts',
        bg: 'Получаване на подаръци'
    },
    E: {
        en: 'Words of Affirmation',
        bg: 'Думи на утвърждение'
    }
};

// Section A: Giving Love (15 questions)
const GIVING_QUESTIONS = [
    {
        id: 1,
        text: { en: "I feel most loving when I...", bg: "Чувствам се най-обичлив/а, когато..." },
        options: [
            { label: { en: "Offer to help with a task or project they're stressed about", bg: "Предлагам помощ с задача или проект, за да им облекча напрежението" }, value: 'A' },
            { label: { en: "Give them a heartfelt, unprompted hug or touch their arm", bg: "Давам им сърдечна, спонтанна прегръдка или докосвам ръката им" }, value: 'B' },
            { label: { en: "Sit down and give them my full, undivided attention", bg: "Сядам и им отдавам цялото си внимание, без да се разсейвам" }, value: 'C' },
            { label: { en: "Surprise them with a small gift I knew they'd like", bg: "Изненадвам ги с малък подарък, за който знам, че ще им хареса" }, value: 'D' },
            { label: { en: "Tell them sincerely how much they mean to me", bg: "Искрено им изразявам с думи колко много значат за мен" }, value: 'E' }
        ]
    },
    {
        id: 2,
        text: { en: "My ideal way to celebrate a loved one's achievement is to...", bg: "Идеалният ми начин да отпразнувам постижението на любим човек е да..." },
        options: [
            { label: { en: "Cook them their favorite meal to free up their time", bg: "Сготвя любимото им ястие, за да им освободя време" }, value: 'A' },
            { label: { en: "Give them a big, celebratory high-five or hug", bg: "Дам им голяма, празнична прегръдка или пляскане с ръка" }, value: 'B' },
            { label: { en: "Listen intently as they recount every detail of their success", bg: "Слушам внимателно, докато разказват всеки детайл от успеха си" }, value: 'C' },
            { label: { en: "Buy them a gift to commemorate the occasion", bg: "Купя им подарък, за да отбележа случая" }, value: 'D' },
            { label: { en: "Write them a card or toast explaining how proud I am", bg: "Напиша им картичка или произнеса тост, за да изразя гордостта си" }, value: 'E' }
        ]
    },
    {
        id: 3,
        text: { en: "When I see my partner is stressed, my first instinct is to...", bg: "Когато видя, че партньорът ми е стресиран, първият ми инстинкт е да..." },
        options: [
            { label: { en: "Take over one of their chores to lighten their load", bg: "Поемам една от задачите им, за да облекча натоварването им" }, value: 'A' },
            { label: { en: "Give them a shoulder rub or hold their hand", bg: "Масажирам раменете им или държа ръката им" }, value: 'B' },
            { label: { en: "Ask them to talk about it and just listen without solving it", bg: "Помолвам ги да говорят за това и просто слушам, без да решавам проблема" }, value: 'C' },
            { label: { en: "Bring them their favorite coffee or snack to cheer them up", bg: "Носѝм им любимото кафе или закуска, за да ги зарадвам" }, value: 'D' },
            { label: { en: "Encourage them with words like, 'You've got this, I believe in you'", bg: "Окуражавам ги с думи като: 'Ще се справиш, вярвам в теб'" }, value: 'E' }
        ]
    },
    {
        id: 4,
        text: { en: "I express my love most frequently through...", bg: "Най-често изразявам любовта си чрез..." },
        options: [
            { label: { en: "Actions and service, like making them breakfast or fixing things", bg: "Действия и услуги, като да им приготвя закуска или поправя нещо" }, value: 'A' },
            { label: { en: "Physical closeness, like cuddling on the couch or holding hands", bg: "Физическа близост, като гушкане на дивана или държане за ръка" }, value: 'B' },
            { label: { en: "Deep, focused conversations about their thoughts and feelings", bg: "Дълбоки, съсредоточени разговори за мислите и чувствата им" }, value: 'C' },
            { label: { en: "Thoughtful gifts and mementos", bg: "Обмислени подаръци и сувенири" }, value: 'D' },
            { label: { en: "Verbal affirmations, compliments, and 'I love you's", bg: "Думи на утвърждение, комплименти и 'обичам те'" }, value: 'E' }
        ]
    },
    {
        id: 5,
        text: { en: "If I had to show appreciation without using words, I'd most likely...", bg: "Ако трябва да покажа признателност без думи, най-вероятно бих..." },
        options: [
            { label: { en: "Do something helpful for them", bg: "Направя нещо полезно за тях" }, value: 'A' },
            { label: { en: "Reach out and hold them", bg: "Прегърна ги" }, value: 'B' },
            { label: { en: "Make eye contact and listen to them with full presence", bg: "Направя зрителен контакт и ги изслушам с пълно внимание" }, value: 'C' },
            { label: { en: "Leave a small, meaningful gift for them to find", bg: "Оставя малък, значим подарък, който да открият" }, value: 'D' },
            { label: { en: "(This would be very difficult for me, as words are my main tool)", bg: "(Това би било много трудно за мен, тъй като думите са основният ми инструмент)" }, value: 'E' }
        ]
    },
    {
        id: 6,
        text: { en: "I like to cheer up my partner by...", bg: "Обичам да разведрявам партньора си, като..." },
        options: [
            { label: { en: "Doing something to make their life easier", bg: "Правя нещо, за да улесня живота им" }, value: 'A' },
            { label: { en: "Giving them a gentle touch or embrace", bg: "Дарявам ги с нежно докосване или прегръдка" }, value: 'B' },
            { label: { en: "Spending uninterrupted time together", bg: "Прекарваме време заедно без разсейвания" }, value: 'C' },
            { label: { en: "Surprising them with a small thoughtful gift", bg: "Изненадвам ги с малък, обмислен подарък" }, value: 'D' },
            { label: { en: "Saying kind and uplifting words", bg: "Казвам мили и окуражаващи думи" }, value: 'E' }
        ]
    },
    {
        id: 7,
        text: { en: "When I want to show love spontaneously, I usually...", bg: "Когато искам спонтанно да покажа любов, обикновено..." },
        options: [
            { label: { en: "Do a quick helpful favor", bg: "Правя бърза полезна услуга" }, value: 'A' },
            { label: { en: "Give a kiss, hug, or gentle touch", bg: "Давам целувка, прегръдка или нежно докосване" }, value: 'B' },
            { label: { en: "Offer my full attention for a few minutes", bg: "Отдавам пълното си внимание за няколко минути" }, value: 'C' },
            { label: { en: "Leave a little gift or treat", bg: "Оставям малък подарък или лакомство" }, value: 'D' },
            { label: { en: "Say something sweet from the heart", bg: "Казвам нещо мило от сърце" }, value: 'E' }
        ]
    },
    {
        id: 8,
        text: { en: "The most natural way for me to care for someone is...", bg: "Най-естественият начин за мен да се грижа за някого е..." },
        options: [
            { label: { en: "Taking tasks off their plate", bg: "Поемам част от задачите им" }, value: 'A' },
            { label: { en: "Offering physical closeness", bg: "Предлагам физическа близост" }, value: 'B' },
            { label: { en: "Spending quality time focused on them", bg: "Прекарвам пълноценно време, фокусирано върху тях" }, value: 'C' },
            { label: { en: "Surprising them with something symbolic", bg: "Изненадвам ги с нещо символично" }, value: 'D' },
            { label: { en: "Encouraging them with supportive words", bg: "Окуражавам ги с подкрепящи думи" }, value: 'E' }
        ]
    },
    {
        id: 9,
        text: { en: "When I want to make my partner feel special, I...", bg: "Когато искам да накарам партньора си да се почувства специален, аз..." },
        options: [
            { label: { en: "Do something useful for them", bg: "Правя нещо полезно за тях" }, value: 'A' },
            { label: { en: "Hold them close", bg: "Гушкам ги близо до себе си" }, value: 'B' },
            { label: { en: "Spend one-on-one time with them", bg: "Прекарвам време насаме с тях" }, value: 'C' },
            { label: { en: "Choose a meaningful gift for them", bg: "Избирам смислен подарък за тях" }, value: 'D' },
            { label: { en: "Express how much I value them", bg: "Изразявам колко ги ценя" }, value: 'E' }
        ]
    },
    {
        id: 10,
        text: { en: "If my partner had a hard day, I’d...", bg: "Ако партньорът ми е имал труден ден, аз бих..." },
        options: [
            { label: { en: "Take care of something to ease their stress", bg: "Погрижвам се за нещо, за да облекча стреса им" }, value: 'A' },
            { label: { en: "Give them a massage or cuddle", bg: "Масажирам ги или ги гушкам" }, value: 'B' },
            { label: { en: "Sit and talk it out with them", bg: "Сядам и разговарям с тях" }, value: 'C' },
            { label: { en: "Bring home a small surprise gift", bg: "Донасям малък изненадващ подарък" }, value: 'D' },
            { label: { en: "Tell them how strong and capable they are", bg: "Казвам им колко са силни и способни" }, value: 'E' }
        ]
    },
    {
        id: 11,
        text: { en: "A small act that feels most natural for me to show love is...", bg: "Малък жест, който ми е най-естествен да показвам любов, е..." },
        options: [
            { label: { en: "Helping with something everyday", bg: "Помагам с нещо ежедневно" }, value: 'A' },
            { label: { en: "Giving a kiss on the cheek", bg: "Целувка по бузата" }, value: 'B' },
            { label: { en: "Checking in and listening", bg: "Питам как са и ги изслушвам" }, value: 'C' },
            { label: { en: "Leaving a symbolic token", bg: "Оставям символичен знак" }, value: 'D' },
            { label: { en: "Saying a sweet compliment", bg: "Казвам мил комплимент" }, value: 'E' }
        ]
    },
    {
        id: 12,
        text: { en: "When I want to encourage my partner, I usually...", bg: "Когато искам да окуража партньора си, обикновено..." },
        options: [
            { label: { en: "Do something helpful without being asked", bg: "Правя нещо полезно, без да ме молят" }, value: 'A' },
            { label: { en: "Offer a supportive touch", bg: "Предлагам подкрепящо докосване" }, value: 'B' },
            { label: { en: "Spend focused time with them", bg: "Прекарвам съсредоточено време с тях" }, value: 'C' },
            { label: { en: "Give a small motivating gift", bg: "Подарявам малък мотивиращ подарък" }, value: 'D' },
            { label: { en: "Say inspiring words", bg: "Казвам вдъхновяващи думи" }, value: 'E' }
        ]
    },
    {
        id: 13,
        text: { en: "If I want to strengthen my bond with my partner, I...", bg: "Ако искам да укрепя връзката си с партньора, аз..." },
        options: [
            { label: { en: "Help with responsibilities", bg: "Помагам с отговорностите" }, value: 'A' },
            { label: { en: "Seek closeness through touch", bg: "Търся близост чрез докосване" }, value: 'B' },
            { label: { en: "Spend meaningful time together", bg: "Прекарваме смислено време заедно" }, value: 'C' },
            { label: { en: "Give symbolic gifts", bg: "Подарявам символични неща" }, value: 'D' },
            { label: { en: "Speak words of encouragement", bg: "Изказвам окуражаващи думи" }, value: 'E' }
        ]
    },
    {
        id: 14,
        text: { en: "The thing I do most often to express love is...", bg: "Нещото, което правя най-често, за да изразя любов, е..." },
        options: [
            { label: { en: "Do practical helpful actions", bg: "Правя практични полезни действия" }, value: 'A' },
            { label: { en: "Give affectionate hugs or kisses", bg: "Давам нежни прегръдки или целувки" }, value: 'B' },
            { label: { en: "Make time to be fully present", bg: "Осигурявам време, за да присъствам изцяло" }, value: 'C' },
            { label: { en: "Buy or create gifts", bg: "Купувам или създавам подаръци" }, value: 'D' },
            { label: { en: "Express words of appreciation", bg: "Изразявам думи на признателност" }, value: 'E' }
        ]
    },
    {
        id: 15,
        text: { en: "I most often surprise my partner by...", bg: "Най-често изненадвам партньора си, като..." },
        options: [
            { label: { en: "Doing something unexpectedly helpful", bg: "Правя нещо неочаквано полезно" }, value: 'A' },
            { label: { en: "Giving a spontaneous hug or kiss", bg: "Давам спонтанна прегръдка или целувка" }, value: 'B' },
            { label: { en: "Suggesting we spend time together", bg: "Предлагам да прекараме време заедно" }, value: 'C' },
            { label: { en: "Bringing a thoughtful little gift", bg: "Носѝя малък, обмислен подарък" }, value: 'D' },
            { label: { en: "Saying something affectionate out of the blue", bg: "Казвам нещо нежно изненадващо" }, value: 'E' }
        ]
    }
];



// Section B: Receiving Love (15 questions)
const RECEIVING_QUESTIONS = [
    {
        id: 1,
        text: { en: "I feel most loved and appreciated when someone...", bg: "Чувствам се най-обичан/а и оценен/а, когато някой..." },
        options: [
            { label: { en: "Does something practical to help me out without me asking", bg: "Прави нещо практично, за да ми помогне, без да го моля" }, value: 'A' },
            { label: { en: "Greets me with a warm, genuine hug", bg: "Посреща ме с топла, искрена прегръдка" }, value: 'B' },
            { label: { en: "Puts away their phone and actively listens to me", bg: "Оставя всичко настрана, за да ме слуша с внимание" }, value: 'C' },
            { label: { en: "Gives me a thoughtful, personalized gift", bg: "Дава ми внимателно подбран, персонализиран подарък" }, value: 'D' },
            { label: { en: "Tells me specifically what they love or admire about me", bg: "Казва ми конкретно какво обича или в какво се възхищава в мен" }, value: 'E' }
        ]
    },
    {
        id: 2,
        text: { en: "Nothing makes me feel more secure in a relationship than when my partner...", bg: "Нищо не ме кара да се чувствам по-сигурен/на във връзката от това, когато партньорът ми..." },
        options: [
            { label: { en: "Consistently follows through on promises and helps with responsibilities", bg: "Последователно изпълнява обещанията си и помага с отговорностите" }, value: 'A' },
            { label: { en: "Is physically affectionate in small, everyday ways", bg: "Показва физическа нежност по малки, ежедневни начини" }, value: 'B' },
            { label: { en: "Makes and keeps plans for one-on-one time with no distractions", bg: "Прави и спазва планове за време насаме без разсейвания" }, value: 'C' },
            { label: { en: "Remembers special occasions with meaningful gifts or gestures", bg: "Помни специални случаи със смислени подаръци или жестове" }, value: 'D' },
            { label: { en: "Regularly expresses their commitment and appreciation verbally", bg: "Редовно изразява своята привързаност и признателност с думи" }, value: 'E' }
        ]
    },
     {
        id: 3,
        text: { en: "I feel cared for when my partner...", bg: "Чувствам се обгрижен/а, когато партньорът ми..." },
        options: [
            { label: { en: "Helps me practically without asking", bg: "Помага ми практично без да го моля" }, value: 'A' },
            { label: { en: "Shows affection through physical touch", bg: "Показва обич чрез физическо докосване" }, value: 'B' },
            { label: { en: "Gives me their full attention", bg: "Отдава ми цялото си внимание" }, value: 'C' },
            { label: { en: "Surprises me with gifts", bg: "Изненадва ме с подаръци" }, value: 'D' },
            { label: { en: "Says loving and supportive words", bg: "Казва любящи и подкрепящи думи" }, value: 'E' }
        ]
    },
    {
        id: 4,
        text: { en: "I feel most valued when my partner...", bg: "Чувствам се най-ценен/а, когато партньорът ми..." },
        options: [
            { label: { en: "Shares responsibilities with me", bg: "Споделя отговорностите с мен" }, value: 'A' },
            { label: { en: "Holds me lovingly", bg: "Ме държи с обич" }, value: 'B' },
            { label: { en: "Spends focused time with me", bg: "Прекарва съсредоточено време с мен" }, value: 'C' },
            { label: { en: "Gives gifts on special occasions", bg: "Подарява подаръци на специални поводи" }, value: 'D' },
            { label: { en: "Speaks kind words often", bg: "Често казва мили думи" }, value: 'E' }
        ]
    },
    {
        id: 5,
        text: { en: "I appreciate it most when my partner...", bg: "Най-много оценявам, когато партньорът ми..." },
        options: [
            { label: { en: "Does chores to help me", bg: "Върши домакинска работа, за да ми помогне" }, value: 'A' },
            { label: { en: "Touches me affectionately", bg: "Докосва ме нежно" }, value: 'B' },
            { label: { en: "Talks to me with presence", bg: "Говори с мен съсредоточено" }, value: 'C' },
            { label: { en: "Buys me thoughtful presents", bg: "Купува ми обмислени подаръци" }, value: 'D' },
            { label: { en: "Encourages me with affirming words", bg: "Окуражава ме с утвърждаващи думи" }, value: 'E' }
        ]
    },
    {
          id: 6,
        text: { en: "I feel most cared for when my partner...", bg: "Чувствам се най-обгрижен/а, когато партньорът ми..." },
        options: [
            { label: { en: "Helps with daily responsibilities", bg: "Помага с ежедневните отговорности" }, value: 'A' },
            { label: { en: "Shows affection through hugs or kisses", bg: "Показва обич чрез прегръдки или целувки" }, value: 'B' },
            { label: { en: "Sets aside time just for me", bg: "Отделя време само за мен" }, value: 'C' },
            { label: { en: "Surprises me with small gifts", bg: "Изненадва ме с малки подаръци" }, value: 'D' },
            { label: { en: "Tells me they appreciate me", bg: "Казва ми, че ме оценява" }, value: 'E' }
        ]
    },
    {
        id: 7,
        text: { en: "I feel most connected when my partner...", bg: "Чувствам се най-свързан/а, когато партньорът ми..." },
        options: [
            { label: { en: "Lends me a hand with something important", bg: "Помага ми с нещо важно" }, value: 'A' },
            { label: { en: "Holds me close", bg: "Гушка ме близо до себе си" }, value: 'B' },
            { label: { en: "Listens to me attentively", bg: "Ме слуша внимателно" }, value: 'C' },
            { label: { en: "Gives me something thoughtful", bg: "Дава ми нещо обмислено" }, value: 'D' },
            { label: { en: "Says something encouraging", bg: "Казва нещо окуражаващо" }, value: 'E' }
        ]
    },
    {
        id: 8,
        text: { en: "I feel appreciated when my partner...", bg: "Чувствам се оценен/а, когато партньорът ми..." },
        options: [
            { label: { en: "Takes initiative to help me", bg: "Поема инициатива да ми помогне" }, value: 'A' },
            { label: { en: "Shows physical affection", bg: "Показва физическа нежност" }, value: 'B' },
            { label: { en: "Spends time focusing on me", bg: "Прекарва време, фокусирано върху мен" }, value: 'C' },
            { label: { en: "Gives gifts that show thought", bg: "Прави подаръци, които показват внимание" }, value: 'D' },
            { label: { en: "Expresses gratitude with words", bg: "Изразява благодарност с думи" }, value: 'E' }
        ]
    },
    {
        id: 9,
        text: { en: "I feel most supported when my partner...", bg: "Чувствам се най-подкрепен/а, когато партньорът ми..." },
        options: [
            { label: { en: "Helps lighten my load", bg: "Облекчава натоварването ми" }, value: 'A' },
            { label: { en: "Touches me affectionately", bg: "Докосва ме нежно" }, value: 'B' },
            { label: { en: "Spends uninterrupted time with me", bg: "Прекарва време с мен без прекъсвания" }, value: 'C' },
            { label: { en: "Gives thoughtful tokens of love", bg: "Подарява обмислени знаци на обич" }, value: 'D' },
            { label: { en: "Speaks reassuring words", bg: "Казва успокояващи думи" }, value: 'E' }
        ]
    },
    {
        id: 10,
        text: { en: "I feel most loved when my partner surprises me by...", bg: "Чувствам се най-обичан/а, когато партньорът ми ме изненада, като..." },
        options: [
            { label: { en: "Taking care of a task for me", bg: "Се погрижи за задача вместо мен" }, value: 'A' },
            { label: { en: "Giving me a spontaneous hug", bg: "Ме прегърне спонтанно" }, value: 'B' },
            { label: { en: "Inviting me to spend time together", bg: "Ме покани да прекараме време заедно" }, value: 'C' },
            { label: { en: "Bringing me a surprise gift", bg: "Ми донесе изненадващ подарък" }, value: 'D' },
            { label: { en: "Saying something affectionate unexpectedly", bg: "Казва нещо нежно изненадващо" }, value: 'E' }
        ]
    },
    {
        id: 11,
        text: { en: "The thing that touches me most is when my partner...", bg: "Най-много ме докосва, когато партньорът ми..." },
        options: [
            { label: { en: "Does something useful for me", bg: "Прави нещо полезно за мен" }, value: 'A' },
            { label: { en: "Shows affection physically", bg: "Показва обич физически" }, value: 'B' },
            { label: { en: "Focuses their attention fully on me", bg: "Отдава цялото си внимание на мен" }, value: 'C' },
            { label: { en: "Gives me something meaningful", bg: "Ми дава нещо значимо" }, value: 'D' },
            { label: { en: "Says sincere loving words", bg: "Казва искрени любящи думи" }, value: 'E' }
        ]
    },
    {
        id: 12,
        text: { en: "I feel most reassured when my partner...", bg: "Чувствам се най-успокоен/а, когато партньорът ми..." },
        options: [
            { label: { en: "Steps in to help with something stressful", bg: "Се включва, за да помогне с нещо стресиращо" }, value: 'A' },
            { label: { en: "Holds me lovingly", bg: "Ме държи с обич" }, value: 'B' },
            { label: { en: "Makes time for me despite being busy", bg: "Отделя време за мен, въпреки че е зает" }, value: 'C' },
            { label: { en: "Gives small surprises or gifts", bg: "Прави малки изненади или подаръци" }, value: 'D' },
            { label: { en: "Speaks words of encouragement", bg: "Казва окуражаващи думи" }, value: 'E' }
        ]
    },
    {
        id: 13,
        text: { en: "I feel secure in love when my partner...", bg: "Чувствам се сигурен/на в любовта, когато партньорът ми..." },
        options: [
            { label: { en: "Helps share my responsibilities", bg: "Споделя отговорностите ми" }, value: 'A' },
            { label: { en: "Shows affection through touch", bg: "Показва обич чрез допир" }, value: 'B' },
            { label: { en: "Spends uninterrupted quality time with me", bg: "Прекарва пълноценно време с мен без прекъсвания" }, value: 'C' },
            { label: { en: "Remembers me with thoughtful gifts", bg: "Се сеща за мен с обмислени подаръци" }, value: 'D' },
            { label: { en: "Says words that affirm their love", bg: "Казва думи, които утвърждават любовта им" }, value: 'E' }
        ]
    },
    {
        id: 14,
        text: { en: "I feel most special when my partner...", bg: "Чувствам се най-специален/на, когато партньорът ми..." },
        options: [
            { label: { en: "Does something practical for me", bg: "Прави нещо практично за мен" }, value: 'A' },
            { label: { en: "Touches me with affection", bg: "Докосва ме с нежност" }, value: 'B' },
            { label: { en: "Creates time just for us", bg: "Създава време само за нас" }, value: 'C' },
            { label: { en: "Gives me a thoughtful present", bg: "Ми подарява обмислен подарък" }, value: 'D' },
            { label: { en: "Compliments me sincerely", bg: "Ми прави искрен комплимент" }, value: 'E' }
        ]
    },
    {
        id: 15,
        text: { en: "I feel truly loved when my partner...", bg: "Чувствам се истински обичан/а, когато партньорът ми..." },
        options: [
            { label: { en: "Helps me without being asked", bg: "Ми помага без да го моля" }, value: 'A' },
            { label: { en: "Gives me spontaneous physical affection", bg: "Ми дава спонтанна физическа обич" }, value: 'B' },
            { label: { en: "Makes space for quality time", bg: "Прави време за пълноценно общуване" }, value: 'C' },
            { label: { en: "Surprises me with thoughtful gifts", bg: "Ме изненадва с обмислени подаръци" }, value: 'D' },
            { label: { en: "Expresses love with heartfelt words", bg: "Изразява любов с искрени думи" }, value: 'E' }
        ]
    }
];
