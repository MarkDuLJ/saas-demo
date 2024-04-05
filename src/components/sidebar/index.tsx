'use client'

import Link from "next/link"
import { TooltipProvider, TooltipTrigger, Tooltip } from "@/src/components/ui/tooltip"
import { menuOptions } from "@/src/lib/constants"
import { usePathname } from "next/navigation"
import clsx from "clsx"

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
                </Tooltip>
              </ul>
            ))}
          </TooltipProvider>
        </div>
        </nav>
    )
}