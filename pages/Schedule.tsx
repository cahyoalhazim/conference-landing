import React from 'react';
import { TimelineSection, Footer } from '../components/ConferenceSections';
import { Clock, MapPin } from 'lucide-react';

const scheduleData = [
    {
        day: "Day 1 - September 12",
        events: [
            { time: "08:00", title: "Registration & Coffee", location: "Foyer", type: "general" },
            { time: "09:00", title: "Opening Ceremony", location: "Grand Ballroom", type: "keynote" },
            { time: "10:30", title: "Keynote: Prof. Dennis Lo", location: "Grand Ballroom", type: "keynote" },
            { time: "13:30", title: "Parallel Sessions A (Genetics)", location: "Room 101-104", type: "session" },
        ]
    },
    {
        day: "Day 2 - September 13",
        events: [
            { time: "09:00", title: "Keynote: Prof. Kwok-Yung Yuen", location: "Grand Ballroom", type: "keynote" },
            { time: "10:00", title: "Workshop: CRISPR Techniques", location: "Lab A", type: "workshop" },
            { time: "13:00", title: "Poster Presentation", location: "Exhibition Hall", type: "general" },
        ]
    },
    {
        day: "Day 3 - September 14",
        events: [
            { time: "09:00", title: "Closing Ceremony", location: "Grand Ballroom", type: "general" },
            { time: "13:00", title: "Cultural Tour (Ubud)", location: "Lobby", type: "social" },
        ]
    }
];

const Schedule: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-deepNavy transition-colors duration-300">
        <div className="text-center py-10">
            <h1 className="text-5xl font-sans font-bold text-slate-900 dark:text-white">Conference Schedule</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg">A detailed agenda of the event.</p>
        </div>
      
      <TimelineSection />
      
      <div className="container mx-auto px-6 py-12 mb-12">
        <h2 className="text-3xl font-sans font-bold text-slate-900 dark:text-white mb-10 text-center">Detailed Program</h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {scheduleData.map((day, dayIdx) => (
                <div key={dayIdx} className="glass-card rounded-3xl overflow-hidden flex flex-col">
                    <div className="bg-scienceBlue/10 dark:bg-scienceBlue/20 p-6 border-b border-slate-200 dark:border-white/10">
                        <h3 className="text-slate-900 dark:text-white font-bold text-xl">{day.day}</h3>
                    </div>
                    <div className="p-6 space-y-6 flex-grow">
                        {day.events.map((event, idx) => (
                            <div key={idx} className="relative pl-6 border-l-2 border-slate-200 dark:border-white/10 last:pb-0 pb-6">
                                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-scienceBlue dark:bg-bioCyan"></div>
                                <div className="text-xs text-scienceBlue dark:text-bioCyan font-mono mb-1 flex items-center gap-1">
                                    <Clock size={12}/> {event.time}
                                </div>
                                <h4 className="font-bold text-slate-800 dark:text-white text-base leading-tight mb-1">{event.title}</h4>
                                <div className="text-slate-500 dark:text-slate-500 text-xs flex items-center gap-1">
                                    <MapPin size={10}/> {event.location}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;