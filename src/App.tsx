import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/Home";
import { ProgressBarLoader } from "./components/shared/loaders/Loaders";
import { useEffect, useMemo, useState } from "react";
import MainLayout from "./components/layouts/mainlayout/MainLayout";
// import idl from './idl.json'
import AOS from "aos";
import "aos/dist/aos.css";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // State to track loading status


  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    // Simulate loading delay for demonstration purposes
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading state to false after a delay
    }, 2000); // Adjust delay time as needed

    // Clear the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  const [walletAddress, setWalletAdresss] = useState("");
  const [, setLoading] = useState(false)

  useEffect(() => {
    const onLoad = () => {
      checkIfWalletConnected();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  const checkIfWalletConnected = async () => {
    interface WindowWithSolana extends Window {
      solana: any; // Adjust 'any' to the specific type of 'solana'
    }

    // Type assertion
    const { solana } = window as unknown as WindowWithSolana;

    try {
      setLoading(true)
      if (solana) {
        if (solana.isPhantom) {
          console.log("phatom is connected");
          const response = await solana.connect({
            onlyIfTrusted: true, //second time if anyone connected it won't show anypop on screen
          });
          setWalletAdresss(response.publicKey.toString());
          console.log("public key", response.publicKey.toString());
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false)
    }
  };

  const connectWallet = async () => {
    interface WindowWithSolana extends Window {
      solana: any; // Adjust 'any' to the specific type of 'solana'
    }

    // Type assertion
    const { solana } = window as unknown as WindowWithSolana;
    try {
      setLoading(true)
      if (solana) {
        const response = await solana.connect(); //to disconnect use "solana.disconnect()"
        setWalletAdresss(response.publicKey.toString());
      } else {
        alert("Please Install Solana's Phantom Wallet");
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  };

  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;
  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      // Add specific wallets here if needed
    ],
    [network]
  );

  // Render loading spinner or content based on the loading state
  const renderContent = () => {
    if (isLoading) {
      return (
        <section className="relative h-screen bg-bc2 w-full flex flex-col justify-center items-center">
          <section className="w-36">
          </section>
          <section><ProgressBarLoader /></section>
        </section>
      );
    } else {
      return (
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <section className="App text-Urbanist">
                {/* Your RouterProvider and other components */}
                <RouterProvider router={router} />
                <ToastContainer />
              </section>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      );
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainLayout
        walletAddress={walletAddress} connectWallet={connectWallet}
        />}>
          <Route path="/" element={<Home />} />
        </Route>
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} /> */}
      </>
    )
  );
  return renderContent();
}

export default App;
