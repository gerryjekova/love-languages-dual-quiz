// // Love Language mapping
// const LOVE_LANGUAGES = {
//     A: {
//         en: 'Acts of Service',
//         bg: 'Дела на услуга'
//     },
//     B: {
//         en: 'Physical Touch',
//         bg: 'Физически контакт'
//     },
//     C: {
//         en: 'Quality Time',
//         bg: 'Качествено време'
//     },
//     D: {
//         en: 'Receiving Gifts',
//         bg: 'Получаване на подаръци'
//     },
//     E: {
//         en: 'Words of Affirmation',
//         bg: 'Думи на одобрение'
//     }
// };

// // Section A: Giving Love (15 questions)
// const GIVING_QUESTIONS = [
//     {
//         id: 1,
//         text: {
//             en: "I feel most loving when I...",
//             bg: "Чувствам се най-любящ/а, когато..."
//         },
//         options: [
//             { 
//                 label: {
//                     en: "Offer to help with a task or project they're stressed about",
//                     bg: "Предлагам помощ с задача или проект, за които са напрегнати"
//                 },
//                 value: 'A' 
//             },
//             { 
//                 label: {
//                     en: "Give them a heartfelt, unprompted hug or touch their arm",
//                     bg: "Прегръщам ги сърдечно и спонтанно или докосвам ръката им"
//                 },
//                 value: 'B' 
//             },
//             { 
//                 label: {
//                     en: "Sit down and give them my full, undivided attention",
//                     bg: "Сядам и им давам пълното си, неразделено внимание"
//                 },
//                 value: 'C' 
//             },
//             { 
//                 label: {
//                     en: "Surprise them with a small gift I knew they'd like",
//                     bg: "Изненадвам ги с малък подарък, за който знам, че ще им харесa"
//                 },
//                 value: 'D' 
//             },
//             { 
//                 label: {
//                     en: "Tell them sincerely how much they mean to me",
//                     bg: "Казвам им искрено колко много значат за мен"
//                 },
//                 value: 'E' 
//             }
//         ]
//     },
//     {
//         id: 2,
//         text: {
//             en: "My ideal way to celebrate a loved one's achievement is to...",
//             bg: "Идеалният ми начин да празнувам постижението на любим човек е да..."
//         },
//         options: [
//             { 
//                 label: {
//                     en: "Cook them their favorite meal to free up their time",
//                     bg: "Сготвя любимото им ястие, за да освободя времето им"
//                 },
//                 value: 'A' 
//             },
//             { 
//                 label: {
//                     en: "Give them a big, celebratory high-five or hug",
//                     bg: "Дам им голямо, празнично пляскане с дланите или прегръдка"
//                 },
//                 value: 'B' 
//             },
//             { 
//                 label: {
//                     en: "Listen intently as they recount every detail of their success",
//                     bg: "Слушам внимателно, докато разказват всеки детайл от успеха си"
//                 },
//                 value: 'C' 
//             },
//             { 
//                 label: {
//                     en: "Buy them a gift to commemorate the occasion",
//                     bg: "Купя им подарък, за да отбележа случая"
//                 },
//                 value: 'D' 
//             },
//             { 
//                 label: {
//                     en: "Write them a card or toast explaining how proud I am",
//                     bg: "Напиша им картичка или тост, обяснявайки колко съм горд/а"
//                 },
//                 value: 'E' 
//             }
//         ]
//     },
//     {
//         id: 3,
//         text: {
//             en: "When I see my partner is stressed, my first instinct is to...",
//             bg: "Когато видя, че партньорът ми е стресиран, първият ми инстинкт е да..."
//         },
//         options: [
//             { 
//                 label: {
//                     en: "Take over one of their chores to lighten their load",
//                     bg: "Поема една от задачите им, за да облекча натоварването им"
//                 },
//                 value: 'A' 
//             },
//             { 
//                 label: {
//                     en: "Give them a shoulder rub or hold their hand",
//                     bg: "Масажирам рамената им или държа ръката им"
//                 },
//                 value: 'B' 
//             },
//             { 
//                 label: {
//                     en: "Ask them to talk about it and just listen without solving it",
//                     bg: "Помоля ги да говорят за това и просто слушам без да решавам проблема"
//                 },
//                 value: 'C' 
//             },
//             { 
//                 label: {
//                     en: "Bring them their favorite coffee or snack to cheer them up",
//                     bg: "Донеса им любимото им кафе или закуска, за да ги развеселя"
//                 },
//                 value: 'D' 
//             },
//             { 
//                 label: {
//                     en: "Encourage them with words like, 'You've got this, I believe in you'",
//                     bg: "Окуражавам ги с думи като 'Ще се справиш, вярвам в теб'"
//                 },
//                 value: 'E' 
//             }
//         ]
//     },
//     {
//         id: 4,
//         text: {
//             en: "I express my love most frequently through...",
//             bg: "Най-често изразявам любовта си чрез..."
//         },
//         options: [
//             { 
//                 label: {
//                     en: "Actions and service, like making them breakfast or fixing things",
//                     bg: "Действия и услуги, като правене на закуска или поправяне на неща"
//                 },
//                 value: 'A' 
//             },
//             { 
//                 label: {
//                     en: "Physical closeness, like cuddling on the couch or holding hands",
//                     bg: "Физическа близост, като гушкане на дивана или държане за ръка"
//                 },
//                 value: 'B' 
//             },
//             { 
//                 label: {
//                     en: "Deep, focused conversations about their thoughts and feelings",
//                     bg: "Дълбоки, съсредоточени разговори за мислите и чувствата им"
//                 },
//                 value: 'C' 
//             },
//             { 
//                 label: {
//                     en: "Thoughtful gifts and mementos",
//                     bg: "Обмислени подаръци и сувенири"
//                 },
//                 value: 'D' 
//             },
//             { 
//                 label: {
//                     en: "Verbal affirmations, compliments, and 'I love you's",
//                     bg: "Словесни потвърждения, комплименти и 'обичам те'"
//                 },
//                 value: 'E' 
//             }
//         ]
//     },
//     {
//         id: 5,
//         text: {
//             en: "If I had to show appreciation without using words, I'd most likely...",
//             bg: "Ако трябваше да покажа признателност без думи, най-вероятно бих..."
//         },
//         options: [
//             { 
//                 label: {
//                     en: "Do something helpful for them",
//                     bg: "Направил/а нещо полезно за тях"
//                 },
//                 value: 'A' 
//             },
//             { 
//                 label: {
//                     en: "Reach out and hold them",
//                     bg: "Протегнал/а ръка и ги прегърнал/а"
//                 },
//                 value: 'B' 
//             },
//             { 
//                 label: {
//                     en: "Make eye contact and listen to them with full presence",
//                     bg: "Направил/а зрителен контакт и ги изслушал/а с пълно присъствие"
//                 },
//                 value: 'C' 
//             },
//             { 
//                 label: {
//                     en: "Leave a small, meaningful gift for them to find",
//                     bg: "Оставил/а малък, значим подарък, който да намерят"
//                 },
//                 value: 'D' 
//             },
//             { 
//                 label: {
//                     en: "(This would be very difficult for me, as words are my main tool)",
//                     bg: "(Това би било много трудно за мен, тъй като думите са основният ми инструмент)"
//                 },
//                 value: 'E' 
//             }
//         ]
//     },
//     {
//         id: 6,
//         text: {
//             en: "Planning a perfect date for me involves...",
//             bg: "Планирането на перфектно срещане за мен включва..."
//         },
//         options: [
//             { 
//                 label: {
//                     en: "Doing something practical together, like building furniture or cooking a complex recipe",
//                     bg: "Правене на нещо практично заедно, като сглобяване на мебели или готвене на сложна рецепта"
//                 },
//                 value: 'A' 
//             },
//             { 
//                 label: {
//                     en: "An activity with lots of physical contact, like dancing or cozying up for a movie",
//                     bg: "Дейност с много физически контакт, като танци или гушкане по време на филм"
//                 },
//                 value: 'B' 
//             },
//             { 
//                 label: {
//                     en: "A long walk or quiet dinner where we can talk without distractions",
//                     bg: "Дълга разходка или тиха вечеря, където можем да говорим без разсейване"
//                 },
//                 value: 'C' 
//             },
//             { 
//                 label: {
//                     en: "Picking up a little souvenir for them during the date",
//                     bg: "Вземане на малък сувенир за тях по време на срещата"
//                 },
//                 value: 'D' 
//             },
//             { 
//                 label: {
//                     en: "Telling them throughout the date specific things I love about them",
//                     bg: "Казване през цялата среща на конкретни неща, които обичам в тях"
//                 },
//                 value: 'E' 
//             }
//         ]
//     },
//     {
//         id: 7,
//         text: {
//             en: "When I'm away from a loved one, I show I'm thinking of them by...",
//             bg: "Когато съм далеч от любим човек, показвам, че мисля за него, като..."
//         },
//         options: [
//             { 
//                 label: {
//                     en: "Taking care of something for them back home (e.g., organizing a closet)",
//                     bg: "Се погрижа за нещо у дома (напр. подредя гардероб)"
//                 },
//                 value: 'A' 
//             },
//             { 
//                 label: {
//                     en: "Sending a text about how I wish I was there to hug them",
//                     bg: "Изпратя съобщение как бих искал/а да съм там, за да ги прегърна"
//                 },
//                 value: 'B' 
//             },
//             { 
//                 label: {
//                     en: "Sending a long message asking about their day and feelings",
//                     bg: "Изпратя дълго съобщение, питайки за деня и чувствата им"
//                 },
//                 value: 'C' 
//             },
//             { 
//                 label: {
//                     en: "Bringing back a souvenir or ordering them a gift online",
//                     bg: "Донеса сувенир или поръчам подарък онлайн за тях"
//                 },
//                 value: 'D' 
//             },
//             { 
//                 label: {
//                     en: "Sending a text full of heart emojis and loving words",
//                     bg: "Изпратя съобщение пълно със сърчица и любящи думи"
//                 },
//                 value: 'E' 
//             }
//         ]
//     },
//     {
//         id: 8,
//         text: {
//             en: "The most satisfying 'thank you' I can give is...",
//             bg: "Най-удовлетворяващото 'благодаря', което мога да дам, е..."
//         },
//         options: [
//             { 
//                 label: {
//                     en: "Returning the favor with a helpful action",
//                     bg: "Да върна услугата с полезно действие"
//                 },
//                 value: 'A' 
//             },
//             { 
//                 label: {
//                     en: "A warm, genuine hug",
//                     bg: "Топла, искрена прегръдка"
//                 },
//                 value: 'B' 
//             },
//             { 
//                 label: {
//                     en: "Looking them in the eye and explaining exactly how their help impacted me",
//                     bg: "Да ги погледна в очите и да обясня точно как помощта им ме е повлияла"
//                 },
//                 value: 'C' 
//             },
//             { 
//                 label: {
//                     en: "Writing a thank-you note or giving a small reciprocal gift",
//                     bg: "Да напиша благодарствена бележка или да дам малък ответен подарък"
//                 },
//                 value: 'D' 
//             },
//             { 
//                 label: {
//                     en: "Telling them repeatedly and enthusiastically how grateful I am",
//                     bg: "Да им казвам многократно и ентусиазирано колко съм благодарен/на"
//                 },
//                 value: 'E' 
//             }
//         ]
//     },
//     {
//         id: 9,
//         text: {
//             en: "I believe the saying 'actions speak louder than words' is...",
//             bg: "Вярвам, че поговорката 'делата говорят по-силно от думите' е..."
//         },
//         options: [
//             { 
//                 label: {
//                     en: "Absolutely true. Doing things for someone is the ultimate proof",
//                     bg: "Абсолютно вярна. Правенето на неща за някого е крайното доказателство"
//                 },
//                 value: 'A' 
//             },
//             { 
//                 label: {
//                     en: "Partly true, but physical touch can communicate what words cannot",
//                     bg: "Частично вярна, но физическият контакт може да комуникира това, което думите не могат"
//                 },
//                 value: 'B' 
//             },
//             { 
//                 label: {
//                     en: "Not entirely accurate, because listening is an action that speaks volumes",
//                     bg: "Не напълно точна, защото слушането е действие, което говори много"
//                 },
//                 value: 'C' 
//             },
//             { 
//                 label: {
//                     en: "True, and a thoughtfully chosen gift is a powerful action",
//                     bg: "Вярна, и обмислено избраният подарък е мощно действие"
//                 },
//                 value: 'D' 
//             },
//             { 
//                 label: {
//                     en: "False. Loving words are the clearest and most direct form of communication",
//                     bg: "Невярна. Любящите думи са най-ясната и директна форма на комуникация"
//                 },
//                 value: 'E' 
//             }
//         ]
//     },
//     {
//         id: 10,
//         text: {
//             en: "My love feels most tangible when I express it through...",
//             bg: "Любовта ми се чувства най-осезаема, когато я изразявам чрез..."
//         },
//         options: [
//             { label: { en: "Acts of Service", bg: "Дела на услуга" }, value: 'A' },
//             { label: { en: "Physical Touch", bg: "Физически контакт" }, value: 'B' },
//             { label: { en: "Quality Time", bg: "Качествено време" }, value: 'C' },
//             { label: { en: "Receiving Gifts", bg: "Даване на подаръци" }, value: 'D' },
//             { label: { en: "Words of Affirmation", bg: "Думи на одобрение" }, value: 'E' }
//         ]
//     },
//     {
//         id: 11,
//         text: {
//             en: "If a friend is sick, I show I care by...",
//             bg: "Ако приятел е болен, показвам че ми пука, като..."
//         },
//         options: [
//             { 
//                 label: {
//                     en: "Dropping off soup and medicine for them",
//                     bg: "Занеса супа и лекарства за тях"
//                 },
//                 value: 'A' 
//             },
//             { 
//                 label: {
//                     en: "Giving them a comforting hug",
//                     bg: "Дам им утешителна прегръдка"
//                 },
//                 value: 'B' 
//             },
//             { 
//                 label: {
//                     en: "Sitting with them to keep them company",
//                     bg: "Седна с тях, за да им правя компания"
//                 },
//                 value: 'C' 
//             },
//             { 
//                 label: {
//                     en: "Bringing them a 'get well soon' care package",
//                     bg: "Донеса им пакет за бързо оздравяване"
//                 },
//                 value: 'D' 
//             },
//             { 
//                 label: {
//                     en: "Calling or texting them encouraging messages",
//                     bg: "Обадя се или изпратя окуражаващи съобщения"
//                 },
//                 value: 'E' 
//             }
//         ]
//     },
//     {
//         id: 12,
//         text: {
//             en: "To make a loved one feel special on an ordinary day, I...",
//             bg: "За да накарам любим човек да се почувства специален в обикновен ден, аз..."
//         },
//         options: [
//             { 
//                 label: {
//                     en: "Fill up their car with gas or run an errand for them",
//                     bg: "Напълня колата им с гориво или свърша задача вместо тях"
//                 },
//                 value: 'A' 
//             },
//             { 
//                 label: {
//                     en: "Initiate cuddling or put my arm around them",
//                     bg: "Започвам гушкане или обгръщам раменете им"
//                 },
//                 value: 'B' 
//             },
//             { 
//                 label: {
//                     en: "Put my phone away and engage in a deep conversation",
//                     bg: "Прибирам телефона си и се включвам в дълбок разговор"
//                 },
//                 value: 'C' 
//             },
//             { 
//                 label: {
//                     en: "Pick up their favorite candy or magazine",
//                     bg: "Купувам любимата им бонбонена кутия или списание"
//                 },
//                 value: 'D' 
//             },
//             { 
//                 label: {
//                     en: "Leave a sticky note with a compliment on the bathroom mirror",
//                     bg: "Оставям лепенка с комплимент на огледалото в банята"
//                 },
//                 value: 'E' 
//             }
//         ]
//     },
//     {
//         id: 13,
//         text: {
//             en: "When I'm proud of my partner, I...",
//             bg: "Когато съм горд/а от партньора си, аз..."
//         },
//         options: [
//             { 
//                 label: {
//                     en: "Take on an extra household task so they can relax and enjoy their success",
//                     bg: "Поемам допълнителна домакинска задача, за да могат да се отпуснат и да се насладят на успеха си"
//                 },
//                 value: 'A' 
//             },
//             { 
//                 label: {
//                     en: "Give them an enthusiastic kiss or embrace",
//                     bg: "Дам им ентусиазирана целувка или прегръдка"
//                 },
//                 value: 'B' 
//             },
//             { 
//                 label: {
//                     en: "Plan a distraction-free activity to hear all about their experience",
//                     bg: "Планирам дейност без разсейване, за да чуя всичко за техния опит"
//                 },
//                 value: 'C' 
//             },
//             { 
//                 label: {
//                     en: "Buy them something to celebrate their hard work",
//                     bg: "Купувам им нещо, за да празнуваме техния труд"
//                 },
//                 value: 'D' 
//             },
//             { 
//                 label: {
//                     en: "Shower them with specific praise about what they accomplished",
//                     bg: "Заливам ги с конкретни похвали за това, което са постигнали"
//                 },
//                 value: 'E' 
//             }
//         ]
//     },
//     {
//         id: 14,
//         text: {
//             en: "I feel my efforts to show love are most successful when...",
//             bg: "Чувствам, че усилията ми да покажа любов са най-успешни, когато..."
//         },
//         options: [
//             { 
//                 label: {
//                     en: "The other person notices and appreciates the things I do for them",
//                     bg: "Другият човек забелязва и оценява нещата, които правя за него"
//                 },
//                 value: 'A' 
//             },
//             { 
//                 label: {
//                     en: "The other person reciprocates with physical affection",
//                     bg: "Другият човек отвръща с физическа обич"
//                 },
//                 value: 'B' 
//             },
//             { 
//                 label: {
//                     en: "The other person is fully engaged and present with me",
//                     bg: "Другият човек е напълно ангажиран и присъстващ с мен"
//                 },
//                 value: 'C' 
//             },
//             { 
//                 label: {
//                     en: "The other person is visibly delighted by a gift I gave",
//                     bg: "Другият човек е видимо зарадван от подарък, който съм дал/а"
//                 },
//                 value: 'D' 
//             },
//             { 
//                 label: {
//                     en: "The other person lights up after something I said",
//                     bg: "Другият човек се осветява след нещо, което съм казал/а"
//                 },
//                 value: 'E' 
//             }
//         ]
//     },
//     {
//         id: 15,
//         text: {
//             en: "The love language I use most instinctively is...",
//             bg: "Езикът на любовта, който използвам най-инстинктивно, е..."
//         },
//         options: [
//             { label: { en: "Acts of Service", bg: "Дела на услуга" }, value: 'A' },
//             { label: { en: "Physical Touch", bg: "Физически контакт" }, value: 'B' },
//             { label: { en: "Quality Time", bg: "Качествено време" }, value: 'C' },
//             { label: { en: "Receiving Gifts", bg: "Даване на подаръци" }, value: 'D' },
//             { label: { en: "Words of Affirmation", bg: "Думи на одобрение" }, value: 'E' }
//         ]
//     }
// ];

