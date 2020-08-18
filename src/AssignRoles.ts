import { LooseObject, Player, Role } from "./types"
/**
 * Assigns the roles and players into an object
 * @param {Array} players the participating players
 * @param {Array} roles the roles that need to be assigned to players
 * arrays have been already shuffled
 */
const assignRoles = (players: Array<string>, roles: Array<string>): LooseObject => {
    let returnObject: LooseObject = {};
    for (let i = 0; i < roles.length; i++) {
        const role = roles[i] as Role;
        const player = players[i];
        const initializedPlayer: Player = {
            id: Math.random().toString(36),
            name: player,
            role: role,
            isAlive: true
        }
        returnObject[role] ? returnObject[role].push(initializedPlayer) : returnObject[role] = [initializedPlayer]; //push to role, if role exists already, else initialize it
    }
    return returnObject;
}

export default assignRoles;