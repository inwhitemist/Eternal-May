import { useEffect, useState } from "react";
import { EventItem } from "../types";

export function useDialogs() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [logoutConfirmOpen, setLogoutConfirmOpen] = useState(false);
  const [editing, setEditing] = useState<EventItem | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [selected, setSelected] = useState<EventItem | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [deleting, setDeleting] = useState<EventItem | null>(null);
  const [usersOpen, setUsersOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  useEffect(() => {
    function onSwitch(e: any) {
      const next = e?.detail === "register" ? "register" : "login";
      setAuthMode(next as any);
    }
    window.addEventListener("switch-auth-mode", onSwitch as any);
    return () => window.removeEventListener("switch-auth-mode", onSwitch as any);
  }, []);

  return {
    dialogOpen,
    setDialogOpen,
    authOpen,
    setAuthOpen,
    authMode,
    setAuthMode,
    logoutConfirmOpen,
    setLogoutConfirmOpen,
    editing,
    setEditing,
    detailOpen,
    setDetailOpen,
    selected,
    setSelected,
    imagePreview,
    setImagePreview,
    settingsOpen,
    setSettingsOpen,
    usersOpen,
    setUsersOpen,
    adminOpen,
    setAdminOpen,
    deleting,
    setDeleting,
  };
}
