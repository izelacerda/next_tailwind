'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabItemProps {
  value: string
  title: string
  isSelect?: boolean
}
export function TabItem({ value, title, isSelect = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-violet-700 data-[state=active]:text-violet-700 dark:text-zinc-400 dark:hover:text-violet-300 dark:data-[state=active]:text-violet-300"
    >
      <span className="rounded whitespace-nowrap group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
        {title}
      </span>
      {isSelect && (
        <motion.div
          layoutId="activeTab"
          className="absolute right-0 bottom-px left-0 h-0.5 bg-violet-700 dark:bg-violet-300"
        />
      )}
    </Tabs.Trigger>
  )
}
