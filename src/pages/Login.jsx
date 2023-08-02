import React, { useState } from "react"
import { useLoaderData, Form, redirect } from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export const action = async ({ request }) => {
    let formData = await request.formData();
    const email = formData.get('email')
    const password = formData.get('password')
    const data = await loginUser({ email, password })
    localStorage.setItem("loggedin", true)
    return redirect('/host')
}


export default function Login() {
    const [status, setStatus] = useState()
    const [error, setError] = useState()
    const message = useLoaderData()   

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {error && <h3 className="red">{error.message}</h3>}

            <Form method='post' className="login-form">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button 
                    disabled={status === "submitting"}
                >
                    {status === "submitting" 
                        ? "Logging in..." 
                        : "Log in"
                    }
                </button>
            </Form>
        </div>
    )
}
