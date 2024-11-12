import { useMemo, useState } from "react";

import { TonConnectButton, useTonAddress } from "@tonconnect/ui-react";
import { Address } from "@ton/core";

import "./App.css";
import { Logo } from "./components/Logo";
import { isValidAddress } from "./utils/address";

function App() {
  const [error, setError] = useState<string | null>(null);

  const connectedAddressString = useTonAddress();
  const connectedAddress = useMemo(() => {
    return isValidAddress(connectedAddressString)
      ? Address.parse(connectedAddressString)
      : null;
  }, [connectedAddressString]);

  return (
    <>
      <TonConnectButton style={{ marginLeft: "auto" }} />

      <a href="https://tonapi.io" target="_blank" className="logo">
        <Logo />
      </a>

      <h1>TonApi dApp Example</h1>
      {error && <p className="error">{error}</p>}
    </>
  );
}

export default App;
