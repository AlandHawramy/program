const APP_VERSION = 'v12_multiuser'; // Updated version for multi-user structure

// Base keys for localStorage. The current user's ID will be appended to these.
const BASE_LS_PARTICIPANTS = `competitionParticipants_${APP_VERSION}`;
const BASE_LS_COMP_DATA = `competitionFullData_${APP_VERSION}`;
const BASE_LS_ACTIVITY_DETAILS = `competitionActivityDetails_${APP_VERSION}`;
const BASE_LS_ACTIVE_TAB = `activeCompetitionTab_${APP_VERSION}`;
const BASE_LS_BOOK_CATEGORIES = `competitionBookCategories_${APP_VERSION}`;
const BASE_LS_MASTER_BOOKS = `competitionMasterBooks_${APP_VERSION}`;
const SESSION_STORAGE_USER = `currentUser_${APP_VERSION}`;

// Predefined users and passwords. In a real app, this should NOT be in the frontend code.
const USERS = {
    qazi: { password: '123', displayName: 'ناوشار' },
   
    
};

const initialMasterBooksData = [
    { title: 'مرۆڤ و ڕەهەندی ناوەکییەکان', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'سەرکەوتنی ڕۆح', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'وەرزی تاقیکرنەوە', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'ئاسۆکانی هیوا', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'ئاوێنەیەکی نەوەیەکی نموونەی', author: 'کەریم کێکسین' }, { title: 'تابلۆی نەوەیەکی چاوەڕوان نەکراو', author: 'کەریم کێکسین' },
    { title: 'پۆرترێتی نەوەیەکی خاوەن بەها', author: 'کەریم کێکسین' }, { title: 'نووری نەمر - ١', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'نووری نەمر - ٢', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'نووری نەمر - ٣', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'نووری نەمر - ٤', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'نووری نەمر - ٥', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'نووری نەمر - ٦', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'ژیانی خێزانیی پێغەمبەر', author: 'ڕەشد هایڵمەز' },
    { title: 'حەج', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'زەکات', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'نوێژ', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'ڕۆژوو', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'هێڵی ڕاستڕەوی', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'لاوە پێشەنگەکە', author: 'ئیسماعیل گۆکچە' },
    { title: 'لە سێبەری باوەڕدا - ١', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'لە سێبەری باوەڕدا - ٢', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'لە سێبەری باوەڕدا - ٣', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'گۆزەی شکاو', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'سوحبەتی جانان', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'ڕامانێک لە سوورەتی فاتیحە', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'تەپۆلکە زومریتییەکانی دڵ - ١', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'تەپۆلکە زومریتییەکانی دڵ - ٢', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'تەپۆلکە زومریتییەکانی دڵ - ٣', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'تەپۆلکە زومریتییەکانی دڵ - ٤', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'تەپۆلکە زومریتییەکانی دڵ - ٥', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'ئاوێزە', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'هەناسەکانی دڵ', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'هەرێمی زێڕینی قورئان - ١', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'هەرێمی زێڕینی قورئان - ٢', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'تیشکە قورئانیەکان  - ١', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'تیشکە قورئانیەکان  - ٢', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'غەیبەت بەڵای گەورەی زمان', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'بەڵگەکانی ژیانی دواڕۆژ', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'پێوەر یان ڕووناکیەکانی ڕێگا', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'پێگەی ئاشتی لە قورئاندا', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'خولگەی بانگەواز', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'وەڵامدانەوەی پرسیارە سەروەریەکان - ١', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'وەڵامدانەوەی پرسیارە سەروەریەکان - ٢', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'وەڵامدانەوەی پرسیارە سەروەریەکان - ٣', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'بەرهەمەکانی  پەرستش', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'ڕاستی بەدیهێنان و تیۆری پەرەسەندن', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'ڕۆژهەڵات ڕۆژئاوا و ئیسلام', author: 'عەلی عیززەت بیگۆڤیچ' },
    { title: 'لە ناوکەوە تا چنار', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'فەتحەڵا گولەن', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'سەرجەم پەیامەکانی نوور - وتــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــەکان ١', author: 'سەعیدی نوورسی' },
    { title: 'سەرجەم پەیامەکانی نوور - مـــــــــــــــــــــــــــــــــــــــەکتووبات ٢', author: 'سەعیدی نوورسی' },
    { title: 'سەرجەم پەیامەکانی نوور  - بریســـــــــــــــــــــــــــــــــــــــکەکان ٣', author: 'سەعیدی نوورسی' },
    { title: 'سەرجەم پەیامەکانی نوور - تیشـــــــــــــــــــــــــــــــــــــــــــــــــکەکان ٤', author: 'سەعیدی نوورسی' },
    { title: 'سەرجەم پەیامەکانی نوور - پـــــــــــــــــــــــــــــــــاشبەندەکان ٥', author: 'سەعیدی نوورسی' },
    { title: 'سەرجەم پەیامەکانی نوور  - داوەریــــــــــــــــــــــــــــــــــــــــــەکان ٦', author: 'سەعیدی نوورسی' },
    { title: 'سەرجەم پەیامەکانی نوور - ئــاماژەکانی ئیعجاز ٧', author: 'سەعیدی نوورسی' },
    { title: 'سەرجەم پەیامەکانی نوور - مەسنەویی نووری ٨', author: 'سەعیدی نوورسی' },
    { title: 'سەرجەم پەیامەکانی نوور - ژیــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــاننامە ٩', author: 'سەعیدی نوورسی' },
    { title: 'پارچە ئاڵتوونیەکانی کات', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'گەڕانەوەی شاسوارەکان', author: 'فریدا الانضاري' },
    { title: 'حەزرەتی محمد خۆزی ڕەحمەت', author: 'ڕەشید هایڵمەز' }, { title: 'ڕەهەندی مێتافیزیکی', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'دواین شاسوار', author: 'فریدا الانضاري' }, { title: 'کاتێک پەیکەری ڕۆحمان بنیاد دەنێین', author: 'محمد فەتحوڵڵا گولەن' },
    { title: 'خەونێکی خاپور و خولیایەکی ئاوەدان', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'کورتە ژیاننامەی بەدلیعوززەمان', author: 'ئەمرە ئەردەن' },
    { title: 'چۆن پاکیزەیی چاوم بپارێزم', author: 'محمد یوسف گوڤەن' }, { title: 'بینینەکانی گەشتیارێک', author: 'سەعیدی نوورسی' },
    { title: 'گوڵستانی چیرۆک', author: 'کەمال توران' }, { title: 'دەریای چیرۆک', author: 'محمد ئاکار' },
    { title: 'سەدەی بەختەوەری', author: 'پ. د. حوسەین ئاڵگۆڵ' }, { title: 'ڕاز', author: 'ڕۆندا بێرن' },
    { title: '٨٠ ڕۆژ گەشت بە دەوری دونیادا', author: 'ژول ڤێرن' }, { title: 'نزای سەحەر', author: 'هێمن محم علی' },
    { title: 'پێغەمبەری چاوەڕوان نەکراوە', author: 'محمد فەتحوڵڵا گولەن' }, { title: 'کاتت ژیانتە', author: 'محمد علی قەرەداغی' },
    { title: 'قەزا و قەدەر', author: 'پ. د. عەلائەددین باشا' }, { title: 'من', author: 'سەعیدی نوورسی' },
    { title: 'سروشت', author: 'سەعیدی نوورسی' }, { title: 'ئیجتیهاد لەم سەردەمەدا', author: 'سەعیدی نوورسی' },
    { title: 'کلیلێک بۆ جیهانی نوور', author: 'سەعیدی نوورسی' }, { title: 'مەلائیکەت و ژیانی دواڕۆژ', author: 'سەعیدی نوورسی' },
    { title: 'تەوحید', author: 'سەعیدی نوورسی' }, { title: 'حیکمەت و خۆپەنادان لە شەیتان', author: 'سەعیدی نوورسی' },
    { title: 'یەکەم دەروازەی نوور', author: 'سەعیدی نوورسی' }, { title: 'بیرکردنەوەی ئیمانی بەرز', author: 'سەعیدی نوورسی' },
    { title: 'ڕاستیەکانی ئیمان', author: 'سەعیدی نوورسی' }, { title: 'مرۆڤ و ئیمان', author: 'سەعیدی نوورسی' },
    { title: 'پەنجەرەکان', author: 'سەعیدی نوورسی' }, { title: 'ڕاستی تەوحید', author: 'سەعیدی نوورسی' },
    { title: 'مونازەراوت', author: 'سەعیدی نوورسی' }, { title: 'نوورەکانی حەقیقەت', author: 'سەعیدی نوورسی' },
    { title: 'شوکرانە بژێری', author: 'سەعیدی نوورسی' }, { title: 'گزنگەکان ئاماژەکان هێماکان', author: 'سەعیدی نوورسی' },
    { title: 'وتاری شـــام', author: 'سەعیدی نوورسی' }, { title: 'وتە بچووکەکان', author: 'سەعیدی نوورسی' },
    { title: 'میعراجی پێغەمبەر', author: 'سەعیدی نوورسی' }, { title: 'وانەکانی نوور بۆ لاوان - ١', author: 'سەید نوورفەتحی ئەرکاڵ' },
    { title: 'وانەکانی نوور بۆ لاوان - ٢', author: 'سەید نوورفەتحی ئەرکاڵ' }
].map((book, index) => ({ ...book, id: Date.now() + index, title: book.title.trim(), author: book.author.trim() }));


