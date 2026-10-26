
import React, { createContext, useState } from "react";

export const PreferencesContext = createContext();

export function PreferencesProvider({ children }) {
  const [preferences, setPreferences] = useState(() => {
    try {
      const saved = localStorage.getItem("nestoraPreferences");

      return saved
        ? JSON.parse(saved)
        : {
            room: "Bedroom",
            style: "Modern Luxury",
            color: "Warm",
            budget: "₹1L - ₹3L"
          };
    } catch {
      return {
        room: "Bedroom",
        style: "Modern Luxury",
        color: "Warm",
        budget: "₹1L - ₹3L"
      };
    }
  });

  const savePreferences = (data) => {
    localStorage.setItem("nestoraPreferences", JSON.stringify(data));
    setPreferences(data);
  };

  return (
    <PreferencesContext.Provider
      value={{ preferences, setPreferences, savePreferences }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export default PreferencesContext;

