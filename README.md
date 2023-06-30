**Note**: This repo is not under maintainance.




# Hardhat Boilerplate for BSC, ETH, and Arbitrum Development
Welcome to the Hardhat Boilerplate repository! This repository provides you with a pre-configured environment for developing Ethereum, Binance Smart Chain (BSC), and Arbitrum projects using Hardhat.

## Features

- Pre-configured network setups for Ethereum, BSC, and Arbitrum
- Basic project structure and configuration files
- Example contracts and tests to get you started quickly

## Prerequisites

Before you begin, please ensure you have the following installed:

* Node.js (v14 or above)
* npm (Node Package Manager)

## Getting Started

To set up the development environment and start working with this boilerplate, follow these steps:

1. Clone this repository to your local machine using the following command:

  ```bash
  $ git clone https://github.com/kennisnutz/hardhat_boilerplate.git hardhat_boilerplate
  ```

2. Navigate to the project's root directory:

  ```bash
  $ cd hardhat_boilerplate
  ```
3. Install the project dependencies:

  ```bash
  $ npm install
  ```
  or 
  ```bash
  $ yarn
  ```
4. Configure Environment Secrets:
  * Create a secret.ts file by copying the contents of `secrets.ts.sample` file using the code:

   ```bash
    $ cp .secret.ts.sample .secret.ts
   ```
  * Update the private keys and other parameters in the `secret.ts` files (e.g., address, private key, explorer api keys) to match your setup.

5. Write Smart Contracts:
  * Use the `contracts/` directory to write your own smart contracts or modify the example contracts provided.

  * You can also add any necessary libraries or dependencies in the contracts/ directory.

6. Write Tests:
  * Use the `test/` directory to write tests for your smart contracts.

  * Add test cases for each contract or functionality you want to test.

7. Compile Contracts:
  ```bash
   $ npx hardhat compile
  ```
8. Run Tests:
  ```bash
   $ npx hardhat test
  ```


## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.



We hope this Hardhat Boilerplate makes it easier for you to start your Ethereum, BSC, or Arbitrum development journey. Happy coding!
   
   

