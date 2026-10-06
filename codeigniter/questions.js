window.CI4_QUESTIONS = [
  {
    "id": "q1",
    "page": 1,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "A developer wants a route that only responds to form submissions (POST requests) at /tasks. Which method should be used to register it?",
    "options": [
      "$routes->resource('/tasks', ...)",
      "$routes->get('/tasks', ...)",
      "$routes->view('/tasks', ...)",
      "$routes->post('/tasks', ...)"
    ],
    "correct_answers": [
      "$routes->post('/tasks', ...)"
    ]
  },
  {
    "id": "q2",
    "page": 2,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "It is possible for a single CodeIgniter controller to have multiple methods, each handling a different route.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "True"
    ]
  },
  {
    "id": "q3",
    "page": 3,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "Passing data from a controller to a view typically involves an associative array, where each key becomes a variable name inside the view.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "True"
    ]
  },
  {
    "id": "q4",
    "page": 4,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "Which symbol/syntax is used in a CodeIgniter View to output an escaped PHP value directly into HTML?",
    "options": [
      "<?= ?>",
      "<# #>",
      "{{ }}",
      "<%= %>"
    ],
    "correct_answers": [
      "<?= ?>"
    ]
  },
  {
    "id": "q5",
    "page": 5,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "Why might project structure (separating routes, controllers, models, and views into their own folders) matter more as an application grows larger?",
    "options": [
      "It has no real benefit; it is purely a style preference",
      "It is only useful for teams larger than 10 developers",
      "It reduces the number of files needed by half",
      "It keeps related code easy to find and reduces the chance that changes in one part accidentally break another"
    ],
    "correct_answers": [
      "It keeps related code easy to find and reduces the chance that changes in one part accidentally break another"
    ]
  },
  {
    "id": "q6",
    "page": 6,
    "category": "CodeIgniter Basics",
    "type": "text_input",
    "question": "What is the name of the CodeIgniter file where database connection settings are typically stored?",
    "options": [],
    "correct_answers": [],
    "accepted_answers": [
      ".env"
    ]
  },
  {
    "id": "q7",
    "page": 7,
    "category": "CodeIgniter Basics",
    "type": "matching",
    "question": "",
    "options": [
      "Retrieves every record from a Model's table"
    ],
    "correct_answers": [],
    "pairs": [
      {
        "prompt": "findAll()",
        "answer": "Retrieves every record from a Model's table"
      }
    ]
  },
  {
    "id": "q8",
    "page": 8,
    "category": "CodeIgniter Basics",
    "type": "matching",
    "question": "",
    "options": [
      "Decides how to respond to a matched route"
    ],
    "correct_answers": [],
    "pairs": [
      {
        "prompt": "Controller",
        "answer": "Decides how to respond to a matched route"
      }
    ]
  },
  {
    "id": "q9",
    "page": 9,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "Which of these correctly loads the view file located at app/Views/tasks/index.php?",
    "options": [
      "view('tasks/index');",
      "render('tasks/index');",
      "include('tasks/index');",
      "view('tasks.index.php');"
    ],
    "correct_answers": [
      "view('tasks/index');"
    ]
  },
  {
    "id": "q10",
    "page": 10,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "A page at /tasks should show a list of tasks from a database. Put the following in the correct order of execution: (1) Model retrieves records, (2) Route matches the URL to a controller, (3) View displays the data, (4) Controller calls the Model and passes data to the View.",
    "options": [
      "1, 2, 3, 4",
      "2, 1, 4, 3",
      "4, 2, 1, 3",
      "2, 4, 1, 3"
    ],
    "correct_answers": [
      "2, 1, 4, 3"
    ]
  },
  {
    "id": "q11",
    "page": 11,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "Once a route is defined, visiting a matching URL will always run the associated controller method, regardless of whether that method actually exists.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": "q12",
    "page": 12,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "A task list page works correctly, but clicking into any individual task shows \"Undefined variable $task.\" The controller code is: $data['tasks'] = $model->find($id); return view('tasks/show', $data);. What is the bug?",
    "options": [
      "The controller stores the single record under the key 'tasks' (plural) but the view expects $task (singular)",
      "The Model connection failed",
      "The route does not accept an id parameter",
      "find() cannot retrieve a single record"
    ],
    "correct_answers": [
      "The controller stores the single record under the key 'tasks' (plural) but the view expects $task (singular)"
    ]
  },
  {
    "id": "q13",
    "page": 13,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "A developer chooses to hardcode a list of tasks directly in a controller using a PHP array, even though a database table already exists for tasks. What is the main drawback of this approach?",
    "options": [
      "Any changes to the task list require editing code instead of just the data, and the two data sources can fall out of sync",
      "Views cannot loop through array data",
      "Controllers are not allowed to contain arrays",
      "PHP arrays cannot store multiple records"
    ],
    "correct_answers": [
      "Any changes to the task list require editing code instead of just the data, and the two data sources can fall out of sync"
    ]
  },
  {
    "id": "q14",
    "page": 14,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "In CodeIgniter, routes must always be defined using the GET method only.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": "q15",
    "page": 15,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "A project combining routing (Module 1) and data access (Module 2) needs a task list page. A developer skips creating a Model entirely and runs raw SQL queries directly inside the Controller instead. What is the most significant long-term drawback?",
    "options": [
      "It would make the page load slower in every case",
      "Database logic becomes scattered across multiple controllers instead of centralized in one reusable place, making the code harder to maintain",
      "Controllers technically cannot contain SQL syntax",
      "It is not technically possible to query a database from inside a Controller"
    ],
    "correct_answers": [
      "Database logic becomes scattered across multiple controllers instead of centralized in one reusable place, making the code harder to maintain"
    ]
  },
  {
    "id": "q16",
    "page": 16,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "A Model's $allowedFields includes 'title' and 'status'. A new 'priority' column is added to the database table, but $allowedFields is never updated. What happens when a controller tries to save a priority value?",
    "options": [
      "CodeIgniter throws a fatal, uncatchable error immediately",
      "The database automatically adds it to $allowedFields",
      "The priority value is silently dropped and not saved, even though the column exists",
      "The Model refuses to run any queries at all"
    ],
    "correct_answers": [
      "The priority value is silently dropped and not saved, even though the column exists"
    ]
  },
  {
    "id": "q17",
    "page": 17,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "findAll() returns only the first matching record from a table.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": "q18",
    "page": 18,
    "category": "CodeIgniter Basics",
    "type": "matching",
    "question": "",
    "options": [
      "Manages data and communicates with the database"
    ],
    "correct_answers": [],
    "pairs": [
      {
        "prompt": "Model",
        "answer": "Manages data and communicates with the database"
      }
    ]
  },
  {
    "id": "q19",
    "page": 19,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "The public folder should contain the application's business logic, including all Models.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": "q20",
    "page": 20,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "Using Query Builder instead of writing raw SQL strings reduces the risk of SQL injection because Query Builder escapes values automatically.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "True"
    ]
  },
  {
    "id": "q21",
    "page": 21,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "Two developers debate whether to use (:num) or (:any) for a route capturing a task ID. Why might (:num) be the better choice?",
    "options": [
      "(:num) restricts the segment to digits only, preventing obviously invalid IDs like text from reaching the controller",
      "(:num) allows special characters that (:any) does not",
      "(:any) is deprecated in CodeIgniter 4",
      "(:num) runs faster in every situation"
    ],
    "correct_answers": [
      "(:num) restricts the segment to digits only, preventing obviously invalid IDs like text from reaching the controller"
    ]
  },
  {
    "id": "q22",
    "page": 22,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "Which Query Builder method retrieves a single record matching a specific primary key value?",
    "options": [
      "find($id)",
      "first($id)",
      "findOne($id)",
      "getById($id)"
    ],
    "correct_answers": [
      "find($id)"
    ]
  },
  {
    "id": "q23",
    "page": 23,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "Every CodeIgniter application must have at least one Model, even if it does not use a database.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": "q24",
    "page": 24,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "After correctly configuring .env and creating a Model, a page still shows a database connection error. Which of these is the LEAST likely cause?",
    "options": [
      "The database name in .env does not match the actual database",
      "The database credentials in .env are incorrect",
      "MySQL is not running",
      "The view file does not contain a <title> tag"
    ],
    "correct_answers": [
      "The view file does not contain a <title> tag"
    ]
  },
  {
    "id": "q25",
    "page": 25,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "A team stores database passwords directly inside a Model's PHP file instead of in .env. Why is this a weaker practice?",
    "options": [
      "PHP files cannot store passwords longer than 8 characters",
      "Credentials committed inside code are more likely to be exposed and are harder to change per environment than values kept in .env",
      "Models cannot technically contain string values",
      "It causes Query Builder to stop functioning"
    ],
    "correct_answers": [
      "Credentials committed inside code are more likely to be exposed and are harder to change per environment than values kept in .env"
    ]
  },
  {
    "id": "q26",
    "page": 26,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "A Model's table has columns id, title, status, and created_at. Which line of code would correctly insert a new row with only a title, using an instance $model?",
    "options": [
      "$model->new(['title' => 'Buy groceries']);",
      "$model->insert(['title' => 'Buy groceries']);",
      "$model->create('title', 'Buy groceries');",
      "$model->add(['Buy groceries']);"
    ],
    "correct_answers": [
      "$model->insert(['title' => 'Buy groceries']);"
    ]
  },
  {
    "id": "q27",
    "page": 27,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "Between SELECT * FROM tasks WHERE status = '$status' built by directly inserting a variable into a SQL string, versus $builder->where('status', $status)->get();, which is safer and why?",
    "options": [
      "The raw SQL is safer because it is more explicit",
      "Both are equally safe since PHP validates all strings by default",
      "Neither is safe unless a Model class is used",
      "The Query Builder version is safer because it automatically escapes the value, protecting against SQL injection"
    ],
    "correct_answers": [
      "The Query Builder version is safer because it automatically escapes the value, protecting against SQL injection"
    ]
  },
  {
    "id": "q28",
    "page": 28,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "Which of the following correctly describes the \"C\" in MVC?",
    "options": [
      "Class",
      "Component",
      "Configuration",
      "Controller"
    ],
    "correct_answers": [
      "Controller"
    ]
  },
  {
    "id": "q29",
    "page": 29,
    "category": "CodeIgniter Basics",
    "type": "text_input",
    "question": "What term describes an unauthorized attempt to manipulate a database by injecting malicious SQL through user input, which Query Builder helps prevent?",
    "options": [],
    "correct_answers": [],
    "accepted_answers": [
      "SQL injection"
    ]
  },
  {
    "id": "q30",
    "page": 30,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "A controller method is defined as public function about() { return view('about'); }. What must exist for this to work correctly?",
    "options": [
      "A Model named About",
      "A database table named about",
      "A route pointing to this method, and a view file at app/Views/about.php",
      "A .env entry named ABOUT"
    ],
    "correct_answers": [
      "A route pointing to this method, and a view file at app/Views/about.php"
    ]
  },
  {
    "id": "q31",
    "page": 31,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "A Model needs to only allow updates to the 'title' and 'status' fields, not 'created_at'. Which property correctly enforces this?",
    "options": [
      "protected $table = ['title', 'status'];",
      "protected $primaryKey = ['title', 'status'];",
      "protected $allowedFields = ['title', 'status'];",
      "protected $readOnly = ['title', 'status'];"
    ],
    "correct_answers": [
      "protected $allowedFields = ['title', 'status'];"
    ]
  },
  {
    "id": "q32",
    "page": 32,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "The Controller is the component in MVC responsible for deciding what response to send back for a given request.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "True"
    ]
  },
  {
    "id": "q33",
    "page": 33,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "A Model's $allowedFields property lists the database columns that are permitted to be set through mass assignment (like insert() or update()).",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "True"
    ]
  },
  {
    "id": "q34",
    "page": 34,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "Why would skipping the Model layer and querying the database directly inside a View be considered bad practice?",
    "options": [
      "Views cannot technically connect to a database in CodeIgniter",
      "It would make the page load faster",
      "It breaks the separation of concerns central to MVC, mixing data access with presentation and making the code harder to maintain",
      "It is not possible for PHP to run database queries inside a .php file"
    ],
    "correct_answers": [
      "It breaks the separation of concerns central to MVC, mixing data access with presentation and making the code harder to maintain"
    ]
  },
  {
    "id": "q35",
    "page": 35,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "A model defines protected $allowedFields = ['title', 'status'];, but a controller attempts to insert a record with a description field as well. What will most likely happen?",
    "options": [
      "CodeIgniter automatically adds description to $allowedFields",
      "An exception is always thrown, halting the application",
      "The description value is silently ignored because it is not in $allowedFields",
      "The entire insert operation succeeds, including description"
    ],
    "correct_answers": [
      "The description value is silently ignored because it is not in $allowedFields"
    ]
  },
  {
    "id": "q36",
    "page": 36,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "The Model layer in MVC is responsible for rendering the final HTML sent to the browser.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": "q37",
    "page": 37,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "Chaining Query Builder methods, such as where() followed by orderBy(), allows you to filter and sort a query in a single statement.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "True"
    ]
  },
  {
    "id": "q38",
    "page": 38,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "The .env file is used to store view templates.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": "q39",
    "page": 39,
    "category": "CodeIgniter Basics",
    "type": "text_input",
    "question": "What is the term for the special class in CodeIgniter that represents and manages a specific database table?",
    "options": [],
    "correct_answers": [],
    "accepted_answers": [
      "Model"
    ]
  },
  {
    "id": "q40",
    "page": 40,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "A view attempts to display $tasks using a foreach loop, but the page shows the error \"Undefined variable $tasks.\" What is the most likely cause?",
    "options": [
      "The Model's $table property is misspelled",
      "The route was defined with the wrong HTTP verb",
      "The database connection failed",
      "The controller did not include tasks in the data array passed to view()"
    ],
    "correct_answers": [
      "The controller did not include tasks in the data array passed to view()"
    ]
  },
  {
    "id": "q41",
    "page": 41,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "A developer needs a route where visiting /users/45/edit loads the edit form for user ID 45. Which route definition is correct?",
    "options": [
      "$routes->view('/users/45/edit');",
      "$routes->post('/users/(:num)/edit', 'Users::edit');",
      "$routes->get('/users/edit/(:num)', 'Users::edit');",
      "$routes->get('/users/(:num)/edit', 'Users::edit/$1');"
    ],
    "correct_answers": [
      "$routes->get('/users/(:num)/edit', 'Users::edit/$1');"
    ]
  },
  {
    "id": "q42",
    "page": 42,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "Which CodeIgniter file is typically used to store database connection settings such as hostname, username, and database name?",
    "options": [
      "Routes.php",
      "Autoload.php",
      ".env",
      "Database.php only"
    ],
    "correct_answers": [
      ".env"
    ]
  },
  {
    "id": "q43",
    "page": 43,
    "category": "CodeIgniter Basics",
    "type": "matching",
    "question": "",
    "options": [
      "Filters query results based on a condition"
    ],
    "correct_answers": [],
    "pairs": [
      {
        "prompt": "where()",
        "answer": "Filters query results based on a condition"
      }
    ]
  },
  {
    "id": "q44",
    "page": 44,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "Which Query Builder method retrieves every record from a Model's associated table?",
    "options": [
      "selectAll()",
      "findAll()",
      "find()",
      "getAll()"
    ],
    "correct_answers": [
      "findAll()"
    ]
  },
  {
    "id": "q45",
    "page": 45,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "What is the main advantage of separating an application's routes into app/Config/Routes.php rather than scattering URL logic throughout controllers?",
    "options": [
      "It is required for Composer to function",
      "It gives a single, organized place to see and manage all the URLs the application responds to",
      "It makes the application run faster",
      "It removes the need for controllers entirely"
    ],
    "correct_answers": [
      "It gives a single, organized place to see and manage all the URLs the application responds to"
    ]
  },
  {
    "id": "q46",
    "page": 46,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "Which method would you chain to where('status', 'pending') to also sort the returned records by their creation date, newest first?",
    "options": [
      "arrange('created_at', 'newest')",
      "filter('created_at')",
      "sort('created_at')",
      "orderBy('created_at', 'DESC')"
    ],
    "correct_answers": [
      "orderBy('created_at', 'DESC')"
    ]
  },
  {
    "id": "q47",
    "page": 47,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "A route is defined only as $routes->get('/tasks', 'Tasks::index');. A user submits a form via POST to the same /tasks URL expecting Tasks::store() to run. What will most likely happen?",
    "options": [
      "Tasks::store() runs normally because the URL matches",
      "The database saves the data anyway, bypassing the routing system",
      "The request fails or returns an error, since no POST route was defined for /tasks",
      "CodeIgniter automatically creates a POST route based on the GET one"
    ],
    "correct_answers": [
      "The request fails or returns an error, since no POST route was defined for /tasks"
    ]
  },
  {
    "id": "q48",
    "page": 48,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "CodeIgniter automatically creates database tables the first time a Model is used.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": "q49",
    "page": 49,
    "category": "CodeIgniter Basics",
    "type": "matching",
    "question": "",
    "options": [
      "Stores environment-specific settings such as database credentials"
    ],
    "correct_answers": [],
    "pairs": [
      {
        "prompt": ".env",
        "answer": "Stores environment-specific settings such as database credentials"
      }
    ]
  },
  {
    "id": "q50",
    "page": 50,
    "category": "CodeIgniter Basics",
    "type": "multiple_choice",
    "question": "Which folder in a CodeIgniter 4 project contains the application's controllers, models, and views?",
    "options": [
      "writable",
      "app",
      "public",
      "system"
    ],
    "correct_answers": [
      "app"
    ]
  },
  {
    "id": "q51",
    "page": 51,
    "category": "CodeIgniter Advanced",
    "type": "matching",
    "question": "",
    "options": [
      "Describes what submitted input must satisfy before saving"
    ],
    "correct_answers": [],
    "pairs": [
      {
        "prompt": "Validation rule",
        "answer": "Describes what submitted input must satisfy before saving"
      }
    ]
  },
  {
    "id": "q52",
    "page": 52,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "A login page shows 'Invalid credentials' only after a failed attempt and then the message disappears. What feature most likely supports this?",
    "options": [
      "Flash data",
      "File upload rules",
      "Seeder classes",
      "Route placeholders"
    ],
    "correct_answers": [
      "Flash data"
    ]
  },
  {
    "id": "q53",
    "page": 53,
    "category": "CodeIgniter Advanced",
    "type": "matching",
    "question": "",
    "options": [
      "Stores small user-related data across requests"
    ],
    "correct_answers": [],
    "pairs": [
      {
        "prompt": "Session",
        "answer": "Stores small user-related data across requests"
      }
    ]
  },
  {
    "id": "q54",
    "page": 54,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "What should happen after a successful login?",
    "options": [
      "Delete all routes.",
      "Disable the session library.",
      "Store appropriate user identity data in the session and redirect to a protected page.",
      "Display the password in the browser."
    ],
    "correct_answers": [
      "Store appropriate user identity data in the session and redirect to a protected page."
    ]
  },
  {
    "id": "q55",
    "page": 55,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "Why should access-control checks happen before displaying protected content?",
    "options": [
      "To prevent unauthorized users from seeing restricted pages.",
      "To remove the need for HTML.",
      "To avoid using routes.",
      "To make CSS files load faster."
    ],
    "correct_answers": [
      "To prevent unauthorized users from seeing restricted pages."
    ]
  },
  {
    "id": "q56",
    "page": 56,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "Validation should normally run after saving the submitted data.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": "q57",
    "page": 57,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "Which line is a reasonable way to remove all authentication session data on logout?",
    "options": [
      "view('logout')->erase();",
      "$model->dropSessionTable();",
      "session()->destroy();",
      "$routes->deleteAll();"
    ],
    "correct_answers": [
      "session()->destroy();"
    ]
  },
  {
    "id": "q58",
    "page": 58,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "A page successfully saves a customer but displays a blank list afterward. The controller calls return view('customers/index') without passing records. What should be checked first?",
    "options": [
      "Whether the CSS file has a body tag.",
      "Whether the public folder was renamed to app.",
      "Whether customer data is retrieved and passed to the view.",
      "Whether the image upload folder exists."
    ],
    "correct_answers": [
      "Whether customer data is retrieved and passed to the view."
    ]
  },
  {
    "id": "q59",
    "page": 59,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "A student saves uploaded avatars before checking file type and size. What is the main risk?",
    "options": [
      "Unsafe or unexpected files may already be stored before rejection.",
      "The controller will always skip routing.",
      "The browser will not display HTML.",
      "The database cannot store filenames."
    ],
    "correct_answers": [
      "Unsafe or unexpected files may already be stored before rejection."
    ]
  },
  {
    "id": "q60",
    "page": 60,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "A protected page should verify the user's authenticated state before showing restricted content.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "True"
    ]
  },
  {
    "id": "q61",
    "page": 61,
    "category": "CodeIgniter Advanced",
    "type": "text_input",
    "question": "What term refers to the process of verifying a user's identity?",
    "options": [],
    "correct_answers": [],
    "accepted_answers": [
      "Authentication"
    ]
  },
  {
    "id": "q62",
    "page": 62,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "Flash data is intended to last permanently until manually deleted from the database.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": "q63",
    "page": 63,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "What is the safest general description of authentication?",
    "options": [
      "Styling a login button.",
      "Rendering a database table.",
      "Changing all routes to POST.",
      "Confirming a user's identity before allowing access."
    ],
    "correct_answers": [
      "Confirming a user's identity before allowing access."
    ]
  },
  {
    "id": "q64",
    "page": 64,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "A Model can be used by a controller to insert, update, retrieve, or delete records.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "True"
    ]
  },
  {
    "id": "q65",
    "page": 65,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "File type and file size restrictions help reduce unsafe upload behavior.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "True"
    ]
  },
  {
    "id": "q66",
    "page": 66,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "Why should a Delete action normally be submitted using POST rather than a normal GET link?",
    "options": [
      "POST is required for all routes.",
      "GET routes cannot use controllers.",
      "Destructive actions should not be triggered by simple page visits or crawlers.",
      "GET cannot open pages."
    ],
    "correct_answers": [
      "Destructive actions should not be triggered by simple page visits or crawlers."
    ]
  },
  {
    "id": "q67",
    "page": 67,
    "category": "CodeIgniter Advanced",
    "type": "matching",
    "question": "",
    "options": [
      "Stores a short message for the next request"
    ],
    "correct_answers": [],
    "pairs": [
      {
        "prompt": "Flash data",
        "answer": "Stores a short message for the next request"
      }
    ]
  },
  {
    "id": "q68",
    "page": 68,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "Which CodeIgniter service is commonly used to access session functionality?",
    "options": [
      "view()",
      "session()",
      "model()",
      "service('routes')"
    ],
    "correct_answers": [
      "session()"
    ]
  },
  {
    "id": "q69",
    "page": 69,
    "category": "CodeIgniter Advanced",
    "type": "matching",
    "question": "",
    "options": [
      "Restores previously submitted input on a redisplayed form"
    ],
    "correct_answers": [],
    "pairs": [
      {
        "prompt": "old()",
        "answer": "Restores previously submitted input on a redisplayed form"
      }
    ]
  },
  {
    "id": "q70",
    "page": 70,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "Which line is a reasonable way to set session data in CodeIgniter?",
    "options": [
      "$routes->setSession(true);",
      "$model->session('on');",
      "view()->set('login');",
      "session()->set(['isLoggedIn' => true]);"
    ],
    "correct_answers": [
      "session()->set(['isLoggedIn' => true]);"
    ]
  },
  {
    "id": "q71",
    "page": 71,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "What is the main purpose of logout?",
    "options": [
      "To insert a database row.",
      "To change the public folder.",
      "To create a new user record.",
      "To remove the user's authenticated session state."
    ],
    "correct_answers": [
      "To remove the user's authenticated session state."
    ]
  },
  {
    "id": "q72",
    "page": 72,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "Which CodeIgniter UploadedFile method generates a safer unique filename before moving the file?",
    "options": [
      "escapeName()",
      "makeSafe()",
      "getRandomName()",
      "newFilename()"
    ],
    "correct_answers": [
      "getRandomName()"
    ]
  },
  {
    "id": "q73",
    "page": 73,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "Hiding a menu link is enough to secure a protected page even if the route remains accessible.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": "q74",
    "page": 74,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "A user logs in successfully, but protected pages still redirect to login. What should be checked first?",
    "options": [
      "Whether the CSS file is minified.",
      "Whether the expected session key is set and read consistently.",
      "Whether the public folder contains images.",
      "Whether the database table has a title column."
    ],
    "correct_answers": [
      "Whether the expected session key is set and read consistently."
    ]
  },
  {
    "id": "q75",
    "page": 75,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "Why should passwords be verified using a password-checking function rather than comparing plain text?",
    "options": [
      "Plain text comparison is slower in every case.",
      "It removes the need for login forms.",
      "Secure verification works with hashed passwords instead of exposing raw passwords.",
      "It turns sessions into database tables."
    ],
    "correct_answers": [
      "Secure verification works with hashed passwords instead of exposing raw passwords."
    ]
  },
  {
    "id": "q76",
    "page": 76,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "What is the main purpose of redisplaying old input after validation fails?",
    "options": [
      "To delete the failed record automatically.",
      "To bypass validation on the second submission.",
      "To let users correct mistakes without retyping every field.",
      "To show the database password."
    ],
    "correct_answers": [
      "To let users correct mistakes without retyping every field."
    ]
  },
  {
    "id": "q77",
    "page": 77,
    "category": "CodeIgniter Advanced",
    "type": "text_input",
    "question": "What acronym refers to Create, Read, Update, and Delete operations?",
    "options": [],
    "correct_answers": [],
    "accepted_answers": [
      "CRUD"
    ]
  },
  {
    "id": "q78",
    "page": 78,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "Which session value would be reasonable to store after login?",
    "options": [
      "The complete database dump.",
      "The user's plaintext password.",
      "The logged-in user's id or username.",
      "The Composer executable file."
    ],
    "correct_answers": [
      "The logged-in user's id or username."
    ]
  },
  {
    "id": "q79",
    "page": 79,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "Which form attribute is required when a CodeIgniter page must upload a file?",
    "options": [
      "enctype=\"multipart/form-data\"",
      "target=\"_blank\"",
      "autocomplete=\"off\"",
      "method=\"GET\""
    ],
    "correct_answers": [
      "enctype=\"multipart/form-data\""
    ]
  },
  {
    "id": "q80",
    "page": 80,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "What is flash data best used for?",
    "options": [
      "Long-term password storage.",
      "A database backup.",
      "A permanent user role table.",
      "A message that should be available only for the next request."
    ],
    "correct_answers": [
      "A message that should be available only for the next request."
    ]
  },
  {
    "id": "q81",
    "page": 81,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "A developer stores the full password hash and user role in session after login. What should be evaluated?",
    "options": [
      "Whether views can run without controllers.",
      "Whether only necessary, non-sensitive session data is stored.",
      "Whether the public folder should store controllers.",
      "Whether sessions can replace all database queries."
    ],
    "correct_answers": [
      "Whether only necessary, non-sensitive session data is stored."
    ]
  },
  {
    "id": "q82",
    "page": 82,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "A CodeIgniter form that uploads files must use multipart/form-data.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "True"
    ]
  },
  {
    "id": "q83",
    "page": 83,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "What does validation_show_error('title') display in a CodeIgniter view?",
    "options": [
      "The controller class name.",
      "The validation message for the title field.",
      "The current route name.",
      "The uploaded file size."
    ],
    "correct_answers": [
      "The validation message for the title field."
    ]
  },
  {
    "id": "q84",
    "page": 84,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "A login workflow usually redirects after successful authentication.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "True"
    ]
  },
  {
    "id": "q85",
    "page": 85,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "Which validation rule makes a form field required before the controller saves data?",
    "options": [
      "required",
      "present",
      "exists",
      "needed"
    ],
    "correct_answers": [
      "required"
    ]
  },
  {
    "id": "q86",
    "page": 86,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "Which line moves an uploaded file object named $file into the public uploads folder using a generated name?",
    "options": [
      "$file->render('uploads');",
      "$file->copyToDatabase($newName);",
      "$file->move(FCPATH . 'uploads', $newName);",
      "$file->saveAsRoute($newName);"
    ],
    "correct_answers": [
      "$file->move(FCPATH . 'uploads', $newName);"
    ]
  },
  {
    "id": "q87",
    "page": 87,
    "category": "CodeIgniter Advanced",
    "type": "text_input",
    "question": "What CodeIgniter constant points to the public front-controller path, often used when saving files under public/uploads?",
    "options": [],
    "correct_answers": [],
    "accepted_answers": [
      "FCPATH"
    ]
  },
  {
    "id": "q88",
    "page": 88,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "Which approach is best when a real system should avoid permanently deleting user accounts?",
    "options": [
      "Run delete() through a GET link.",
      "Remove validation rules for delete routes.",
      "Use an archive or deactivation status when possible.",
      "Store deleted records in the view file."
    ],
    "correct_answers": [
      "Use an archive or deactivation status when possible."
    ]
  },
  {
    "id": "q89",
    "page": 89,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "What is the primary purpose of a session in a web application?",
    "options": [
      "To permanently replace the database.",
      "To write CSS rules into views.",
      "To create routes automatically.",
      "To store small user-related data across multiple requests."
    ],
    "correct_answers": [
      "To store small user-related data across multiple requests."
    ]
  },
  {
    "id": "q90",
    "page": 90,
    "category": "CodeIgniter Advanced",
    "type": "text_input",
    "question": "What CodeIgniter feature is used for temporary messages such as 'Login successful'?",
    "options": [],
    "correct_answers": [],
    "accepted_answers": [
      "Flash data"
    ]
  },
  {
    "id": "q91",
    "page": 91,
    "category": "CodeIgniter Advanced",
    "type": "text_input",
    "question": "What should a controller check before showing a protected page?",
    "options": [],
    "correct_answers": [],
    "accepted_answers": [
      "Session/authentication state"
    ]
  },
  {
    "id": "q92",
    "page": 92,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "Deleting records through a normal GET link is a safe default for production systems.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": "q93",
    "page": 93,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "A team wants every protected controller method to repeat the same session-check code. What is a better long-term approach?",
    "options": [
      "Store login code in each view.",
      "Use a reusable check, filter, or shared helper pattern.",
      "Remove authentication entirely.",
      "Use GET links for logout only."
    ],
    "correct_answers": [
      "Use a reusable check, filter, or shared helper pattern."
    ]
  },
  {
    "id": "q94",
    "page": 94,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "What is a common reason to redirect after processing login?",
    "options": [
      "It deletes the controller.",
      "It disables validation.",
      "It prevents the same form submission from being repeated by browser refresh.",
      "It changes the PHP version."
    ],
    "correct_answers": [
      "It prevents the same form submission from being repeated by browser refresh."
    ]
  },
  {
    "id": "q95",
    "page": 95,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "What should be saved in the database after a successful public image upload?",
    "options": [
      "Only the generated filename or path needed to display the file.",
      "The user's original computer folder path.",
      "The contents of $_FILES without checking it.",
      "The entire binary file inside a text column."
    ],
    "correct_answers": [
      "Only the generated filename or path needed to display the file."
    ]
  },
  {
    "id": "q96",
    "page": 96,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "Why should validation run before insert() or update() in a CodeIgniter controller?",
    "options": [
      "It makes the view load before the controller.",
      "It automatically creates the database table.",
      "It prevents invalid or unsafe input from being saved.",
      "It removes the need for routes."
    ],
    "correct_answers": [
      "It prevents invalid or unsafe input from being saved."
    ]
  },
  {
    "id": "q97",
    "page": 97,
    "category": "CodeIgniter Advanced",
    "type": "matching",
    "question": "",
    "options": [
      "Verifies that a user is who they claim to be"
    ],
    "correct_answers": [],
    "pairs": [
      {
        "prompt": "Authentication",
        "answer": "Verifies that a user is who they claim to be"
      }
    ]
  },
  {
    "id": "q98",
    "page": 98,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "The uploaded file's original name should always be trusted as the final server filename.",
    "options": [
      "True",
      "False"
    ],
    "correct_answers": [
      "False"
    ]
  },
  {
    "id": "q99",
    "page": 99,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "A form field is named email, but the controller validates user_email. What is the most likely result?",
    "options": [
      "CodeIgniter will combine both names.",
      "The database will rename the column.",
      "Validation will not check the submitted email field correctly.",
      "The route will change automatically."
    ],
    "correct_answers": [
      "Validation will not check the submitted email field correctly."
    ]
  },
  {
    "id": "q100",
    "page": 100,
    "category": "CodeIgniter Advanced",
    "type": "multiple_choice",
    "question": "Which validation rule set best restricts an uploaded avatar to JPG or PNG images no larger than 2 MB?",
    "options": [
      "required|min_length[2]",
      "valid_email|permit_empty",
      "is_unique[avatar]",
      "uploaded[avatar]|max_size[avatar,2048]|mime_in[avatar,image/jpg,image/jpeg,image/png]"
    ],
    "correct_answers": [
      "uploaded[avatar]|max_size[avatar,2048]|mime_in[avatar,image/jpg,image/jpeg,image/png]"
    ]
  }
];
