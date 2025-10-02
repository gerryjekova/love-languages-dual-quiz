// Translations
const TRANSLATIONS = {
    en: {
        'page-title': 'Love Language Duo Quiz: Giving & Receiving Vibes',
        'header-title': '💕 Love Language Duo Quiz 💕',
        'header-subtitle': 'Deep dive: 30 questions exploring how you give and receive love — ranked results await!',
        'intro-title': 'Welcome to the Love Fest!',
        'intro-text': 'This comprehensive quiz (30 questions total) uncovers how you <strong>give</strong> love (first 15) and <strong>receive</strong> it (next 15). Get ranked scores for all 5 languages, plus insights on your ideal partner match.',
        'btn-start': "Let's Dive In! 🚀",
        'giving-title': 'Part 1: How You Give Love 🌟',
        'giving-subtitle': 'Choose the option that best describes your natural way of showing love and appreciation.',
        'receiving-title': 'Part 2: How You Receive Love 💖',
        'receiving-subtitle': 'Choose what makes you feel most loved and valued by others.',
        'btn-next': 'Next Question',
        'results-title': 'Your Love Language Profile! 🎉',
        'results-giving-header': 'How You Give Love',
        'results-receiving-header': 'How You Receive Love',
        'insights-header': '💡 Relationship Insights',
        'btn-retake': 'Take Quiz Again',
        'question-of': 'Question ${current} of 15:',
        'ready-to-start': 'Ready to start!',
        'complete': 'Complete! 🎉',
        'question-progress': 'Question ${current} of ${total}',
        'insight-top-giving': '<strong>Your Top Giving Language:</strong> ${language}<br>You naturally show love through ${languageLower}. This is your instinctive way of expressing care and affection.',
        'insight-top-receiving': '<strong>Your Top Receiving Language:</strong> ${language}<br>You feel most loved when you receive ${languageLower}. This fills your emotional tank.',
        'insight-perfect-symmetry': '<strong>Perfect Symmetry!</strong><br>Your giving and receiving languages match (${language}). You naturally give what you want to receive. Look for partners who also value ${languageLower}, or be patient teaching others how you express love.',
        'insight-golden-rule': '<strong>The Golden Rule vs. The Platinum Rule:</strong><br>You give love through ${givingLower} but receive it best through ${receivingLower}. Remember: your partner might need something different than what you naturally give. The ideal partner gives ${receivingLower} and appreciates receiving ${givingLower}.',
        'insight-tips': '<strong>💡 Relationship Tips:</strong><br>• Communicate your top receiving language (${receiving}) to your partner clearly<br>• Don\'t assume your partner wants the same love language you give (${giving})<br>• Ask your partner to take this quiz too!<br>• The best relationships have partners who intentionally learn each other\'s languages'
    },
    bg: {
        'page-title': 'Тест за Езиците на Любовта: Даване и Получаване',
        'header-title': '💕 Тест за Езиците на Любовта 💕',
        'header-subtitle': 'Задълбочено: 30 въпроса изследват как давате и получавате любов — класирани резултати ви очакват!',
        'intro-title': 'Добре дошли във Фестивала на Любовта!',
        'intro-text': 'Този цялостен тест (30 въпроса общо) разкрива как <strong>давате</strong> любов (първите 15) и <strong>получавате</strong> я (следващите 15). Получете класирани резултати за всичките 5 езика, плюс прозрения за идеалния ви партньор.',
        'btn-start': 'Да започваме! 🚀',
        'giving-title': 'Част 1: Как давате любов 🌟',
        'giving-subtitle': 'Изберете опцията, която най-добре описва естествения ви начин да показвате любов и признателност.',
        'receiving-title': 'Част 2: Как получавате любов 💖',
        'receiving-subtitle': 'Изберете какво ви кара да се чувствате най-обичани и ценени от другите.',
        'btn-next': 'Следващ въпрос',
        'results-title': 'Вашият профил на езиците на любовта! 🎉',
        'results-giving-header': 'Как давате любов',
        'results-receiving-header': 'Как получавате любов',
        'insights-header': '💡 Прозрения за връзките',
        'btn-retake': 'Решете теста отново',
        'question-of': 'Въпрос ${current} от 15:',
        'ready-to-start': 'Готови за старт!',
        'complete': 'Завършено! 🎉',
        'question-progress': 'Въпрос ${current} от ${total}',
        'insight-top-giving': '<strong>Вашият топ език на даване:</strong> ${language}<br>Вие естествено показвате любов чрез ${languageLower}. Това е вашият инстинктивен начин да изразявате грижа и обич.',
        'insight-top-receiving': '<strong>Вашият топ език на получаване:</strong> ${language}<br>Чувствате се най-обичани, когато получавате ${languageLower}. Това пълни вашия емоционален резервоар.',
        'insight-perfect-symmetry': '<strong>Перфектна симетрия!</strong><br>Вашите езици на даване и получаване съвпадат (${language}). Естествено давате това, което искате да получите. Търсете партньори, които също ценят ${languageLower}, или бъдете търпеливи, като учите другите как изразявате любов.',
        'insight-golden-rule': '<strong>Златното правило срещу Платиненото правило:</strong><br>Давате любов чрез ${givingLower}, но я получавате най-добре чрез ${receivingLower}. Помнете: вашият партньор може да се нуждае от нещо различно от това, което естествено давате. Идеалният партньор дава ${receivingLower} и цени да получава ${givingLower}.',
        'insight-tips': '<strong>💡 Съвети за връзки:</strong><br>• Съобщете ясно на партньора си топ езика си на получаване (${receiving})<br>• Не предполагайте, че партньорът ви иска същия език на любовта, който давате (${giving})<br>• Помолете партньора си да направи този тест също!<br>• Най-добрите връзки имат партньори, които съзнателно учат езиците един на друг'
    }
};

