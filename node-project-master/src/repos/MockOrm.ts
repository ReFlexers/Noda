import jsonfile from 'jsonfile';

import { IUser } from '@src/models/User';
import { ExampleType } from '@src/models/Example';


// **** Variables **** //
const DB_FILE_NAME = 'database.json';


// **** Types **** //

interface IDb {
  users: IUser[];
  examples: ExampleType[];
}


// **** Functions **** //

/**
 * Fetch the json from the file.
 */
function openDb(jsonFile = DB_FILE_NAME): Promise<IDb> {
  console.log(jsonfile.readFile(__dirname + '/' + jsonFile) as Promise<IDb>)
  return jsonfile.readFile(__dirname + '/' + jsonFile) as Promise<IDb>;
}

/**
 * Update the file.
 */
function saveDb(db: IDb): Promise<void> {
  return jsonfile.writeFile((__dirname + '/' + DB_FILE_NAME), db);
}


// **** Export default **** //

export default {
  openDb,
  saveDb,
} as const;
