import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState, useContext,
} from "react";

interface TimerContextProps {
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
}

interface TimerProviderProps {
  children: ReactNode;
}

const TimerContext = createContext<TimerContextProps>({
  duration: 10,
  setDuration: () => {},
});

export const useTimerContext = () => useContext(TimerContext)

const TimerProvider = ({ children }: TimerProviderProps) => {
  const [duration, setDuration] = useState<number>(10);

  return (
    <TimerContext.Provider
      value={{ duration, setDuration }}
    >
      {children}
    </TimerContext.Provider>
  )
};

export default TimerProvider;
