import { useEffect, useState } from "react";

export interface DeviceProfile {
  isIOS: boolean;
  isTouchDevice: boolean;
  prefersReducedMotion: boolean;
}

const defaultProfile: DeviceProfile = {
  isIOS: false,
  isTouchDevice: false,
  prefersReducedMotion: false,
};

function readProfile(): DeviceProfile {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return defaultProfile;
  }

  const nav = window.navigator;
  const ua = nav.userAgent ?? "";
  const platform = nav.platform ?? "";
  const maxTouchPoints = nav.maxTouchPoints ?? 0;

  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (platform === "MacIntel" && maxTouchPoints > 1);

  const coarsePointer =
    typeof window.matchMedia === "function"
      ? window.matchMedia("(pointer: coarse)").matches
      : false;

  const isTouchDevice =
    coarsePointer || "ontouchstart" in window || maxTouchPoints > 1;

  const prefersReducedMotion =
    typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  return {
    isIOS,
    isTouchDevice,
    prefersReducedMotion,
  };
}

export default function useDeviceProfile() {
  const [profile, setProfile] = useState<DeviceProfile>(() => readProfile());

  useEffect(() => {
    if (typeof window === "undefined") return;

    setProfile(readProfile());

    const reduceQuery =
      typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : undefined;

    const handleReduceChange = (event: MediaQueryListEvent) => {
      setProfile((prev) => ({
        ...prev,
        prefersReducedMotion: event.matches,
      }));
    };

    if (reduceQuery) {
      if (typeof reduceQuery.addEventListener === "function") {
        reduceQuery.addEventListener("change", handleReduceChange);
      } else if (typeof reduceQuery.addListener === "function") {
        reduceQuery.addListener(handleReduceChange);
      }
    }

    return () => {
      if (reduceQuery) {
        if (typeof reduceQuery.removeEventListener === "function") {
          reduceQuery.removeEventListener("change", handleReduceChange);
        } else if (typeof reduceQuery.removeListener === "function") {
          reduceQuery.removeListener(handleReduceChange);
        }
      }
    };
  }, []);

  return profile;
}
