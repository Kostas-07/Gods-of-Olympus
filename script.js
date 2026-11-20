
const gods = [
    ["Δίας","Θεός του ουρανού",[
    ["Ποιος είναι ο βασιλιάς των θεών;",["Δίας","Άρης","Ερμής","Απόλλωνας"],0],
    ["Ποιο είναι το όπλο του Δία;",["Τρίαινα","Κεραυνός","Τόξο","Ασπίδα"],1],
    ["Ποιοι είναι οι γονείς του;",["Δίας και Ήρα","Κρόνος και Ρέα","Άρης και Αφροδίτη","Ουρανός και Γαία"],1],
    ["Πού κατοικούσαν οι θεοί;",["Όλυμπος","Πάρνηθα","Δελφοί","Σπάρτη"],0],
    ["Ποιο είναι το ιερό ζώο του;",["Αετός","Λύκος","Ελάφι","Δελφίνι"],0]
    ]],
    ["Ποσειδώνας","Θεός της θάλασσας",[
    ["Ποιο είναι το όπλο του;",["Κεραυνός","Τρίαινα","Τόξο","Σπαθί"],1],
    ["Τι κυβερνούσε;",["Ουρανό","Θάλασσα","Κάτω κόσμο","Γεωργία"],1],
    ["Ποιο ζώο συνδέεται μαζί του;",["Άλογο","Αετός","Παγώνι","Ελάφι"],0],
    ["Ποια ήταν η σύζυγός του;",["Ήρα","Αθηνά","Αμφιτρίτη","Άρτεμις"],2],
    ["Ποια πόλη διεκδίκησε με την Αθηνά;",["Σπάρτη","Αθήνα","Θήβα","Κόρινθος"],1]
    ]],
    ["Ήρα","Θεά του γάμου",[
    ["Ποιος ήταν ο σύζυγός της;",["Άρης","Δίας","Ερμής","Απόλλωνας"],1],
    ["Ποια ήταν η θέση της;",["Βασίλισσα των θεών","Θεά της θάλασσας","Θεά του πολέμου","Θεά του φωτός"],0],
    ["Ποιο είναι το ιερό πουλί της;",["Αετός","Παγώνι","Κουκουβάγια","Κύκνος"],1],
    ["Τι προστάτευε;",["Τον γάμο","Τη μουσική","Τη θάλασσα","Το κυνήγι"],0],
    ["Ποιοι ήταν οι γονείς της;",["Κρόνος και Ρέα","Δίας και Λητώ","Άρης και Αφροδίτη","Ποσειδώνας και Αμφιτρίτη"],0]
    ]],
    ["Δήμητρα","Θεά της γεωργίας",[
    ["Τι προστάτευε;",["Τη θάλασσα","Τη γεωργία","Τον πόλεμο","Τη μουσική"],1],
    ["Ποια ήταν η κόρη της;",["Αθηνά","Άρτεμις","Περσεφόνη","Ήβη"],2],
    ["Τι εξηγεί ο μύθος της Περσεφόνης;",["Τις εποχές","Τη θάλασσα","Τον ήλιο","Τα άστρα"],0],
    ["Ποιο φυτό συνδεόταν μαζί της;",["Ελιά","Άμπελος","Δάφνη","Σιτάρι"],3],
    ["Πού γίνονταν τα Ελευσίνια Μυστήρια;",["Δελφοί","Ελευσίνα","Ολυμπία","Σπάρτη"],1]
    ]],
    ["Αθηνά","Θεά της σοφίας",[
    ["Ποια ήταν η θεά της σοφίας;",["Αφροδίτη","Ήρα","Αθηνά","Άρτεμις"],2],
    ["Από πού γεννήθηκε;",["Το κεφάλι του Δία","Τη θάλασσα","Ένα δέντρο","Τη φωτιά"],0],
    ["Ποιο ήταν το ιερό δέντρο της;",["Δάφνη","Ελιά","Πεύκο","Βελανιδιά"],1],
    ["Ποιο ήταν το ιερό πουλί της;",["Αετός","Περιστέρι","Κύκνος","Κουκουβάγια"],3],
    ["Με ποιον ανταγωνίστηκε για την Αθήνα;",["Άρη","Απόλλωνα","Ποσειδώνα","Ερμή"],2]
    ]],
    ["Απόλλωνας","Θεός της μουσικής και του φωτός",[
    ["Ποια ήταν η δίδυμη αδελφή του;",["Άρτεμις","Αθηνά","Αφροδίτη","Ήρα"],0],
    ["Ποιο όργανο συνδεόταν μαζί του;",["Αυλός","Λύρα","Τύμπανο","Κύμβαλα"],1],
    ["Σε ποιο μαντείο λατρευόταν;",["Ελευσίνα","Ολυμπία","Δωδώνη","Δελφοί"],3],
    ["Ποιο φυτό ήταν ιερό του;",["Ελιά","Σιτάρι","Δάφνη","Άμπελος"],2],
    ["Ποια ήταν η μητέρα του;",["Λητώ","Ρέα","Γαία","Δήμητρα"],0]
    ]],
    ["Άρτεμις","Θεά του κυνηγιού",[
    ["Ποια ήταν η δίδυμη αδελφή της;",["Αθηνά","Ήρα","Αφροδίτη","Απόλλωνας"],3],
    ["Ποιο ήταν το όπλο της;",["Τρίαινα","Τόξο","Κεραυνός","Δόρυ"],1],
    ["Τι προστάτευε;",["Άγρια ζώα","Εμπόρους","Ναυτικούς","Μεταλλουργούς"],0],
    ["Ποιο ζώο συνδεόταν μαζί της;",["Δελφίνι","Ταύρος","Ελάφι","Αετός"],2],
    ["Ποια ήταν η μητέρα της;",["Αφροδίτη","Λητώ","Ήρα","Δήμητρα"],1]
    ]],
    ["Άρης","Θεός του πολέμου",[
    ["Τι αντιπροσώπευε;",["Σοφία","Ειρήνη","Γεωργία","Πόλεμο"],3],
    ["Ποιοι ήταν οι γονείς του;",["Δίας και Ήρα","Κρόνος και Ρέα","Ποσειδώνας και Αμφιτρίτη","Απόλλωνας και Λητώ"],0],
    ["Με ποια θεά συνδέθηκε;",["Αθηνά","Αφροδίτη","Άρτεμις","Δήμητρα"],1],
    ["Ποια ήταν τα σύμβολά του;",["Ελιά και κουκουβάγια","Λύρα και δάφνη","Δόρυ και ασπίδα","Τρίαινα και δελφίνι"],2],
    ["Ποιος πλανήτης πήρε το όνομά του;",["Δίας","Αφροδίτη","Ερμής","Άρης"],3]
    ]],
    ["Αφροδίτη","Θεά της ομορφιάς",[
    ["Τι αντιπροσώπευε;",["Έρωτα και ομορφιά","Πόλεμο","Σοφία","Θάλασσα"],0],
    ["Πώς γεννήθηκε σε γνωστό μύθο;",["Από κεραυνό","Από αφρό θάλασσας","Από δέντρο","Από φωτιά"],1],
    ["Ποιος ήταν ο σύζυγός της;",["Άρης","Απόλλωνας","Ήφαιστος","Ερμής"],2],
    ["Ποιο ήταν το σύμβολό της;",["Κουκουβάγια","Αετός","Κοράκι","Περιστέρι"],3],
    ["Πώς ονομαζόταν ο γιος της;",["Έρωτας","Περσέας","Ηρακλής","Αχιλλέας"],0]
    ]],
    ["Ήφαιστος","Θεός της φωτιάς",[
    ["Ποια ήταν η τέχνη του;",["Γεωργία","Μεταλλουργία","Μουσική","Ναυσιπλοΐα"],1],
    ["Τι κατασκεύαζε;",["Όπλα και αντικείμενα","Πλοία μόνο","Ναούς μόνο","Πάγο"],0],
    ["Πού είχε το εργαστήριό του;",["Στον βυθό","Στον ουρανό","Σε ηφαίστειο","Στους Δελφούς"],2],
    ["Ποια ήταν η σύζυγός του σε γνωστούς μύθους;",["Αθηνά","Άρτεμις","Δήμητρα","Αφροδίτη"],3],
    ["Ποιοι ήταν οι γονείς του σε μία εκδοχή;",["Δίας και Ήρα","Κρόνος και Ρέα","Ποσειδώνας και Αμφιτρίτη","Άρης και Αφροδίτη"],0]
    ]],
    ["Ερμής","Θεός των αγγελιοφόρων",[
    ["Ποιος ήταν ο ρόλος του;",["Θεός θάλασσας","Αγγελιοφόρος θεών","Θεός γεωργίας","Βασιλιάς κάτω κόσμου"],1],
    ["Τι φορούσε στα πόδια του;",["Φτερωτά σανδάλια","Μπότες","Σιδερένια παπούτσια","Ξύλινα πέδιλα"],0],
    ["Πώς ονομαζόταν το ραβδί του;",["Τρίαινα","Κεραυνός","Κηρύκειο","Τόξο"],2],
    ["Ποιοι ήταν οι γονείς του;",["Ποσειδώνας και Αμφιτρίτη","Άρης και Αφροδίτη","Απόλλωνας και Λητώ","Δίας και Μαία"],3],
    ["Ποιους συνόδευε στον κάτω κόσμο;",["Ήρωες μόνο","Ψυχές νεκρών","Θεούς πολέμου","Ναυτικούς"],1]
    ]],
    ["Διόνυσος","Θεός του κρασιού και του θεάτρου",[
    ["Τι προστάτευε;",["Πόλεμο","Σοφία","Κρασί και γιορτή","Θάλασσα"],2],
    ["Ποιο φυτό συνδεόταν μαζί του;",["Άμπελος","Ελιά","Δάφνη","Σιτάρι"],0],
    ["Με ποια τέχνη συνδέθηκε;",["Γλυπτική","Θέατρο","Αρχιτεκτονική","Ιατρική"],1],
    ["Ποια ήταν η μητέρα του;",["Ήρα","Ρέα","Δήμητρα","Σεμέλη"],3],
    ["Ποιοι τον ακολουθούσαν;",["Κένταυροι","Μούσες","Σάτυροι και Μαινάδες","Κύκλωπες"],2]
    ]]
    ];
    
    let godIndex = 0;
    let questionIndex = 0;
    let score = 0;
    let completed = [];
    
    function startGame() {
        document.getElementById("home").classList.add("hidden");
        document.getElementById("finish").classList.add("hidden");
        document.getElementById("game").classList.remove("hidden");
        renderGods();
        showQuestion();
    }
    
    function renderGods() {
        const list = document.getElementById("godsList");
        list.innerHTML = "";
    
        gods.forEach((god, index) => {
            const item = document.createElement("div");
            item.className = "god-item";
    
            if (completed.includes(index)) {
                item.classList.add("completed");
                item.textContent = "🏆 " + god[0];
            } else if (index <= godIndex) {
                item.classList.add("unlocked");
                item.textContent = "🔓 " + god[0];
            } else {
                item.textContent = "🔒 " + god[0];
            }
    
            list.appendChild(item);
        });
    }
    
    function showQuestion() {
        const god = gods[godIndex];
        const q = god[2][questionIndex];
    
        document.getElementById("godName").textContent = god[0];
        document.getElementById("godDescription").textContent = god[1];
    
        document.getElementById("questionNumber").textContent =
            `Ερώτηση ${questionIndex + 1} από 5`;
    
        document.getElementById("question").textContent = q[0];
    
        document.getElementById("progressBar").style.width =
            `${questionIndex / 5 * 100}%`;
    
        document.getElementById("feedback").textContent = "";
        document.getElementById("nextButton").classList.add("hidden");
        document.getElementById("retryButton").classList.add("hidden");
    
        const answers = document.getElementById("answers");
        answers.innerHTML = "";
    
        q[1].forEach((answer, index) => {
            const button = document.createElement("button");
            button.className = "answer";
            button.textContent = answer;
            button.onclick = () => checkAnswer(index);
            answers.appendChild(button);
        });
    }
    
    function checkAnswer(selected) {
        const q = gods[godIndex][2][questionIndex];
        const buttons = document.querySelectorAll(".answer");
    
        buttons.forEach(button => button.disabled = true);
    
        if (selected === q[2]) {
            score++;
            buttons[selected].classList.add("correct");
            document.getElementById("feedback").textContent =
                "✓ Σωστή απάντηση!";
    
            document.getElementById("nextButton").classList.remove("hidden");
        } else {
            buttons[selected].classList.add("wrong");
            buttons[q[2]].classList.add("correct");
    
            document.getElementById("feedback").textContent =
                "✗ Λάθος απάντηση! Ο γύρος απέτυχε. Χρειάζεσαι 5/5. Δοκίμασε ξανά.";
    
            document.getElementById("retryButton").classList.remove("hidden");
        }
    }
    
    function nextQuestion() {
        questionIndex++;
    
        if (questionIndex < 5) {
            showQuestion();
        } else {
            completed.push(godIndex);
            document.getElementById("progressBar").style.width = "100%";
    
            if (godIndex === 11) {
                document.getElementById("game").classList.add("hidden");
                document.getElementById("finish").classList.remove("hidden");
            } else {
                godIndex++;
                questionIndex = 0;
                score = 0;
    
                renderGods();
    
                document.getElementById("feedback").textContent =
                    "🏆 Τέλειο σκορ 5/5! Ο επόμενος θεός ξεκλειδώθηκε.";
    
                document.getElementById("nextButton").textContent =
                    "Επόμενος θεός";
    
                document.getElementById("nextButton").onclick =
                    () => showQuestion();
    
                document.getElementById("nextButton").classList.remove("hidden");
            }
        }
    }
    
    function retryGame() {
        questionIndex = 0;
        score = 0;
    
        document.getElementById("nextButton").textContent = "Επόμενη";
        document.getElementById("nextButton").onclick = nextQuestion;
    
        showQuestion();
    }
    
    function resetGame() {
        godIndex = 0;
        questionIndex = 0;
        score = 0;
        completed = [];
    
        document.getElementById("finish").classList.add("hidden");
        document.getElementById("game").classList.add("hidden");
        document.getElementById("home").classList.remove("hidden");
    
        document.getElementById("nextButton").textContent = "Επόμενη";
        document.getElementById("nextButton").onclick = nextQuestion;
    
        renderGods();
    }
    