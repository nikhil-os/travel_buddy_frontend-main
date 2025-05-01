// app/tipsandtraveldetails/page.js
'use client';

import React from 'react';
import FontLoader from '@/components/ui/FontLoader';
import TravelBuddyHeader from '@/components/ui/TravelBuddyHeader';
import ActionButton from '@/components/ui/ActionButton';

// Using existing TravelSelections component for details panel
import TravelSelections from '@/components/ui/TravelSelections';

// Inline TipsSection to match PDF design
function TipsSection() {
  const tips = [
    'Pack a portable charger.',
    'Learn basic local phrases.',
    'Carry a photocopy of your passport.',
    'Notify your bank of travel dates.',
  ];
  return (
    <ul className="space-y-4 text-gray-700">
      {tips.map((tip, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <i className="ti ti-lightbulb text-blue-500 mt-1" aria-hidden="true" />
          <span>{tip}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TipsAndTravelDetailsPage() {
  return (
    <>
      <FontLoader />
      <TravelBuddyHeader />
      <main className="bg-stone-50 min-h-screen p-6 flex flex-col items-center">
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Travel Details Panel */}
          <section className="bg-white rounded-xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Travel Details
            </h2>
            <TravelSelections />
          </section>

          {/* Travel Tips Panel */}
          <section className="bg-white rounded-xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Travel Tips
            </h2>
            <TipsSection />
          </section>
        </div>

        {/* Footer Actions */}
        <div className="w-full max-w-4xl flex flex-col sm:flex-row gap-4 mt-8">
          <ActionButton
            icon="ti ti-arrow-left"
            text="Back to Home"
            variant="secondary"
            onClick={() => window.location.href = '/'}
          />
          <ActionButton
            icon="ti ti-download"
            text="Download PDF"
            variant="primary"
            onClick={() => console.log('Download Tips PDF')}
          />
        </div>
      </main>
    </>
  );
}
