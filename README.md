
# Anchor NFT Marketplace UI

## Overview

This project is a fully functional Marketplace UI connected to a Solana-based Marketplace smart contract. The UI allows users to view and interact with NFT listings, including purchasing items. The project is designed to be deployed on Cloudflare or Vercel for easy access and testing.

## Features

- Engaging and user-friendly marketplace interface
- Integration with Solana blockchain and Marketplace smart contract
- Responsive design for both desktop and mobile devices
- Interactive NFT listings with purchase functionality
- Hover effects and animations for a dynamic user experience

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- Solana Web3.js
- Anchor framework

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or higher)
- Yarn or npm
- Solana CLI
- Anchor CLI

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/marketplace-ui.git
cd marketplace-ui
```

2. **Install dependencies:**

Using Yarn:

```bash
yarn install
```

Or using npm:

```bash
npm install
```

3. **Set up Solana and Anchor:**

Ensure you have the Solana CLI installed:

```bash
solana --version
```

If not, install it:

```bash
sh -c "$(curl -sSfL https://release.solana.com/v1.8.0/install)"
```

Set the Solana cluster to Devnet:

```bash
solana config set --url https://api.devnet.solana.com
```

Ensure you have the Anchor CLI installed:

```bash
anchor --version
```

If not, install it:

```bash
cargo install --git https://github.com/project-serum/anchor --tag v0.29.0 anchor-cli --locked
```

4. **Configure Environment Variables:**

Create a `.env` file in the root of the project and add the following environment variables:

```plaintext
REACT_APP_SOLANA_NETWORK=devnet
REACT_APP_PROGRAM_ID=<Your_Program_ID>
REACT_APP_IDL_PATH=./target/idl/your_program.json
```

Replace `<Your_Program_ID>` with the actual program ID of your smart contract.

### Running the Application

1. **Start the development server:**

Using Yarn:

```bash
yarn start
```

Or using npm:

```bash
npm start
```

The app should now be running on `http://localhost:3000`.

### Building for Production

To create an optimized production build, run:

Using Yarn:

```bash
yarn build
```

Or using npm:

```bash
npm run build
```

The production-ready build will be in the `build` directory.

