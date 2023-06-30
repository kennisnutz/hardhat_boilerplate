import { ethers, run } from 'hardhat';

import deployer from '../.secret';

async function main() {
  console.log('Deploying....');
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
