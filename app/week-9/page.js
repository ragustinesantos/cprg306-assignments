"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function SignInPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  console.dir(user);

  return (
    <main>
      <header>
        <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
      </header>
      {user ? (
        <div className="text-lg">
          <p>Signed in as ({user.email})</p>
          <p>
            <Link
              className=" text-white hover:underline"
              href="./week-9/shopping-list"
            >
              Continue to your Shopping List
            </Link>
          </p>

          <button onClick={handleSignOut} className=" text-white">
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <button onClick={handleSignIn} className=" text-white">
            Sign in with Github
          </button>
        </div>
      )}
    </main>
  );
}
