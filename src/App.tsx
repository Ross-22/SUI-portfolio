import { ConnectButton, useCurrentAccount } from '@mysten/dapp-kit';

function App() {
  const account = useCurrentAccount();

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1>My Web3 Portfolio</h1>
        <ConnectButton />
      </header>

      <main>
        {!account ? (
          <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <h2>Welcome!</h2>
            <p>Please connect your wallet to view or manage the portfolio on SUI Mainnet.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <section style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px' }}>
              <h2>Portfolio Details</h2>
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Title:</strong> Move Developer</p>
              <p><strong>Bio:</strong> Building the future of Web3 on SUI.</p>
              <p><strong>GitHub:</strong> <a href="#">github.com/johndoe</a></p>
              <p><strong>LinkedIn:</strong> <a href="#">linkedin.com/in/johndoe</a></p>
            </section>
            
            <section style={{ padding: '20px', backgroundColor: '#eef2ff', borderRadius: '8px' }}>
              <h3>Contract Interaction Placeholder</h3>
              <p>In the future, fetching and updating data via the Move contract will happen here.</p>
              <button disabled style={{ padding: '10px 15px', cursor: 'not-allowed' }}>Update Portfolio on SUI</button>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;