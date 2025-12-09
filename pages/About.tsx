import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6">About NexusForge</h1>
        <div className="prose prose-invert prose-lg text-slate-300">
          <p>
            Welcome to NexusForge. We are a team of passionate gamers, modders, and hardware enthusiasts dedicated to improving your gaming experience.
          </p>
          <p>
            The PC gaming landscape is fragmented. Between thousands of mods, varied server hosting providers, and countless tools claiming to "boost performance," it's hard to know what actually works.
          </p>
          <h2 className="text-white mt-8 mb-4">Our Mission</h2>
          <p>
            To curate, test, and review the best digital assets for gamers. We believe in quality over quantity. If a mod causes crashes, we don't list it. If a VPN increases ping, we don't recommend it.
          </p>
          <h2 className="text-white mt-8 mb-4">How We Review</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Performance Testing:</strong> We benchmark tools on low, mid, and high-end rigs.</li>
            <li><strong>Security Checks:</strong> We scan all recommended downloads for malware.</li>
            <li><strong>Community Feedback:</strong> We aggregate user reviews to spot long-term issues.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
