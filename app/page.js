'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import TravelBuddyHeader from '@/components/ui/TravelBuddyHeader';
import DestinationSearch from '@/components/ui/DestinationSearch';
import PopularDestinations from '@/components/ui/PopularDestinations';
import AppsForJapan from '@/components/ui/AppsForJapan';

export default function Home() {
  const [showAppsForJapan, setShowAppsForJapan] = useState(false);
  const router = useRouter();

  const handleContinue = (selectedDestination) => {
    const country = selectedDestination.trim().toLowerCase();
    if (country === 'japan') {
      setShowAppsForJapan(true);
    } else {
      router.push(`/travelbuddy/${encodeURIComponent(country)}`);
    }
  };

  const handleGenerateQRCode = () => {
    router.push('/travelbuddy/japan');
  };

  return (
    <div className="flex flex-col bg-stone-50 min-h-screen">
      <TravelBuddyHeader />
      <main className="flex flex-col items-center px-6 py-12 mx-auto max-w-[800px]">
        {showAppsForJapan ? (
          <AppsForJapan onGenerateQRCode={handleGenerateQRCode} />
        ) : (
          <>
            <h2 className="mb-4 text-3xl font-semibold text-center text-blue-500">
              Where are you heading next?
            </h2>
            <p className="mb-8 text-base text-center text-gray-500">
              Select your destination and let us be your travel companion
            </p>

            <DestinationSearch onContinue={handleContinue} />
            <PopularDestinations />
          </>
        )}
      </main>
    </div>
  );
}