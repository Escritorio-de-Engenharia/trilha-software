import { users } from "../model/users.js";

export class UsersController {
    /**
     * Retorna todos os usuários
     * @returns {Array} users
     */
    findAll() {
        return users;
    }

    /**
     * Retorna um usuário específico
     * @param {number} id
     * @returns {Object} user
     */
    findOne(id) {
        return users.find(user => user.id === id);
    }

    /**
     * Cria um novo usuário
     * @param {Object} user
     * @returns {Object} user
     * @example
     * const user = {
     *    id: 3,
     *   name: 'John Doe',
     *  email: "Rian@teste.com"
     * }
     */
    create(user) {
        users.push(user);
        return user;
    }

    /**
     * Atualiza o usuário
     * @param {*} id 
     * @param {*} user 
     * @returns 
     */
    update(id, user) {
        const index = users.findIndex(user => user.id === id);
        users[index] = user;
        return user;
    }

    /**
     * Delete um usuário
     * @param {*} id 
     * @returns 
     */
    delete(id) {
        const index = users.findIndex(user => user.id === id);
        users.splice(index, 1);
        return users;
    }
}