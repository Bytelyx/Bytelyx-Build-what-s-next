import React from 'react';
import { 
  Car, ShoppingBag, BarChart3, Search, 
  ShieldCheck, CheckCircle2, TrendingUp 
} from 'lucide-react';

export default function ProjectMockup({ projectId }) {
  if (projectId === 'car-rental-platform') {
    return (
      <div className="w-full h-full bg-[#08085B]/3 rounded-xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden border border-[#E7E9F2]">
        {/* Browser Top Chrome */}
        <div className="flex items-center justify-between pb-3 border-b border-[#E7E9F2]/70">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          </div>
          <div className="bg-white px-3 py-1 rounded-md text-[10px] text-[#667085] font-mono border border-[#E7E9F2] flex items-center gap-1.5 shadow-2xs">
            <Car className="w-3 h-3 text-[#3027D9]" />
            <span>bytelyx-rental.app/fleet</span>
          </div>
          <div className="w-8" />
        </div>

        {/* Mock UI Content */}
        <div className="my-3 space-y-3">
          {/* Search & Filter Bar */}
          <div className="bg-white p-2.5 rounded-lg border border-[#E7E9F2] shadow-2xs flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-[#667085]">
              <Search className="w-3.5 h-3.5 text-[#3027D9]" />
              <span className="text-[11px] font-medium">Select Pickup Location &bull; Today</span>
            </div>
            <div className="bg-[#3027D9] text-white px-2.5 py-1 rounded text-[10px] font-medium">
              Search Fleet
            </div>
          </div>

          {/* Vehicle Cards Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-white p-3 rounded-lg border border-[#E7E9F2] shadow-2xs">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-[9px] font-bold text-[#3027D9] uppercase tracking-wider">Premium EV</span>
                  <p className="text-xs font-bold text-[#111827]">Apex GT Electric</p>
                </div>
                <span className="text-[10px] font-semibold text-[#08085B] bg-[#F6F7FC] px-1.5 py-0.5 rounded">$120<span className="text-[8px] text-[#667085]">/d</span></span>
              </div>
              <div className="h-10 bg-[#F6F7FC] rounded flex items-center justify-center">
                <Car className="w-6 h-6 text-[#3027D9]/60" />
              </div>
              <div className="mt-2 flex items-center justify-between text-[9px] text-[#667085]">
                <span>5 Seats &bull; Auto</span>
                <span className="text-emerald-600 font-medium flex items-center gap-0.5">
                  <CheckCircle2 className="w-2.5 h-2.5" /> Ready
                </span>
              </div>
            </div>

            <div className="bg-white p-3 rounded-lg border border-[#E7E9F2] shadow-2xs">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-[9px] font-bold text-[#3027D9] uppercase tracking-wider">Executive SUV</span>
                  <p className="text-xs font-bold text-[#111827]">Vanguard AWD</p>
                </div>
                <span className="text-[10px] font-semibold text-[#08085B] bg-[#F6F7FC] px-1.5 py-0.5 rounded">$145<span className="text-[8px] text-[#667085]">/d</span></span>
              </div>
              <div className="h-10 bg-[#F6F7FC] rounded flex items-center justify-center">
                <Car className="w-6 h-6 text-[#08085B]/60" />
              </div>
              <div className="mt-2 flex items-center justify-between text-[9px] text-[#667085]">
                <span>7 Seats &bull; AWD</span>
                <span className="text-emerald-600 font-medium flex items-center gap-0.5">
                  <CheckCircle2 className="w-2.5 h-2.5" /> Ready
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status bar */}
        <div className="bg-white/80 p-2 rounded-lg border border-[#E7E9F2] flex items-center justify-between text-[10px] text-[#667085]">
          <span className="flex items-center gap-1 text-[#3027D9] font-medium">
            <ShieldCheck className="w-3 h-3" /> Real-time Booking Verification
          </span>
          <span className="font-mono text-[9px]">48 Available</span>
        </div>
      </div>
    );
  }

  if (projectId === 'ecommerce-platform') {
    return (
      <div className="w-full h-full bg-[#08085B]/3 rounded-xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden border border-[#E7E9F2]">
        {/* Browser Top Chrome */}
        <div className="flex items-center justify-between pb-3 border-b border-[#E7E9F2]/70">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          </div>
          <div className="bg-white px-3 py-1 rounded-md text-[10px] text-[#667085] font-mono border border-[#E7E9F2] flex items-center gap-1.5 shadow-2xs">
            <ShoppingBag className="w-3 h-3 text-[#3027D9]" />
            <span>bytelyx-store.app/catalog</span>
          </div>
          <div className="w-8" />
        </div>

        {/* Mock UI Content */}
        <div className="my-3 space-y-3">
          {/* Header promo & cart badge */}
          <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-[#E7E9F2] shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#08085B]">AURA MERCHANDISE</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-[#3027D9]/10 text-[#3027D9] font-semibold">New Season</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#08085B] font-semibold">
              <ShoppingBag className="w-3.5 h-3.5 text-[#3027D9]" />
              <span className="text-[11px] bg-[#3027D9] text-white px-1.5 py-0.2 rounded-full text-[9px]">3</span>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-white p-3 rounded-lg border border-[#E7E9F2] shadow-2xs">
              <div className="h-12 bg-gradient-to-tr from-[#F6F7FC] to-[#E7E9F2] rounded flex items-center justify-center mb-2">
                <span className="text-[10px] font-mono font-medium text-[#667085]">CHRONO ONE</span>
              </div>
              <p className="text-xs font-bold text-[#111827]">Minimal Timepiece</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs font-extrabold text-[#08085B]">$240.00</span>
                <span className="text-[9px] text-[#3027D9] font-medium bg-[#3027D9]/10 px-1.5 py-0.5 rounded">In Stock</span>
              </div>
            </div>

            <div className="bg-white p-3 rounded-lg border border-[#E7E9F2] shadow-2xs">
              <div className="h-12 bg-gradient-to-tr from-[#F6F7FC] to-[#E7E9F2] rounded flex items-center justify-center mb-2">
                <span className="text-[10px] font-mono font-medium text-[#667085]">AUDIO PRO</span>
              </div>
              <p className="text-xs font-bold text-[#111827]">Studio Monitor 40</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs font-extrabold text-[#08085B]">$185.00</span>
                <span className="text-[9px] text-[#3027D9] font-medium bg-[#3027D9]/10 px-1.5 py-0.5 rounded">In Stock</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Checkout Status bar */}
        <div className="bg-white/80 p-2 rounded-lg border border-[#E7E9F2] flex items-center justify-between text-[10px] text-[#667085]">
          <span className="text-emerald-700 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Instant 2-Click Checkout
          </span>
          <span className="font-mono text-[9px] text-[#08085B] font-bold">Subtotal: $425.00</span>
        </div>
      </div>
    );
  }

  // Business Management System
  return (
    <div className="w-full h-full bg-[#08085B]/3 rounded-xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden border border-[#E7E9F2]">
      {/* Browser Top Chrome */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E7E9F2]/70">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="bg-white px-3 py-1 rounded-md text-[10px] text-[#667085] font-mono border border-[#E7E9F2] flex items-center gap-1.5 shadow-2xs">
          <BarChart3 className="w-3 h-3 text-[#3027D9]" />
          <span>ops.bytelyx-erp.internal/dashboard</span>
        </div>
        <div className="w-8" />
      </div>

      {/* Mock Dashboard Content */}
      <div className="my-3 space-y-3">
        {/* KPI metrics bar */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white p-2 rounded-lg border border-[#E7E9F2] shadow-2xs">
            <span className="text-[9px] text-[#667085] block">Orders Today</span>
            <span className="text-xs font-extrabold text-[#08085B]">142 units</span>
          </div>
          <div className="bg-white p-2 rounded-lg border border-[#E7E9F2] shadow-2xs">
            <span className="text-[9px] text-[#667085] block">Inventory Health</span>
            <span className="text-xs font-extrabold text-emerald-600">98.4%</span>
          </div>
          <div className="bg-white p-2 rounded-lg border border-[#E7E9F2] shadow-2xs">
            <span className="text-[9px] text-[#667085] block">Fulfillment</span>
            <span className="text-xs font-extrabold text-[#3027D9]">1.4h avg</span>
          </div>
        </div>

        {/* Operational Workflow Table */}
        <div className="bg-white p-2.5 rounded-lg border border-[#E7E9F2] shadow-2xs text-[10px]">
          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-[#F6F7FC] font-semibold text-[#667085]">
            <span>Order ID</span>
            <span>Customer</span>
            <span>Status</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[#08085B]">#ORD-8941</span>
              <span className="text-[#111827]">Apex Logistics</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 text-[9px] font-semibold">Dispatched</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[#08085B]">#ORD-8942</span>
              <span className="text-[#111827]">Vanguard Media</span>
              <span className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 text-[9px] font-semibold">Packaging</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status bar */}
      <div className="bg-white/80 p-2 rounded-lg border border-[#E7E9F2] flex items-center justify-between text-[10px] text-[#667085]">
        <span className="flex items-center gap-1 text-[#3027D9] font-medium">
          <TrendingUp className="w-3 h-3" /> Live Data Synchronization
        </span>
        <span className="font-mono text-[9px] text-emerald-600 font-bold">● Active 100%</span>
      </div>
    </div>
  );
}
