'use client';

import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar as CalendarIcon,
  CircleCheck,
} from 'lucide-react';

interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

interface RentalDateTimeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (data: {
    startDate: Date;
    endDate: Date;
    pickupTime: string;
    returnTime: string;
    totalDays: number;
    formattedRange: string;
  }) => void;
  initialFrom?: Date;
  initialTo?: Date;
  initialPickupTime?: string;
  initialReturnTime?: string;
}

const MONTH_NAMES = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const DAY_NAMES = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

// Slot waktu kelipatan 30 menit (06:00 s/d 23:30)
export const TIME_SLOTS_30MIN = Array.from({ length: 36 }, (_, i) => {
  const totalMinutes = i * 30 + 360; // start at 06:00 (360 mins)
  const hour = Math.floor(totalMinutes / 60);
  const minute = totalMinutes % 60;
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
});

export function RentalDateTimeModal({
  isOpen,
  onClose,
  onConfirm,
  initialFrom,
  initialTo,
  initialPickupTime = '06:00',
  initialReturnTime = '06:00',
}: RentalDateTimeModalProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const defaultFrom = initialFrom || today;
  const defaultTo = initialTo || new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000);

  const [currentMonth, setCurrentMonth] = useState(new Date(defaultFrom.getFullYear(), defaultFrom.getMonth(), 1));
  const [range, setRange] = useState<DateRange>({ from: defaultFrom, to: defaultTo });
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
  const [pickupTime, setPickupTime] = useState<string>(initialPickupTime);

  if (!isOpen) return null;

  // Navigasi bulan
  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  // Logic kalender: SEN, SEL, RAB, KAM, JUM, SAB, MIN (dimulai Senin seperti Balioh)
  const BALIOH_DAY_NAMES = ['SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB', 'MIN'];

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  
  // Hitung offset Senin = 0, Minggu = 6
  const rawFirstDay = new Date(year, month, 1).getDay();
  const firstDayIndex = (rawFirstDay + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handleDateClick = (clickedDate: Date) => {
    clickedDate.setHours(0, 0, 0, 0);

    let nextFrom: Date | undefined = range.from;
    let nextTo: Date | undefined = range.to;

    if (!range.from || (range.from && range.to)) {
      nextFrom = clickedDate;
      nextTo = undefined;
      setRange({ from: clickedDate, to: undefined });
    } else if (range.from && !range.to) {
      if (clickedDate.getTime() < range.from.getTime()) {
        nextFrom = clickedDate;
        nextTo = undefined;
        setRange({ from: clickedDate, to: undefined });
      } else if (clickedDate.getTime() === range.from.getTime()) {
        const nextDay = new Date(clickedDate.getTime() + 24 * 60 * 60 * 1000);
        nextFrom = clickedDate;
        nextTo = nextDay;
        setRange({ from: clickedDate, to: nextDay });
      } else {
        nextFrom = range.from;
        nextTo = clickedDate;
        setRange({ from: range.from, to: clickedDate });
      }
    }

    // Auto-update ke parent jika range sudah komplit
    if (nextFrom && nextTo) {
      const calcDays = Math.max(1, Math.round((nextTo.getTime() - nextFrom.getTime()) / (1000 * 60 * 60 * 24)));
      const fromStr = `${nextFrom.getDate()} ${MONTH_NAMES[nextFrom.getMonth()].slice(0, 3)}, ${pickupTime}`;
      const toStr = `${nextTo.getDate()} ${MONTH_NAMES[nextTo.getMonth()].slice(0, 3)}, ${pickupTime}`;
      onConfirm({
        startDate: nextFrom,
        endDate: nextTo,
        pickupTime,
        returnTime: pickupTime,
        totalDays: calcDays,
        formattedRange: `${fromStr} - ${toStr} (${calcDays} Hari)`,
      });
    }
  };

  const handleTimeSelect = (t: string) => {
    setPickupTime(t);
    const validFrom = range.from || today;
    const validTo = range.to || new Date(validFrom.getTime() + 2 * 24 * 60 * 60 * 1000);
    const calcDays = Math.max(1, Math.round((validTo.getTime() - validFrom.getTime()) / (1000 * 60 * 60 * 24)));
    const fromStr = `${validFrom.getDate()} ${MONTH_NAMES[validFrom.getMonth()].slice(0, 3)}, ${t}`;
    const toStr = `${validTo.getDate()} ${MONTH_NAMES[validTo.getMonth()].slice(0, 3)}, ${t}`;

    onConfirm({
      startDate: validFrom,
      endDate: validTo,
      pickupTime: t,
      returnTime: t,
      totalDays: calcDays,
      formattedRange: `${fromStr} - ${toStr} (${calcDays} Hari)`,
    });
  };

  const isRangeStart = (d: Date) => range.from && d.getTime() === range.from.getTime();
  const isRangeEnd = (d: Date) => range.to && d.getTime() === range.to.getTime();
  const isRangeMiddle = (d: Date) => {
    if (range.from && range.to) {
      return d.getTime() > range.from.getTime() && d.getTime() < range.to.getTime();
    }
    if (range.from && !range.to && hoveredDate) {
      return (
        d.getTime() > Math.min(range.from.getTime(), hoveredDate.getTime()) &&
        d.getTime() < Math.max(range.from.getTime(), hoveredDate.getTime())
      );
    }
    return false;
  };

  return (
    <>
      {/* Invisible backdrop to dismiss click outside */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Floating Popover Container aligned under the input field */}
      <div className="absolute left-0 top-full mt-2 w-[440px] sm:w-[480px] bg-white rounded-2xl border border-slate-200/90 shadow-2xl z-50 overflow-hidden flex flex-col text-slate-900 animate-in fade-in zoom-in-95 duration-150">
        <div className="grid grid-cols-12 divide-x divide-slate-100">
          {/* Kolom Kiri: Kalender Balioh (8 Kolom) */}
          <div className="col-span-8 p-4 space-y-3">
            {/* Header Bulan & Navigasi */}
            <div className="flex items-center justify-between px-1">
              <span className="font-extrabold text-[#0b132b] text-xs uppercase tracking-wider font-['Space_Grotesk']">
                {MONTH_NAMES[month]} {year}
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrevMonth}
                  className="w-7 h-7 rounded-lg hover:bg-slate-100 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextMonth}
                  className="w-7 h-7 rounded-lg hover:bg-slate-100 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Grid Kalender */}
            <div className="space-y-1">
              {/* Nama Hari: SEN SEL RAB KAM JUM SAB MIN */}
              <div className="grid grid-cols-7 text-center text-[10px] font-bold text-slate-400 pb-1">
                {BALIOH_DAY_NAMES.map((d, i) => (
                  <div key={i} className="py-0.5">
                    {d}
                  </div>
                ))}
              </div>

              {/* Tanggal */}
              <div className="grid grid-cols-7 gap-y-1 text-xs">
                {/* Offset hari pertama */}
                {Array.from({ length: firstDayIndex }).map((_, i) => (
                  <div key={`empty-${i}`} className="h-8" />
                ))}

                {/* Hari dalam bulan */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const dayNum = i + 1;
                  const dateObj = new Date(year, month, dayNum);
                  dateObj.setHours(0, 0, 0, 0);

                  const isPast = dateObj.getTime() < today.getTime();
                  const start = isRangeStart(dateObj);
                  const end = isRangeEnd(dateObj);
                  const middle = isRangeMiddle(dateObj);

                  let cellClasses =
                    'h-8 w-full flex items-center justify-center font-semibold text-xs transition-all relative ';

                  if (isPast) {
                    cellClasses += 'text-slate-300 cursor-not-allowed ';
                  } else {
                    cellClasses += 'cursor-pointer hover:bg-[#0b132b] hover:text-white ';
                  }

                  // Styling Dark Blue (#0b132b) untuk range & selection
                  if (start) {
                    cellClasses += 'bg-[#0b132b] text-white font-bold rounded-l-lg shadow-xs ';
                  } else if (end) {
                    cellClasses += 'bg-[#0b132b] text-white font-bold rounded-r-lg shadow-xs ';
                  } else if (middle) {
                    cellClasses += 'bg-[#1c2a4f]/20 text-[#0b132b] font-bold ';
                  } else if (!isPast) {
                    cellClasses += 'text-slate-700 rounded-lg ';
                  }

                  return (
                    <button
                      key={`day-${dayNum}`}
                      type="button"
                      disabled={isPast}
                      onMouseEnter={() => !isPast && setHoveredDate(dateObj)}
                      onClick={() => handleDateClick(dateObj)}
                      className={cellClasses}
                    >
                      {dayNum}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>Klik tanggal mulai & tanggal selesai</span>
              <span className="font-bold text-[#0b132b]">
                {range.from && range.to
                  ? `${Math.max(1, Math.round((range.to.getTime() - range.from.getTime()) / (1000 * 60 * 60 * 24)))} Hari Sewa`
                  : 'Pilih Durasi'}
              </span>
            </div>
          </div>

          {/* Kolom Kanan: Panel Vertikal 'PILIH JAM' (4 Kolom) */}
          <div className="col-span-4 p-3 bg-slate-50/50 flex flex-col">
            <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block px-1 mb-2 font-['Space_Grotesk']">
              PILIH JAM
            </span>

            {/* List Jam Vertikal per 30 Menit */}
            <div className="h-[280px] overflow-y-auto space-y-1 pr-1 no-scrollbar">
              {TIME_SLOTS_30MIN.map((time) => {
                const isSelected = pickupTime === time;

                return (
                  <button
                    key={time}
                    type="button"
                    onClick={() => handleTimeSelect(time)}
                    className={`w-full py-1.5 px-2.5 text-xs font-semibold rounded-lg text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#0b132b] text-white font-bold shadow-xs'
                        : 'bg-white hover:bg-[#0b132b] hover:text-white text-slate-700 border border-slate-200/80'
                    }`}
                  >
                    <span>{time}</span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
