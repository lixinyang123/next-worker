import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from "./theme-toggle";
import { LocaleToggle } from "./locale-toggle";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

function useNavData() {
  const t = useTranslations('navbar');

  return [
    {
      title: t("alert_dialog"),
      href: "#alert-dialog",
      description: t("a_modal_dialog"),
    },
    {
      title: t("progress"),
      href: "#progress",
      description: t("displays_an_indicator"),
    },
    {
      title: t("tooltip"),
      href: "#tooltip",
      description: t("displays_information"),
    },
  ]
}

export default function Navbar() {
  const t = useTranslations('navbar');

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-square w-5 h-5">
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="m10 10-2 2 2 2"></path>
              <path d="m14 14 2-2-2-2"></path>
            </svg>

            <span className="font-bold inline-block">{t("next_on_workers")}</span>
          </Link>

          <nav className="flex items-center space-x-6 text-sm font-medium">

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{t("getting_started")}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            {t("shadcn_ui")}
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {t("beautifully_designed_components")}
                          </p>
                        </Link>
                      </li>
                      <ListItem href="#docs" title={t("introduction")}>
                        {t("reusable_components_built")}
                      </ListItem>
                      <ListItem href="#installation" title={t("installation")}>
                        {t("install_dependencies")}
                      </ListItem>
                      <ListItem href="#typography" title={t("typography")}>
                        {t("styles_for_headings")}
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{t("components")}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {useNavData().map(component => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#docs" passHref className={navigationMenuTriggerStyle()}>
                    {t("documentation")}
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <LocaleToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function ListItem({
  className,
  title,
  children,
  href
}: {
  className?: string,
  title: string,
  children: React.ReactNode,
  href: string
}) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  )
}