// // Section B: Receiving Love (15 questions)
// const RECEIVING_QUESTIONS = [
//     {
//         id: 1,
//         text: {
//             en: "I feel most loved and appreciated when someone...",
//             bg: "Чувствам се най-обичан/а и ценен/а, когато някой..."
//         },
//         options: [
//             { 
//                 label: {
//                     en: "Does something practical to help me out without me asking",
//                     bg: "Направи нещо практично, за да ми помогне, без да го моля"
//                 },
//                 value: 'A' 
//             },
//             { 
//                 label: {
//                     en: "Greets me with a warm, genuine hug",
//                     bg: "Ме посреща с топла, искрена прегръдка"
//                 },
//                 value: 'B' 
//             },
//             { 
//                 label: {
//                     en: "Puts away their phone and actively listens to me",
//                     bg: "Прибере телефона си и активно ме слуша"
//                 },
//                 value: 'C' 
//             },
//             { 
//                 label: {
//                     en: "Gives me a thoughtful, personalized gift",
//                     bg: "Ми даде обмислен, персонализиран подарък"
//                 },
//                 value: 'D' 
//             },
//             { 
//                 label: {
//                     en: "Tells me specifically what they love or admire about me",
//                     bg: "Ми каже конкретно какво обича или възхищава в мен"
//                 },
//                 value: 'E' 
//             }
//         ]
//     },
//     {
//         id: 2,
//         text: {
//             en: "Nothing makes me feel more secure in a relationship than when my partner...",
//             bg: "Нищо не ме кара да се чувствам по-сигурен/на във връзката от това, когато партньорът ми..."
//         },
//         options: [
//             { 
//                 label: {
//                     en: "Consistently follows through on promises and helps with responsibilities",
//                     bg: "Постоянно изпълнява обещанията и помага с отговорностите"
//                 },
//                 value: 'A' 
//             },
//             { 
//                 label: {
//                     en: "Is physically affectionate in small, everyday ways",
//                     bg: "Е физически нежен по малки, всекидневни начини"
//                 },
//                 value: 'B' 
//             },
//             { 
//                 label: {
//                     en: "Makes and keeps plans for one-on-one time with no distractions",
//                     bg: "Прави и спазва планове за време насаме без разсейване"
//                 },
//                 value: 'C' 
//             },
//             { 
//                 label: {
//                     en: "Remembers special occasions with meaningful gifts or gestures",
//                     bg: "Помни специални случаи със значими подаръци или жестове"
//                 },
//                 value: 'D' 
//             },
//             { 
//                 label: {
//                     en: "Regularly expresses their commitment and appreciation verbally",
//                     bg: "Редовно изразява ангажираността и признателността си словесно"
//                 },
//                 value: 'E' 
//             }
//         ]
//     },
//     {
//         id: 3,
//         text: {
//             en: "If I had to choose, I would rather my partner...",
//             bg: "Ако трябваше да избирам, предпочитам партньорът ми да..."
//         },
//         options: [
//             { 
//                 label: {
//                     en: "Wash my car because they knew it was stressing me out",
//                     bg: "Измие колата ми, защото знае, че ме стресира"
//                 },
//                 value: 'A' 
//             },
//             { 
//                 label: {
//                     en: "Hold my hand while we watch a movie",
//                     bg: "Държи ръката ми, докато гледаме филм"
//                 },
//                 value: 'B' 
//             },
//             { 
//                 label: {
//                     en: "Spend an hour talking with me about our dreams",
//                     bg: "Прекара час в разговор с мен за нашите мечти"
//                 },
//                 value: 'C' 
//             },
//             { 
//                 label: {
//                     en: "Surprise me with my favorite book",
//                     bg: "Изненада ме с любимата ми книга"
//                 },
//                 value: 'D' 
//             },
//             { 
//                 label: {
//                     en: "Write me a love note",
//                     bg: "Напише ми любовна бележка"
//                 },
//                 value: 'E' 
//             }
//         ]
//     },
//     {
//         id: 4,
//         text: {
//             en: "I feel deeply cared for when a friend...",
//             bg: "Чувствам се дълбоко загрижени за мен, когато приятел..."
//         },
//         options: [
//             { 
//                 label: {
//                     en: "Offers to help me move or tackle a big project",
//                     bg: "Предложи да помогне с преместване или голям проект"
//                 },
//                 value: 'A' 
//             },
//             { 
//                 label: {
//                     en: "Puts an arm around my shoulder when I'm sad",
//                     bg: "Постави ръка около рамото ми, когато съм тъжен/на"
//                 },
//                 value: 'B' 
//             },
//             { 
//                 label: {
//                     en: "Checks in with a long call to see how I'm really doing",
//                     bg: "Провери с дълго обаждане как наистина съм"
//                 },
//                 value: 'C' 
//             },
//             { 
//                 label: {
//                     en: "Brings me back a souvenir from their trip",
//                     bg: "Донесе ми сувенир от пътуването си"
//                 },
//                 value: 'D' 
//             },
//             { 
//                 label: {
//                     en: "Sends a text out of the blue saying they're grateful for me",
//                     bg: "Изпрати съобщение неочаквано
//                     // 