/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HMOBSjrrMjo
 */
import { createAvatar } from '@dicebear/core'
import { icons, initials } from '@dicebear/collection'

import type { PwnCollegeHacker } from '@/types'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table'

type LeaderboardProps = {
  hackers: PwnCollegeHacker[]
}

const getImage = (hacker: PwnCollegeHacker) =>
  hacker.avatar
    ? `/assets/img/hackers/${hacker.avatar}`
    : 'data:image/svg+xml;base64,' +
      btoa(
        createAvatar(icons, {
          seed: hacker.name,
        }).toString()
      )

export default function Leaderboard({ hackers }: LeaderboardProps) {
  return (
    <div className=" transition translate-y-0 hover:translate-y-1 shadow overflow-hidden border-b border-zinc-200 sm:rounded-lg bg-white dark:border-gray-700 dark:bg-gray-900">
      <Table className="text-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="text-black dark:text-gray-200">
              Rank
            </TableHead>
            <TableHead className="text-black dark:text-gray-200">
              bargle
            </TableHead>
            <TableHead className="text-black dark:text-gray-200">
              Name
            </TableHead>
            <TableHead className="text-black dark:text-gray-200">
              Solves
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {hackers.map((hacker, idx) => (
            <TableRow key={hacker.name}>
              <TableCell className="text-black dark:text-gray-300">
                #{idx + 1}
              </TableCell>
              <TableCell className="text-black dark:text-gray-300">
                <img
                  className="rounded-full"
                  width={40}
                  src={getImage(hacker)}
                  alt={hacker.name}
                />
              </TableCell>
              <TableCell className="text-black dark:text-gray-300">
                {hacker.name}
              </TableCell>
              <TableCell className="text-black dark:text-gray-300">
                {hacker.solves}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
