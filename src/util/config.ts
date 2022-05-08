import { requireArrayNotEmpty, requireNumberPositive, requireStringNotBlank } from "./requirement";

import config = require("../config.json");

export function validateConfig(): void {
  const {serverPort, targetLibs, portItems, gitBranchDir, libsDir} = config;
  requireNumberPositive(serverPort, "serverPort is required to be a positive number");
  requireStringNotBlank(targetLibs, "targetLibs is required to be a space-separated string for library name: company-lib-1 company-lib-2");
  requireArrayNotEmpty(portItems, `portItems is required to be an array`);
  requireStringNotBlank(portItems[0].name, `portItems need to contain item like {"name": "name", "port": 12345}`);
  requireNumberPositive(portItems[0].port, `portItems need to contain item like {"name": "name", "port": 12345}`);
  requireStringNotBlank(gitBranchDir, "gitBranchDir is required");
  requireStringNotBlank(libsDir, "libsDir is required");
}
