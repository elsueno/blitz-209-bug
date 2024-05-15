'use client'

import styles from "@/src/app/styles/Home.module.css"
import { LogoutButton } from "@/src/app/(auth)/components/LogoutButton"
import Link from "next/link"
import getCurrentUser from "@/src/app/users/queries/getCurrentUser"
import { useQuery } from "@blitzjs/rpc"

export function User() {
  const [currentUser] = useQuery(getCurrentUser, null)
  return (
    <div className={styles.buttonContainer}>
      {currentUser ? (
        <>
          <LogoutButton />
          <div>
            User id: <code>{currentUser.id}</code>
            <br />
            User role: <code>{currentUser.role}</code>
          </div>
        </>
      ) : (
        <>
          <Link href="/signup" className={styles.button}>
            <strong>Sign Up</strong>
          </Link>
          <Link href="/login" className={styles.loginButton}>
            <strong>Login</strong>
          </Link>
        </>
      )}
    </div>

  )
}
