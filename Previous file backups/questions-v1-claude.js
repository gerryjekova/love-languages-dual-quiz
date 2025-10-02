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
        en: 'Receiving Gifts',
        bg: 'Получаване и Правене на подаръци'
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
        text: {
            en: "I feel most loving when I...",
            bg: "Чувствам се най-обичлив/а, когато..."
        },
        options: [
            { 
                label: {
                    en: "Offer to help with a task or project they're stressed about",
                    bg_orig: "Предлагам помощ с задача или проект, за да им облекча напрежението"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Give them a heartfelt, unprompted hug or touch their arm",
                    bg: "Давам им сърдечна, спонтанна прегръдка или докосвам ръката им"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Sit down and give them my full, undivided attention",      
                    bg: "Сядам и им отдавам цялото си внимание, без да се разсейвам"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Surprise them with a small gift I knew they'd like",
                    bg: "Изненадвам ги с малък подарък, за който знам, че ще им хареса"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Tell them sincerely how much they mean to me",
                    bg_orig: "Казвам им искрено колко много значат за мен",
                    bg_suggested: "Искрено им казвам колко много значат за мен"
                },
                value: 'E' 
            }
        ]
    },
    
    {
        id: 2,
        text: {
            en: "My ideal way to celebrate a loved one's achievement is to...",
            bg: "Идеалният ми начин да празнувам постижението на любим човек е да..."
        },
        options: [
            { 
                label: {
                    en: "Cook them their favorite meal to free up their time",
                    bg: "Сготвя любимото им ястие, за да освободя времето им"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Give them a big, celebratory high-five or hug",
                    bg: "Дам им голямо, празнично пляскане с дланите или прегръдка"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Listen intently as they recount every detail of their success",
                    bg: "Слушам внимателно, докато разказват всеки детайл от успеха си"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Buy them a gift to commemorate the occasion",
                    bg: "Купя им подарък, за да отбележа случая"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Write them a card or toast explaining how proud I am",
                    bg: "Напиша им картичка или тост, обяснявайки колко съм горд/а"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 3,
        text: {
            en: "When I see my partner is stressed, my first instinct is to...",
            bg: "Когато видя, че партньорът ми е стресиран, първият ми инстинкт е да..."
        },
        options: [
            { 
                label: {
                    en: "Take over one of their chores to lighten their load",
                    bg: "Поема една от задачите им, за да облекча натоварването им"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Give them a shoulder rub or hold their hand",
                    bg: "Масажирам рамената им или държа ръката им"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Ask them to talk about it and just listen without solving it",
                    bg: "Помоля ги да говорят за това и просто слушам без да решавам проблема"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Bring them their favorite coffee or snack to cheer them up",
                    bg: "Донеса им любимото им кафе или закуска, за да ги развеселя"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Encourage them with words like, 'You've got this, I believe in you'",
                    bg: "Окуражавам ги с думи като 'Ще се справиш, вярвам в теб'"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 4,
        text: {
            en: "I express my love most frequently through...",
            bg: "Най-често изразявам любовта си чрез..."
        },
        options: [
            { 
                label: {
                    en: "Actions and service, like making them breakfast or fixing things",
                    bg: "Действия и услуги, като правене на закуска или поправяне на неща"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Physical closeness, like cuddling on the couch or holding hands",
                    bg: "Физическа близост, като гушкане на дивана или държане за ръка"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Deep, focused conversations about their thoughts and feelings",
                    bg: "Дълбоки, съсредоточени разговори за мислите и чувствата им"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Thoughtful gifts and mementos",
                    bg: "Обмислени подаръци и сувенири"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Verbal affirmations, compliments, and 'I love you's",
                    bg: "Словесни потвърждения, комплименти и 'обичам те'"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 5,
        text: {
            en: "If I had to show appreciation without using words, I'd most likely...",
            bg: "Ако трябваше да покажа признателност без думи, най-вероятно бих..."
        },
        options: [
            { 
                label: {
                    en: "Do something helpful for them",
                    bg: "Направил/а нещо полезно за тях"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Reach out and hold them",
                    bg: "Протегнал/а ръка и ги прегърнал/а"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Make eye contact and listen to them with full presence",
                    bg: "Направил/а зрителен контакт и ги изслушал/а с пълно присъствие"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Leave a small, meaningful gift for them to find",
                    bg: "Оставил/а малък, значим подарък, който да намерят"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "(This would be very difficult for me, as words are my main tool)",
                    bg: "(Това би било много трудно за мен, тъй като думите са основният ми инструмент)"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 6,
        text: {
            en: "Planning a perfect date for me involves...",
            bg: "Планирането на перфектно срещане за мен включва..."
        },
        options: [
            { 
                label: {
                    en: "Doing something practical together, like building furniture or cooking a complex recipe",
                    bg: "Правене на нещо практично заедно, като сглобяване на мебели или готвене на сложна рецепта"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "An activity with lots of physical contact, like dancing or cozying up for a movie",
                    bg: "Дейност с много физически контакт, като танци или гушкане по време на филм"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "A long walk or quiet dinner where we can talk without distractions",
                    bg: "Дълга разходка или тиха вечеря, където можем да говорим без разсейване"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Picking up a little souvenir for them during the date",
                    bg: "Вземане на малък сувенир за тях по време на срещата"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Telling them throughout the date specific things I love about them",
                    bg: "Казване през цялата среща на конкретни неща, които обичам в тях"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 7,
        text: {
            en: "When I'm away from a loved one, I show I'm thinking of them by...",
            bg: "Когато съм далеч от любим човек, показвам, че мисля за него, като..."
        },
        options: [
            { 
                label: {
                    en: "Taking care of something for them back home (e.g., organizing a closet)",
                    bg: "Се погрижа за нещо у дома (напр. подредя гардероб)"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Sending a text about how I wish I was there to hug them",
                    bg: "Изпратя съобщение как бих искал/а да съм там, за да ги прегърна"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Sending a long message asking about their day and feelings",
                    bg: "Изпратя дълго съобщение, питайки за деня и чувствата им"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Bringing back a souvenir or ordering them a gift online",
                    bg: "Донеса сувенир или поръчам подарък онлайн за тях"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Sending a text full of heart emojis and loving words",
                    bg: "Изпратя съобщение пълно със сърчица и любящи думи"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 8,
        text: {
            en: "The most satisfying 'thank you' I can give is...",
            bg: "Най-удовлетворяващото 'благодаря', което мога да дам, е..."
        },
        options: [
            { 
                label: {
                    en: "Returning the favor with a helpful action",
                    bg: "Да върна услугата с полезно действие"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "A warm, genuine hug",
                    bg: "Топла, искрена прегръдка"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Looking them in the eye and explaining exactly how their help impacted me",
                    bg: "Да ги погледна в очите и да обясня точно как помощта им ме е повлияла"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Writing a thank-you note or giving a small reciprocal gift",
                    bg: "Да напиша благодарствена бележка или да дам малък ответен подарък"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Telling them repeatedly and enthusiastically how grateful I am",
                    bg: "Да им казвам многократно и ентусиазирано колко съм благодарен/на"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 9,
        text: {
            en: "I believe the saying 'actions speak louder than words' is...",
            bg: "Вярвам, че поговорката 'делата говорят по-силно от думите' е..."
        },
        options: [
            { 
                label: {
                    en: "Absolutely true. Doing things for someone is the ultimate proof",
                    bg: "Абсолютно вярна. Правенето на неща за някого е крайното доказателство"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Partly true, but physical touch can communicate what words cannot",
                    bg: "Частично вярна, но физическият контакт може да комуникира това, което думите не могат"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Not entirely accurate, because listening is an action that speaks volumes",
                    bg: "Не напълно точна, защото слушането е действие, което говори много"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "True, and a thoughtfully chosen gift is a powerful action",
                    bg: "Вярна, и обмисленият избран подарък е мощно действие"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "False. Loving words are the clearest and most direct form of communication",
                    bg: "Невярна. Любящите думи са най-ясната и директна форма на комуникация"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 10,
        text: {
            en: "My love feels most tangible when I express it through...",
            bg: "Любовта ми се чувства най-осезаема, когато я изразявам чрез..."
        },
        options: [
            { label: { en: "Acts of Service", bg: "Дела на услуга" }, value: 'A' },
            { label: { en: "Physical Touch", bg: "Физически контакт" }, value: 'B' },
            { label: { en: "Quality Time", bg: "Качествено време" }, value: 'C' },
            { label: { en: "Receiving Gifts", bg: "Даване на подаръци" }, value: 'D' },
            { label: { en: "Words of Affirmation", bg: "Думи на одобрение" }, value: 'E' }
        ]
    },
    {
        id: 11,
        text: {
            en: "If a friend is sick, I show I care by...",
            bg: "Ако приятел е болен, показвам че ми пука, като..."
        },
        options: [
            { 
                label: {
                    en: "Dropping off soup and medicine for them",
                    bg: "Занеса супа и лекарства за тях"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Giving them a comforting hug",
                    bg: "Дам им утешителна прегръдка"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Sitting with them to keep them company",
                    bg: "Седна с тях, за да им правя компания"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Bringing them a 'get well soon' care package",
                    bg: "Донеса им пакет за бързо оздравяване"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Calling or texting them encouraging messages",
                    bg: "Обадя се или изпратя окуражаващи съобщения"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 12,
        text: {
            en: "To make a loved one feel special on an ordinary day, I...",
            bg: "За да накарам любим човек да се почувства специален в обикновен ден, аз..."
        },
        options: [
            { 
                label: {
                    en: "Fill up their car with gas or run an errand for them",
                    bg: "Напълня колата им с гориво или свърша задача вместо тях"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Initiate cuddling or put my arm around them",
                    bg: "Започвам гушкане или обгръщам раменете им"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Put my phone away and engage in a deep conversation",
                    bg: "Прибирам телефона си и се включвам в дълбок разговор"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Pick up their favorite candy or magazine",
                    bg: "Купувам любимата им бонбонена кутия или списание"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Leave a sticky note with a compliment on the bathroom mirror",
                    bg: "Оставям лепенка с комплимент на огледалото в банята"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 13,
        text: {
            en: "When I'm proud of my partner, I...",
            bg: "Когато съм горд/а от партньора си, аз..."
        },
        options: [
            { 
                label: {
                    en: "Take on an extra household task so they can relax and enjoy their success",
                    bg: "Поемам допълнителна домакинска задача, за да могат да се отпуснат и да се насладят на успеха си"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Give them an enthusiastic kiss or embrace",
                    bg: "Дам им ентусиазирана целувка или прегръдка"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Plan a distraction-free activity to hear all about their experience",
                    bg: "Планирам дейност без разсейване, за да чуя всичко за техния опит"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Buy them something to celebrate their hard work",
                    bg: "Купувам им нещо, за да празнуваме техния труд"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Shower them with specific praise about what they accomplished",
                    bg: "Заливам ги с конкретни похвали за това, което са постигнали"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 14,
        text: {
            en: "I feel my efforts to show love are most successful when...",
            bg: "Чувствам, че усилията ми да покажа любов са най-успешни, когато..."
        },
        options: [
            { 
                label: {
                    en: "The other person notices and appreciates the things I do for them",
                    bg: "Другият човек забелязва и оценява нещата, които правя за него"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "The other person reciprocates with physical affection",
                    bg: "Другият човек отвръща с физическа обич"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "The other person is fully engaged and present with me",
                    bg: "Другият човек е напълно ангажиран и присъстващ с мен"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "The other person is visibly delighted by a gift I gave",
                    bg: "Другият човек е видимо зарадван от подарък, който съм дал/а"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "The other person lights up after something I said",
                    bg: "Другият човек се осветява след нещо, което съм казал/а"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 15,
        text: {
            en: "The love language I use most instinctively is...",
            bg: "Езикът на любовта, който използвам най-инстинктивно, е..."
        },
        options: [
            { label: { en: "Acts of Service", bg: "Дела на услуга" }, value: 'A' },
            { label: { en: "Physical Touch", bg: "Физически контакт" }, value: 'B' },
            { label: { en: "Quality Time", bg: "Качествено време" }, value: 'C' },
            { label: { en: "Receiving Gifts", bg: "Даване на подаръци" }, value: 'D' },
            { label: { en: "Words of Affirmation", bg: "Думи на одобрение" }, value: 'E' }
        ]
    }
];

// Section B: Receiving Love (15 questions)
const RECEIVING_QUESTIONS = [
    {
        id: 1,
        text: {
            en: "I feel most loved and appreciated when someone...",
            bg: "Чувствам се най-обичан/а и ценен/а, когато някой..."
        },
        options: [
            { 
                label: {
                    en: "Does something practical to help me out without me asking",
                    bg: "Направи нещо практично, за да ми помогне, без да го моля"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Greets me with a warm, genuine hug",
                    bg: "Ме посреща с топла, искрена прегръдка"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Puts away their phone and actively listens to me",
                    bg: "Прибере телефона си и активно ме слуша"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Gives me a thoughtful, personalized gift",
                    bg: "Ми даде обмислен, персонализиран подарък"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Tells me specifically what they love or admire about me",
                    bg: "Ми каже конкретно какво обича или възхищава в мен"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 2,
        text: {
            en: "Nothing makes me feel more secure in a relationship than when my partner...",
            bg: "Нищо не ме кара да се чувствам по-сигурен/на във връзката от това, когато партньорът ми..."
        },
        options: [
            { 
                label: {
                    en: "Consistently follows through on promises and helps with responsibilities",
                    bg: "Постоянно изпълнява обещанията и помага с отговорностите"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Is physically affectionate in small, everyday ways",
                    bg: "Е физически нежен по малки, всекидневни начини"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Makes and keeps plans for one-on-one time with no distractions",
                    bg: "Прави и спазва планове за време насаме без разсейване"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Remembers special occasions with meaningful gifts or gestures",
                    bg: "Помни специални случаи със значими подаръци или жестове"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Regularly expresses their commitment and appreciation verbally",
                    bg: "Редовно изразява ангажираността и признателността си словесно"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 3,
        text: {
            en: "If I had to choose, I would rather my partner...",
            bg: "Ако трябваше да избирам, предпочитам партньорът ми да..."
        },
        options: [
            { 
                label: {
                    en: "Wash my car because they knew it was stressing me out",
                    bg: "Измие колата ми, защото знае, че ме стресира"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Hold my hand while we watch a movie",
                    bg: "Държи ръката ми, докато гледаме филм"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Spend an hour talking with me about our dreams",
                    bg: "Прекара час в разговор с мен за нашите мечти"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Surprise me with my favorite book",
                    bg: "Изненада ме с любимата ми книга"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Write me a love note",
                    bg: "Напише ми любовна бележка"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 4,
        text: {
            en: "I feel deeply cared for when a friend...",
            bg: "Чувствам се дълбоко загрижени за мен, когато приятел..."
        },
        options: [
            { 
                label: {
                    en: "Offers to help me move or tackle a big project",
                    bg: "Предложи да помогне с преместване или голям проект"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Puts an arm around my shoulder when I'm sad",
                    bg: "Постави ръка около рамото ми, когато съм тъжен/на"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Checks in with a long call to see how I'm really doing",
                    bg: "Провери с дълго обаждане как наистина съм"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Brings me back a souvenir from their trip",
                    bg: "Донесе ми сувенир от пътуването си"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Sends a text out of the blue saying they're grateful for me",
                    bg: "Изпрати съобщение неочаквано, казвайки че е благодарен за мен"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 5,
        text: {
            en: "A romantic gesture that would mean the most to me is...",
            bg: "Романтичен жест, който би значел най-много за мен, е..."
        },
        options: [
            { 
                label: {
                    en: "My partner taking care of all the chores for a day so I can relax",
                    bg: "Партньорът ми да се погрижи за всички домакински задачи за ден, за да мога да се отпусна"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "A long, slow dance in the living room",
                    bg: "Дълъг, бавен танц в хола"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "A planned day trip with just the two of us, talking and connecting",
                    bg: "Планирана еднодневна екскурзия само двама ни, говорене и свързване"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "My partner seeing something in a store that made them think of me and buying it",
                    bg: "Партньорът ми да види нещо в магазин, което му напомни за мен, и да го купи"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "My partner listing all the reasons why they love me",
                    bg: "Партньорът ми да изброи всички причини, поради които ме обича"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 6,
        text: {
            en: "When I am upset, I am most comforted by someone who...",
            bg: "Когато съм разстроен/а, най-утешен/а съм от някой, който..."
        },
        options: [
            { 
                label: {
                    en: "Takes action to solve the problem causing me stress",
                    bg: "Предприема действие, за да реши проблема, причиняващ ми стрес"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Offers a comforting hug or simply sits close to me",
                    bg: "Предлага утешителна прегръдка или просто седи близо до мен"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Listens patiently without trying to immediately fix things",
                    bg: "Слуша търпеливо без да се опитва веднага да оправя нещата"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Brings me something to make me feel better, like tea or a blanket",
                    bg: "Донася ми нещо, за да се почувствам по-добре, като чай или одеяло"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Offers reassuring and affirming words",
                    bg: "Предлага успокояващи и потвърждаващи думи"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 7,
        text: {
            en: "I know my partner is thinking of me when they...",
            bg: "Знам, че партньорът ми мисли за мен, когато..."
        },
        options: [
            { 
                label: {
                    en: "Do a household task I usually handle",
                    bg: "Свърши домакинска задача, която обикновено аз вършa"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Reach for my hand or give me a quick kiss as they walk by",
                    bg: "Посегне към ръката ми или ми даде бърза целувка, докато минава покрай мен"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Cancel other plans to spend a quiet evening with me",
                    bg: "Отмени други планове, за да прекара тиха вечер с мен"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Text me a picture of something that reminded them of me, or bring me a small gift",
                    bg: "Изпрати ми снимка на нещо, което им напомни за мен, или ми донесе малък подарък"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Send me a sweet or encouraging text message",
                    bg: "Изпрати ми сладко или окуражаващо текстово съобщение"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 8,
        text: {
            en: "I feel taken for granted when my partner...",
            bg: "Чувствам се приет/а за даденост, когато партньорът ми..."
        },
        options: [
            { 
                label: {
                    en: "Doesn't notice or appreciate the things I do for them",
                    bg: "Не забелязва или не цени нещата, които правя за него"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Consistently avoids physical intimacy or touch",
                    bg: "Постоянно избягва физическата интимност или докосване"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Is always on their device during our time together",
                    bg: "Винаги е на устройството си по време на нашето време заедно"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Forgets birthdays, anniversaries, or doesn't put thought into gifts",
                    bg: "Забравя рождени дни, годишнини или не влага мисъл в подаръците"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Rarely compliments me or says 'I love you'",
                    bg: "Рядко ми прави комплименти или казва 'обичам те'"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 9,
        text: {
            en: "The most meaningful part of a celebration for me is...",
            bg: "Най-значимата част от празнуване за мен е..."
        },
        options: [
            { 
                label: {
                    en: "Having my loved ones help with the preparations or cleanup",
                    bg: "Близките ми да помагат с подготовката или почистването"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "The hugs, kisses, and physical closeness with those I love",
                    bg: "Прегръдките, целувките и физическата близост с хората, които обичам"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "The uninterrupted time spent laughing and talking with guests",
                    bg: "Непрекъснатото време, прекарано в смях и разговори с гостите"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Receiving a thoughtful gift that shows I am known",
                    bg: "Получаването на обмислен подарък, който показва, че ме познават"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Hearing the heartfelt toasts and words of affirmation from others",
                    bg: "Да чуя сърдечните тостове и думите на одобрение от другите"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 10,
        text: {
            en: "On a bad day, what would most lift my spirits is...",
            bg: "В лош ден, това, което най-много би вдигнало духа ми, е..."
        },
        options: [
            { 
                label: {
                    en: "Someone taking a task off my to-do list",
                    bg: "Някой да свърши задача от списъка ми със задачи"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "A long, tight hug from someone I care about",
                    bg: "Дълга, здрава прегръдка от някой, за когото ми пука"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "A friend asking to go for a walk and talk it out",
                    bg: "Приятел да поиска да отидем на разходка и да поговорим"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "A friend showing up with my favorite treat",
                    bg: "Приятел да се появи с любимото ми лакомство"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Someone telling me I'm capable and loved",
                    bg: "Някой да ми каже, че съм способен/на и обичан/а"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 11,
        text: {
            en: "I feel most connected to my partner when we...",
            bg: "Чувствам се най-свързан/а с партньора си, когато..."
        },
        options: [
            { 
                label: {
                    en: "Work together as a team on a shared goal or project",
                    bg: "Работим заедно като екип върху обща цел или проект"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Are physically intimate or cuddling",
                    bg: "Сме физически интимни или се гушкаме"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Are having a deep, meaningful conversation",
                    bg: "Водим дълбок, значим разговор"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Exchange thoughtful gifts or gestures",
                    bg: "Обменяме обмислени подаръци или жестове"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Are sharing heartfelt compliments and words of appreciation",
                    bg: "Споделяме сърдечни комплименти и думи на признателност"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 12,
        text: {
            en: "An apology feels most sincere to me when the person...",
            bg: "Извинението ми се струва най-искрено, когато човекът..."
        },
        options: [
            { 
                label: {
                    en: "Makes a concrete effort to fix their mistake or change their behavior",
                    bg: "Полага конкретни усилия да поправи грешката си или да промени поведението си"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Offers a physical gesture of comfort, like a hug",
                    bg: "Предлага физически жест на утеха, като прегръдка"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Sits down with me and fully hears how I felt",
                    bg: "Сяда с мен и напълно изслушва как съм се чувствал/а"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Gives me a symbolic gift as a peace offering",
                    bg: "Дава ми символичен подарък като жест на помирение"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Verbally acknowledges exactly what they did wrong and expresses regret",
                    bg: "Словесно признава точно какво е направил/а грешно и изразява съжаление"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 13,
        text: {
            en: "I feel truly 'seen' and understood by someone when they...",
            bg: "Чувствам се наистина 'видян/а' и разбран/а от някой, когато..."
        },
        options: [
            { 
                label: {
                    en: "Anticipate my needs and act on them",
                    bg: "Предвижда нуждите ми и действа според тях"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Understand my need for physical space or closeness",
                    bg: "Разбира нуждата ми от физическо пространство или близост"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "Remember the small details from our previous conversations",
                    bg: "Помня малките детайли от предишните ни разговори"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "Give me a gift that is perfectly suited to my personality",
                    bg: "Дава ми подарък, който е перфектно подходящ за личността ми"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Describe my qualities and strengths back to me accurately",
                    bg: "Описва качествата и силните ми страни обратно към мен точно"
                },
                value: 'E' 
            }
        ]
    },
    {
        id: 14,
        text: {
            en: "My primary love language is...",
            bg: "Основният ми език на любовта е..."
        },
        options: [
            { label: { en: "Acts of Service", bg: "Дела на услуга" }, value: 'A' },
            { label: { en: "Physical Touch", bg: "Физически контакт" }, value: 'B' },
            { label: { en: "Quality Time", bg: "Качествено време" }, value: 'C' },
            { label: { en: "Receiving Gifts", bg: "Получаване на подаръци" }, value: 'D' },
            { label: { en: "Words of Affirmation", bg: "Думи на одобрение" }, value: 'E' }
        ]
    },
    {
        id: 15,
        text: {
            en: "If I could only receive one expression of love for a year, it would be...",
            bg: "Ако можех да получа само един израз на любов за година, това би било..."
        },
        options: [
            { 
                label: {
                    en: "Having my partner consistently help with daily chores",
                    bg: "Партньорът ми постоянно да помага с ежедневните задачи"
                },
                value: 'A' 
            },
            { 
                label: {
                    en: "Daily physical affection like hugging, holding hands, and kissing",
                    bg: "Ежедневна физическа обич като прегръдки, държане за ръце и целувки"
                },
                value: 'B' 
            },
            { 
                label: {
                    en: "30 minutes of quality, uninterrupted conversation every day",
                    bg: "30 минути качествен, непрекъснат разговор всеки ден"
                },
                value: 'C' 
            },
            { 
                label: {
                    en: "A small, thoughtful gift once a week",
                    bg: "Малък, обмислен подарък веднъж седмично"
                },
                value: 'D' 
            },
            { 
                label: {
                    en: "Hearing 'I love you' and specific compliments daily",
                    bg: "Да чувам 'обичам те' и конкретни комплименти ежедневно"
                },
                value: 'E' 
            }
        ]
    }
];