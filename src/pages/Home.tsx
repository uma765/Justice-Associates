import React, { useState } from 'react';
import { Calendar } from "../components/ui/calendar";
import { Button } from "../components/ui/button";
import { Scale, Users, Briefcase, Phone, Mail, MapPin } from 'lucide-react';

const lawyers = [
  {
    name: "Sarah Johnson",
    specialty: "Corporate Law",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300",
    description: "Specializing in business law with 15 years of experience.",
  },
  {
    name: "Michael Chen",
    specialty: "Criminal Defense",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=300&h=300",
    description: "Expert criminal defense attorney with a proven track record.",
  },
  {
    name: "Emily Rodriguez",
    specialty: "Family Law",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
    description: "Compassionate family law attorney focused on positive outcomes.",
  },
];

function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");

  const times = [
    "9:00 AM", "10:00 AM", "11:00 AM",
    "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <div 
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2070&h=1000')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h2 className="text-5xl font-bold mb-4">Expert Legal Solutions</h2>
              <p className="text-xl mb-8">Protecting Your Rights with Experience and Dedication</p>
              <Button size="lg">Schedule Consultation</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <section id="lawyers" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Legal Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {lawyers.map((lawyer) => (
              <div key={lawyer.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={lawyer.image} alt={lawyer.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{lawyer.name}</h3>
                  <p className="text-slate-600 mb-2">{lawyer.specialty}</p>
                  <p className="text-slate-500">{lawyer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Schedule a Consultation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Available Time Slots</h3>
              <div className="grid grid-cols-2 gap-4">
                {times.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
              {date && selectedTime && (
                <div className="mt-8">
                  <Button className="w-full" size="lg">
                    Book Appointment
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Phone</h3>
                <p>(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <Mail className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Email</h3>
                <p>info@justice-associates.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Address</h3>
                <p>123 Legal Street, Suite 100<br />New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;