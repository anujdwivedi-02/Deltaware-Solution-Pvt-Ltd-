import { useEffect } from "react";

export function useDisableScroll(active: boolean) {
  useEffect(() => {
    const body = document.body;
    const originalStyle = window.getComputedStyle(body).overflow;

    if (active) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = originalStyle;
    }

    return () => {
      body.style.overflow = originalStyle;
    };
  }, [active]);
}
