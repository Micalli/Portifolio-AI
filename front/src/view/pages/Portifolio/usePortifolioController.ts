import { useState } from 'react'

export function usePortifolioController() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    function handleOpenMenu() {
      setMenuOpen(!menuOpen);
    }

    return {
      menuOpen,
      handleOpenMenu,
    };
}