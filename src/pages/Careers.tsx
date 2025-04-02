import React from 'react';
import { Button } from "../components/ui/button";
import { Briefcase, GraduationCap, Scale, Users } from 'lucide-react';

const jobOpenings = [
  {
    title: "Junior Corporate Law Associate",
    department: "Corporate Law",
    experience: "0-2 years",
    description: "Seeking a motivated junior attorney to join our corporate law team. The ideal candidate will assist in M&A transactions, corporate governance, and securities compliance.",
    requirements: [
      "JD from an accredited law school",
      "Active bar membership",
      "Strong academic credentials",
      "Excellent written and verbal communication skills"
    ]
  },
  {
    title: "Junior Litigation Associate",
    department: "Litigation",
    experience: "1-3 years",
    description: "Looking for a junior litigation associate to support our trial team. Role includes drafting pleadings, conducting research, and assisting in trial preparation.",
    requirements: [
      "JD degree required",
      "State bar admission",
      "Prior litigation experience preferred",
      "Strong analytical and research skills"
    ]
  },
  {
    title: "First-Year Associate Program",
    department: "Multiple Practice Areas",
    experience: "New Graduates",
    description: "Our first-year associate program provides comprehensive training across multiple practice areas. Ideal for recent law school graduates seeking to build a strong foundation.",
    requirements: [
      "Recent JD graduate",
      "Bar exam passage required",
      "Strong academic performance",
      "Leadership experience"
    ]
  }
];

function Careers() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[400px]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&q=80&w=2070&h=1000')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
              <p className="text-xl">Build your career with one of the most respected law firms in the country</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Justice & Associates?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Scale className="h-12 w-12 mx-auto mb-4 text-slate-700" />
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-slate-600">Work with top legal professionals on challenging cases</p>
            </div>
            <div className="text-center">
              <GraduationCap className="h-12 w-12 mx-auto mb-4 text-slate-700" />
              <h3 className="text-xl font-bold mb-2">Growth</h3>
              <p className="text-slate-600">Continuous learning and development opportunities</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-slate-700" />
              <h3 className="text-xl font-bold mb-2">Culture</h3>
              <p className="text-slate-600">Collaborative and inclusive work environment</p>
            </div>
            <div className="text-center">
              <Briefcase className="h-12 w-12 mx-auto mb-4 text-slate-700" />
              <h3 className="text-xl font-bold mb-2">Impact</h3>
              <p className="text-slate-600">Make a difference in clients' lives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                <div className="mb-4">
                  <span className="inline-block bg-slate-100 rounded-full px-3 py-1 text-sm font-semibold text-slate-700 mr-2">
                    {job.department}
                  </span>
                  <span className="inline-block bg-slate-100 rounded-full px-3 py-1 text-sm font-semibold text-slate-700">
                    {job.experience}
                  </span>
                </div>
                <p className="text-slate-600 mb-4">{job.description}</p>
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-slate-600">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
                <Button>Apply Now</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;