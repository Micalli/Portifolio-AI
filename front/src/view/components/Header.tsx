import Logo from "../../../public/logo.svg"
import { Outlet, useNavigate } from "react-router"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { liOptions } from "../../app/config/constants"
import { cn } from "../../app/utils/cn"
import { usePortifolioController } from "../pages/Portifolio/usePortifolioController"
import { useWindowWidth } from "../../app/hooks/useWindowWidth"
import { motion, AnimatePresence } from "framer-motion"
import { localStorageKeys } from "../../app/config/localStorageKeys"

export function Header() {
  const navigate = useNavigate()
  const windowWidth = useWindowWidth()
  const { handleOpenMenu, menuOpen } = usePortifolioController()

  const storedPage =
    localStorage.getItem(localStorageKeys.pageActive) ?? "Início"

  const [activeMenu, setActiveMenu] = useState(storedPage)

  function handleNavigate(name: string, path: string) {
    navigate(path)
    localStorage.setItem(localStorageKeys.pageActive, name)
    setActiveMenu(name)
    if (menuOpen) handleOpenMenu()
  }

  const isDesktop = windowWidth >= 768

  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-50  bg-black/50 backdrop-blur-lg  py-2">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 focus:outline-none"
          >
            <img
              src={Logo}
              alt="Logo"
              className="h-24 w-24 md:h-30 md:w-30"
            />
          </button>

          {/* Desktop menu */}
          {isDesktop && (
            <ul className="flex items-center gap-4">
              {liOptions.map((li) => {
                const isActive = activeMenu === li.name

                return (
                  <li key={li.name}>
                    <button
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => handleNavigate(li.name, li.path)}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium transition-all cursor-pointer",
                        isActive
                          ? "bg-accent text-background shadow-md shadow-accent/20"
                          : "text-secondary hover:bg-card hover:text-primary"
                      )}
                    >
                      {li.name}
                    </button>
                  </li>
                )
              })}
            </ul>
          )}

          {/* Mobile button */}
          {!isDesktop && (
            <button
              aria-label="Abrir menu"
              onClick={handleOpenMenu}
              className="flex h-10 w-10 items-center justify-center rounded-lg transition hover:bg-border/10"
            >
              {menuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          )}
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {!isDesktop && menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-full left-0 w-full  border-t border-border/40 bg-black/95 backdrop-blur-lg flex flex-col"
            >
              <ul className="mt-4 space-y-2">
                {liOptions.map((li) => {
                  const isActive = activeMenu === li.name

                  return (
                    <li key={li.name}>
                      <button
                        onClick={() => handleNavigate(li.name, li.path)}
                        className={cn(
                          "w-full rounded-xl px-4 py-3 text-left text-base font-medium transition",
                          isActive
                            ? "bg-accent/10 text-accent border border-accent/20"
                            : "text-secondary hover:bg-card hover:text-primary"
                        )}
                      >
                        {li.name}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 w-full">
        <Outlet />
      </main>
    </div>
  )
}