// Main Quiz Application
const app = {
    currentSection: 'intro',
    currentQuestionIndex: 0,
    givingAnswers: [],
    receivingAnswers: [],
    currentLanguage: 'en',
    
    // Initialize the app
    init() {
        this.updateProgress();
        // Load saved language preference
        const savedLang = localStorage.getItem('preferredLanguage') || 'en';
        this.setLanguage(savedLang);
    },
    
    // Set language
    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang);
        document.documentElement.lang = lang;
        
        // Update button states
        document.getElementById('lang-en').classList.toggle('active', lang === 'en');
        document.getElementById('lang-bg').classList.toggle('active', lang === 'bg');
        
        // Update all translated elements
        this.updateTranslations();
        
        // Re-render current question if in quiz
        if (this.currentSection === 'giving' || this.currentSection === 'receiving') {
            this.renderQuestion();
        }
        
        // Re-render results if on results page
        if (this.currentSection === 'results') {
            this.showResults();
        }
    },
    
    // Update all translations
    updateTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (TRANSLATIONS[this.currentLanguage][key]) {
                if (el.tagName === 'TITLE') {
                    el.textContent = TRANSLATIONS[this.currentLanguage][key];
                } else {
                    el.innerHTML = TRANSLATIONS[this.currentLanguage][key];
                }
            }
        });
    },
    
    // Start the quiz
    startQuiz() {
        this.currentSection = 'giving';
        this.showSection('givingQuiz');
        this.renderQuestion();
        this.updateProgress();
    },
    
    // Render current question
    renderQuestion() {
        const questions = this.currentSection === 'giving' ? GIVING_QUESTIONS : RECEIVING_QUESTIONS;
        const question = questions[this.currentQuestionIndex];
        const containerId = this.currentSection === 'giving' ? 'givingQuestion' : 'receivingQuestion';
        const container = document.getElementById(containerId);
        
        const questionText = question.text[this.currentLanguage];
        const questionPrefix = TRANSLATIONS[this.currentLanguage]['question-of'].replace('${current}', this.currentQuestionIndex + 1);
        
        let html = `
            <div class="question-card">
                <div class="question-text">
                    ${questionPrefix} ${questionText}
                </div>
                <div class="options">
        `;
        
        question.options.forEach((option, index) => {
            const optionId = `q${question.id}_option${index}`;
            const optionLabel = option.label[this.currentLanguage];
            html += `
                <div class="option" onclick="app.selectOption('${option.value}', this)">
                    <input type="radio" 
                           name="question${question.id}" 
                           id="${optionId}" 
                           value="${option.value}">
                    <label for="${optionId}">${optionLabel}</label>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
        
        container.innerHTML = html;
    },
    
    // Handle option selection
    selectOption(value, element) {
        const allOptions = element.parentElement.querySelectorAll('.option');
        allOptions.forEach(opt => opt.classList.remove('selected'));
        
        element.classList.add('selected');
        
        const radio = element.querySelector('input[type="radio"]');
        radio.checked = true;
        
        this.currentAnswer = value;
        
        const buttonId = this.currentSection === 'giving' ? 'nextGiving' : 'nextReceiving';
        document.getElementById(buttonId).disabled = false;
    },
    
    // Move to next question
    nextQuestion() {
        if (!this.currentAnswer) return;
        
        if (this.currentSection === 'giving') {
            this.givingAnswers.push(this.currentAnswer);
        } else {
            this.receivingAnswers.push(this.currentAnswer);
        }
        
        this.currentAnswer = null;
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex >= 15) {
            if (this.currentSection === 'giving') {
                this.currentSection = 'receiving';
                this.currentQuestionIndex = 0;
                this.showSection('receivingQuiz');
                this.renderQuestion();
                document.getElementById('nextReceiving').disabled = true;
            } else {
                this.showResults();
            }
        } else {
            this.renderQuestion();
            const buttonId = this.currentSection === 'giving' ? 'nextGiving' : 'nextReceiving';
            document.getElementById(buttonId).disabled = true;
        }
        
        this.updateProgress();
    },
    
    // Calculate scores from answers
    calculateScores(answers) {
        const scores = { A: 0, B: 0, C: 0, D: 0, E: 0 };
        answers.forEach(answer => {
            scores[answer]++;
        });
        return scores;
    },
    
    // Sort scores and return ranked array
    getRankedScores(scores) {
        return Object.entries(scores)
            .map(([key, value]) => ({ 
                code: key, 
                name: LOVE_LANGUAGES[key][this.currentLanguage], 
                score: value 
            }))
            .sort((a, b) => b.score - a.score);
    },
    
    // Show results section
    showResults() {
        this.currentSection = 'results';
        this.showSection('results');
        
        const givingScores = this.calculateScores(this.givingAnswers);
        const receivingScores = this.calculateScores(this.receivingAnswers);
        
        const givingRanked = this.getRankedScores(givingScores);
        const receivingRanked = this.getRankedScores(receivingScores);
        
        this.renderScoreBars('givingBars', givingRanked);
        this.renderRankedList('givingRanked', givingRanked);
        
        this.renderScoreBars('receivingBars', receivingRanked);
        this.renderRankedList('receivingRanked', receivingRanked);
        
        this.renderInsights(givingRanked, receivingRanked);
        
        this.updateProgress();
    },
    
    // Render score bars
    renderScoreBars(containerId, rankedScores) {
        const container = document.getElementById(containerId);
        let html = '';
        
        rankedScores.forEach(item => {
            const percentage = (item.score / 15) * 100;
            html += `
                <div class="score-container">
                    <div class="score-label">
                        <span>${item.name}</span>
                        <span>${item.score}/15</span>
                    </div>
                    <div class="score-bar">
                        <div class="score-fill" style="width: ${percentage}%">
                            ${percentage > 20 ? Math.round(percentage) + '%' : ''}
                        </div>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    },
    
    // Render ranked list
    renderRankedList(containerId, rankedScores) {
        const container = document.getElementById(containerId);
        let html = '';
        
        rankedScores.forEach((item, index) => {
            html += `
                <div class="rank-item">
                    <span>
                        <span class="rank-number">#${index + 1}</span>
                        <span class="rank-name">${item.name}</span>
                    </span>
                    <span class="rank-score">${item.score}/15</span>
                </div>
            `;
        });
        
        container.innerHTML = html;
    },
    
    // Generate relationship insights
    renderInsights(givingRanked, receivingRanked) {
        const container = document.getElementById('insights');
        const topGiving = givingRanked[0];
        const topReceiving = receivingRanked[0];
        
        const t = TRANSLATIONS[this.currentLanguage];
        
        let insights = t['insight-top-giving']
            .replace('${language}', topGiving.name)
            .replace('${languageLower}', topGiving.name.toLowerCase());
        
        insights = `<div class="insight">${insights}</div>`;
        
        insights += `<div class="insight">` + t['insight-top-receiving']
            .replace('${language}', topReceiving.name)
            .replace('${languageLower}', topReceiving.name.toLowerCase()) + `</div>`;
        
        if (topGiving.code === topReceiving.code) {
            insights += `<div class="insight">` + t['insight-perfect-symmetry']
                .replace('${language}', topGiving.name)
                .replace('${languageLower}', topGiving.name.toLowerCase()) + `</div>`;
        } else {
            insights += `<div class="insight">` + t['insight-golden-rule']
                .replace('${givingLower}', topGiving.name.toLowerCase())
                .replace('${receivingLower}', topReceiving.name.toLowerCase()) + `</div>`;
        }
        
        insights += `<div class="insight">` + t['insight-tips']
            .replace('${receiving}', topReceiving.name)
            .replace('${giving}', topGiving.name) + `</div>`;
        
        container.innerHTML = insights;
    },
    
    // Show specific section
    showSection(sectionId) {
        document.querySelectorAll('.quiz-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    },
    
    // Update progress bar
    updateProgress() {
        let totalQuestions = 30;
        let completedQuestions = 0;
        
        if (this.currentSection === 'intro') {
            completedQuestions = 0;
        } else if (this.currentSection === 'giving') {
            completedQuestions = this.givingAnswers.length;
        } else if (this.currentSection === 'receiving') {
            completedQuestions = 15 + this.receivingAnswers.length;
        } else if (this.currentSection === 'results') {
            completedQuestions = 30;
        }
        
        const percentage = (completedQuestions / totalQuestions) * 100;
        document.getElementById('progressFill').style.width = percentage + '%';
        
        const t = TRANSLATIONS[this.currentLanguage];
        let stageText = '';
        if (this.currentSection === 'intro') {
            stageText = t['ready-to-start'];
        } else if (this.currentSection === 'results') {
            stageText = t['complete'];
        } else {
            stageText = t['question-progress']
                .replace('${current}', completedQuestions + 1)
                .replace('${total}', totalQuestions);
        }
        
        document.getElementById('stageInfo').textContent = stageText;
    },
    
    // Reset quiz
    resetQuiz() {
        this.currentSection = 'intro';
        this.currentQuestionIndex = 0;
        this.givingAnswers = [];
        this.receivingAnswers = [];
        this.currentAnswer = null;
        
        this.showSection('intro');
        this.updateProgress();
    }
};

// Initialize app when page loads
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});