import { verbose } from "sqlite3";

const DB_SOURCE = "db.sqlite";

const sqlite3 = verbose();

const db = new sqlite3.Database(DB_SOURCE, (error) => {
  if (error) {
    console.log(error.message);
    throw error;
  } else {
    console.log("Connected to the SQLite database.");

    db.run(
      `CREATE TABLE events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,  
    title TEXT NOT NULL,                  
    description TEXT,                     
    date DATETIME NOT NULL         
)`,
      (error) => {
        if (error) {
          console.log("Table already exists.");
        } else {
          console.log("Table created.");
          const insert =
            "INSERT INTO events (title, description, date) VALUES (?,?,?)";

          db.run(insert, ["Event 1", "Description 1", "2021-08-01"]);
          db.run(insert, ["Event 2", "Description 2", "2021-08-02"]);
        }
      }
    );

    db.run(
      `CREATE TABLE categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,  
      name TEXT NOT NULL UNIQUE     
  )`,
      (error) => {
        if (error) {
          console.log("Table already exists.");
        } else {
          console.log("Table created.");
          const insert = "INSERT INTO categories (name) VALUES (?)";
          db.run(insert, ["Elogio"]);
          db.run(insert, ["Crítica"]);
          db.run(insert, ["Sugestão"]);
        }
      }
    );

    db.run(
      `CREATE TABLE feedbacks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,  
    event_id INTEGER NOT NULL,               
    category_id INTEGER NOT NULL,            
    name TEXT,                                 
    comment TEXT NOT NULL,                    
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE, 
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL 
)`,
      (error) => {
        if (error) {
          console.log("Table already exists.");
        } else {
          console.log("Table created.");
          const insert =
            "INSERT INTO feedbacks (event_id, category_id, name, comment) VALUES (?,?,?,?)";

          db.run(insert, [1, 1, "Name 1", "Comment 1"]);
          db.run(insert, [1, 2, "Name 2", "Comment 2"]);
          db.run(insert, [2, 3, "Name 3", "Comment 3"]);
          db.run(insert, [2, 1, "Name 4", "Comment 4"]);
          db.run(insert, [2, 2, "Name 5", "Comment 5"]);
        }
      }
    );
  }
});

export default db;
