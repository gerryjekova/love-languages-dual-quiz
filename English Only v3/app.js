// Main Quiz Application
const app = {
    currentSection: 'intro', // 'intro', 'giving', 'receiving', 'results'
    currentQuestionIndex: 0,
    givingAnswers: [],
    receivingAnswers: [],
    
    // Initialize the app
    init() {
        this.updateProgress();
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
        
        let html = `
            <div class="question-card">
                <div class="question-text">
                    Question ${this.currentQuestionIndex + 1} of 15: ${question.text}
                </div>
                <div class="options">
        `;
        
        question.options.forEach((option, index) => {
            const optionId = `q${question.id}_option${index}`;
            html += `
                <div class="option" onclick="app.selectOption('${option.value}', this)">
                    <input type="radio" 
                           name="question${question.id}" 
                           id="${optionId}" 
                           value="${option.value}">
                    <label for="${optionId}">${option.label}</label>
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
        // Remove previous selections
        const allOptions = element.parentElement.querySelectorAll('.option');
        allOptions.forEach(opt => opt.classList.remove('selected'));
        
        // Mark this option as selected
        element.classList.add('selected');
        
        // Check the radio button
        const radio = element.querySelector('input[type="radio"]');
        radio.checked = true;
        
        // Store the answer
        this.currentAnswer = value;
        
        // Enable the next button
        const buttonId = this.currentSection === 'giving' ? 'nextGiving' : 'nextReceiving';
        document.getElementById(buttonId).disabled = false;
    },
    
    // Move to next question
    nextQuestion() {
        if (!this.currentAnswer) return;
        
        // Save the answer
        if (this.currentSection === 'giving') {
            this.givingAnswers.push(this.currentAnswer);
        } else {
            this.receivingAnswers.push(this.currentAnswer);
        }
        
        this.currentAnswer = null;
        this.currentQuestionIndex++;
        
        // Check if section is complete
        if (this.currentQuestionIndex >= 15) {
            if (this.currentSection === 'giving') {
                // Move to receiving section
                this.currentSection = 'receiving';
                this.currentQuestionIndex = 0;
                this.showSection('receivingQuiz');
                this.renderQuestion();
                document.getElementById('nextReceiving').disabled = true;
            } else {
                // Show results
                this.showResults();
            }
        } else {
            // Render next question
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
                name: LOVE_LANGUAGES[key], 
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
        
        // Render giving scores
        this.renderScoreBars('givingBars', givingRanked);
        this.renderRankedList('givingRanked', givingRanked);
        
        // Render receiving scores
        this.renderScoreBars('receivingBars', receivingRanked);
        this.renderRankedList('receivingRanked', receivingRanked);
        
        // Generate insights
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
        
        let insights = `
            <div class="insight">
                <strong>Your Top Giving Language:</strong> ${topGiving.name}<br>
                You naturally show love through ${topGiving.name.toLowerCase()}. This is your instinctive way of expressing care and affection.
            </div>
            <div class="insight">
                <strong>Your Top Receiving Language:</strong> ${topReceiving.name}<br>
                You feel most loved when you receive ${topReceiving.name.toLowerCase()}. This fills your emotional tank.
            </div>
        `;
        
        // Add matching insight
        if (topGiving.code === topReceiving.code) {
            insights += `
                <div class="insight">
                    <strong>Perfect Symmetry!</strong><br>
                    Your giving and receiving languages match (${topGiving.name}). You naturally give what you want to receive. 
                    Look for partners who also value ${topGiving.name.toLowerCase()}, or be patient teaching others how you express love.
                </div>
            `;
        } else {
            insights += `
                <div class="insight">
                    <strong>The Golden Rule vs. The Platinum Rule:</strong><br>
                    You give love through ${topGiving.name.toLowerCase()} but receive it best through ${topReceiving.name.toLowerCase()}. 
                    Remember: your partner might need something different than what you naturally give. The ideal partner gives ${topReceiving.name.toLowerCase()} 
                    and appreciates receiving ${topGiving.name.toLowerCase()}.
                </div>
            `;
        }
        
        // Add compatibility tips
        insights += `
            <div class="insight">
                <strong>💡 Relationship Tips:</strong><br>
                • Communicate your top receiving language (${topReceiving.name}) to your partner clearly<br>
                • Don't assume your partner wants the same love language you give (${topGiving.name})<br>
                • Ask your partner to take this quiz too!<br>
                • The best relationships have partners who intentionally learn each other's languages
            </div>
        `;
        
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
        
        let stageText = '';
        if (this.currentSection === 'intro') {
            stageText = 'Ready to start!';
        } else if (this.currentSection === 'results') {
            stageText = 'Complete! 🎉';
        } else {
            stageText = `Question ${completedQuestions + 1} of ${totalQuestions}`;
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