"use client";

import { useEffect } from "react";
import { AppProvider, useApp } from "@/lib/context";
import Navbar             from "@/components/layout/Navbar";
import AuthScreen         from "@/components/auth/AuthScreen";
import CompleteProfile    from "@/components/auth/CompleteProfile";
import CreateVault        from "@/components/vault/CreateVault";
import VaultSuccess       from "@/components/vault/VaultSuccess";
import OwnerDashboard     from "@/components/dashboard/OwnerDashboard";
import BeneficiaryDashboard from "@/components/beneficiary/BeneficiaryDashboard";
import ClaimPortal        from "@/components/beneficiary/ClaimPortal";

/* ── Screen router ─────────────────────────────────────────── */
function AppRouter() {
  const { state } = useApp();

  // Apply dark/light theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      state.isDark ? "dark" : "light"
    );
  }, [state.isDark]);

  const screens: Record<string, React.ReactNode> = {
    "auth":          <AuthScreen />,
    "profile":       <CompleteProfile />,
    "create-vault":  <CreateVault />,
    "vault-success": <VaultSuccess />,
    "owner":         <OwnerDashboard />,
    "beneficiary":   <BeneficiaryDashboard />,
    "claim":         <ClaimPortal />,
  };

  return (
    <div className="min-h-screen bg-ink text-cream">
      <Navbar />
      <main className="pt-[66px]">
        {screens[state.screen] ?? <AuthScreen />}
      </main>
    </div>
  );
}

export default function Page() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}