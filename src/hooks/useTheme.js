import ThemeContext from "@/contexts/ThemeContext";

const { useContext } = require("react");

const useTheme = () => {
  const theme = useContext(ThemeContext);
  //* if the window type is not undefined here , then it is an client component
  const isClient = typeof window !== "undefined";

  if (!isClient && !theme) {
    return {};
  }

  if (!theme) {
    throw new Error(
      "You must wrap the application with ThemeProviders to use the useTheme"
    );
  }
  return theme;
};

export default useTheme;
