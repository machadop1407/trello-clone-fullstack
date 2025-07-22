"use client";

import { createContext, useContext } from "react";

interface PlanContextType {
  isFreeUser: boolean;
  hasProPlan: boolean;
  hasEnterprisePlan: boolean;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

interface PlanProviderProps {
  children: React.ReactNode;
  hasProPlan: boolean;
  hasEnterprisePlan: boolean;
}

export function PlanProvider({
  children,
  hasProPlan,
  hasEnterprisePlan,
}: PlanProviderProps) {
  return (
    <PlanContext.Provider
      value={{
        hasProPlan,
        hasEnterprisePlan,
        isFreeUser: !hasProPlan && !hasEnterprisePlan,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export const usePlan = () => {
  const context = useContext(PlanContext);
  if (context === undefined) {
    throw new Error("usePlan needs to be inside the provider");
  }

  return context;
};
