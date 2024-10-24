"use server"

export default async function getUsers() {
    const users = await fetch("http://localhost:3333/users")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            return data
        })
        .catch((error) => console.error(error))
    return users
}