import React from 'react';
import { TimelineSection, Footer } from '../components/ConferenceSections';
import { Clock, MapPin } from 'lucide-react';

const scheduleData = [
    {
        day: "Day 1 - September 15",
        events: [
            { time: "08:00", title: "Registration & Coffee", location: "Foyer", type: "general" },
            { time: "09:00", title: "Opening Ceremony", location: "Auditorium", type: "keynote" },
            { time: "10:30", title: "Keynote: Prof. Sarah Jenkins", location: "Auditorium", type: "keynote" },
            { time: "13:30", title: "Parallel Sessions A (Genetics)", location: "Room 101-104", type: "session" },
        ]
    },
    {
        day: "Day 2 - September 16",
        events: [
            { time: "09:00", title: "Keynote: Dr. Ahmed Hassan", location: "Auditorium", type: "keynote" },
            { time: "10:00", title: "Workshop: CRISPR Techniques", location: "Lab A", type: "workshop" },
            { time: "13:00", title: "Poster Presentation", location: "Exhibition Hall", type: "general" },
        ]
    },
    {
        day: "Day 3 - September 17",
        events: [
            { time: "09:00", title: "Closing Ceremony", location: "Auditorium", type: "general" },
            { time: "13:00", title: "City Tour (Optional)", location: "Lobby", type: "social" },
        ]
    }
];

const Schedule: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-deepNavy">
        <div className="text-center py-10">
            <h1 className="text-5xl font-sans font-bold text-white">Conference Schedule</h1>
            <p className="text-slate-400 mt-4 text-lg">A detailed agenda of the 3-day event.</p>
        </div>
      
      <TimelineSection />
      
      <div className="container mx-auto px-6 py-12 mb-12">
        <h2 className="text-3xl font-sans font-bold text-white mb-10 text-center">Detailed Program</h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {scheduleData.map((day, dayIdx) => (
                <div key={dayIdx} className="glass-card rounded-3xl overflow-hidden flex flex-col">
                    <div className="bg-scienceBlue/20 p-6 border-b border-white/10">
                        <h3 className="text-white font-bold text-xl">{day.day}</h3>
                    </div>
                    <div className="p-6 space-y-6 flex-grow">
                        {day.events.map((event, idx) => (
                            <div key={idx} className="relative pl-6 border-l-2 border-white/10 last:pb-0 pb-6">
                                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-bioCyan"></div>
                                <div className="text-xs text-bioCyan font-mono mb-1 flex items-center gap-1">
                                    <Clock size={12}/> {event.time}
                                </div>
                                <h4 className="font-bold text-white text-base leading-tight mb-1">{event.title}</h4>
                                <div className="text-slate-500 text-xs flex items-center gap-1">
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