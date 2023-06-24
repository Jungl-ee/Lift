import { createContext, useContext, useState } from "react";

interface Props {
  children?: React.ReactNode;
}

export type AppContextType = {
  isWorkoutSession: boolean;
  setIsWorkoutSession: React.Dispatch<React.SetStateAction<boolean>>;
};

const GlobalContext = createContext<AppContextType | null>(null);

export function useGlobalContext() {
  return useContext(GlobalContext);
}

function AppContext(props: Props) {
  const [isWorkoutSession, setIsWorkoutSession] = useState(false);
  return (
    <GlobalContext.Provider value={{ isWorkoutSession, setIsWorkoutSession }}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default AppContext;
