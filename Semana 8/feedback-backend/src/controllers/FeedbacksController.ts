import db from "../database/database";
import { Feedback } from "../types/Feedback";

export class FeedbacksController {
  findAll() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM feedbacks";

      db.all(sql, [], (error, rows) => {
        if (error) {
          reject(error);
        }

        resolve(rows);
      });
    });
  }

  findOne(id: number) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM feedbacks WHERE id = ?";

      db.get(sql, [id], (error, row) => {
        if (error) {
          reject(error);
        }

        resolve(row);
      });
    });
  }

  create(feedback: Omit<Feedback, "id" | "created_at">) {
    return new Promise((resolve, reject) => {
      const { category_id, comment, event_id, name } = feedback;
      const sql =
        "INSERT INTO feedbacks (name, comment, event_id, category_id) VALUES (?, ?, ?, ?)";

      db.run(sql, [name, comment, event_id, category_id], function (error) {
        if (error) {
          reject(error);
        }

        const id = this.lastID;
        resolve(id);
      });
    });
  }

  update(feedback: Omit<Feedback, "created_at">) {
    return new Promise((resolve, reject) => {
      const { id, category_id, comment, event_id, name } = feedback;
      const sql =
        "UPDATE feedbacks SET name = ?, comment = ?, event_id = ?, category_id = ? WHERE id = ?";

      db.run(sql, [name, comment, event_id, category_id, id], (error) => {
        if (error) {
          reject(error);
        }

        resolve(id);
      });
    });
  }

  delete(id: number) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM feedbacks WHERE id = ?";

      db.run(sql, [id], (error) => {
        if (error) {
          reject(error);
        }

        resolve(id);
      });
    });
  }
}
