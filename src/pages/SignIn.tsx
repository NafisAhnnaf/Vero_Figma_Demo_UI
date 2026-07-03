import React from 'react';
import { useNavigate } from 'react-router';
import { VeroLogo } from "../components/shared/Avatar";

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Decorative blurred circles matching design */}
      <div
        className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full pointer-events-none opacity-50 dark:opacity-20"
        style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)", filter: "blur(64px)" }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none opacity-45 dark:opacity-20"
        style={{ background: "radial-gradient(circle, var(--chart-2) 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="relative z-10 w-[420px] bg-card rounded-3xl shadow-lg border border-border p-12">
        <div className="flex flex-col items-center mb-9">
          <VeroLogo size="lg" />
          <h1 className="text-2xl font-bold text-foreground tracking-tight mt-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Vero
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Your team's unified workspace.</p>
        </div>

        <div className="flex flex-col gap-3 mb-5">
          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-input-background rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary/20 transition-all border border-transparent"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-input-background rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary/20 transition-all border border-transparent"
          />
        </div>

        <div className="flex justify-end mb-5">
          <button className="text-xs text-primary hover:underline font-medium">Forgot password?</button>
        </div>

        <button 
          onClick={() => navigate('/')}
          className="w-full bg-primary text-primary-foreground rounded-full py-3 text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors mb-5"
        >
          Sign In
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">or continue with</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="flex flex-col gap-2.5 mb-7">
          <button className="w-full flex items-center justify-center gap-2.5 bg-input-background rounded-xl py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors border border-border">
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2.5 bg-input-background rounded-xl py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors border border-border">
            <svg width="16" height="16" viewBox="0 0 24 24" className="fill-foreground">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Continue with GitHub
          </button>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Don't have an account?{" "}
          <span className="text-primary font-semibold cursor-pointer hover:underline">Sign up</span>
        </p>
      </div>
    </div>
  );
}
