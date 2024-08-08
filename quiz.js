let questions = [
    {
        question: "Give the abbreviation of AWT ?",
        options: ["(a) Applet Windowing Toolkit", "(b) Abstract Windowing Toolkit", "(c) Absolute Windowing Toolkit", "(d) None of the above"],
        answer: 1
    },
    {
        question: "Which is the container that contain title bar and can have MenuBars?",
        options: ["(a) Panel", "(b) Frame", "(c) Window", "(d) Container"],
        answer: 1
    },
    {
        question: "Which is a component in AWT that can contain another components?",
        options: ["(a) Window", "(b) Container", "(c) Panel", "(d) Frame"],
        answer: 1
    },
    {
        question: "AWT is used for GUI programming in java?",
        options: ["(a) True", "(b) False"],
        answer: 0
    },
    {
        question: "Which class provides many methods for graphics programming?",
        options: ["(a) java.awt", "(b) java.Graphics", "(c) java.awt.Graphics", "(d) None of the above"],
        answer: 2
    },
    {
        question: "These two ways are used to create a Frame?",
        options: ["(a) True", "(b) False"],
        answer: 0
    },
    {
        question: "Which is the container that doesnt contain titlebar and MenuBars?",
        options: ["(a) Window", "(b) Frame", "(c) Panel", "(d) Container"],
        answer: 2
    },
    {
        question: "How many types of controls does AMIT supports?",
        options: ["(a) 7", "(b) 6", "(c) 5", "(d) 8"],
        answer: 0
    },
    {
        question: "Which are passive controls that do not support any interaction with the user?",
        options: ["(a) Choice", "(b) List", "(c) Labels", "(d) Checkbox"],
        answer: 2
    },
    {
        question: "By which method You can set or change the text in a Label?",
        options: ["(a) setText()", "(b) getText()", "(d) None of the above"],
        answer: 0
    },
    {
        question: "Which class is used to create a pop-up list of items from which the user may choose?",
        options: ["(a) List", "(b) Choice", "(c) Labels", "(d) Checkbox"],
        answer: 1
    },
    {
        question: "Which object can be constructed to show any number of choices in the visible window?",
        options: ["(a) Labels", "(b) Choice", "(c) List", "(d) Checkbox"],
        answer: 2
    },
    {
        question: "Which is used to store data and partial results, as well as to perform dynamic linking, return values for methods, and dispatch exceptions?",
        options: ["(a) Window", "(b) Panel", "(c) Frame", "(d) Container"],
        answer: 2
    },
    {
        question: "The following way is used to create a frame by creating the object of Frame class?",
        options: ["(a) inheritance", "(b) association", "(c) Both A & B", "(d) None of the above"],
        answer: 2
    },
    {
        question: "AWT more powerful components like tables, lists, scroll panes, color chooser, tabbed pane etc.?",
        options: ["(a) True", "(b) False"],
        answer: 0
    },
    {
        question: "These four methods are commonly used in?",
        options: [
            "(i) public void add(Component c)",
            "(ii) public void setSize(int width,int height)",
            "(iii) public void setLayout(LayoutManager m)",
            "(iv) public void setVisible(boolean)",
            "(a) Graphics class",
            "(b) Component class",
            "(c) Both A& B",
            "(d) None of the above"
        ],
        answer: 1
    },
    {
        question: "In Graphics class, which method is used to draw a rectangle with the specified width and height?",
        options: [
            "(a) public void drawRect(int x, int y, int width, int height)",
            "(b) public abstract void fillRect(int x, int y, int width, int height)",
            "(c) public abstract void drawLine(int x1, int y1, int x2, int y2)",
            "(d) public abstract void drawOval(int x, int y, int width, int height)"
        ],
        answer: 1
    },
    {
        question: "Implement the Listener interface and overrides its methods is required to perform in event handling?",
        options: ["(a) True", "(b) False"],
        answer: 0
    },
    {
        question: "Public class MenuBar extends",
        options: ["(a) MenuComponent", "(b) MenuContainer", "(c) ComponentMenu", "(d) MenuBar"],
        answer: 0
    },
    {
        question: "Which of the following is true about AWT and Swing components?",
        options: [
            "(a) AWT components create a process whereas Swing components create a thread",
            "(b) AWT components create a thread whereas Swing components create a process",
            "(c) Both AWT and Swing components create a process",
            "(d) Both AWT and Swing components create a thread"
        ],
        answer: 2
    },
    {
        question: "Panel is defined as",
        options: [
            "(a) The Panel class is a concrete subclass of Container.",
            "(b) A Panel is a window that does not contain titlebar, menubar, and border.",
            "(c) Panel is a superclass of Applet.",
            "(d) All of the above."
        ],
        answer: 3
    },
    {
        question: "What is APP?",
        options: [
            "(a) Application Programming Interchange",
            "(b) Application Programming Interaction",
            "(c) Application Programming Interface",
            "(d) None of these"
        ],
        answer: 2
    },
    {
        question: "What is the default layout for Dialog?",
        options: ["(a) FlowLayout", "(b) GridLayout", "(c) CardLayout", "(d) BorderLayout"],
        answer: 0
    },
    {
        question: "Which method is used to count the number of items in the List?",
        options: ["(a) getItem()", "(b) getSelectedItem()", "(c) getItemCount()", "(d) getCount()"],
        answer: 2
    },
    {
        question: "The correct hierarchy for Panel is",
        options: [
            "(a) Component - Container - Window - Panel",
            "(b) Component - Container - Applet - Panel",
            "(c) Component - Container - Panel",
            "(d) Container - Component - Panel"
        ],
        answer: 2
    },
    {
        question: "Which is the correct constructor of GridLayout?",
        options: [
            "(a) GridLayout(int a)",
            "(b) GridLayout(int num_rows, int num_columns)",
            "(c) GridLayout(int rows, int cols, int vert)",
            "(d) GridLayout(int hor)"
        ],
        answer: 1
    },
    {
        question: "What are the types of DialogBox?",
        options: ["(a) Modal DialogBox", "(b) Modal and Modeless DialogBox", "(c) Modal", "(d) None of the above"],
        answer: 1
    },
    {
        question: "In the given constructor, what does the third parameter indicate for ScrollBar?",
        options: [
            "(a) size of thumb",
            "(b) minimum value",
            "(c) Increment value",
            "(d) Initial Value"
        ],
        answer: 0
    },
    {
        question: "Which Class is used to represent a Single line textbox with password character facility?",
        options: ["(a) TextField", "(b) TextArea", "(c) Label", "(d) Checkbox"],
        answer: 0
    },
    {
        question: "Which method is used to set the title to the Frame window?",
        options: ["(a) void setTitle(String str)", "(b) void setText(String str)", "(c) void settitle(String str)", "(d) None of the above"],
        answer: 0
    },
    {
        question: "Suppose a Panel is added to a Frame and a Button is added to the Panel. If the Frame's font is set to 12 point Times New Roman, the panel's font is set to 10 points Times New Roman, and the Button's font is not set. What font will be used to display the Button's label?",
        options: ["(a) 12 point Times New Roman", "(b) 11 point Times New Roman", "(c) 10 point Times New Roman", "(d) 9 point Times New Roman"],
        answer: 2
    },
    {
        question: "Which of the following is true about FlowLayout?",
        options: [
            "(a) FlowLayout can use multiple rows if the horizontal space in the container is too small to hold the component.",
            "(b) FlowLayout is the default layout manager of panel and applet.",
            "(c) It is the default layout manager for window.",
            "(d) Both A & B."
        ],
        answer: 3
    },
    {
        question: "Which method can be used to output a String in an Applet?",
        options: ["(a) display()", "(b) print()", "(c) drawString()", "(d) transient()"],
        answer: 2
    },
    {
        question: "Which layout positions components into 5 regions: east, west, south, north, center?",
        options: ["(a) CardLayout", "(b) BorderLayout", "(c) GridLayout", "(d) FlowLayout"],
        answer: 1
    },
    {
        question: "What is API?",
        options: [
            "(a) Application Programming Interchange",
            "(b) Application Programming Interaction",
            "(c) Application Programming Interface",
            "(d) None of these"
        ],
        answer: 2
    },
    {
        "question": "Panel is defined as",
        "options": ["(a) Panel class is a concrete sub-class of container", "(b) A Panel is a window that does not contain a title bar, menu bar or border", "(c) Panel is the superclass of Applet", "(d) All Of above"],
        "answer": 3
    },
    {
        "question": "Which component of AWT provides compact, multi-choice, scrolling component?",
        "options": ["(a) List", "(b) Choice", "(c) Panel", "(d) TextArea"],
        "answer": 0
    },
    {
        "question": "When there is a switching condition like ON or OFF, which control is used of following?",
        "options": ["(a) Button", "(b) RadioButton", "(c) ToggleButton", "(d) TextField"],
        "answer": 2
    },
    {
        "question": "Which method is used to set password character for a TextField?",
        "options": ["(a) setPasswordCharacter()", "(b) setEchoChar()", "(c) setPassChar()", "(d) setEchoCharacter()"],
        "answer": 1
    },
    {
        "question": "The getContentPane() method is of which Class?",
        "options": ["(a) JApplet", "(b) JFrame", "(c) JButton", "(d) None of these"],
        "answer": 3
    },
    {
        "question": "Which class defines setSize() method?",
        "options": ["(a) Frame", "(b) Applet", "(c) Component", "(d) Panel"],
        "answer": 2
    },
    {
        "question": "______ is a swing class that allows to enter a single line of text.",
        "options": ["(a) TextField", "(b) JTextField", "(c) EditTextField", "(d) TextArea"],
        "answer": 1
    },
    {
        "question": "Which Text Component method is used to set a TextComponent to the read-only state?",
        "options": ["(a) Editable", "(b) NonEditable", "(c) setEchoChar", "(d) setEditable"],
        "answer": 3
    },
    {
        "question": "How would you set the color of graphics context called g to cyan?",
        "options": ["(a) g.setCurrentColor(cyan);", "(b) g.setColor(\"Color.cyan\");", "(c) g.setColor(Color.cyan);", "(d) None of these"],
        "answer": 2
    },
    {
        "question": "What is the use of the second parameter in the given constructor Label(String,int)?",
        "options": ["(a) specifies height of label", "(b) specifies width of label in terms of pixels", "(c) specifies the alignment of text in label", "(d) specifies width of label"],
        "answer": 2
    },
    {
        "question": "The setBackground() method is part of which of the following classes in java.awt package?",
        "options": ["(a) Component", "(b) Applet", "(c) Object", "(d) Graphics"],
        "answer": 0
    },
    {
        "question": "What does the following line of code do? TextField tf = new TextField(10);",
        "options": ["(a) will set 10 to TextField as its initial text.", "(b) Will set the character capacity to 10", "(c) Both A & B", "(d) None of These"],
        "answer": 1
    },
    {
        "question": "Frame is a standard window, which is ______ in AWT hierarchy?",
        "options": ["(a) Derived class / Subclass", "(b) Base class / Superclass", "(c) Root class", "(d) Family class"],
        "answer": 0
    },
    {
        "question": "______ is a passive AWT control that does not generate any event?",
        "options": ["(a) Button", "(b) RadioButton", "(c) Choice", "(d) Label"],
        "answer": 3
    },
    {
        "question": "The default layout manager of Frame is",
        "options": ["(a) FlowLayout", "(b) BorderLayout", "(c) GridLayout", "(d) CardLayout"],
        "answer": 1
    },
    {
        "question": "Which method is used to check the status of a checkbox?",
        "options": ["(a) getStatus()", "(b) getState()", "(c) isChecked()", "(d) getChecked()"],
        "answer": 1
    },
    {
        "question": "Which of the following methods is used to set a TextComponent to read-only mode?",
        "options": ["(a) Editable()", "(b) nonEditable()", "(c) setEchoChar()", "(d) setEditable()"],
        "answer": 3
    },
    {
        "question": "______ generates action events when an item is double-clicked.",
        "options": ["(a) List", "(b) Checkbox", "(c) MenuItem", "(d) TextField"],
        "answer": 2
    },
    {
        "question": "Which of the following does not have its default layout as BorderLayout?",
        "options": ["(a) Frame", "(b) Dialog", "(c) JApplet", "(d) All of the Above"],
        "answer": 3
    },
    {
        "question": "Which of the following statement about GUI components is wrong?",
        "options": ["(a) Swing exists since version 1.2 of the JDK", "(b) AWT stands for Abstract Window Toolkit", "(c) You cannot place AWT components on Swing containers.", "(d) The AWT classes are deprecated."],
        "answer": 2
    },
    {
        "question": "Which of the following package is used for Graphical User Interface?",
        "options": ["(a) java.applet", "(b) java.awt", "(c) java.awt.image", "(d) java.io"],
        "answer": 1
    },
    {
        "question": "What are the variables defined in Dimension?",
        "options": ["(a) length and width", "(b) height and length", "(c) height and width", "(d) None of these"],
        "answer": 2
    },
    {
        "question": "Which AWT component is not editable?",
        "options": ["(a) Button", "(b) TextField", "(c) FlowLayout", "(d) Label"],
        "answer": 1
    },
    {
        "question": "Current text of Label can be obtained using",
        "options": ["(a) setAlignment()", "(b) getAlignment()", "(c) getText()", "(d) setText()"],
        "answer": 2
    },
    {
        "question": "The method ___ places a Menu m into the MenuBar mb.",
        "options": ["(a) mb.addMenultem(m)", "(b) mb.addltem(m)", "(c) mb.add(m)", "(d) None of these"],
        "answer": 2
    },
    {
        "question": "Which of these Components cannot be added to Frame?",
        "options": ["(a) Label", "(b) Button", "(c) CheckboxGroup", "(d) All of the above"],
        "answer": 2
    },
    {
        "question": "What is the use of the second parameter given in Label constructor: Label(String, int)?",
        "options": ["(a) Specifies height of label in terms of pixels.", "(b) Specifies width of label in terms of pixels.", "(c) Specifies the alignment of text in label in terms of pixels.", "(d) Specifies maximum number of characters in label."],
        "answer": 2
    },
    {
        "question": "Which of these classes can be added to any Container class, using the add method defined in Container class?",
        "options": ["(a) Button", "(b) CheckboxMenuItem", "(c) Menu", "(d) MenuBar"],
        "answer": 0
    },
    {
        "question": "What is the use of setEchoChar() method?",
        "options": ["(a) To set echo in symbol form", "(b) To set char in symbol form", "(c) Both A & B", "(d) To create password in symbol form"],
        "answer": 2
    },
    {
        "question": "_____ method returns currently selected item in choice.",
        "options": ["(a) getSelectedItem()", "(b) getSelectedElement()", "(c) getSelectedIndex()", "(d) getItem()"],
        "answer": 0
    },
    {
        "question": "Which statement with respect to inner Class is true?",
        "options": ["(a) Only A statement is true.", "(b) Only B statement is true.", "(c) Only C statement is true.", "(d) All A, B, and C are true."],
        "answer": 3
    },
    {
        "question": "The default layout of Applet is",
        "options": ["(a) GridLayout", "(b) CardLayout", "(c) FlowLayout", "(d) BorderLayout"],
        "answer": 2
    },
    {
        "question": "Java Applets are used to create",
        "options": ["(a) Graphical", "(b) User interactive", "(c) Both A & B", "(d) None of these"],
        "answer": 2
    },
    {
        "question": "The following example shows the creation of applet\n```java\nimport java.applet.*;\nimport java.awt.*;\npublic class Main extends Applet {\n  public void paint(Graphics g) {\n    g.drawString(\"Welcome in Java\", 20, 20);\n  }\n}\n```",
        "options": ["(a) Banner using Applet", "(b) Basic Applet", "(c) Display clock", "(d) None of the above"],
        "answer": 1
    },
    {
        "question": "Which of the following is a valid HTML file to run an applet program stored in MyApplet.java file?",
        "options": ["(a) <APPLET CODE=\"MyApplet.class\">", "(b) <APPLET WIDTH=250 HEIGHT=200>", "(c) <applet width=250>", "(d) <applet height='250' width='200'></applet>"],
        "answer": 2
    },
    {
        "question": "Which of the following sets the frame, say frame, to 300 pixels wide by 200 high?",
        "options": ["(a) frame.setSize(300, 200);", "(b) frame.setSize(300, 200);", "(c) frame.paint(300, 200);", "(d) frame.setVisible(true);"],
        "answer": 0
    },
    {
        "question": "Fill in the blanks so that this program displays a Frame:\n```java\nimport java.awt.*;\npublic class microGUI {\n  public static void main(String[] args) {\n    Frame frm = new Frame();\n    frm.setSize(150, 100);\n    frm.setVisible(true);\n  }\n}\n```",
        "options": ["(a) Form, setVisible, setOn", "(b) Frame, setSize, setVisible", "(c) Frame, setVisible, setSize", "(d) Window, setSize, paint"],
        "answer": 1
    },
    {
        "question": "What is the length of the application box made by this program?\n```java\nimport java.awt.*;\nimport java.applet.*;\npublic class myApplet extends Applet {\n  public void paint(Graphics g) {\n    g.drawString(\"Simple Applet\", 20, 20);\n  }\n}\n```",
        "options": ["(a) 20", "(b) 1", "(c) System Dependent", "(d) 20"],
        "answer": 0
    }
];
let selectedQuestions = [];
let userScore = 0;

