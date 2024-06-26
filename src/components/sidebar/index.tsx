'use client'

import Link from "next/link"
import { TooltipProvider, TooltipTrigger, Tooltip, TooltipContent } from "@/src/components/ui/tooltip"
import { menuOptions } from "@/src/lib/constants"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { Separator } from "../ui/separator"
import { Database, GitBranch, LucideMousePointerClick } from "lucide-react"
import { ModeToggle } from "@/src/components/global/mode-toggle"

export default function MenuOptions (props:{}) {
  const pathName = usePathname()
    return (
        <nav className=" dark:bg-black h-screen overflow-scroll  justify-between flex items-center flex-col  gap-10 py-6 px-2">
        <div className="flex items-center justify-center flex-col gap-8">
          <Link
            className="flex font-bold flex-row "
            href="/"
          >
            SAAS
          </Link>
          <TooltipProvider>
            {menuOptions.map(menu => (
              <ul key={menu.name}>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger>
                    <li>
                      <Link 
                      href={menu.href}
                        className={clsx(
                          'group h-8 w-8 flex items-center justify-center  scale-[1.5] rounded-lg p-[3px]  cursor-pointer',
                          {
                            'dark:bg-[#2F006B] bg-[#EEE0FF] ':
                              pathName === menu.href,
                          }
                        )}
                      >
                      <menu.Component selected={pathName === menu.href}/>
                      </Link>
                    </li>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="bg-black/5 backdrop-blur-xl">
                    <p>{menu.name}</p>
                  </TooltipContent>
                </Tooltip>
              </ul>
            ))}
          </TooltipProvider>
          <Separator/>
          <div className="flex items-center flex-col gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full h-56 overflow-scroll border-[1px]">
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <LucideMousePointerClick
              className="dark:text-white"
              size={18}
            />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <GitBranch
              className="text-muted-foreground"
              size={18}
            />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <Database
              className="text-muted-foreground"
              size={18}
            />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <GitBranch
              className="text-muted-foreground"
              size={18}
            />
          </div>
        </div>
        </div>
        <div className="flex items-center justify-center flex-col gap-8">
        <ModeToggle />
      </div>
        </nav>
    )
}