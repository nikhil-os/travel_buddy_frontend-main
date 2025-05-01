'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import TravelBuddyHeader from '@/components/ui/TravelBuddyHeader';
import DestinationSearch from '@/components/ui/DestinationSearch';
import PopularDestinations from '@/components/ui/PopularDestinations';
import AppsForJapan from '@/components/ui/AppsForJapan';

// Import API helper
import api from '@/app/utils/api';

export default function Home() {
  const [showAppsForJapan, setShowAppsForJapan] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Fetch popular destinations from backend
    api.get('/destinations/popular')
      .then((res) => {
        setDestinations(res.data);
      })
      .catch((err) => console.error('Failed to load destinations:', err))
      .finally(() => setLoading(false));
  }, []);

  const handleContinue = (selectedDestination) => {
    const country = selectedDestination.trim().toLowerCase();
    if (country === 'japan') {
      setShowAppsForJapan(true);
    } else {
      router.push(`/qrforapps?destination=${encodeURIComponent(country)}`);
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

            {/* Pass fetched data into PopularDestinations */}
            {!loading && (
              <PopularDestinations
                destinations={destinations}
                onSelect={handleContinue}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}