function startQuiz() {
    const username = document.getElementById("username").value;
    if (username.trim() === "") {
        alert("Please enter your name.");
        return;
    }
    document.getElementById("welcome").style.display = "none";
    document.getElementById("question-selection").style.display = "block";
}

function selectQuestions(num) {
    selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, num);
    displayQuestions();
    document.getElementById("question-selection").style.display = "none";
    document.getElementById("quiz").style.display = "block";
}

function displayQuestions() {
    const container = document.getElementById("questions-container");
    container.innerHTML = "";

    selectedQuestions.forEach((q, index) => {
        const questionBox = document.createElement("div");
        questionBox.classList.add("question-box");

        const questionTitle = document.createElement("h3");
        questionTitle.textContent = `Q${index + 1}. ${q.question}`;
        questionBox.appendChild(questionTitle);

        const optionsDiv = document.createElement("div");
        optionsDiv.classList.add("options");

        q.options.forEach((option, i) => {
            const label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="question${index}" value="${i}"> ${option}`;
            optionsDiv.appendChild(label);
        });

        questionBox.appendChild(optionsDiv);
        container.appendChild(questionBox);
    });
}

function submitQuiz() {
    const username = document.getElementById("username").value.trim();
    if (username === "") {
        alert("Please enter your name.");
        return;
    }

    selectedQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === q.answer) {
            userScore++;
        }
    });

    // Save or update the score in localStorage
    updateHistory(username, userScore);

    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").textContent = `${userScore} / ${selectedQuestions.length}`;
    displayHistory();
}

function updateHistory(username, score) {
    let history = JSON.parse(localStorage.getItem('quizHistory')) || [];
    const index = history.findIndex(entry => entry.name === username);

    if (index !== -1) {
        // Update existing entry
        history[index].score = score;
    } else {
        // Add new entry
        history.push({ name: username, score: score });
    }

    localStorage.setItem('quizHistory', JSON.stringify(history));
}

function displayHistory() {
    const historyList = document.getElementById("history-list");
    const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
    historyList.innerHTML = history.map(entry => `<li>${entry.name}: ${entry.score}</li>`).join('');
    document.getElementById("history").style.display = "block";
}

function shareScore() {
    const whatsappNumber = document.getElementById("whatsapp-number").value;
    if (whatsappNumber.trim() === "") {
        alert("Please enter a WhatsApp number.");
        return;
    }

    // Ensure the number starts with +91 if not already included
    if (!whatsappNumber.startsWith('+91')) {
        whatsappNumber = '+91' + whatsappNumber;
    }

    const scoreMessage = `Your score is ${userScore} / ${selectedQuestions.length}. Check out the quiz at [Your Website Link]`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(scoreMessage)}`;

    window.open(whatsappUrl, '_blank');
}
