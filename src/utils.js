import React from "react"
import { Outlet, redirect } from "react-router-dom"

export function requireAuth() {
    const isLoggedIn =  localStorage.setItem("loggedin")
    if (!isLoggedIn) {
        return redirect("/login?message=You must log in first.")
    }
    return <Outlet />
}