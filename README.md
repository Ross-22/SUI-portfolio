# DEVCON Legazpi x Sui Network: Decentralized Portfolio

This project is a fully functional, on-chain portfolio application built on the **Sui blockchain**. It demonstrates the power of Move smart contracts by storing professional details (name, bio, social links) as decentralized objects on the Sui Mainnet.

## 🚀 Live on Sui Mainnet

- **Contract Package ID:** `0xd82616311d6b5e32b628973f3981cc28685537f2bad022177ce630df5c9c230d`
- **Portfolio Object ID:** `0xf706a7ebe981b9b22e1b940414d2951c75daf25a5f433d4fdd6e8bfca2d8c1e4`
- **View on-chain:** [Suiscan Link](https://suiscan.xyz/mainnet/object/0xf706a7ebe981b9b22e1b940414d2951c75daf25a5f433d4fdd6e8bfca2d8c1e4)

## 🛠️ Tech Stack

- **Smart Contract:** Sui Move (Object-centric model).
- **Frontend:** React 19 + TypeScript + Vite.
- **Styling:** Vanilla CSS (Neobrutalism Design).
- **Blockchain Integration:** `@mysten/dapp-kit` and `@mysten/sui`.

## 📂 Project Structure

- `/move_contract`: Contains the Sui Move smart contract source code.
- `/frontend`: The React application that fetches and displays on-chain data.

## 🏃 How It Works

1.  **Move Contract:** A `Portfolio` struct is defined in Move with fields for professional data.
2.  **Deployment:** The contract is published to Sui Mainnet, allowing users to create unique Portfolio objects.
3.  **Dynamic Fetching:** The frontend uses the `useSuiClientQuery` hook to fetch the latest state of a specific Portfolio object ID directly from the Sui network.
4.  **Decentralized Data:** Your bio, title, and links are not stored in a traditional database but live permanently on the Sui blockchain.

## 🛠️ Local Development

### Prerequisites
- [Sui CLI](https://docs.sui.io/guides/developer/getting-started/sui-install)
- [Node.js & npm](https://nodejs.org/)

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Move Contract Commands
```bash
cd move_contract
sui move build
sui move test
```

## 📜 License
This project was created for the DEVCON Legazpi x Sui Network event.
