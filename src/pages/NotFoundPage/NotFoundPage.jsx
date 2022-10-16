import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
    return (
        <div>
            <h1>OOPS the page not found</h1>
            <h2>Maybe those links can help you:</h2>
            <ul>
                <li>
                    <Link to={"/post"}>Posts</Link>
                </li>
                <li>
                    <Link to={"/my-books"}>My books</Link>
                </li>
            </ul>
        </div>
    )
}
