import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useSuiClientQuery } from '@mysten/dapp-kit';
import { PORTFOLIO_OBJECT_ID } from './constants';

function App() {
  const { data, isPending, error } = useSuiClientQuery('getObject', {
    id: PORTFOLIO_OBJECT_ID,
    options: {
      showContent: true,
    },
  });

  const portfolio = data?.data?.content?.dataType === 'moveObject' 
    ? (data.data.content.fields as any) 
    : null;

  if (isPending) return <div className="min-h-screen flex items-center justify-center font-black text-2xl uppercase">Loading Portfolio...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center font-black text-2xl uppercase text-red-500">Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 font-sans selection:bg-accent selection:text-white flex items-center justify-center">
      <div className="max-w-3xl w-full space-y-12">
        
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b-4 border-black pb-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase bg-secondary text-white inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg]">
              Web3 Portfolio
            </h1>
            <p className="text-black mt-4 text-xl font-bold bg-accent text-white inline-block px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-[1deg]">
              DEVCON Legazpi x SUI Network.
            </p>
          </div>
        </header>

        <main>
          {/* Profile Display Card */}
          <Card className="border-4 border-black rounded-none p-0 gap-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-12">
            <CardHeader className="border-b-4 border-black bg-secondary text-white p-8 rounded-none">
              <CardTitle className="text-4xl md:text-5xl font-black uppercase tracking-tight">{portfolio?.name || 'Kadmiel Ross B. Baiño'}</CardTitle>
              <CardDescription className="text-white font-bold text-2xl mt-2 bg-black inline-block px-2 py-1 w-fit">
                {portfolio?.title || 'EVP @ DEVCON Legazpi | Software Dev Intern'}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 md:p-12 space-y-10">
              <div className="bg-[#f0f0f0] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Label className="uppercase text-lg font-black text-accent mb-4 block tracking-wider">Bio</Label>
                <p className="text-xl md:text-2xl font-bold leading-relaxed text-black">
                  {portfolio?.bio || '4th-year BSIT student at Divine Word College of Legazpi.'}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-secondary hover:text-white transition-colors group">
                  <Label className="uppercase text-sm font-black text-black group-hover:text-white mb-2 block">GitHub</Label>
                  <a href={portfolio?.github_url || "https://github.com/Ross-22"} target="_blank" rel="noopener noreferrer" className="text-lg font-bold group-hover:underline underline-offset-4 break-all">
                    {portfolio?.github_url?.replace('https://', '') || 'github.com/Ross-22'}
                  </a>
                </div>
                <div className="flex-1 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-accent hover:text-white transition-colors group">
                  <Label className="uppercase text-sm font-black text-black group-hover:text-white mb-2 block">LinkedIn</Label>
                  <a href={portfolio?.linkedin_url || "https://www.linkedin.com/in/kadmiel-baiño/"} target="_blank" rel="noopener noreferrer" className="text-lg font-bold group-hover:underline underline-offset-4 break-all">
                    {portfolio?.linkedin_url?.replace('https://', '') || 'linkedin.com/in/kadmiel-baiño'}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sui & Move Info Card */}
          <Card className="border-4 border-black rounded-none p-0 gap-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="border-b-4 border-black bg-accent text-white p-8 rounded-none">
              <CardTitle className="text-3xl md:text-4xl font-black uppercase tracking-tight">Building on SUI</CardTitle>
              <CardDescription className="text-white font-bold text-xl mt-2 bg-black inline-block px-2 py-1 w-fit">
                Powered by Move Smart Contracts
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 md:p-12 space-y-8 text-black">
              <p className="text-xl md:text-2xl font-bold leading-relaxed">
                Sui is a high-performance Layer 1 blockchain engineered for industry-leading speed and horizontal scalability. Headquartered in Silicon Valley (Palo Alto, California), the network was built by Mysten Labs—a team founded by the original creators of the Move language with roots at Facebook (Meta) and the Diem project. By utilizing a unique object-centric data model and the secure Move programming language, Sui provides a robust infrastructure that slashes the Web3 learning curve. This foundation allows developers to manage assets with enhanced security and build scalable applications that can redefine the future of the internet.
              </p>
              <a href="https://www.sui.io/move" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button className="rounded-none border-4 border-black bg-black text-white hover:bg-secondary hover:text-white font-black text-xl py-6 px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all uppercase tracking-wide">
                  Learn about Move
                </Button>
              </a>
            </CardContent>
          </Card>
        </main>

        {/* Footer */}
        <footer className="mt-16 border-t-4 border-black pt-8 pb-12 flex flex-col items-center gap-8">
          <div className="max-w-2xl bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center rotate-[0.5deg]">
            <p className="text-lg font-bold leading-relaxed text-black">
              Proof of Learning Portfolio project proudly built and published with informed consent during a <span className="bg-accent text-white px-1">Move Smart Contracts Code Camp</span> by <span className="font-black">DEVCON Philippines & Sui Foundation</span> — where the participant wrote, tested, and deployed a Move smart contract on Sui Mainnet. The object's immutability serves one purpose: the participant's authorship and timestamp cannot be altered, removed, or claimed by anyone else.
            </p>
          </div>

          <div className="bg-black text-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center gap-1 rotate-[-0.5deg]">
            <span className="uppercase text-[10px] font-black tracking-[0.2em] text-accent">On-Chain Object ID</span>
            <code className="text-xs md:text-sm font-mono break-all font-bold">
              {PORTFOLIO_OBJECT_ID}
            </code>
          </div>

          <h3 className="text-2xl font-black uppercase text-black bg-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg]">
            Explore More
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://devcon.ph" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white border-4 border-black px-6 py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-secondary hover:text-white transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group">
              <span className="text-2xl font-black uppercase tracking-wider group-hover:text-white">DEVCON.PH</span>
            </a>
            <a href="https://sui.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white border-4 border-black px-6 py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#38bdf8] hover:text-white transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 group-hover:fill-white fill-black">
                <path d="M12 2L2 12l10 10 10-10L12 2zm0 18L4.8 12 12 4.8 19.2 12 12 20z" />
                <circle cx="12" cy="12" r="4" />
              </svg>
              <span className="text-xl font-black uppercase">SUI Official</span>
            </a>
            <a href={`https://suiscan.xyz/mainnet/object/${PORTFOLIO_OBJECT_ID}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-black border-4 border-black px-6 py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-accent text-white transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
              <span className="text-xl font-black uppercase">View on Suiscan</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
