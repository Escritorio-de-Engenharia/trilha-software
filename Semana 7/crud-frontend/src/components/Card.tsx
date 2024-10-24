"use client"

import { useEffect, useState } from "react"
import getUsers from "@/actions/getUsers"
import "../app/card.css"

type User = {
    id: number,
    name: string,
    email: string
}

export default function Card() {
    const [users, setUsers] = useState<User[] | undefined>()

    useEffect(() => {
        getUsers()
            .then((data) => {
                setUsers(data)
            })
    }, [])

    return (
        <div className="card">
            <h1 className="title">Users</h1>
            <ul className="list">
                {users && users?.map((user) => (
                    <div key={user.id}>
                        <li >{user.name}</li>
                        <li >{user.email}</li>
                    </div>
                ))}
            </ul>
        </div>
    )
}