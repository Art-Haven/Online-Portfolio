import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            <h1>Welcome to Art-Haven!</h1>
            <Link href="/Auth">Sign Up / Log In</Link>
        </div>
    );
}