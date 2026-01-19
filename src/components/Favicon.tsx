import { useEffect } from "react";
import logoImage from "figma:asset/ef4a4bc0ae2864f0055a53c9eeb4767c5a6e868f.png";

export const Favicon = () => {
  useEffect(() => {
    // Remove existing favicon links
    const existingLinks = document.querySelectorAll("link[rel*='icon']");
    existingLinks.forEach((link) => link.remove());

    // Add new favicon
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = logoImage;
    document.head.appendChild(link);

    // Add apple-touch-icon for iOS devices
    const appleTouchIcon = document.createElement("link");
    appleTouchIcon.rel = "apple-touch-icon";
    appleTouchIcon.href = logoImage;
    document.head.appendChild(appleTouchIcon);

    // Update page title
    document.title = "LÚMINA - Agência Digital | Transformamos Marcas em Experiências";
  }, []);

  return null;
};
