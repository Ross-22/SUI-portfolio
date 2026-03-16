import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useSuiClientQuery } from '@mysten/dapp-kit';
import { PORTFOLIO_OBJECT_ID } from './constants';
import suiLogo from './assets/sui-logo.svg';
import devconLogo from './assets/devcon-logo.png';
import profileImg from './assets/profile.jpg';

interface PortfolioFields {
  name: string;
  title: string;
  bio: string;
  github_url: string;
  linkedin_url: string;
}

function App() {
  const { data } = useSuiClientQuery('getObject', {
    id: PORTFOLIO_OBJECT_ID,
    options: {
      showContent: true,
    },
  });

  const portfolio = data?.data?.content?.dataType === 'moveObject' 
    ? (data.data.content.fields as unknown as PortfolioFields) 
    : null;

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent selection:text-white flex flex-col items-center">
      <div className="max-w-3xl w-full p-4 sm:p-6 md:p-12 space-y-8 md:space-y-12 flex-grow">
        
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b-4 border-black pb-8">
          <div className="w-full sm:w-auto">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase bg-secondary text-white flex items-center gap-3 sm:gap-4 px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:rotate-[-1deg] w-full sm:w-auto text-center sm:text-left">
              <svg viewBox="0 0 300 383.5" className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain fill-current">
                <path d="M240.1,159.9c15.6,19.6,25,44.5,25,71.5s-9.6,52.6-25.7,72.4l-1.4,1.7l-0.4-2.2c-0.3-1.8-0.7-3.7-1.1-5.6
                  c-8-35.3-34.2-65.6-77.4-90.2c-29.1-16.5-45.8-36.4-50.2-59c-2.8-14.6-0.7-29.3,3.3-41.9c4.1-12.6,10.1-23.1,15.2-29.4l16.8-20.5
                  c2.9-3.6,8.5-3.6,11.4,0L240.1,159.9L240.1,159.9z M266.6,139.4L154.2,2c-2.1-2.6-6.2-2.6-8.3,0L33.4,139.4l-0.4,0.5
                  C12.4,165.6,0,198.2,0,233.7c0,82.7,67.2,149.8,150,149.8c82.8,0,150-67.1,150-149.8c0-35.5-12.4-68.1-33.1-93.8L266.6,139.4
                  L266.6,139.4z M60.3,159.5l10-12.3l0.3,2.3c0.2,1.8,0.5,3.6,0.9,5.4c6.5,34.1,29.8,62.6,68.6,84.6c33.8,19.2,53.4,41.3,59.1,65.6
                  c2.4,10.1,2.8,20.1,1.8,28.8l-0.1,0.5l-0.5,0.2c-15.2,7.4-32.4,11.6-50.5,11.6c-63.5,0-115-51.4-115-114.8
                  C34.9,204.2,44.4,179.1,60.3,159.5L60.3,159.5z"/>
              </svg>
              <span>Smart Contracts Code Camp Portfolio</span>
            </h1>
            <div className="flex justify-center sm:justify-start">
              <p className="text-black mt-4 text-base sm:text-xl font-bold bg-accent text-white inline-block px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:rotate-[1deg]">
                DEVCON x SUI Network.
              </p>
            </div>
          </div>
        </header>

        <main className="space-y-8 md:space-y-12">
          {/* Profile Display Card */}
          <Card className="border-4 border-black rounded-none p-0 gap-0 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="border-b-4 border-black bg-secondary text-white p-6 md:p-8 rounded-none flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <div className="relative shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                  <img src={profileImg} alt="Profile" className="w-full h-full object-cover scale-150 translate-x-6" />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <CardTitle className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">{portfolio?.name || 'Kadmiel Ross B. Baiño'}</CardTitle>
                <CardDescription className="text-white font-bold text-lg sm:text-2xl mt-2 bg-black inline-block px-2 py-1 w-fit">
                  {portfolio?.title || 'EVP @ DEVCON Legazpi | Software Dev Intern'}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6 md:p-12 space-y-8 md:space-y-10">
              <div className="bg-[#f0f0f0] p-4 md:p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Label className="uppercase text-base sm:text-lg font-black text-accent mb-4 block tracking-wider">Bio</Label>
                <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed text-black">
                  {portfolio?.bio || '4th-year BSIT student at Divine Word College of Legazpi.'}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <div className="flex-1 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-secondary hover:text-white transition-colors group">
                  <Label className="uppercase text-xs sm:text-sm font-black text-black group-hover:text-white mb-2 block">GitHub</Label>
                  <a href={portfolio?.github_url || "https://github.com/Ross-22"} target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-bold group-hover:underline underline-offset-4 break-all">
                    {portfolio?.github_url?.replace('https://', '') || 'github.com/Ross-22'}
                  </a>
                </div>
                <div className="flex-1 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-accent hover:text-white transition-colors group">
                  <Label className="uppercase text-xs sm:text-sm font-black text-black group-hover:text-white mb-2 block">LinkedIn</Label>
                  <a href={portfolio?.linkedin_url || "https://www.linkedin.com/in/kadmiel-baiño/"} target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-bold group-hover:underline underline-offset-4 break-all">
                    {portfolio?.linkedin_url?.replace('https://', '') || 'linkedin.com/in/kadmiel-baiño'}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sui & Move Info Card */}
          <Card className="border-4 border-black rounded-none p-0 gap-0 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="border-b-4 border-black bg-accent text-white p-6 md:p-8 rounded-none">
              <CardTitle className="text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight flex items-center gap-3 sm:gap-4">
                <svg viewBox="0 0 300 383.5" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 fill-white shrink-0">
                  <path d="M240.1,159.9c15.6,19.6,25,44.5,25,71.5s-9.6,52.6-25.7,72.4l-1.4,1.7l-0.4-2.2c-0.3-1.8-0.7-3.7-1.1-5.6
          c-8-35.3-34.2-65.6-77.4-90.2c-29.1-16.5-45.8-36.4-50.2-59c-2.8-14.6-0.7-29.3,3.3-41.9c4.1-12.6,10.1-23.1,15.2-29.4l16.8-20.5
          c2.9-3.6,8.5-3.6,11.4,0L240.1,159.9L240.1,159.9z M266.6,139.4L154.2,2c-2.1-2.6-6.2-2.6-8.3,0L33.4,139.4l-0.4,0.5
          C12.4,165.6,0,198.2,0,233.7c0,82.7,67.2,149.8,150,149.8c82.8,0,150-67.1,150-149.8c0-35.5-12.4-68.1-33.1-93.8L266.6,139.4
          L266.6,139.4z M60.3,159.5l10-12.3l0.3,2.3c0.2,1.8,0.5,3.6,0.9,5.4c6.5,34.1,29.8,62.6,68.6,84.6c33.8,19.2,53.4,41.3,59.1,65.6
          c2.4,10.1,2.8,20.1,1.8,28.8l-0.1,0.5l-0.5,0.2c-15.2,7.4-32.4,11.6-50.5,11.6c-63.5,0-115-51.4-115-114.8
          C34.9,204.2,44.4,179.1,60.3,159.5L60.3,159.5z"/>
                </svg>
                About Move Smart Contracts
              </CardTitle>
            </CardHeader>

            <CardContent className="p-6 md:p-12 space-y-6 md:space-y-8 text-black">
              <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
                Sui is a high-performance Layer 1 blockchain engineered for industry-leading speed and horizontal scalability. Headquartered in Silicon Valley (Palo Alto, California), the network was built by Mysten Labs—a team founded by the original creators of the Move language with roots at Facebook (Meta) and the Diem project. By utilizing a unique object-centric data model and the secure Move programming language, Sui provides a robust infrastructure that slashes the Web3 learning curve. This foundation allows developers to manage assets with enhanced security and build scalable applications that can redefine the future of the internet.
              </p>
              <a href="https://www.sui.io/move" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
                <Button className="rounded-none border-4 border-black bg-black text-white hover:bg-secondary hover:text-white font-black text-lg sm:text-xl py-6 px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all uppercase tracking-wide w-full sm:w-auto">
                  Learn about Move
                </Button>
              </a>
            </CardContent>
          </Card>
        </main>
      </div>

      {/* Full-width Footer */}
      <footer className="w-full border-t-4 border-black bg-white mt-12 md:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16 flex flex-col items-center gap-10">
          <div className="w-full max-w-4xl bg-[#f8f8f8] border-4 border-black p-6 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center transform sm:rotate-[0.5deg]">
            <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed text-black">
              Proof of Learning Portfolio project proudly built and published with informed consent during a <span className="bg-accent text-white px-2 py-0.5">Move Smart Contracts Code Camp</span> by <span className="font-black">DEVCON Philippines & Sui Foundation</span> — where the participant wrote, tested, and deployed a Move smart contract on Sui Mainnet. The object's immutability serves one purpose: the participant's authorship and timestamp cannot be altered, removed, or claimed by anyone else.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 border-y-4 border-black py-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="uppercase text-xs font-black tracking-[0.2em] text-accent">On-Chain Object ID</span>
              <div className="bg-black text-white border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform sm:rotate-[-0.5deg]">
                <code className="text-xs sm:text-sm font-mono break-all font-bold">
                  {PORTFOLIO_OBJECT_ID}
                </code>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4">
              <h3 className="text-xl sm:text-2xl font-black uppercase text-black bg-white border-4 border-black px-4 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:rotate-[-1deg]">
                Explore More
              </h3>
              <div className="flex flex-wrap justify-center md:justify-end gap-4">
                <a href="https://devcon.ph" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-black text-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-secondary transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group">
                  <img src={devconLogo} alt="DEVCON.ph Logo" className="w-24 md:w-32 object-contain" />
                </a>
                <a href="https://sui.io" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#38bdf8] hover:text-white transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group">
                  <img src={suiLogo} alt="Sui Logo" className="w-6 h-6 md:w-8 md:h-8 object-contain group-hover:invert transition-all" />
                  <span className="text-sm sm:text-lg font-black uppercase">SUI Official</span>
                </a>
                <a href={`https://suiscan.xyz/mainnet/object/${PORTFOLIO_OBJECT_ID}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-black border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-accent text-white transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                  <span className="text-sm sm:text-lg font-black uppercase">Suiscan</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
