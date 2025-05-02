'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/ui/Header';
import SuccessMessage from '@/components/ui/SuccessMessage';
import AppDownload from '@/components/ui/AppDownload';
import TravelSelections from '@/components/ui/TravelSelections';
import LocalTravelTips from '@/components/ui/LocalTravelTips';
import api from '@/app/utils/api';

function TravelConfirmation() {
  const [selections, setSelections] = useState(null);
  const [tips, setTips] = useState([]);

  useEffect(() => {
    // Fetch travel selections
    api.get('/travel/selections')
      .then(res => setSelections(res.data))
      .catch(err => console.error('Failed to load selections', err));

    // Fetch local travel tips
    api.get('/travel/tips')
      .then(res => setTips(res.data))
      .catch(err => console.error('Failed to load tips', err));
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <main className="mx-auto my-0 bg-white max-w-[1200px]">
        <Header />
        <section className="p-6 bg-gray-50 max-sm:p-4">
          <SuccessMessage />

          <AppDownload />

          {/* Pass dynamic data to TravelSelections if needed */}
          {selections && <TravelSelections data={selections} />}

          {/* Pass fetched tips to LocalTravelTips */}
          <LocalTravelTips tips={tips} />
        </section>
      </main>
    </>
  );
}

export default TravelConfirmation;
