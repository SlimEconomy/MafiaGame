export interface Player {
    id: string,
    name: string,
    role: Role,
    isAlive: boolean
}

export type Role = "mafia" | "citizen" | "detective" | "healer" | "hunter"

export interface LooseObject {
    [key: string]: Array<string>
}
