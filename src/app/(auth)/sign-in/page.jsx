"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import NextLink from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
          setError("All fields are required.");
          return;
        }

        setLoading(true);
        const { error } = await authClient.signIn.email({
          email,
          password,
        });
        setLoading(false);

        if (error) {
          setError(error.message || "Invalid email or password.");
          return;
        }

        router.push("/dashboard");
      };

    return (
        <div
            className="relative flex min-h-screen items-center justify-center px-4 py-16 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/cta-bg.png')" }}
        >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative">
                {/* form content unchanged */}
                <div
                    className="flex w-1000 items-center justify-center px-4 py-16"
                >
                    <div className="absolute inset-0 bg-black/60" />

                    <div className="relative h-120 w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8">
                        <h1 className="text-2xl font-bold text-center">
                            Welcome back
                        </h1>
                        <p className="mt-2 text-center text-sm text-gray-400">
                            Sign in to continue to HireLoop
                        </p>

                        {error && (
                            <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                            <div>
                                <label className="text-xl text-gray-400">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-[#6366f1]"
                                />
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="text-xl text-gray-400">
                                        Password
                                    </label>
                                </div>
                                <div className="relative mt-1">
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        placeholder="••••••••"
                                        className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 pr-10 text-sm outline-none focus:border-[#6366f1]"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={16} />
                                        ) : (
                                            <Eye size={16} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full rounded-lg bg-[#6366f1] py-2.5 text- font-medium text-white disabled:opacity-50"
                            >
                                {loading ? "Signing in..." : "Sign In"}
                            </button>
                        </form>

                        <p className="mt-6 text-center text-sm text-gray-400">
                            Do not have an account?{" "}
                            <NextLink
                                href="/sign-up"
                                className="text-[#6366f1] hover:underline"
                            >
                                Sign Up
                            </NextLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
