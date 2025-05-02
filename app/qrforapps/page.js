'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import FontLoader from '@/components/ui/FontLoader';
import TravelBuddyHeader from '@/components/ui/TravelBuddyHeader';
import QRCodeSection from '@/components/ui/QRCodeSection';
import AppDownload from '@/components/ui/AppDownload';
import api from '@/app/utils/api';

export default function QRForAppsPage() {
  const searchParams = useSearchParams();
  const destination = searchParams.get('destination') || '';
  const [apps, setApps] = useState([]);

  useEffect(() => {
    if (destination) {
      api.get(`/apps?country=${encodeURIComponent(destination)}`)
        .then((res) => setApps(res.data))
        .catch((err) => console.error('Error fetching apps:', err));
    }
  }, [destination]);

  return (
    <>
      <FontLoader />
      <TravelBuddyHeader />
      <main className="flex flex-col items-center bg-stone-50 min-h-screen p-6">
        <section className="w-full max-w-md mx-auto">
          <h1 className="mb-4 text-2xl font-semibold text-center text-gray-900">
            Your App Download QR Code
          </h1>
          <p className="mb-6 text-center text-sm text-gray-500">
            {destination
              ? `Here’s your app list for ${destination.charAt(0).toUpperCase() + destination.slice(1)}`
              : 'Scan the QR code below or use the buttons to download your curated apps.'}
          </p>

          <QRCodeSection />

          {/* Optional: Render the app list */}
          {apps.length > 0 && (
            <ul className="mb-6 text-sm text-gray-700 list-disc list-inside">
              {apps.map((app) => (
                <li key={app.id}>{app.name}</li>
              ))}
            </ul>
          )}

          <AppDownload />
        </section>
      </main>
    </>
  );
}
