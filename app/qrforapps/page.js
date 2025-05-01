// app/qrforapps/page.js
'use client';

import React from 'react';
import FontLoader from '@/components/ui/FontLoader';
import TravelBuddyHeader from '@/components/ui/TravelBuddyHeader';
import QRCodeSection from '@/components/ui/QRCodeSection';
import AppDownload from '@/components/ui/AppDownload';

export default function QRForAppsPage() {
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
            Scan the QR code below or use the buttons to download your curated apps.
          </p>
          <QRCodeSection />
          <AppDownload />
        </section>
      </main>
    </>
  );
}
