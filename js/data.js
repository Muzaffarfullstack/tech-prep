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
          "3Sum, Valid anagram, Two Pointers, Binary Tree",
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

  // === WEEK 2 ===
  {
    day: 8,
    title: "DAY 8 — Arrays & React Deep Dive",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Rotate Array — brute force, extra array, reverse method.",
          "Squares of Sorted Array.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: [
          "useReducer: convert Counter component.",
          "Implement theme toggler using Context + useReducer.",
        ],
      },
      {
        header: "🐍 Python (2h)",
        items: ["Stack class implementation: push, pop, top, isEmpty, size."],
      },
    ],
  },
  {
    day: 9,
    title: "DAY 9 — HashMaps & Django Relations",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: ["Group Anagrams using dict().", "Top K Frequent Elements."],
      },
      {
        header: "🕸 Django (2h)",
        items: [
          "Add Category model → One-to-Many Notes relation.",
          "Filtering endpoint: /notes?category=work.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: ["Category filter dropdown + list refresh."],
      },
    ],
  },
  {
    day: 10,
    title: "DAY 10 — Two Pointers + React Forms",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Two Sum Sorted (two pointers).",
          "3Sum — medium patterns focus.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: ["Advanced form with validation.", "Custom useForm hook."],
      },
      {
        header: "🐍 Python (2h)",
        items: [
          "Unit tests for helper functions.",
          "Refactor utility scripts.",
        ],
      },
    ],
  },
  {
    day: 11,
    title: "DAY 11 — Searching + Django API",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Binary Search iterative + recursive.",
          "Search Insert Position + tricky cases.",
        ],
      },
      {
        header: "🌐 Django REST (2h)",
        items: ["Pagination in Notes API.", "Search filter: ?q=text."],
      },
      {
        header: "⚛ React (2h)",
        items: ["Render paginated list + search bar."],
      },
    ],
  },
  {
    day: 12,
    title: "DAY 12 — Midweek Fullstack Sprint",
    hours: "6h",
    sections: [
      {
        header: "🔧 Fullstack Project (2h)",
        items: [
          "Add categories page: create, edit, delete.",
          "Integrate backend fully.",
        ],
      },
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Sliding Window: Minimum Subarray Length.",
          "Fruits Into Baskets problem.",
        ],
      },
      {
        header: "🗣 Behavioral (2h)",
        items: ["STAR story: Problem-solving example."],
      },
    ],
  },
  {
    day: 13,
    title: "DAY 13 — Recursion + React Optimization",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Recursion basics: factorial, fibonacci (memoized).",
          "Generate Parentheses problem.",
        ],
      },
      {
        header: "⚛ React Performance (2h)",
        items: [
          "useMemo + useCallback optimization.",
          "Optimize slow list component.",
        ],
      },
      {
        header: "🐍 Python (2h)",
        items: ["Memoization decorator from scratch."],
      },
    ],
  },
  {
    day: 14,
    title: "DAY 14 — Week 2 Review + Mini Mock",
    hours: "4–5h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Solve 2 Easy + 2 Medium random problems.",
          "Write notes: patterns learned this week.",
        ],
      },
      {
        header: "📦 Project Polishing (1h 30m)",
        items: [
          "Refactor backend folder structure.",
          "Improve React routing consistency.",
        ],
      },
      {
        header: "🎤 Mock Interview (1h 30m)",
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
        header: "🧠 Algorithms (2h)",
        items: [
          "Longest Substring Without Repeating Characters.",
          "Minimum Window Substring.",
          "Sliding Window template coding.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: [
          "Debounce search input.",
          "Throttling functions.",
          "Cleanup side-effects in useEffect.",
        ],
      },
      {
        header: "🐍 Python (2h)",
        items: ["Sliding window reusable class.", "Run 3 test cases."],
      },
    ],
  },
  {
    day: 16,
    title: "DAY 16 — Prefix Sums + Django ORM",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Subarray Sum Equals K.",
          "Range Sum Query problem.",
          "Prefix Sum template coding.",
        ],
      },
      {
        header: "🕸 Django (2h)",
        items: [
          "annotate() + aggregate() queries.",
          "Query optimization techniques.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: [
          "Global state syncing with Context.",
          "Test component re-renders.",
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
        header: "🧠 Algorithms (2h)",
        items: [
          "Reverse Linked List.",
          "Merge Two Linked Lists.",
          "LinkedList class implementation.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: ["List virtualization.", "Key rules & stable rendering."],
      },
      {
        header: "🐍 Python (2h)",
        items: [
          "Node class + LinkedList operations.",
          "Test LinkedList methods.",
        ],
      },
    ],
  },
  {
    day: 18,
    title: "DAY 18 — Linked Lists II",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Detect cycle in Linked List.",
          "Find cycle start node.",
          "Reorder List problem.",
        ],
      },
      {
        header: "🕸 Django (2h)",
        items: ["Signals basics.", "Post-save logic for Notes."],
      },
      {
        header: "⚛ React (2h)",
        items: [
          "Custom hooks deep dive.",
          "Reuse hook logic in multiple components.",
        ],
      },
    ],
  },
  {
    day: 19,
    title: "DAY 19 — Trees I",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "DFS preorder, inorder, postorder.",
          "BFS level order traversal.",
          "TreeNode class implementation.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: ["Context for tree structure.", "Render tree efficiently."],
      },
      {
        header: "🐍 Python (2h)",
        items: ["Serialize/deserialize tree.", "Test tree operations."],
      },
    ],
  },
  {
    day: 20,
    title: "DAY 20 — Trees II",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Invert binary tree.",
          "Compute tree diameter.",
          "Check if tree is balanced.",
        ],
      },
      {
        header: "🕸 Django (2h)",
        items: ["Class-based views deep dive.", "Optimize queryset usage."],
      },
      {
        header: "⚛ React (2h)",
        items: ["Memoization patterns for large tree.", "Optimize re-renders."],
      },
    ],
  },
  {
    day: 21,
    title: "DAY 21 — Week 3 Review",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: ["5 random Linked List + Tree problems."],
      },
      {
        header: "⚛ React (2h)",
        items: ["Refactor one big component.", "Add unit tests."],
      },
      {
        header: "🕸 Django (2h)",
        items: [
          "Optimize 3 database queries.",
          "Test with multiple endpoints.",
        ],
      },
    ],
  },

  // === WEEK 4 — Graphs + React/Django Scaling ===
  {
    day: 22,
    title: "DAY 22 — Graphs I",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Number of Islands problem.",
          "Clone Graph problem.",
          "Build adjacency list template.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: [
          "Error boundaries implementation.",
          "Test error recovery flows.",
        ],
      },
      {
        header: "🕸 Django (2h)",
        items: ["Enhance Auth system.", "Test user permissions."],
      },
    ],
  },
  {
    day: 23,
    title: "DAY 23 — Graphs II — Topo Sort",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: ["Course Schedule problem.", "Topological sort implementation."],
      },
      {
        header: "⚛ React (2h)",
        items: ["Implement reducer pattern.", "Test state updates."],
      },
      {
        header: "🐍 Python/Backend (2h)",
        items: ["Async tasks introduction.", "Write simple async example."],
      },
    ],
  },
  {
    day: 24,
    title: "DAY 24 — Graphs III — Shortest Path",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Dijkstra’s algorithm implementation.",
          "Network Delay Time problem.",
          "Graph templates reusable code.",
        ],
      },
      {
        header: "🕸 Django (2h)",
        items: ["Caching strategies.", "Test cache invalidation."],
      },
      {
        header: "⚛ React (2h)",
        items: ["Lazy loading components.", "Optimize large lists."],
      },
    ],
  },
  {
    day: 25,
    title: "DAY 25 — React State Architecture",
    hours: "6h",
    sections: [
      {
        header: "⚛ React (2h)",
        items: [
          "Feature-based folder structure.",
          "Data-fetch layer with hooks.",
        ],
      },
      {
        header: "🧠 Algorithms (2h)",
        items: ["Binary Tree Paths problem.", "DFS template reuse."],
      },
      {
        header: "🐍 Backend (2h)",
        items: ["API versioning.", "Test backward compatibility."],
      },
    ],
  },
  {
    day: 26,
    title: "DAY 26 — Django Scaling",
    hours: "6h",
    sections: [
      {
        header: "🕸 Django (2h)",
        items: [
          "Redis caching integration.",
          "Rate limiting.",
          "DB normalization checks.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: ["Suspense basics for async components.", "Test fallback UI."],
      },
      {
        header: "🧠 Algorithms (2h)",
        items: ["Graph BFS — practice 3 problems.", "Analyze complexity."],
      },
    ],
  },
  {
    day: 27,
    title: "DAY 27 — Fullstack Day",
    hours: "6h",
    sections: [
      {
        header: "🔧 Project (2h)",
        items: ["Add notifications system.", "Implement background tasks."],
      },
      {
        header: "🧠 Algorithms (2h)",
        items: ["Graph DFS practice 3 problems.", "Dry run test cases."],
      },
      {
        header: "⚛ React (2h)",
        items: ["UI polishing & minor tweaks.", "Test responsive layout."],
      },
    ],
  },
  {
    day: 28,
    title: "DAY 28 — Week 4 Review",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "4 graph problems recap.",
          "Check all previous BFS/DFS templates.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: ["Refactor routing & components.", "Test navigation flows."],
      },
      {
        header: "🕸 Django (2h)",
        items: ["Improve API documentation.", "Test API endpoints."],
      },
    ],
  },
  // === WEEK 5 — Full DP Week (BigTech Focus) ===
  {
    day: 29,
    title: "DAY 29 — DP I",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Climbing Stairs problem.",
          "House Robber problem.",
          "1D DP template creation.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: ["Create reusable components.", "Test component props & state."],
      },
      {
        header: "🕸 Django (2h)",
        items: [
          "Model inheritance setup.",
          "Test queries with inherited models.",
        ],
      },
    ],
  },
  {
    day: 30,
    title: "DAY 30 — DP II",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Unique Paths problem.",
          "Minimum Path Sum problem.",
          "2D DP grid template.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: ["Portals implementation.", "Test modal portal functionality."],
      },
      {
        header: "🐍 Backend (2h)",
        items: ["File uploads handling.", "Validate file size & type."],
      },
    ],
  },
  {
    day: 31,
    title: "DAY 31 — DP III — String DP",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Longest Common Subsequence (LCS).",
          "Edit Distance problem.",
          "String DP notes & template.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: [
          "Suspense + error boundaries.",
          "Test fallback UI for slow components.",
        ],
      },
      {
        header: "🕸 Django (2h)",
        items: ["Custom permissions setup.", "Test permissions for users."],
      },
    ],
  },
  {
    day: 32,
    title: "DAY 32 — DP IV — Hard",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Word Break problem.",
          "Coin Change problem.",
          "Hard DP patterns review.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: ["Performance debugging.", "Profile slow components."],
      },
      {
        header: "🕸 Django (2h)",
        items: ["Logging system improvements.", "Test logs & error tracking."],
      },
    ],
  },
  {
    day: 33,
    title: "DAY 33 — React Architecture",
    hours: "6h",
    sections: [
      {
        header: "⚛ React (2h)",
        items: ["Atomic design patterns.", "Hooks architecture review."],
      },
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "3 random DP problems practice.",
          "Analyze time/space complexity.",
        ],
      },
      {
        header: "🐍 Backend (2h)",
        items: [
          "JWT refresh tokens implementation.",
          "Test token expiry & refresh.",
        ],
      },
    ],
  },
  {
    day: 34,
    title: "DAY 34 — Django Advanced",
    hours: "6h",
    sections: [
      {
        header: "🕸 Django (2h)",
        items: [
          "Signals implementation.",
          "Middleware optimization.",
          "Modular settings review.",
        ],
      },
      {
        header: "🧠 Algorithms (2h)",
        items: ["2 hard DP problems.", "Analyze recurrence relations."],
      },
      {
        header: "⚛ React (2h)",
        items: [
          "Refactor forms & validations.",
          "Test controlled/uncontrolled forms.",
        ],
      },
    ],
  },
  {
    day: 35,
    title: "DAY 35 — Week 5 Review",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: ["5 DP problems recap.", "Revisit templates & patterns."],
      },
      {
        header: "⚛ React (2h)",
        items: ["Component cleanup & optimization.", "Test key components."],
      },
      {
        header: "🕸 Django (2h)",
        items: ["Database optimization & indexing.", "Test query performance."],
      },
    ],
  },
  // === WEEK 6 — SYSTEM DESIGN & CLOUD ===
  {
    day: 36,
    title: "DAY 36 — SD Basics",
    hours: "6h",
    sections: [
      {
        header: "🧩 System Design (2h)",
        items: ["Load balancers overview.", "CDN usage & caching strategies."],
      },
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Solve 2 medium algorithm problems.",
          "Analyze time/space complexity.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: ["Optimize 1 heavy component.", "Profile render times."],
      },
    ],
  },
  {
    day: 37,
    title: "DAY 37 — DB Design",
    hours: "6h",
    sections: [
      {
        header: "🧩 System Design (2h)",
        items: ["Database sharding concepts.", "Indexing for fast queries."],
      },
      {
        header: "🕸 Django (2h)",
        items: ["Deep dive into DB queries.", "Optimize ORM calls."],
      },
      {
        header: "🧠 Algorithms (2h)",
        items: ["Binary Search practice: 3 problems.", "Analyze performance."],
      },
    ],
  },
  {
    day: 38,
    title: "DAY 38 — Messaging",
    hours: "6h",
    sections: [
      {
        header: "🧩 System Design (2h)",
        items: ["Kafka basics & queues.", "Design message flow."],
      },
      {
        header: "⚛ React (2h)",
        items: [
          "Error boundaries deep dive.",
          "Test error handling scenarios.",
        ],
      },
      {
        header: "🧠 Algorithms (2h)",
        items: ["Graph BFS: 2 practice problems.", "Dry run on sample inputs."],
      },
    ],
  },
  {
    day: 39,
    title: "DAY 39 — AWS I",
    hours: "6h",
    sections: [
      {
        header: "☁ Cloud (2h)",
        items: ["AWS EC2 setup.", "S3 bucket basics.", "VPC overview."],
      },
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "2 medium random problems.",
          "Implement solutions in Python/JS.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: ["State management patterns.", "Test global state updates."],
      },
    ],
  },
  {
    day: 40,
    title: "DAY 40 — AWS II",
    hours: "6h",
    sections: [
      {
        header: "☁ Cloud (2h)",
        items: [
          "Lambda functions basics.",
          "Serverless architecture overview.",
        ],
      },
      {
        header: "🕸 Django (2h)",
        items: ["Deployment configuration.", "Test production settings."],
      },
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Binary Tree practice: 2 problems.",
          "Analyze time complexity.",
        ],
      },
    ],
  },
  {
    day: 41,
    title: "DAY 41 — Fullstack Scaling",
    hours: "6h",
    sections: [
      {
        header: "🔧 Project (2h)",
        items: ["Docker container setup.", "Nginx configuration for app."],
      },
      {
        header: "⚛ React (2h)",
        items: ["Profiling React components.", "Optimize render performance."],
      },
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Solve 3 practice problems.",
          "Verify solutions with test cases.",
        ],
      },
    ],
  },
  {
    day: 42,
    title: "DAY 42 — Week 6 Review",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: ["Solve 4 problems recap.", "Revisit tricky concepts."],
      },
      {
        header: "🧩 System Design (2h)",
        items: ["Review notes from Week 6.", "Design discussions & sketches."],
      },
      {
        header: "☁ Cloud (2h)",
        items: ["Deployment polish.", "Verify cloud setups."],
      },
    ],
  },
  // === WEEK 7 — INTERVIEW MODE ===
  {
    day: 43,
    title: "DAY 43 — Backtracking",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Permutations practice.",
          "Subsets generation.",
          "Backtracking template creation.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: ["Reusable UI patterns.", "Test state changes."],
      },
      {
        header: "🕸 Django (2h)",
        items: ["API security best practices.", "Rate limiting basics."],
      },
    ],
  },
  {
    day: 44,
    title: "DAY 44 — Intervals",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Merge Intervals problem.",
          "Insert Interval problem.",
          "Dry run edge cases.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: [
          "Table management components.",
          "Dynamic rendering optimization.",
        ],
      },
      {
        header: "🧩 Backend (2h)",
        items: [
          "API pagination implementation.",
          "Test performance with dataset.",
        ],
      },
    ],
  },
  {
    day: 45,
    title: "DAY 45 — Behavioral",
    hours: "6h",
    sections: [
      {
        header: "🗣 Behavioral (2h)",
        items: ["Write 10 STAR stories.", "Achievements list for interviews."],
      },
      {
        header: "🧠 Algorithms (2h)",
        items: ["Solve 2 medium problems.", "Analyze solution efficiency."],
      },
      {
        header: "⚛ React (2h)",
        items: ["UI component refactor.", "Test component reusability."],
      },
    ],
  },
  {
    day: 46,
    title: "DAY 46 — Mock I",
    hours: "6h",
    sections: [
      {
        header: "🎤 Mock (2h)",
        items: [
          "Algorithm problem + verbal explanation.",
          "Time yourself solving 1 medium.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: ["Fix 2 broken components.", "Test state and props handling."],
      },
      {
        header: "🕸 Django (2h)",
        items: ["Optimize 3 API endpoints.", "Check error handling."],
      },
    ],
  },
  {
    day: 47,
    title: "DAY 47 — Mock II",
    hours: "6h",
    sections: [
      {
        header: "🎤 Mock (2h)",
        items: [
          "System design: 30 min sketch + discussion.",
          "Review architecture decisions.",
        ],
      },
      {
        header: "🧠 Algorithms (2h)",
        items: ["Solve 2 medium problems.", "Dry run solutions."],
      },
      {
        header: "⚛ React (2h)",
        items: ["Forms polishing.", "Validate user input properly."],
      },
    ],
  },
  {
    day: 48,
    title: "DAY 48 — Career Day",
    hours: "6h",
    sections: [
      {
        header: "💼 Career (2h)",
        items: [
          "Polish resume + LinkedIn profile.",
          "Check alignment with job description.",
        ],
      },
      {
        header: "🧠 Algorithms (2h)",
        items: ["Solve 2 random problems.", "Review previous solutions."],
      },
      {
        header: "🔧 Project (2h)",
        items: [
          "Create demo video of fullstack project.",
          "Highlight features & code quality.",
        ],
      },
    ],
  },
  {
    day: 49,
    title: "DAY 49 — Week 7 Review",
    hours: "6h",
    sections: [
      {
        header: "🎤 Mock (2h)",
        items: ["Review mock interview feedback.", "Write lessons learned."],
      },
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Solve 3 practice problems recap.",
          "Check efficiency improvements.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: [
          "Refactor components based on feedback.",
          "Test final functionality.",
        ],
      },
    ],
  },
  // === WEEK 8 — FINAL PREP ===
  {
    day: 50,
    title: "DAY 50 — Sprint I",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: ["Solve 5 medium problems.", "Analyze time & space complexity."],
      },
      {
        header: "⚛ React (2h)",
        items: [
          "Performance optimization of components.",
          "Lazy loading + memoization checks.",
        ],
      },
      {
        header: "🕸 Django (2h)",
        items: ["Optimize backend code.", "Check API response times."],
      },
    ],
  },
  {
    day: 51,
    title: "DAY 51 — Sprint II",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Dynamic Programming + Graph problems.",
          "Pattern recognition for common problems.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: [
          "Hooks deep dive: useReducer + useCallback.",
          "Test UI updates under load.",
        ],
      },
      {
        header: "🔧 Backend (2h)",
        items: [
          "Deployment scripts check.",
          "Database connection optimization.",
        ],
      },
    ],
  },
  {
    day: 52,
    title: "DAY 52 — System Design Sprint",
    hours: "6h",
    sections: [
      {
        header: "🛠 SD (2h)",
        items: ["Design Twitter clone system.", "Draw architecture diagram."],
      },
      {
        header: "🧠 Algorithms (2h)",
        items: ["Solve 2 random problems.", "Optimize previous solutions."],
      },
      {
        header: "🔧 Project (2h)",
        items: ["Improve diagrams in README.", "Check fullstack integration."],
      },
    ],
  },
  {
    day: 53,
    title: "DAY 53 — Final Fullstack Polish",
    hours: "6h",
    sections: [
      {
        header: "🔧 Project (2h)",
        items: ["Final deploy of fullstack project.", "Check all endpoints."],
      },
      {
        header: "⚛ React (2h)",
        items: ["Fix final UI bugs.", "Check responsive design."],
      },
      {
        header: "🕸 Django (2h)",
        items: ["Admin panel polish.", "Check authentication flows."],
      },
    ],
  },
  {
    day: 54,
    title: "DAY 54 — Mock III",
    hours: "6h",
    sections: [
      {
        header: "🎤 Mock (2h)",
        items: [
          "Algorithm + behavioral mock.",
          "Self-review solution approach.",
        ],
      },
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Solve 2 random problems.",
          "Compare efficiency with previous solutions.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: ["UI cleanup.", "Ensure component reusability."],
      },
    ],
  },
  {
    day: 55,
    title: "DAY 55 — Mock IV",
    hours: "6h",
    sections: [
      {
        header: "🎤 Mock (2h)",
        items: ["System design + easy problem mock.", "Review mock notes."],
      },
      {
        header: "🧠 Algorithms (2h)",
        items: ["Solve 2 medium problems.", "Check solution patterns."],
      },
      {
        header: "🔧 Backend (2h)",
        items: ["Logs review.", "Check server responses."],
      },
    ],
  },
  {
    day: 56,
    title: "DAY 56 — Final Day: Master Review",
    hours: "6h",
    sections: [
      {
        header: "🧠 Algorithms (2h)",
        items: [
          "Recap 5 key problems from all weeks.",
          "Analyze patterns and solutions.",
        ],
      },
      {
        header: "⚛ React (2h)",
        items: ["Architecture review.", "Finalize component structure."],
      },
      {
        header: "🕸 Django (2h)",
        items: ["Full API review.", "Check authentication & endpoints."],
      },
    ],
  },
];
