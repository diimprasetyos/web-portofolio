"use client";

import Link from "next/link";
import {
  Github,
  Mail,
  ExternalLink,
  Linkedin,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  const skills = [
    "Javascript",
    "TypeScript",
    "Python",
    "HTML",
    "CSS",
    "PHP",
    "SQL",
    "Laravel",
    "React.js",
    "Next.js",
    "Node.js",
    "Express",
    "Git",
    "Tensorflow",
    "Tableau",
    "+7",
  ];
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 font-mono">
      <header className="mb-16">
        <h1 className="text-3xl font-normal mb-2"> Hi,</h1>
        <h2 className="text-3xl font-normal mb-4">
          {" "}
          I&apos;m Dimas Surya Prasetyo.{" "}
          <span className="text-gray-500">Full-Stack Developer.</span>
        </h2>
        {/* Social Links */}
        <div className="flex gap-4 items-center">
          <Link
            href="https://github.com/diimprasetyos"
            className="flex items-center gap-1 underline"
          >
            <Github size={24} />
            <span>Github</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/diimprasetyo"
            className="flex items-center gap-1 underline"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </Link>
          <Link
            href="mailto:diimprasetyos@gmail.com"
            className="flex items-center gap-1 underline"
          >
            <Mail size={24} />
            <span>Email</span>
          </Link>
        </div>
      </header>

      {/* About */}
      <section className="mb-16">
        <h2 className="text-2xl font-normal mb-4 flex items-center">
          <ChevronRight />
          About
        </h2>
        <div className="text-gray-800 leading-relaxed mb-4">
          I'm a Computer Science graduate from Institut Teknologi Nasional
          Malang with a GPA of 3.66, with a strong passion for programming, data
          science, and machine learning. Experienced in developing and deploying
          machine learning models, and Web Development. Proven ability to work
          collaboratively through hands-on experience in team-based projects,
          competitions, and laboratory assistant activity. Continuously learning
          and adapting to new technologies to stay update in the fast-evolving
          tech industry.
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-2xl font-normal mb-4 flex items-center">
          <ChevronRight />
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-gray-200 px-4 py-2 text-sm rounded-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-normal mb-4 flex items-center">
          <ChevronRight />
          Latest Projects
        </h2>
        <div className="space-y-8">
          {/* Card Project 1 */}
          <div>
            <h3 className="font-medium flex items-center gap-2">
              Villa Bookings
              <Link
                href="https://github.com/diimprasetyos/villa-book-nextjs"
                className="inline-flex items-center text-sm underline text-blue-600 hover:text-blue-400"
              >
                <span>Source Code</span>
                <ExternalLink size={16} />
              </Link>
            </h3>
            <p className="text-gray-800 mb-4">
              my latest project about villa booking landing page with a
              personalized chatbot that helps customers get information about
              bookings, facilities, locations, and access to other places such
              as tolls, hospitals, etc.
            </p>
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              <div className="border border-gray-200 px-2 py-1 text-sm rounded-sm">
                Next.js
              </div>
              <div className="border border-gray-200 px-2 py-1 text-sm rounded-sm">
                Tailwind
              </div>
              <div className="border border-gray-200 px-2 py-1 text-sm rounded-sm">
                Gemini API
              </div>
            </div>
          </div>
          {/* Card Project 2 */}
          <div>
            <h3 className="font-medium flex items-center gap-2">
              Sentiment Analysis App
              <Link
                href="https://github.com/diimprasetyos/analisis-sentimen"
                className="inline-flex items-center text-sm underline text-blue-600 hover:text-blue-400"
              >
                <span>Source Code</span>
                <ExternalLink size={16} />
              </Link>
            </h3>
            <p className="text-gray-800 mb-4">
              Thesis project "Sentiment Analysis on Social Media Comments
              Regarding Jockey Issues using the Long Short-Term Memory"
              Application with features such as Instantly analyze the sentiment
              of a given sentence, Train the model with labeled data for
              improved accuracy, Assess model performance to ensure reliable
              predictions through evaluation page, and save trained model to
              local.
            </p>
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              <div className="border border-gray-200 px-2 py-1 text-sm rounded-sm">
                Python
              </div>
              <div className="border border-gray-200 px-2 py-1 text-sm rounded-sm">
                Streamlit
              </div>
              <div className="border border-gray-200 px-2 py-1 text-sm rounded-sm">
                PostgreSQL
              </div>
              <div className="border border-gray-200 px-2 py-1 text-sm rounded-sm">
                Tensorflow
              </div>
            </div>
          </div>
          {/* Card Project 3 */}
          <div>
            <h3 className="font-medium flex items-center gap-2">
              Mental Health Awareness Apps
              <Link
                href="https://github.com/Buddy-Mental-Health-Apps"
                className="inline-flex items-center text-sm underline text-blue-600 hover:text-blue-400"
              >
                <span>Source Code</span>
                <ExternalLink size={16} />
              </Link>
            </h3>
            <p className="text-gray-800 mb-4">
              This is team project for kampus merdeka program Bangkit Academy
              2024. We developed a mobile application named Buddy, aimed at
              reducing the incidence of mental disorders among teenagers. I'm
              working as a machine learning engineer. My job is to scrape data
              from the internet, develop a model for a self-assessment feature,
              and create an NLP journal analyzer model that is implemented in
              the apps
            </p>
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              <div className="border border-gray-200 px-2 py-1 text-sm rounded-sm">
                Tensorflow
              </div>
              <div className="border border-gray-200 px-2 py-1 text-sm rounded-sm">
                Python
              </div>
              <div className="border border-gray-200 px-2 py-1 text-sm rounded-sm">
                Google Colab
              </div>
              <div className="border border-gray-200 px-2 py-1 text-sm rounded-sm">
                Excel
              </div>
            </div>
          </div>
          {/* Card Project 4 */}
          <div>
            <h3 className="font-medium flex items-center gap-2">
              Decision Support System on Credit Loan Study Case
              <Link
                href="https://github.com/diimprasetyos/spk-pemberian-kredit"
                className="inline-flex items-center text-sm underline text-blue-600 hover:text-blue-400"
              >
                <span>Source Code</span>
                <ExternalLink size={16} />
              </Link>
            </h3>
            <p className="text-gray-800 mb-4">
              my other project about system information, developing a decision support system, with CRUD feature.
            </p>
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              <div className="border border-gray-200 px-2 py-1 text-sm rounded-sm">
                Laravel
              </div>
              <div className="border border-gray-200 px-2 py-1 text-sm rounded-sm">
                Bootstrap
              </div>
              <div className="border border-gray-200 px-2 py-1 text-sm rounded-sm">
                MySQL
              </div>
            </div>
          </div>
          <Link
            href="https://github.com/diimprasetyos?tab=repositories"
            className="text-sm text-gray flex items-center underline"
          >
            Find more project on my github repository
            <ExternalLink size={14} />
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section className="mb-16">
        <h2 className="text-2xl font-normal mb-4 flex items-center">
          <ChevronRight />
          Contact
        </h2>
        <p className="text-gray-800 mb-4">
          Feel free to reach out if you&apos;d like to collaborate on a project
          or discuss work opportunities.
        </p>
        <div className="flex flex-col gap-2">
          <Link href="https://github.com/diimprasetyos" className="underline">
            github.com/diimprasetyos
          </Link>
          <Link href="mailto:diimprasetyos@gmail.com" className="underline">
            diimprasetyos@gmail.com
          </Link>
          <Link
            href="https://www.linkedin.com/in/diimprasetyo"
            className="underline"
          >
            linkedin.com/in/diimprasetyo
          </Link>
        </div>
      </section>
    </main>
  );
}
