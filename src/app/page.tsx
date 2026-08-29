import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);



import Features from "@/components/Features";
import StatsSection from "@/components/StatsSection";


export default function Home() {
  return (
    <div>
      {/* <Hero></Hero> */}
      <StatsSection></StatsSection>
      <Features></Features>
    </div>
  );
}
