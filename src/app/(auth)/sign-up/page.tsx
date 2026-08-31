"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import NextLink from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import {Description, Label, Radio, RadioGroup} from "@heroui/react";


export default function SignUpPage() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const [role, setRole] = useState('seeker');



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!name || !email || !password) {
            setError("All fields are required.");
            return;
        }
        if (password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }

        setLoading(true);
        const { error } = await authClient.signUp.email({
            name,
            email,
            password,
            role,
            callbackURL: "/",
        });
        setLoading(false);

        if (error) {
            setError(error.message || "Something went wrong. Try again.");
            return;
        }

        setSuccess("Account created successfully! Redirecting...");
        setTimeout(() => router.push("/dashboard"), 1500);
    };

    return (
        <div
            className="relative flex min-h-screen items-center justify-center px-4 py-16 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/cta-bg.png')" }}
        >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative">
                {/* form content unchanged */}
                <div className="flex w-1000 items-center justify-center px-4 py-16">
                    <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8">
                        <h1 className="text-2xl font-bold text-center">
                            Create your account
                        </h1>
                        <p className="mt-2 text-center text-sm text-gray-400">
                            Join HireLoop and find your dream job
                        </p>

                        {error && (
                            <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
                                {error}
                            </div>
                        )}
                        {success && (
                            <div className="mt-4 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400">
                                {success}
                            </div>
                        )}

                        <form
                            onSubmit={handleSubmit}
                            className="mt-6 space-y-4"
                        >
                            {/* name */}
                            <div>
                                <label className="text-xl text-gray-400">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Doe"
                                    className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none focus:border-[#6366f1]"
                                />
                            </div>

                            {/* email  */}
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

                            {/* password */}
                            <div>
                                <label className="text-xl text-gray-400">
                                    Password
                                </label>
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

                            {/* user role */}
                            <div className="flex flex-col gap-4 items-center py-5">
                                <Label>Subscription plan</Label>
                                <RadioGroup defaultValue="seeker" name="role" onChange={value => setRole(value)} orientation="horizontal">
                                    <Radio value="seeker">
                                    <Radio.Content>
                                        <Radio.Control>
                                        <Radio.Indicator />
                                        </Radio.Control>
                                        Job Seeker
                                    </Radio.Content>
                                    <Description>For Finding Jobs</Description>
                                    </Radio>
                                    <Radio value="recruiter">
                                    <Radio.Content>
                                        <Radio.Control>
                                        <Radio.Indicator />
                                        </Radio.Control>
                                        Recruiter
                                    </Radio.Content>
                                    <Description>For Hiring</Description>
                                    </Radio>
                                </RadioGroup>
                            </div>


                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full rounded-lg bg-[#6366f1] py-2.5 text-xl font-medium text-white disabled:opacity-50"
                            >
                                {loading ? "Creating account..." : "Sign Up"}
                            </button>
                        </form>

                        <p className="mt-6 text-center text-sm text-gray-400">
                            Already have an account?{" "}
                            <NextLink
                                href="/sign-in"
                                className="text-[#6366f1] hover:underline"
                            >
                                Sign In
                            </NextLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
