import db from "../database/database";
import { Event } from "../types/Event";
import { Feedback } from "../types/Feedback";

export class EventsController {
  findAll(): Promise<Event[]> {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM events";

      db.all(sql, [], (error, rows: Event[]) => {
        if (error) {
          reject(error); // Rejeita a Promise se ocorrer um erro
        } else {
          resolve(rows); // Resolve a Promise com as rows
        }
      });
    });
  }

  findOne(id: number): Promise<Event> {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM events WHERE id = ?";

      db.get(sql, [id], (error, row: Event) => {
        if (error) {
          reject(error);
        } else {
          resolve(row);
        }
      });
    });
  }

  create(event: Omit<Event, "id">): Promise<string> {
    return new Promise((resolve, reject) => {
      const { title, description, date } = event;
      const sql =
        "INSERT INTO events (title, description, date) VALUES (?, ?, ?)";

      db.run(sql, [title, description, date], (error) => {
        if (error) {
          reject(error);
        } else {
          resolve("Event created!");
        }
      });
    });
  }

  update(event: Event): Promise<string> {
    return new Promise((resolve, reject) => {
      const { title, description, date, id } = event;
      const sql =
        "UPDATE events SET title = ?, description = ?, date = ? WHERE id = ?";

      db.run(sql, [title, description, date, id], (error) => {
        if (error) {
          reject(error);
        } else {
          resolve("Event updated!");
        }
      });
    });
  }

  delete(id: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM events WHERE id = ?";

      db.run(sql, [id], (error) => {
        if (error) {
          reject(error);
        } else {
          resolve("Event deleted!");
        }
      });
    });
  }

  findFeedbacks(id: number): Promise<Feedback[]> {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM feedbacks WHERE event_id = ?";

      db.all(sql, [id], (error, rows: Feedback[]) => {
        if (error) {
          reject(error);
        } else {
          resolve(rows);
        }
      });
    });
  }
}