function globalCompetitionState() {
    return {
        // --- Login and State Management ---
        isAuthenticated: false,
        currentUser: null,
        selectedUser: 'qazi', // Default selected user in dropdown
        passwordInput: '',
         passwordVisible: false,
        loginError: '',

        // --- UI State ---
        activeTab: 'dashboard', 
        mobileMenuOpen: false, 
        isConfirmOpen: false, 
        confirmMessage: '', 
        confirmCallback: null, 
        isToastVisible: false, 
        toastMessage: '', 
        toastType: 'success', 
        toastTimeout: null,
        
        // --- Application Data (will be loaded per user) ---
        participants: [],
        competitionData: [],
        activityDetails: {},
        bookCategories: {},
        masterBooks: [],

        // Helper to get the display name of the current user
        get currentUserDisplayName() {
            return this.currentUser ? USERS[this.currentUser].displayName : '';
        },

        // Generates user-specific localStorage keys
        getStorageKey(baseKey) {
            if (!this.currentUser) return null; // Can't get key without a user
            return `${baseKey}_${this.currentUser}`;
        },

        // 1. Initializer: Runs on page load to check for a logged-in session
        initApp() {
            const sessionUser = sessionStorage.getItem(SESSION_STORAGE_USER);
            if (sessionUser && USERS[sessionUser]) {
                this.currentUser = sessionUser;
                this.isAuthenticated = true;
                this.loadDataForCurrentUser();
            }
        },

        // 2. Login Handler
        handleLogin() {
            const user = USERS[this.selectedUser];
            if (user && user.password === this.passwordInput) {
                this.loginError = '';
                this.passwordInput = '';
                this.currentUser = this.selectedUser;
                this.isAuthenticated = true;
                sessionStorage.setItem(SESSION_STORAGE_USER, this.currentUser);
                this.loadDataForCurrentUser();
            } else {
                this.loginError = 'ناوی بەکارهێنەر یان وشەی نهێنی هەڵەیە.';
            }
        },

        // 3. Logout Handler
        handleLogout() {
            sessionStorage.removeItem(SESSION_STORAGE_USER);
            window.location.reload();
        },
        
        // 4. Data Loader: Loads all data for the currently logged-in user
        loadDataForCurrentUser() {
            if (!this.currentUser) return;
            console.log(`Loading data for user: ${this.currentUser}`);
            
            // --- Reset and Define Default Structures ---
            this.activityDetails = {
                'shawnwezh': { nameKurdish: 'شەونوێژ', inputType: 'number', unit: 'ڕکات', unitSingular: 'ڕکات', pointsPerUnit: 2 },
                'quran': { nameKurdish: 'قورئان', inputType: 'number', unit: 'لاپەڕە', unitSingular: 'لاپەڕە', pointsPerUnit: 2 },
                'sunnat': { nameKurdish: 'سونەتی نوێژەکان', inputType: 'number', unit: 'ڕکات', unitSingular: 'ڕکات', pointsPerUnit: 1 },
                'zuha': { nameKurdish: 'نوێژی زوحا', inputType: 'number', unit: 'ڕکات', unitSingular: 'ڕکات', pointsPerUnit: 3 },
                'adhkar': { nameKurdish: 'زیکری بەیانی و ئێوارە', inputType: 'number', unit: 'جار', unitSingular: 'جار', pointsPerUnit: 1 },
                'reading': { nameKurdish: 'کتێب خوێندنەوە', inputType: 'book_log', unit: 'لاپەڕە', unitSingular: 'لاپەڕە', pointsPerUnit: 0 },
                'salawat': { nameKurdish: 'سەلاوات', inputType: 'number', unit: 'جار', unitSingular: 'جار', pointsPerUnit: 0.01 },
            };
            this.bookCategories = {
                'rasail':           { name: 'کتێبەکانی ڕەسائیل', pointsPerPage: 2 },
                'm_fathulla':       { name: 'کتێبەکانی م. فەتحوڵا', pointsPerPage: 1.5 },
                'small_rasail':     { name: 'ڕەسائیلە بچووکەکان', pointsPerPage: 1.5 },
                'general_religious':{ name: 'کتێبی ئاینی گشتی', pointsPerPage: 1.25 },
                'other':            { name: 'کتێبی دیکە (ڕۆمان، هتد)', pointsPerPage: 1 }
            };

            this.setActiveTab(localStorage.getItem(this.getStorageKey(BASE_LS_ACTIVE_TAB)) || 'dashboard');
            
            const storedParticipants = localStorage.getItem(this.getStorageKey(BASE_LS_PARTICIPANTS));
            this.participants = storedParticipants ? JSON.parse(storedParticipants) : [];

            const storedCompetitionData = localStorage.getItem(this.getStorageKey(BASE_LS_COMP_DATA));
            this.competitionData = storedCompetitionData ? JSON.parse(storedCompetitionData) : [];

            const storedActivityDetails = localStorage.getItem(this.getStorageKey(BASE_LS_ACTIVITY_DETAILS));
            if (storedActivityDetails) {
                 const loadedDetails = JSON.parse(storedActivityDetails);
                 Object.keys(this.activityDetails).forEach(key => {
                     if (loadedDetails[key] !== undefined && typeof loadedDetails[key].pointsPerUnit === 'number') {
                         this.activityDetails[key].pointsPerUnit = loadedDetails[key].pointsPerUnit;
                     }
                 });
            }

            const storedBookCategories = localStorage.getItem(this.getStorageKey(BASE_LS_BOOK_CATEGORIES));
            if (storedBookCategories) {
                 const loadedCategories = JSON.parse(storedBookCategories);
                 Object.keys(this.bookCategories).forEach(key => {
                     if (loadedCategories[key] !== undefined && typeof loadedCategories[key].pointsPerPage === 'number') {
                         this.bookCategories[key].pointsPerPage = loadedCategories[key].pointsPerPage;
                     }
                 });
            }

            const storedMasterBooks = localStorage.getItem(this.getStorageKey(BASE_LS_MASTER_BOOKS));
            this.masterBooks = storedMasterBooks ? JSON.parse(storedMasterBooks).map(b => ({...b, id: b.id || Date.now() + Math.random() })) : initialMasterBooksData;


            this.ensureCompetitionDataStructure();
            this.recalculateAllResultsAndPoints();
            this.saveDataToLocalStorage();
        },

        // 5. Data Saver: Saves all data for the currently logged-in user
        saveDataToLocalStorage() {
            if (!this.currentUser) return;
            
            localStorage.setItem(this.getStorageKey(BASE_LS_PARTICIPANTS), JSON.stringify(this.participants));
            localStorage.setItem(this.getStorageKey(BASE_LS_COMP_DATA), JSON.stringify(this.competitionData));
            localStorage.setItem(this.getStorageKey(BASE_LS_MASTER_BOOKS), JSON.stringify(this.masterBooks));
            
            const activityPointsToSave = Object.keys(this.activityDetails).reduce((obj, key) => {
                obj[key] = { pointsPerUnit: this.activityDetails[key].pointsPerUnit };
                return obj;
            }, {});
            localStorage.setItem(this.getStorageKey(BASE_LS_ACTIVITY_DETAILS), JSON.stringify(activityPointsToSave));

            const bookCategoryPointsToSave = Object.keys(this.bookCategories).reduce((obj, key) => {
                obj[key] = { pointsPerPage: this.bookCategories[key].pointsPerPage };
                return obj;
            }, {});
            localStorage.setItem(this.getStorageKey(BASE_LS_BOOK_CATEGORIES), JSON.stringify(bookCategoryPointsToSave));

            this.recalculateAllResultsAndPoints();
            console.log(`Data saved for user: ${this.currentUser}`);
        },

        setActiveTab(tabId) {
            this.activeTab = tabId;
            this.mobileMenuOpen = false;
            document.querySelector('.content-area')?.scrollTo(0, 0);
            if (this.currentUser) {
                localStorage.setItem(this.getStorageKey(BASE_LS_ACTIVE_TAB), tabId);
            }
        },
        
        ensureCompetitionDataStructure() {
            const newCompetitionData = [];
            this.participants.forEach(p => {
                let participantEntry = this.competitionData.find(cd => cd.participantId === p.id);

                if (!participantEntry) {
                    participantEntry = { participantId: p.id, activities: {} };
                }

                participantEntry.participantName = p.name;

                Object.keys(this.activityDetails).forEach(actKey => {
                    if (!participantEntry.activities[actKey]) {
                        participantEntry.activities[actKey] = { dailyEntries: actKey === 'reading' ? [] : Array(15).fill(0), calculatedResult: 0 };
                    } else {
                        if (actKey === 'reading') {
                            participantEntry.activities[actKey].dailyEntries = (participantEntry.activities[actKey].dailyEntries || [])
                                .map(entry => ({
                                    id: entry.id || Date.now() + Math.random(),
                                    day: Number(entry.day) || 1,
                                    categoryKey: entry.categoryKey || 'other',
                                    bookTitle: entry.bookTitle || 'Unknown Book',
                                    pagesRead: Number(entry.pagesRead) || 0
                                }));
                             participantEntry.activities[actKey].dailyEntries = participantEntry.activities[actKey].dailyEntries.filter(entry => entry.day >= 1 && entry.day <= 15 && entry.pagesRead >= 0);
                        } else {
                            let entries = participantEntry.activities[actKey].dailyEntries || [];
                            participantEntry.activities[actKey].dailyEntries = Array.from({ length: 15 }, (_, i) => Number(entries[i]) || 0);
                            participantEntry.activities[actKey].dailyEntries = participantEntry.activities[actKey].dailyEntries.map(val => val >= 0 ? val : 0);
                        }
                    }
                });
                Object.keys(participantEntry.activities).forEach(actKey => {
                    if (!this.activityDetails.hasOwnProperty(actKey)) {
                        delete participantEntry.activities[actKey];
                    }
                });
                newCompetitionData.push(participantEntry);
            });
            this.competitionData = newCompetitionData.filter(cd => this.participants.some(p => p.id === cd.participantId));
        },

        recalculateAllResultsAndPoints() {
            this.competitionData.forEach(pd => {
                let totalPoints = 0;
                Object.keys(this.activityDetails).forEach(actKey => {
                    const activityData = pd.activities ? pd.activities[actKey] : null;
                    if (activityData) {
                        if (actKey === 'reading') {
                            activityData.calculatedResult = (activityData.dailyEntries || []).reduce((sum, entry) => sum + (Number(entry.pagesRead) || 0), 0);
                        } else {
                            activityData.calculatedResult = (activityData.dailyEntries || []).reduce((sum, val) => sum + (Number(val) || 0), 0);
                        }
                        const activityPoints = this.calculatePointsForActivity(actKey, pd.participantId);
                        totalPoints += activityPoints;
                    }
                });
                pd.totalPoints = Math.round(totalPoints * 1000) / 1000;
            });
        },

        calculatePointsForActivity(activityKey, participantId) {
            const participantCompData = this.competitionData.find(cd => cd.participantId === participantId);
            if (!participantCompData || !participantCompData.activities || !participantCompData.activities[activityKey]) {
                return 0;
            }
            const activityData = participantCompData.activities[activityKey];
            const activityConfig = this.activityDetails[activityKey];

            if (activityKey === 'reading') {
                let totalPoints = 0;
                (activityData.dailyEntries || []).forEach(entry => {
                     const categoryConfig = this.bookCategories[entry.categoryKey];
                    if (categoryConfig) {
                        totalPoints += (Number(entry.pagesRead) || 0) * (Number(categoryConfig.pointsPerPage) || 0);
                    } else {
                         const otherCategory = this.bookCategories['other'];
                         if(otherCategory) {
                             totalPoints += (Number(entry.pagesRead) || 0) * (Number(otherCategory.pointsPerPage) || 0);
                         }
                    }
                });
                return Math.round(totalPoints * 1000) / 1000;
            } else {
                const points = (Number(activityData.calculatedResult) || 0) * (Number(activityConfig.pointsPerUnit) || 0);
                return Math.round(points * 1000) / 1000;
            }
        },

        showConfirm(message, callback) { this.confirmMessage = message || 'دڵنیایت لەم کارە؟'; this.confirmCallback = callback; this.isConfirmOpen = true; },
        cancelConfirm() { this.isConfirmOpen = false; this.confirmCallback = null; },
        executeConfirm() { if (typeof this.confirmCallback === 'function') this.confirmCallback(); this.isConfirmOpen = false; this.confirmCallback = null; },
        showToast(message, type = 'success') { this.toastMessage = message; this.toastType = ['success', 'error', 'warning'].includes(type) ? type : 'success'; this.isToastVisible = true; clearTimeout(this.toastTimeout); this.toastTimeout = setTimeout(() => { this.isToastVisible = false; }, 4000); },
        
        downloadData() {
            if (!this.currentUser) return;
            const dataToSave = {
                participants: this.participants,
                competitionData: this.competitionData,
                activityDetails: Object.keys(this.activityDetails).reduce((obj, key) => { obj[key] = { pointsPerUnit: this.activityDetails[key].pointsPerUnit }; return obj; }, {}),
                 bookCategories: Object.keys(this.bookCategories).reduce((obj, key) => { obj[key] = { pointsPerPage: this.bookCategories[key].pointsPerPage }; return obj; }, {}),
                masterBooks: this.masterBooks
            };
            const jsonData = JSON.stringify(dataToSave, null, 2);
            const blob = new Blob([jsonData], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `competition_data_${this.currentUser}_${new Date().toISOString().slice(0,10)}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            this.showToast('داتا بە سەرکەوتوویی دابەزێنرا (JSON).');
        },

        uploadData(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const loadedData = JSON.parse(e.target.result);
                    if (loadedData.participants && loadedData.competitionData) {
                        this.participants = loadedData.participants;
                        this.competitionData = loadedData.competitionData;
                        if(loadedData.activityDetails) {
                            Object.keys(this.activityDetails).forEach(key => {
                                if (loadedData.activityDetails[key] !== undefined) { this.activityDetails[key].pointsPerUnit = loadedData.activityDetails[key].pointsPerUnit; }
                            });
                        }
                        if(loadedData.bookCategories) {
                             Object.keys(this.bookCategories).forEach(key => {
                                 if (loadedData.bookCategories[key] !== undefined) { this.bookCategories[key].pointsPerPage = loadedData.bookCategories[key].pointsPerPage; }
                             });
                        }
                        this.masterBooks = loadedData.masterBooks || initialMasterBooksData;
                        this.ensureCompetitionDataStructure();
                        this.saveDataToLocalStorage();
                        this.showToast(`داتا بۆ بەکارهێنەر '${this.currentUserDisplayName}' بەسەرکەوتوویی بارکرا.`);
                        this.setActiveTab('dashboard');
                    } else {
                        this.showToast('فایلی JSONـەکە پێکهاتەی پێشبینی کراوی تێدا نییە.', 'error');
                    }
                } catch (err) {
                    this.showToast('هەڵەیەک ڕوویدا لە کاتی شیکردنەوەی فایلی JSON.', 'error');
                }
            };
            reader.readAsText(file);
            event.target.value = null;
        }
    }
}

function participantManager() {
    const appStore = Alpine.store('app');
    return {
        searchTerm: '', currentView: 'list', editingParticipant: { id: null, name: '' },
        get filteredParticipants() {
            const term = this.searchTerm.toLowerCase();
            let participants = [...appStore.participants];
            if (term) { participants = participants.filter(p => p.name && p.name.toLowerCase().includes(term)); }
            return participants.sort((a,b) => (a.name || '').localeCompare((b.name || ''), 'ku'));
        },
        resetEditingParticipant() { this.editingParticipant = { id: null, name: '' }; },
        showList() { this.currentView = 'list'; this.resetEditingParticipant(); },
        showAddForm() { this.resetEditingParticipant(); this.currentView = 'form'; this.$nextTick(() => document.getElementById('participant-name')?.focus()); },
        showEditForm(participant) { this.editingParticipant = JSON.parse(JSON.stringify(participant)); this.currentView = 'form'; this.$nextTick(() => document.getElementById('participant-name')?.focus()); },
        saveParticipant() {
            if (!this.editingParticipant.name.trim()) { appStore.showToast('تکایە ناوی بەشداربوو بنووسە.', 'error'); return; }
            let message = '';
            const participantName = this.editingParticipant.name.trim();
            const existingParticipant = appStore.participants.find(p => p.name && p.name.toLowerCase() === participantName.toLowerCase() && p.id !== this.editingParticipant.id);
            if (existingParticipant) { appStore.showToast(`بەشداربووێک بە هەمان ناو "${participantName}" پێشتر هەیە.`, 'warning'); return; }
            if (this.editingParticipant.id) {
                const index = appStore.participants.findIndex(p => p.id === this.editingParticipant.id);
                if (index !== -1) {
                    appStore.participants[index].name = participantName;
                    appStore.competitionData.forEach(cd => { if(cd.participantId === this.editingParticipant.id) { cd.participantName = participantName; } });
                    message = `ناوی بەشداربوو "${participantName}" نوێکرایەوە.`;
                }
            } else {
                const newId = Date.now();
                appStore.participants.push({ id: newId, name: participantName });
                message = `بەشداربوو "${participantName}" زیادکرا.`;
            }
            appStore.ensureCompetitionDataStructure();
            appStore.saveDataToLocalStorage();
            appStore.showToast(message);
            this.showList();
        },
        confirmDeleteParticipant(id, name) {
            appStore.showConfirm(`دڵنیایت لە سڕینەوەی بەشداربوو: "${name}"؟ هەموو داتاکانیشی دەسڕدرێتەوە.`, () => { this.deleteParticipant(id, name); });
        },
        deleteParticipant(id, name) {
            appStore.participants = appStore.participants.filter(p => p.id !== id);
            appStore.competitionData = appStore.competitionData.filter(cd => cd.participantId !== id);
            appStore.saveDataToLocalStorage();
            appStore.showToast(`بەشداربوو "${name}" سڕدرایەوە.`);
            if (this.currentView === 'form' && this.editingParticipant.id === id) { this.showList(); }
        }
    }
}

function bookCategoryPointsManager() {
    const appStore = Alpine.store('app');
    return {
        editablePoints: {},
        init() {
            if (!this.currentActivityDetails) {
        console.error(`Activity key "${this.activityKey}" not found in appStore.activityDetails.`);
        return; // Stop initialization if activity is not defined
    }
    if (this.activityKey !== 'reading') {
        this.pointsPerUnitInput = this.currentActivityDetails.pointsPerUnit;
        this.$watch('$store.app.activityDetails[this.activityKey].pointsPerUnit', (newValue) => {
            this.pointsPerUnitInput = newValue;
        });
    } else {
        this.pointsPerUnitInput = 0;
    } 
        },
        updateEditablePoints() {
            this.editablePoints = {};
            for (const key in appStore.bookCategories) {
                if (appStore.bookCategories.hasOwnProperty(key)) { this.editablePoints[key] = appStore.bookCategories[key].pointsPerPage; }
            }
        },
        saveCategoryPoints() {
            let allValid = true;
            for (const key in this.editablePoints) {
                if (this.editablePoints.hasOwnProperty(key)) {
                    const categoryName = appStore.bookCategories[key]?.name || key;
                    const points = parseFloat(this.editablePoints[key]);
                    if (isNaN(points) || points < 0) {
                        appStore.showToast(`بڕێکی نادروست بۆ "${categoryName}" داخڵکراوە.`, 'error');
                        allValid = false;
                        if(appStore.bookCategories[key]) { this.editablePoints[key] = appStore.bookCategories[key].pointsPerPage; }
                        else { this.editablePoints[key] = 0; }
                    }
                }
            }
            if (!allValid) { return; }
            for (const key in this.editablePoints) {
                 if (appStore.bookCategories.hasOwnProperty(key) && this.editablePoints.hasOwnProperty(key)) {
                    appStore.bookCategories[key].pointsPerPage = parseFloat(this.editablePoints[key]);
                 }
            }
            appStore.saveDataToLocalStorage();
            appStore.showToast('پۆینتی پۆلەکانی کتێب بە سەرکەوتوویی نوێکرایەوە.');
        }
    };
}

function activityManager(activityKey) {
    const appStore = Alpine.store('app');
    return {
        activityKey: activityKey, searchTerm: '',
        get currentActivityDetails() { return appStore.activityDetails[this.activityKey]; },
        pointsPerUnitInput: appStore.activityDetails[activityKey] ? appStore.activityDetails[activityKey].pointsPerUnit : 0,
        isDailyEntryModalOpen: false, editingParticipantId: null, currentDailyEntries: Array(15).fill(0),
        isBookModalOpen: false, editingBookParticipantId: null, currentBookLog: [], newBookEntry: { id: null, day: null, categoryKey: 'other', bookTitle: '', pagesRead: null }, editingBookEntryIndex: null, bookSuggestions: [], showSuggestions: false,
        init() {
            if (!this.currentActivityDetails) { return; }
            if (this.activityKey !== 'reading') {
                this.pointsPerUnitInput = this.currentActivityDetails.pointsPerUnit;
                this.$watch('$store.app.activityDetails[this.activityKey].pointsPerUnit', (newValue) => { this.pointsPerUnitInput = newValue; });
            } else { this.pointsPerUnitInput = 0; }
        },
        get participantsWithActivityData() {
            if (!this.currentActivityDetails) return [];
            return appStore.participants.map(p => {
                const participantCompData = appStore.competitionData.find(cd => cd.participantId === p.id);
                const activityRecord = participantCompData && participantCompData.activities ? participantCompData.activities[this.activityKey] : null;
                let calculatedResult = activityRecord ? (activityRecord.calculatedResult || 0) : 0;
                return { ...p, calculatedResult: calculatedResult };
            }).sort((a,b) => (a.name || '').localeCompare((b.name || ''), 'ku'));
        },
        
        get sortedBookLog() {
            if (!Array.isArray(this.currentBookLog)) return [];
            return [...this.currentBookLog].sort((a, b) => {
                const dayA = Number(a.day) || 0; const dayB = Number(b.day) || 0;
                if(dayA === dayB) { return (a.id || 0) - (b.id || 0); }
                return dayA - dayB;
            });
        },
        getParticipantNameById(participantId) { return appStore.participants.find(p => p.id === participantId)?.name || 'نەناسراو'; },
        getMaxForDailyEntry(actKeyToCheck) {
             if (actKeyToCheck === 'adhkar') return 2; if (actKeyToCheck === 'sunnat') return 20; if (actKeyToCheck === 'zuha') return 13;
             return null;
        },
        openDailyEntryModal(participantData) {
            this.isDailyEntryModalOpen = false; this.isBookModalOpen = false;
            if (this.activityKey === 'reading') {
                this.editingBookParticipantId = participantData.id;
                const participantCompData = appStore.competitionData.find(cd => cd.participantId === participantData.id);
                this.currentBookLog = participantCompData?.activities?.reading?.dailyEntries ? JSON.parse(JSON.stringify(participantCompData.activities.reading.dailyEntries)) : [];
                this.isBookModalOpen = true; this.editingBookEntryIndex = null;
                this.newBookEntry = { id: null, day: null, categoryKey: 'other', bookTitle: '', pagesRead: null };
                this.bookSuggestions = []; this.showSuggestions = false;
                this.$nextTick(() => document.getElementById('book_day_modal')?.focus());
            } else {
                this.editingParticipantId = participantData.id;
                const participantCompData = appStore.competitionData.find(cd => cd.participantId === participantData.id);
                const activityData = participantCompData?.activities ? participantCompData.activities[this.activityKey] : null;
                const maxVal = this.getMaxForDailyEntry(this.activityKey);
                const loadedEntries = (activityData?.dailyEntries || []).slice(0, 15);
                while (loadedEntries.length < 15) { loadedEntries.push(0); }
                this.currentDailyEntries = Array.from({ length: 15 }, (_, i) => {
                    let val = Number(loadedEntries[i]) || 0;
                    if (val < 0) val = 0;
                    if (maxVal !== null && val > maxVal) val = maxVal;
                    return val;
                });
                this.isDailyEntryModalOpen = true;
                this.$nextTick(() => document.getElementById(`${this.activityKey}_day_1`)?.focus());
            }
        },
        closeModal() { this.isDailyEntryModalOpen = false; this.editingParticipantId = null; },
        closeBookModal() {
            const compDataIndex = appStore.competitionData.findIndex(cd => cd.participantId === this.editingBookParticipantId);
            if (compDataIndex !== -1) {
                const participantEntry = appStore.competitionData[compDataIndex];
                 if (!participantEntry.activities.reading) { participantEntry.activities.reading = { dailyEntries: [], calculatedResult: 0 }; }
                participantEntry.activities.reading.dailyEntries = this.currentBookLog.map(entry => ({
                     id: entry.id, day: Number(entry.day) || 1, categoryKey: entry.categoryKey || 'other',
                     bookTitle: (entry.bookTitle || '').trim(), pagesRead: Number(entry.pagesRead) || 0
                })).filter(entry => entry.day >= 1 && entry.day <= 15 && entry.pagesRead >= 0);
                appStore.saveDataToLocalStorage();
                appStore.showToast(`تۆماری کتێبەکان بۆ ${this.getParticipantNameById(this.editingBookParticipantId)} پاشەکەوتکرا.`);
            }
            this.isBookModalOpen = false; this.editingBookParticipantId = null; this.currentBookLog = [];
            this.newBookEntry = {id: null, day: null, categoryKey: 'other', bookTitle: '', pagesRead: null };
            this.editingBookEntryIndex = null; this.bookSuggestions = []; this.showSuggestions = false;
        },
        addOrUpdateBookEntry() {
             if (!this.newBookEntry.day || this.newBookEntry.day < 1 || this.newBookEntry.day > 15) { appStore.showToast('تکایە ژمارەی ڕۆژ (١-١٥) بە دروستی بنووسە.', 'warning'); return; }
             if (!this.newBookEntry.categoryKey) { appStore.showToast('تکایە پۆلی کتێب دیاری بکە.', 'warning'); return; }
             if (!this.newBookEntry.bookTitle || !this.newBookEntry.bookTitle.trim()) { appStore.showToast('تکایە ناوی کتێب بنووسە.', 'warning'); return; }
             if (!this.newBookEntry.pagesRead || this.newBookEntry.pagesRead < 1) { appStore.showToast('تکایە ژمارەی لاپەڕە (لەکەمترین ١) بە دروستی بنووسە.', 'warning'); return; }
             const entryData = { id: this.newBookEntry.id || Date.now() + Math.random(), day: Number(this.newBookEntry.day), categoryKey: this.newBookEntry.categoryKey, bookTitle: this.newBookEntry.bookTitle.trim(), pagesRead: Number(this.newBookEntry.pagesRead) };
             const isDuplicate = this.currentBookLog.some(entry => (Number(entry.day) || 0) === entryData.day && (entry.bookTitle || '').toLowerCase().trim() === entryData.bookTitle.toLowerCase().trim() && entry.id !== entryData.id);
             if(isDuplicate && this.editingBookEntryIndex === null) { appStore.showToast(`کتێبی "${entryData.bookTitle}" پێشتر لە ڕۆژی ${entryData.day} تۆمارکراوە.`, 'warning'); return; }
             if (this.editingBookEntryIndex !== null) { this.currentBookLog.splice(this.editingBookEntryIndex, 1, entryData); appStore.showToast('تۆماری کتێب نوێکرایەوە.'); }
             else { this.currentBookLog.push(entryData); appStore.showToast('کتێب زیادکرا بۆ لیست.'); }
            this.newBookEntry = { id: null, day: null, categoryKey: 'other', bookTitle: '', pagesRead: null };
            this.editingBookEntryIndex = null; this.bookSuggestions = []; this.showSuggestions = false;
            this.$nextTick(() => document.getElementById('book_day_modal')?.focus());
        },
        prepareEditBookEntry(entryId) {
            const index = this.currentBookLog.findIndex(entry => entry.id === entryId); if (index === -1) { return; }
            this.editingBookEntryIndex = index; this.newBookEntry = JSON.parse(JSON.stringify(this.currentBookLog[index]));
            this.bookSuggestions = []; this.showSuggestions = false;
            this.$nextTick(() => document.getElementById('book_day_modal')?.focus());
        },
        cancelEditBookEntry(){ this.newBookEntry = { id: null, day: null, categoryKey: 'other', bookTitle: '', pagesRead: null }; this.editingBookEntryIndex = null; this.bookSuggestions = []; this.showSuggestions = false; this.$nextTick(() => document.getElementById('book_day_modal')?.focus()); },
        confirmRemoveBookEntry(entryId) {
            const entry = this.currentBookLog.find(e => e.id === entryId); if (!entry) return;
            appStore.showConfirm(`دڵنیایت لە سڕینەوەی تۆماری: "${entry.bookTitle || 'بێناو'}"؟`, () => { this.removeBookEntryById(entryId); appStore.showToast('تۆماری کتێب سڕدرایەوە.'); });
        },
        removeBookEntryById(entryId) {
            this.currentBookLog = this.currentBookLog.filter(entry => entry.id !== entryId);
            if(this.editingBookEntryIndex !== null && this.newBookEntry.id === entryId) { this.cancelEditBookEntry(); }
        },
        updateBookSuggestions(searchTerm) {
            if (!searchTerm || searchTerm.trim().length < 1) { this.bookSuggestions = []; this.showSuggestions = false; return; }
            const term = searchTerm.toLowerCase().trim();
            this.bookSuggestions = appStore.masterBooks.filter(book => book.title && book.author && (book.title.toLowerCase().includes(term) || book.author.toLowerCase().includes(term))).slice(0, 7);
            this.showSuggestions = this.bookSuggestions.length > 0;
        },
        selectBookSuggestion(suggestion) { this.newBookEntry.bookTitle = suggestion.title; this.bookSuggestions = []; this.showSuggestions = false; this.$nextTick(() => document.getElementById('book_pages_modal')?.focus()); },
        saveDailyEntries() {
            const compDataIndex = appStore.competitionData.findIndex(cd => cd.participantId === this.editingParticipantId);
            if (compDataIndex !== -1) {
                const participantEntry = appStore.competitionData[compDataIndex];
                 if (!participantEntry.activities[this.activityKey]) { participantEntry.activities[this.activityKey] = { dailyEntries: Array(15).fill(0), calculatedResult: 0 }; }
                const maxVal = this.getMaxForDailyEntry(this.activityKey);
                const processedEntries = this.currentDailyEntries.map(e => {
                    let num_e = Number(e) || 0;
                    if (num_e < 0) num_e = 0;
                    if (maxVal !== null && num_e > maxVal) num_e = maxVal;
                    return num_e;
                });
                participantEntry.activities[this.activityKey].dailyEntries = processedEntries;
                appStore.saveDataToLocalStorage();
                appStore.showToast(`زانیاری ڕۆژانەی ${this.currentActivityDetails.nameKurdish} پاشەکەوتکرا.`);
            }
            this.closeModal();
        },
        calculatePoints(participantId, activityKeyToCalc) { return appStore.calculatePointsForActivity(activityKeyToCalc, participantId); },
        savePointsPerUnit() {
            if (this.activityKey === 'reading') { appStore.showToast('خاڵی کتێب خوێندنەوە لە ڕێگەی پۆلەکانەوە دیاری دەکرێت.', 'warning'); this.pointsPerUnitInput = 0; return; }
            const newPoints = parseFloat(this.pointsPerUnitInput);
            if (isNaN(newPoints) || newPoints < 0) { appStore.showToast('تکایە بڕێکی دروست بۆ خاڵ بنووسە.', 'error'); this.pointsPerUnitInput = this.currentActivityDetails.pointsPerUnit; return; }
            appStore.activityDetails[this.activityKey].pointsPerUnit = newPoints;
            appStore.saveDataToLocalStorage();
            appStore.showToast(`خاڵی بنەڕەت بۆ ${this.currentActivityDetails.nameKurdish} نوێکرایەوە.`);
        }
    }
}

function bookManagementManager() {
    const appStore = Alpine.store('app');
    return {
        searchTerm: '', currentView: 'list', editingBook: { id: null, title: '', author: '', originalTitle: '' }, sortKey: 'title',
        get booksWithPagesRead() {
            return appStore.masterBooks.map(book => {
                let totalPages = 0;
                const masterBookTitleLower = (book.title || '').toLowerCase().trim();
                appStore.competitionData.forEach(pd => {
                    pd.activities?.reading?.dailyEntries?.forEach(entry => {
                        if ((entry.bookTitle || '').toLowerCase().trim() === masterBookTitleLower) { totalPages += (Number(entry.pagesRead) || 0); }
                    });
                });
                return { ...book, totalPagesRead: totalPages };
            });
        },
        get displayedBooks() {
            let books = this.booksWithPagesRead;
            if (this.searchTerm.trim()) {
                const term = this.searchTerm.toLowerCase().trim();
                books = books.filter(book => (book.title && book.title.toLowerCase().includes(term)) || (book.author && book.author.toLowerCase().includes(term)));
            }
            return books.sort((a, b) => {
                if (this.sortKey === 'title') { return (a.title || '').localeCompare((b.title || ''), 'ku'); }
                if (this.sortKey === 'author') { return (a.author || '').localeCompare((b.author || ''), 'ku'); }
                if (this.sortKey === 'pagesRead') { return (b.totalPagesRead || 0) - (a.totalPagesRead || 0); }
                return 0;
            });
        },
        resetEditingBook() { this.editingBook = { id: null, title: '', author: '', originalTitle: '' }; },
        showList() { this.currentView = 'list'; this.resetEditingBook(); },
        showAddForm() { this.resetEditingBook(); this.currentView = 'form'; this.$nextTick(() => document.getElementById('master-book-title')?.focus()); },
        showEditForm(book) { this.editingBook = JSON.parse(JSON.stringify(book)); this.editingBook.originalTitle = book.title; this.currentView = 'form'; this.$nextTick(() => document.getElementById('master-book-title')?.focus()); },
        saveMasterBook() {
            if (!this.editingBook.title || !this.editingBook.title.trim() || !this.editingBook.author || !this.editingBook.author.trim()) { appStore.showToast('تکایە ناوی کتێب و نووسەر بنووسە.', 'error'); return; }
            const bookTitle = this.editingBook.title.trim();
            const bookAuthor = this.editingBook.author.trim();
            const existingBook = appStore.masterBooks.find(b => (b.title || '').toLowerCase() === bookTitle.toLowerCase() && b.id !== this.editingBook.id);
            if (existingBook) { appStore.showToast(`کتێبێک بە هەمان ناو "${bookTitle}" پێشتر تۆمارکراوە.`, 'warning'); return; }
            if (this.editingBook.id) {
                const index = appStore.masterBooks.findIndex(b => b.id === this.editingBook.id);
                if (index !== -1) {
                     if ((appStore.masterBooks[index].title || '').toLowerCase() !== bookTitle.toLowerCase()) {
                         appStore.competitionData.forEach(pd => {
                             pd.activities?.reading?.dailyEntries?.forEach(entry => {
                                 if((entry.bookTitle || '').toLowerCase().trim() === (appStore.masterBooks[index].title || '').toLowerCase().trim()) { entry.bookTitle = bookTitle; }
                             });
                         });
                     }
                    appStore.masterBooks[index].title = bookTitle;
                    appStore.masterBooks[index].author = bookAuthor;
                    appStore.showToast(`کتێبی "${bookTitle}" نوێکرایەوە.`);
                } else { appStore.showToast('هەڵە: کتێبی دەستکاریکراو نەدۆزرایەوە.', 'error'); return; }
            } else {
                const newId = Date.now() + Math.random();
                appStore.masterBooks.push({ id: newId, title: bookTitle, author: bookAuthor });
                appStore.showToast(`کتێبی "${bookTitle}" زیادکرا.`);
            }
            appStore.saveDataToLocalStorage();
            this.showList();
        },
        confirmDeleteMasterBook(bookId, bookTitle) {
            appStore.showConfirm(`دڵنیایت لە سڕینەوەی کتێبی: "${bookTitle}"؟ ئەمە کاریگەری لەسەر تۆمارەکانی ناو داتای بەشداربووان نابێت.`, () => { this.deleteMasterBook(bookId, bookTitle); });
        },
        deleteMasterBook(bookId, bookTitle) {
            appStore.masterBooks = appStore.masterBooks.filter(b => b.id !== bookId);
            appStore.saveDataToLocalStorage();
            appStore.showToast(`کتێبی "${bookTitle}" سڕدرایەوە.`);
            if (this.currentView === 'form' && this.editingBook.id === bookId) { this.showList(); }
        },
        init() { this.sortKey = 'title'; }
    };
}

function dashboardManager() {
    const appStore = Alpine.store('app');
    return {
        get sortedParticipantsForDashboard() {
             const participantsData = appStore.participants.map(p => {
                    let compData = appStore.competitionData.find(cd => cd.participantId === p.id);
                    if (!compData) { compData = { participantId: p.id, participantName: p.name, activities: {}, totalPoints: 0 }; }
                    else { compData.participantName = p.name; }
                    return compData;
                }).filter(Boolean);
            return participantsData.sort((a, b) => (b.totalPoints || 0) - (a.totalPoints || 0));
        },
        get topThreeParticipants() { return this.sortedParticipantsForDashboard.slice(0, 3); },
        calculatePointsForActivity(activityKey, participantId) { return appStore.calculatePointsForActivity(activityKey, participantId); },
        exportParticipantPointsToExcel() {
            if (typeof XLSX === 'undefined') { appStore.showToast('لایبرێری پێویست بۆ Excel بەردەست نییە.', 'error'); return; }
            appStore.showToast('داتا ئامادە دەکرێت...');
            const tableData = [];
            const headerRow = ['ناوی بەشداربوو'];
            Object.keys(appStore.activityDetails).forEach(actKey => { headerRow.push(appStore.activityDetails[actKey].nameKurdish); });
            headerRow.push('کۆی گشتی خاڵەکان');
            tableData.push(headerRow);
            this.sortedParticipantsForDashboard.forEach(participantData => {
                const row = [];
                row.push(participantData.participantName);
                Object.keys(appStore.activityDetails).forEach(actKey => { row.push(this.calculatePointsForActivity(actKey, participantData.participantId) || 0); });
                row.push(participantData.totalPoints || 0);
                tableData.push(row);
            });
            const workbook = XLSX.utils.book_new();
            const worksheet = XLSX.utils.aoa_to_sheet(tableData);
            const colWidths = [{wch: 25}];
            for(let i = 0; i < headerRow.length - 2; i++) { colWidths.push({wch: 15}); }
            colWidths.push({wch: 18});
            worksheet['!cols'] = colWidths;
            XLSX.utils.book_append_sheet(workbook, worksheet, 'خاڵی بەشداربووان');
            XLSX.writeFile(workbook, `خاڵەکانی_بەشداربووان_${new Date().toISOString().slice(0,10)}.xlsx`);
            appStore.showToast('خشتەی خاڵەکان بە سەرکەوتوویی دابەزێنرا (Excel).', 'success');
        }
    }
}

function finalResultsManager() {
    const appStore = Alpine.store('app');
    return {
        get overallSummary() {
            const summary = [];
            Object.keys(appStore.activityDetails).forEach(actKey => {
                let totalValue = 0;
                appStore.competitionData.forEach(pd => {
                    if (pd.activities && pd.activities[actKey]) { totalValue += pd.activities[actKey].calculatedResult || 0; }
                });
                totalValue = Math.round(totalValue * 1000) / 1000;
                summary.push({ key: actKey, name: appStore.activityDetails[actKey].nameKurdish, totalValue: totalValue, unit: appStore.activityDetails[actKey].unit });
            });
            return summary;
        },
        get topPerformersSummary() {
            const relevantActivities = ['shawnwezh', 'quran', 'sunnat', 'zuha', 'adhkar', 'reading', 'salawat'];
            const summary = [];
            relevantActivities.forEach(actKey => {
                const activityConfig = appStore.activityDetails[actKey];
                if (!activityConfig) { return; }
                let maxResult = -1; let topPerformer = null;
                appStore.competitionData.forEach(pd => {
                     const currentResult = pd.activities?.[actKey]?.calculatedResult || 0;
                    if (currentResult > maxResult) {
                        maxResult = currentResult;
                        topPerformer = { name: pd.participantName, result: Math.round(maxResult * 1000) / 1000 };
                    }
                });
                summary.push({
                    key: actKey, activityName: activityConfig.nameKurdish,
                    topPerformer: maxResult > 0 ? topPerformer : null,
                    unit: activityConfig.unit, unitSingular: activityConfig.unitSingular || activityConfig.unit
                });
            });
            return summary;
        }
    }
}

document.addEventListener('alpine:init', () => {
    Alpine.store('app', globalCompetitionState());
    
    // Register the component managers
    Alpine.data('participantManager', participantManager);
    Alpine.data('activityManager', activityManager);
    Alpine.data('bookManagementManager', bookManagementManager);
    Alpine.data('bookCategoryPointsManager', bookCategoryPointsManager);
    Alpine.data('dashboardManager', dashboardManager);
    Alpine.data('finalResultsManager', finalResultsManager);
});