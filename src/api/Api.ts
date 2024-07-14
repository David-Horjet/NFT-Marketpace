// import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
// import { Program, AnchorProvider, web3 } from '@project-serum/anchor';
// import idl from '../idl.json'; // Adjust the path to your actual IDL JSON file

// const { Keypair } = web3;
// const programID = new PublicKey('5PaZ14Gw9KK1YUKaKgp2mGJ2bkbaCMKCRFEUYC9QPNRH'); // Replace with your actual program ID
// const network = clusterApiUrl("devnet");
// const opts = {
//     preflightCommitment: "processed",
// };
// const connection = new Connection(network, opts.preflightCommitment);

// const getProvider = () => {
//     const provider = new AnchorProvider(
//         connection,
//         window.solana,
//         opts.preflightCommitment
//     );
//     return provider;
// };

// export const fetchNFTs = async () => {
//     const provider = getProvider();
//     const program = new Program(idl, programID, provider);
//     try {
//         const accounts = await connection.getProgramAccounts(programID);
//         const nftData = await Promise.all(accounts.map(async (tx) => {
//             const accountData = await program.account.nftAccount.fetch(tx.pubkey); // Replace with your actual account type

//             // Dynamically fetch metadata address using the fetched account data
//             const metadataAddress = await getMetadataAddress(accountData.mint);

//             return { ...accountData, pubkey: tx.pubkey.toString(), metadataAddress: metadataAddress.toString() };
//         }));
//         return nftData;
//     } catch (err) {
//         console.error(err);
//         throw err;
//     }
// };

// const getMetadataAddress = async (mint: PublicKey): Promise<PublicKey> => {
//     const [metadataAddress] = await PublicKey.findProgramAddress(
//         [
//             Buffer.from("metadata"),
//             programID.toBuffer(),
//             mint.toBuffer(),
//         ],
//         programID
//     );
//     return metadataAddress;
// };
