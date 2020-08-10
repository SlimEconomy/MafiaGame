export interface LooseObject {
    [key: string]: Array<string>
}

/**
 * Assigns the roles and players into an object
 * @param {Array} players the participating players
 * @param {Array} roles the roles that need to be assigned to players
 * arrays have been already shuffled
 */
const assignRoles = (players: Array<string>, roles: Array<string>): LooseObject => {
    let returnObject: LooseObject = {};
    for (let i = 0; i < roles.length; i++) {
        const role = roles[i];
        const player = players[i];
        returnObject[role] ? returnObject[role].push(player) : returnObject[role] = [player]; //push to role, if role exists already, else initialize it
    }
    console.log(returnObject)
    return returnObject;
}

export default assignRoles;