import db from "../database/database";
import { Category } from "../types/Category";

export class CategoriesController {
  findAll() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM categories";

      db.all(sql, [], (error, rows: Category[]) => {
        if (error) {
          reject(error);
        } else {
          resolve(rows);
        }
      });
    });
  }

  findOne(id: number) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM categories WHERE id = ?";

      db.get(sql, [id], (error, row: Category) => {
        if (error) {
          reject(error);
        } else {
          resolve(row);
        }
      });
    });
  }

  create(category: Omit<Category, "id">) {
    return new Promise((resolve, reject) => {
      const { name } = category;
      const sql = "INSERT INTO categories (name) VALUES (?)";

      db.run(sql, [name], (error) => {
        if (error) {
          reject(error);
        } else {
          resolve("Category created!");
        }
      });
    });
  }

  update(category: Category) {
    return new Promise((resolve, reject) => {
      const { name, id } = category;
      const sql = "UPDATE categories SET name = ? WHERE id = ?";

      db.run(sql, [name, id], (error) => {
        if (error) {
          reject(error);
        } else {
          resolve("Category updated!");
        }
      });
    });
  }

  delete(id: number) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM categories WHERE id = ?";

      db.run(sql, [id], (error) => {
        if (error) {
          reject(error);
        } else {
          resolve("Category deleted!");
        }
      });
    });
  }
}
