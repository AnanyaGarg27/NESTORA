
import { createContext, useState, useEffect } from "react";

export const DesignsContext = createContext();

export function DesignsProvider({ children }) {
  const [designs, setDesigns] = useState(() => {
    return JSON.parse(localStorage.getItem("nestoraDesigns")) || [];
  });

  useEffect(() => {
    localStorage.setItem("nestoraDesigns", JSON.stringify(designs));
  }, [designs]);

  function addDesign(design) {
    setDesigns([...designs, { ...design, id: Date.now() }]);
  }

  function deleteDesign(id) {
    setDesigns(designs.filter(item => item.id !== id));
  }

  return (
    <DesignsContext.Provider value={{ designs, addDesign, deleteDesign }}>
      {children}
    </DesignsContext.Provider>
  );
}

