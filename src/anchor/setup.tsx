import { IdlAccounts, Program } from "@coral-xyz/anchor";
import { IDL, AnchorMarketplace } from "../idl";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { Buffer } from "buffer"; // Import buffer

const programId = new PublicKey("mktYdagPAAnuHigRD62zLpHshZqx7vpKHjN3fN6MPjy");
console.log(programId);

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

// Initialize the program interface with the IDL, program ID, and connection.
// This setup allows us to interact with the on-chain program using the defined interface.
export const program = new Program<AnchorMarketplace>(IDL, programId, {
  connection,
});

export const [counterPDA] = PublicKey.findProgramAddressSync(
  [Buffer.from("counter")], // Use Buffer from buffer package
  program.programId,
);

// This is just a TypeScript type for the Marketplace data structure based on the IDL
// We need this so TypeScript doesn't yell at us
export type MarketplaceData = IdlAccounts<AnchorMarketplace>["marketplace"];
