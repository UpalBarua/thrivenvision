"use client";

import { Switch } from "@heroui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      defaultSelected
      size="md"
      color="primary"
      onChange={() => {
        console.log(theme);
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <Moon className={className} size={14} />
        ) : (
          <Sun className={className} size={14} />
        )
      }
    />
  );
};
