export const daysData = [
  {
    day: 1,
    title: "DAY 1 — Setup & Interview Foundations",
    hours: "6h",
    sections: [
      {
        header: "🎓 Theory (30m)",
        items: [
          "Write summary: coding interview pipeline (HR → OA → Tech → Onsite → Offer).",
          "List 5 core DS categories: arrays, strings, hashmaps, trees, graphs.",
        ],
      },
      {
        header: "🧠 Algorithms (90m)",
        items: [
          "Two Sum — solve in Python + JS, include brute-force + optimized.",
          "Remove Duplicates — solve + test 5 custom arrays.",
          "Deliverable: upload code to GitHub /week1/day1/",
        ],
      },
      {
        header: "🛠 Technical Setup (45m)",
        items: [
          "Install & configure VSCode: ESLint, Prettier, Python plugin.",
          "Create universal coding template for JS & Python (I/O examples, test harness).",
        ],
      },
      {
        header: "🧱 React/Django Prep (45m)",
        items: [
          "Initialize React (Vite) project — verify hello world.",
          "Initialize Django project — create API skeleton + runserver check.",
        ],
      },
      {
        header: "🗣 Behavioral (20m)",
        items: [
          "Write 2-min answer: 'Tell me about yourself' (bullet points).",
        ],
      },
    ],
  },
  {
    day: 2,
    title: "DAY 2 — JS/Python Core + React Basics",
    hours: "6h",
    sections: [
      {
        header: "📘 JavaScript (60m)",
        items: [
          "Explain: hoisting, closures — write your own examples.",
          "Implement: custom map(), filter().",
          "Deliverable: JS notebook in /week1/day2/js/",
        ],
      },
      {
        header: "🐍 Python (60m)",
        items: [
          "Implement linked list (insert + print).",
          "Time complexity explanation: O(1), O(n), O(n²).",
          "Deliverable: linkedlist.py",
        ],
      },
      {
        header: "⚛ React (90m)",
        items: [
          "Create 3 components (Header, Footer, Counter).",
          "Implement Counter using useState().",
          "Add simple CSS.",
          "Deliverable: GitHub push.",
        ],
      },
      {
        header: "🧠 Algorithms (45m)",
        items: [
          "Solve: Valid Parentheses (stack).",
          "Solve: Merge Two Sorted Arrays.",
        ],
      },
    ],
  },
  {
    day: 3,
    title: "DAY 3 — Django Models + Hooks",
    hours: "6h",
    sections: [
      {
        header: "🧩 Algorithms (60m)",
        items: [
          "Solve: Best Time to Buy & Sell Stock (Kadane logic).",
          "Write explanation in your own words.",
        ],
      },
      {
        header: "🕸 Django (90m)",
        items: [
          "Create Model: Note(title, body, created).",
          "Run migrations + test shell queries.",
          "Setup Serializer + one basic GET API.",
          "Deliverable: /backend/day3/",
        ],
      },
      {
        header: "⚛ React Advanced (60m)",
        items: [
          "Learn useEffect basics — implement API call to dummy JSON.",
          "Render list of items + loading state.",
        ],
      },
      {
        header: "🔧 Project Work (45m)",
        items: [
          "Create fullstack repo structure /client + /server.",
          "Write project README: purpose + tech stack.",
        ],
      },
    ],
  },
  {
    day: 4,
    title: "DAY 4 — Build CRUD API + Connect React",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (60m)",
        items: [
          "Solve: Maximum Subarray (Kadane) → Python + JS.",
          "Dry run with 3 example arrays.",
        ],
      },
      {
        header: "🌐 Django REST (90m)",
        items: [
          "Implement Notes CRUD: GET, POST, DELETE.",
          "Test with Postman (include screenshots).",
        ],
      },
      {
        header: "⚛ React Integration (90m)",
        items: [
          "Build Notes List page (fetch from Django).",
          "Add create-note form.",
          "Deliverable: client connected to server.",
        ],
      },
    ],
  },
  {
    day: 5,
    title: "DAY 5 — Mini Fullstack Project",
    hours: "6h",
    sections: [
      {
        header: "📘 JS (60m)",
        items: [
          "Explain event loop → write 3 async examples.",
          "Implement custom Promise wrapper.",
        ],
      },
      {
        header: "🧠 Algorithms (60m)",
        items: [
          "Solve: Longest Substring Without Repeating Characters.",
          "Focus: sliding window technique.",
        ],
      },
      {
        header: "🔧 Project (2h)",
        items: [
          "Add Edit Note page (PUT request).",
          "Add Delete Note button.",
          "Polish UI: basic layout + spacing.",
        ],
      },
      {
        header: "🗣 Behavioral (20m)",
        items: ["Write STAR story: conflict/communication."],
      },
    ],
  },
  {
    day: 6,
    title: "DAY 6 — React Polishing + Intro to Auth",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (60m)",
        items: [
          "Solve: Contains Duplicate.",
          "Solve: Product of Array Except Self (no division).",
        ],
      },
      {
        header: "⚛ React (90m)",
        items: [
          "Add React Router: /, /note/:id, /create.",
          "Add global loading spinner component.",
        ],
      },
      {
        header: "🔐 Django Auth (90m)",
        items: [
          "Add simple TokenAuth.",
          "Protect create/update/delete routes.",
        ],
      },
    ],
  },
  {
    day: 7,
    title: "DAY 7 — Weekly Review + Mock",
    hours: "4–5h",
    sections: [
      {
        header: "🧠 Algorithms (90m)",
        items: [
          "Solve 3 random Easy + 1 Medium.",
          "Review all Week 1 solutions → write notes.",
        ],
      },
      {
        header: "📦 Project Polishing (60m)",
        items: [
          "Clean components folder structure.",
          "Improve backend error responses.",
        ],
      },
      {
        header: "🎤 Mock Interview (45m)",
        items: [
          "Do coding mock: Two Sum + Stock problem (timer: 25min).",
          "Record yourself explaining solution.",
        ],
      },
      {
        header: "📚 Weekly Reflection (20m)",
        items: [
          "Write what you learned.",
          "Write what was slow or confusing.",
          "Plan improvements for Week 2.",
        ],
      },
    ],
  },
  {
    day: 8,
    title: "DAY 8 — Week 2 Start: Arrays & React Deep Dive",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (90m)",
        items: [
          "Solve: Rotate Array (3 methods: brute, extra array, reverse).",
          "Solve: Squares of Sorted Array.",
          "Deliverable: /week2/day8/",
        ],
      },
      {
        header: "⚛ React (90m)",
        items: [
          "Learn useReducer — convert Counter component to reducer version.",
          "Implement theme toggler using Context + useReducer.",
        ],
      },
      {
        header: "🐍 Python (60m)",
        items: [
          "Implement Stack using list + class.",
          "Write 5 methods: push, pop, top, isEmpty, size.",
        ],
      },
    ],
  },
  {
    day: 9,
    title: "DAY 9 — HashMaps + Django Relations",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (90m)",
        items: [
          "Group Anagrams — solve using dict().",
          "Top K Frequent Elements.",
          "Time complexity explanation.",
        ],
      },
      {
        header: "🕸 Django (90m)",
        items: [
          "Add Category model → One-to-Many relation with Notes.",
          "Add filtering endpoint: /notes?category=work.",
        ],
      },
      {
        header: "⚛ React (60m)",
        items: [
          "Add category filter dropdown.",
          "Refresh list based on selected category.",
        ],
      },
    ],
  },
  {
    day: 10,
    title: "DAY 10 — Two Pointers + React Forms Mastery",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (90m)",
        items: [
          "Two Sum Sorted (two pointers).",
          "3Sum — medium level (focus on patterns).",
        ],
      },
      {
        header: "⚛ React (120m)",
        items: [
          "Build advanced form with validation.",
          "Create custom useForm hook (validate fields).",
        ],
      },
    ],
  },
  {
    day: 11,
    title: "DAY 11 — Searching + Django Advanced API",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (90m)",
        items: [
          "Binary Search iterative + recursive.",
          "Search Insert Position.",
          "Find First & Last Position — tricky version.",
        ],
      },
      {
        header: "🌐 Django REST (120m)",
        items: [
          "Add pagination to Notes API.",
          "Add search filter: ?q=text.",
          "Document API endpoints in README.",
        ],
      },
    ],
  },
  {
    day: 12,
    title: "DAY 12 — Midweek Fullstack Sprint",
    hours: "6h",
    sections: [
      {
        header: "🔧 Fullstack Project (3h)",
        items: [
          "Add categories page: create, edit, delete.",
          "Integrate with backend fully.",
          "Polish UI with minimal CSS.",
        ],
      },
      {
        header: "🧠 Algorithms (60m)",
        items: [
          "Sliding Window: Minimum Subarray Length.",
          "Sliding Window: Fruits Into Baskets.",
        ],
      },
      {
        header: "🗣 Behavioral (20m)",
        items: ["Write STAR story: Problem-solving example."],
      },
    ],
  },
  {
    day: 13,
    title: "DAY 13 — Recursion + React Optimization",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (90m)",
        items: [
          "Recursion basics: factorial, fib (memoized).",
          "Generate Parentheses (medium).",
        ],
      },
      {
        header: "⚛ React Performance (90m)",
        items: [
          "Learn useMemo + useCallback.",
          "Optimize slow list component demonstration.",
        ],
      },
      {
        header: "🐍 Python (45m)",
        items: ["Write memoization decorator from scratch."],
      },
    ],
  },
  {
    day: 14,
    title: "DAY 14 — Week 2 Review + Mini Mock",
    hours: "4–5h",
    sections: [
      {
        header: "🧠 Algorithms (90m)",
        items: [
          "Solve 2 Easy + 2 Medium random.",
          "Write notes: patterns learned this week.",
        ],
      },
      {
        header: "📦 Project Polishing (60m)",
        items: [
          "Refactor backend folder structure.",
          "Improve React routing consistency.",
        ],
      },
      {
        header: "🎤 Mock Interview (45m)",
        items: ["Medium problem live simulation.", "Explain logic verbally."],
      },
    ],
  },
  // === WEEK 3 — Advanced Algorithms + Django/React Scaling ===
  {
    day: 15,
    title: "DAY 15 — Sliding Window Mastery",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (120m)",
        items: [
          "Longest Substring Without Repeating Characters.",
          "Minimum Window Substring (HARD pattern intro).",
        ],
      },
      {
        header: "⚛ React (90m)",
        items: ["Debounce search input.", "useEffect cleanup mastery."],
      },
      {
        header: "🐍 Python (45m)",
        items: ["Implement sliding window template."],
      },
    ],
  },
  {
    day: 16,
    title: "DAY 16 — Prefix Sums + Django ORM",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms",
        items: ["Subarray Sum Equals K.", "Range Sum Query logic."],
      },
      {
        header: "🕸 Django",
        items: [
          "Annotate, aggregate, Count(), Sum().",
          "Complex queries refactoring.",
        ],
      },
    ],
  },
  {
    day: 17,
    title: "DAY 17 — Linked Lists I",
    hours: "6h",
    sections: [
      {
        header: "Algorithms",
        items: ["Reverse Linked List.", "Merge Two Sorted Lists."],
      },
      {
        header: "React",
        items: ["Render big lists using react-window virtualization."],
      },
    ],
  },
  {
    day: 18,
    title: "DAY 18 — Linked Lists II: Fast/Slow Pointers",
    hours: "6h",
    sections: [
      {
        header: "Algorithms",
        items: ["Detect Cycle.", "Find cycle start.", "Reorder List."],
      },
    ],
  },
  {
    day: 19,
    title: "DAY 19 — Trees I",
    hours: "6h",
    sections: [
      {
        header: "Algorithms",
        items: ["DFS preorder/inorder/postorder.", "BFS traversal."],
      },
      {
        header: "Django",
        items: ["Custom permissions.", "Role-based access control."],
      },
    ],
  },
  {
    day: 20,
    title: "DAY 20 — Trees II",
    hours: "6h",
    sections: [
      {
        header: "Algorithms",
        items: [
          "Invert Binary Tree.",
          "Diameter of Binary Tree.",
          "Balanced Tree.",
        ],
      },
    ],
  },
  {
    day: 21,
    title: "DAY 21 — Week 3 Review",
    hours: "5h",
    sections: [
      { header: "Review", items: ["5 random Linked List + Tree problems."] },
    ],
  },
  // === WEEK 4 ===
  {
    day: 22,
    title: "Graphs I — BFS DFS",
    hours: "6h",
    sections: [
      { header: "Algorithms", items: ["Clone Graph.", "Number of Islands."] },
    ],
  },
  {
    day: 23,
    title: "Graphs II — Topological Sort",
    hours: "6h",
    sections: [
      {
        header: "Algorithms",
        items: ["Course Schedule.", "Course Schedule II."],
      },
    ],
  },
  {
    day: 24,
    title: "Graphs III — Shortest Path",
    hours: "6h",
    sections: [
      {
        header: "Algorithms",
        items: ["Dijkstra basics.", "Network Delay Time."],
      },
    ],
  },
  {
    day: 25,
    title: "React Advanced State",
    hours: "6h",
    sections: [
      {
        header: "React",
        items: ["Context + Reducer structure.", "Global store design."],
      },
    ],
  },
  {
    day: 26,
    title: "Django Scaling",
    hours: "6h",
    sections: [
      {
        header: "Django",
        items: ["Caching.", "Rate limiting.", "Query optimization."],
      },
    ],
  },
  {
    day: 27,
    title: "Fullstack Build Day",
    hours: "6h",
    sections: [
      { header: "Project", items: ["Add notifications.", "Add audit logs."] },
    ],
  },
  {
    day: 28,
    title: "Week 4 Review",
    hours: "5h",
    sections: [{ header: "Review", items: ["Graph + Fullstack recap."] }],
  },
  // === WEEK 5 ===
  {
    day: 29,
    title: "DP I — Basic",
    hours: "6h",
    sections: [
      { header: "Algorithms", items: ["Climbing Stairs.", "House Robber."] },
    ],
  },
  {
    day: 30,
    title: "DP II — 2D",
    hours: "6h",
    sections: [
      { header: "Algorithms", items: ["Unique Paths.", "Minimum Path Sum."] },
    ],
  },
  {
    day: 31,
    title: "DP III — String DP",
    hours: "6h",
    sections: [
      {
        header: "Algorithms",
        items: ["Longest Common Subsequence.", "Edit Distance."],
      },
    ],
  },
  {
    day: 32,
    title: "DP IV — Hard",
    hours: "6h",
    sections: [
      { header: "Algorithms", items: ["Word Break.", "Coin Change."] },
    ],
  },
  {
    day: 33,
    title: "React System Design",
    hours: "6h",
    sections: [
      {
        header: "React",
        items: ["Component architecture.", "Error boundaries."],
      },
    ],
  },
  {
    day: 34,
    title: "Django Advanced",
    hours: "6h",
    sections: [{ header: "Django", items: ["Signals.", "Custom middleware."] }],
  },
  {
    day: 35,
    title: "Week 5 Review",
    hours: "5h",
    sections: [{ header: "Review", items: ["DP recap."] }],
  },
  // === WEEK 6 ===
  {
    day: 36,
    title: "System Design I — Basics",
    hours: "6h",
    sections: [
      { header: "SD", items: ["Load balancers.", "Caching.", "CDN."] },
    ],
  },
  {
    day: 37,
    title: "System Design II — Databases",
    hours: "6h",
    sections: [{ header: "SD", items: ["Sharding.", "Indexing."] }],
  },
  {
    day: 38,
    title: "System Design III — Messaging",
    hours: "6h",
    sections: [
      {
        header: "SD",
        items: ["Kafka concepts.", "Event-driven architecture."],
      },
    ],
  },
  {
    day: 39,
    title: "Cloud I",
    hours: "6h",
    sections: [{ header: "Cloud", items: ["AWS basics.", "EC2, S3, RDS."] }],
  },
  {
    day: 40,
    title: "Cloud II",
    hours: "6h",
    sections: [{ header: "Cloud", items: ["Lambda.", "Serverless design."] }],
  },
  {
    day: 41,
    title: "Fullstack Project Scaling",
    hours: "6h",
    sections: [
      {
        header: "Project",
        items: ["Containerize with Docker.", "Nginx reverse proxy."],
      },
    ],
  },
  {
    day: 42,
    title: "Week 6 Review",
    hours: "5h",
    sections: [{ header: "Review", items: ["System Design recap."] }],
  },
  // === WEEK 7 ===
  {
    day: 43,
    title: "Interview Patterns I",
    hours: "6h",
    sections: [{ header: "Algo", items: ["Backtracking.", "Permutations."] }],
  },
  {
    day: 44,
    title: "Interview Patterns II",
    hours: "6h",
    sections: [{ header: "Algo", items: ["Intervals.", "Merge Intervals."] }],
  },
  {
    day: 45,
    title: "Behavioral Prep",
    hours: "4h",
    sections: [{ header: "Behavioral", items: ["10 STAR stories."] }],
  },
  {
    day: 46,
    title: "Mock Interview I",
    hours: "5h",
    sections: [{ header: "Mock", items: ["1 easy + 1 medium live."] }],
  },
  {
    day: 47,
    title: "Mock Interview II",
    hours: "5h",
    sections: [{ header: "Mock", items: ["System design 30-min."] }],
  },
  {
    day: 48,
    title: "LinkedIn + Resume Polish",
    hours: "4h",
    sections: [{ header: "Career", items: ["Projects formatting."] }],
  },
  {
    day: 49,
    title: "Week 7 Review",
    hours: "4h",
    sections: [{ header: "Review", items: ["Mock reflections."] }],
  },
  // === WEEK 8 ===
  {
    day: 50,
    title: "Final Algo Sprint I",
    hours: "6h",
    sections: [{ header: "Algo", items: ["5 medium problems."] }],
  },
  {
    day: 51,
    title: "Final Algo Sprint II",
    hours: "6h",
    sections: [{ header: "Algo", items: ["Graph + DP mix."] }],
  },
  {
    day: 52,
    title: "System Design Sprint",
    hours: "5h",
    sections: [{ header: "SD", items: ["Design Twitter."] }],
  },
  {
    day: 53,
    title: "React/Django Final Polish",
    hours: "5h",
    sections: [{ header: "Project", items: ["Deploy to cloud."] }],
  },
  {
    day: 54,
    title: "Mock Interview III",
    hours: "5h",
    sections: [{ header: "Mock", items: ["1 medium + behavioral."] }],
  },
  {
    day: 55,
    title: "Mock Interview IV",
    hours: "5h",
    sections: [{ header: "Mock", items: ["System design + easy."] }],
  },
  {
    day: 56,
    title: "Final Review",
    hours: "4h",
    sections: [{ header: "Review", items: ["Everything recap."] }],
  },
];
