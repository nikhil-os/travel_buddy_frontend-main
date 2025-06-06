'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FontLoader from '@/components/ui/FontLoader';
import TravelBuddyHeader from '@/components/ui/TravelBuddyHeader';
import AppsForJapan from '@/components/ui/AppsForJapan';
import QRCodeSection from '@/components/ui/QRCodeSection';
import TravelSelections from '@/components/ui/TravelSelections';
import AppDownload from '@/components/ui/AppDownload';
import api from '@/app/utils/api';

export default function CountryPage({ params }) {
  const { country } = params;
  const [step, setStep] = useState(1); // skip search, start at app selection
  const [selectedApps, setSelectedApps] = useState([]);
  const [countryApps, setCountryApps] = useState([]);
  const router = useRouter();

  // If you want to reset when country changes
  useEffect(() => {
    setStep(1);
    // Fetch apps for the selected country from API
    api.get(`/apps?country=${encodeURIComponent(country)}`)
      .then((res) => setCountryApps(res.data))
      .catch((err) => console.error('Failed to fetch apps:', err));
  }, [country]);

  const handleGenerateQRCode = () => {
    setStep(2);
  };

  const handleDownloadApps = () => {
    setStep(3);
  };

  return (
    <>
      <FontLoader />
      <TravelBuddyHeader />
      <main className="p-6 bg-gray-50 min-h-screen font-['Inter',sans-serif]">
        {/* Step 1: App selection for the given country */}
        {step === 1 && (
          <AppsForJapan
            country={country}
            apps={countryApps}
            onGenerateQRCode={handleGenerateQRCode}
          />
        )}

        {/* Step 2: Show QR code */}
        {step === 2 && (
          <QRCodeSection onDownload={handleDownloadApps} />
        )}

        {/* Step 3: Confirmation and download */}
        {step === 3 && (
          <>
            <TravelSelections destination={country} />
            <AppDownload />
          </>
        )}
      </main>
    </>
  );
}
