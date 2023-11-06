export type PwnCollegeHacker = {
  name: string
  avatar?: string
  solves: number
}

export interface PwnCollegeUserData {
  data: {
    name: string
    pwnCollegeId: string
    avatar?: string
  }
}
