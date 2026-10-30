import React from 'react';
import { Home } from 'lucide-react';
import Button from '../components/Button';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 subtle-grid opacity-50 pointer-events-none -z-10" />

        <div className="max-w-lg mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F7FC] border border-[#E7E9F2] text-xs font-semibold uppercase tracking-wider text-[#3027D9]">
            <span>404 Error &bull; Route Unreachable</span>
          </div>

          <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-[#08085B]">
            404
          </h1>

          <h2 className="text-2xl font-bold text-[#111827]">
            Digital Route Not Found
          </h2>

          <p className="text-sm text-[#667085] leading-relaxed">
            The page or digital asset you requested does not exist or has been relocated to another route.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <Button to="/" variant="primary" icon={Home} iconPosition="left">
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
