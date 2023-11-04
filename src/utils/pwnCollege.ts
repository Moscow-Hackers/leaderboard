type PwnCollegeHacker = {
  name: string
  avatar?: string
  solves: number
}

interface PwnCollegeUserData {
  data: {
    name: string
    pwnCollegeId: string
    avatar?: string
  }
}

export const fetchHackers = async (hackers: PwnCollegeUserData[]) =>
  await Promise.all(
    hackers.map(
      ({ data: { name, pwnCollegeId, avatar } }: PwnCollegeUserData) =>
        new Promise<PwnCollegeHacker>(async (resolve) => {
          const response = await fetch(
            `https://pwn.college/api/v1/users/${pwnCollegeId}/solves`
          )
          const {
            meta: { count },
          } = await response.json()
          resolve({ name, avatar, solves: count })
        })
    )
  )
