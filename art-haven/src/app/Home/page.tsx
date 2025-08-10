'use client'
import { useEffect, useState } from "react";
import { supabase } from '../../supabase-client';
import { useRouter } from 'next/navigation';

export default function HomePage() {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                router.push('/auth'); // Redirect to auth page if not signed in
            } else {
                setLoading(false);
            }
        };
        checkAuth();
    }, [router]);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Welcome to Home Page!</h1>
            {/* Your protected content here */}
        </div>
    );
}