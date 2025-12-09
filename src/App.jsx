import React, { useState } from 'react'

// SimpleIcons (these exist in all versions)
import { SiPython, SiPandas, SiNumpy, SiMysql } from 'react-icons/si'

// FontAwesome (always safe)
import {
  FaGithub,
  FaLinkedin,
  FaDatabase,
  FaCloud,
  FaChartBar,
  FaChartPie,
  FaFileExcel,
  FaSun,
  FaMoon,
  FaExternalLinkAlt,
} from 'react-icons/fa'

import { MdEmail, MdPhone } from 'react-icons/md'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' }
]

// Skills grouped for UI
const skillGroups = [
  {
    title: 'Programming & Libraries',
    items: [
      { label: 'Python', icon: SiPython },
      { label: 'Pandas', icon: SiPandas },
      { label: 'NumPy', icon: SiNumpy }
    ]
  },
  {
    title: 'BI & Analytics',
    items: [
      { label: 'Power BI', icon: FaChartBar },
      { label: 'Tableau', icon: FaChartPie },
      { label: 'Excel', icon: FaFileExcel }
    ]
  },
  {
    title: 'Databases',
    items: [
      { label: 'MySQL', icon: SiMysql },
      // { label: "MS SQL Server", icon: FaDatabase },
      { label: 'Oracle SQL', icon: FaDatabase }
    ]
  },
  {
    title: 'Cloud & ETL',
    items: [
      { label: 'Azure', icon: FaCloud },
      { label: 'Github', icon: FaGithub }
    ]
  }
]

const education = [
  {
    degree: 'MBA (Finance)',
    institution: 'Andhra University',
    location: 'Andhra Pradesh',
    period: '2024 – Present',
    details: ['Focus on data-driven financial decision making and analytics.']
  },
  {
    degree: 'B.Tech (Civil Engineering)',
    institution: 'GMR Institute of Technology',
    location: 'Andhra Pradesh',
    period: '2017 – 2021',
    details: ['Built strong quantitative and problem-solving foundation.']
  }
]

const experience = [
  {
    role: 'Data Analyst',
    company: 'Infosys (Client: Glaxo Smith Kline)',
    location: 'Hyderabad',
    period: 'Mar 2023 – Feb 2024',
    bullets: [
      'Developed interactive Power BI dashboards for global stakeholders, reducing decision-making time by 20%.',
      'Centralized and automated data ingestion from 5+ sources using Azure Data Factory, improving data reliability by 35%.',
      'Optimized reporting workflows using SQL and DAX, reducing manual reporting time by 25%.',
      'Improved data quality through enhanced validation rules, enabling more accurate forecasting.'
    ],
    tags: [
      'Power BI',
      'SQL',
      'DAX',
      'Azure Data Factory',
      'Azure Data Lake',
      'Data Quality'
    ]
  },
  {
    role: 'Data Analyst',
    company: 'Infosys (Client: Johnson & Johnson)',
    location: 'Hyderabad',
    period: 'Jan 2022 – Feb 2023',
    bullets: [
      'Designed DAX- and SQL-based sales performance reports, improving KPI visibility by 15%.',
      'Enhanced data accuracy by 30% through robust validation checks and data cleansing processes.',
      'Collaborated with business teams to interpret insights and support operational decisions.'
    ],
    tags: ['SQL', 'Power BI', 'DAX', 'Data Cleansing', 'ETL Workflows']
  }
]

const projects = [
  {
    title: 'Ride-it Analysis',
    // subtitle: 'Power BI · DAX · Excel · SQL',
    description:
      'Built predictive dashboards to analyse ride performance, customer behaviour, and revenue trends. Identified drops in rider engagement and proposed metrics to improve retention.',
    link: 'https://github.com/yan-jan-ram/Ride-it-analysis',
    image: "/project images/Rides dashboard.png",
    tech: ["Power BI", "DAX", "Excel", "SQL", "ETL",],
  },
  {
    title: 'Netflix dashboard',
    // subtitle: 'Power BI · DAX · Excel · SQL',
    description:
      'A Power BI dashboard analyzing Netflix’s global content catalog, focusing on content type, genre, ratings, and regional distribution. Highlights trends in content additions and global release patterns.',
    link: 'https://github.com/yan-jan-ram/Netflix-BI',
    image: "/project images/Netflix dashboard.png",
    tech: ["Power BI", "DAX", "Excel",],
  },
  {
    title: 'Bike sales analysis',
    // subtitle: 'Power BI · DAX · Excel · SQL',
    description:
      'An interactive Tableau dashboard analyzing global bike sales performance across products, customer segments, age groups, and regions. Includes KPIs for revenue, profit, YoY growth, and breakdowns such as top-selling products, sales by gender, and country-level performance.',
    link: 'https://github.com/yan-jan-ram/Bike-Sales',
    image: "/project images/bike sales dashboard.png",
    tech: ["Tableau",],
  },
  {
    title: 'EVL dashboard',
    // subtitle: 'Power BI · DAX · Excel · SQL',
    description:
      'A Tableau dashboard analyzing Electric Vehicle (EV) distribution across Washington State. It provides breakdowns by make, model, vehicle type, county, and registered ZIP codes.',
    link: 'https://github.com/yan-jan-ram/EVL-data',
    image: "/project images/evl dashboard.png",
    tech: ["Tableau",],
  },
  {
    title: 'Classic Models Purchase Analysis',
    // subtitle: 'Power BI · DAX · Excel · SQL',
    description:
      'A comprehensive Power BI dashboard for analyzing sales of Classic Models across product lines, countries, and offices. Includes sales vs cost analysis, trends, order patterns, and customer distribution.',
    link: 'https://github.com/yan-jan-ram/Classic-Models-Purchase-Analysis',
    image: "/project images/classic models dashboard.png",
    tech: ["Power BI", "DAX", "Excel", "SQL",],
  },
  {
    title: 'Superstore sales dashboard',
    // subtitle: 'Power BI · DAX · Excel · SQL',
    description:
      'A Power BI dashboard analyzing Superstore dataset performance across sales, profit, categories, and geographies. Includes interactive filtering and deep-dive product analysis.',
    link: 'https://github.com/yan-jan-ram/Superstore-sales-dashboard',
    image: "/project images/superstore dashboard.png",
    tech: ["Power BI", "DAX",],
  },
]

const achievements = [
  'Recognized by clients for delivering actionable insights that supported proactive sales and operational decisions.'
]

function Section ({ id, title, children }) {
  return (
    <section id={id} className='scroll-mt-24'>
      <h2 className='text-xl font-semibold mb-3'>{title}</h2>
      <div className='h-0.5 w-10 bg-indigo-500 mb-4'></div>
      {children}
    </section>
  )
}

// eslint-disable-next-line no-unused-vars
function SkillCard ({ icon: Icon, label }) {
  return (
    <div className='flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700'>
      <Icon size={26} className='text-indigo-500 dark:text-indigo-300' />
      <p className='text-xs sm:text-sm text-slate-800 dark:text-slate-200'>
        {label}
      </p>
    </div>
  )
}

export default function App () {
  const [dark, setDark] = useState(true)

  return (
    <div className={dark ? 'dark' : ''}>
      <div className='min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 py-10 flex flex-col lg:flex-row gap-8'>
          {/* LEFT PANEL */}
          <aside className='lg:w-1/3 lg:sticky lg:top-6 space-y-6'>
            <div className='space-y-2'>
              <h1 className='text-3xl sm:text-4xl font-bold'>
                Yandapalli Janakiram
              </h1>
              <p className='text-sm text-slate-500 dark:text-slate-300'>
                Data Analyst / Power BI Data Analyst
              </p>
              <p className='text-xs text-slate-500 dark:text-slate-400'>
                Vishakhapatnam, Andhra Pradesh
              </p>

              <div className='flex items-center gap-3 mt-3'>
                <a
                  href='Janakiram Yandapalli_Data Analyst_2.5.pdf'
                  target='_blank'
                  className='border border-indigo-500 px-4 py-1.5 rounded-full text-indigo-600 dark:text-indigo-200 hover:bg-indigo-50 dark:hover:bg-indigo-500/10'
                >
                  Resume
                </a>

                <button
                  onClick={() => setDark(!dark)}
                  className='border border-slate-400 dark:border-slate-600 px-3 py-1.5 rounded-full flex items-center gap-2'
                >
                  {dark ? (
                    <>
                      <FaSun size={18} className='text-yellow-400' />
                      Light
                    </>
                  ) : (
                    <>
                      <FaMoon size={18} className='text-slate-800' />
                      Dark
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* NAVIGATION */}
            <nav className='border-t border-slate-300 dark:border-slate-800 pt-4'>
              <ul className='flex flex-col gap-2'>
                {navItems.map(item => (
                  <li key={item.id}>
                    <button
                      onClick={() =>
                        document
                          .getElementById(item.id)
                          .scrollIntoView({ behavior: 'smooth' })
                      }
                      className='w-full text-left px-3 py-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-md'
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* SOCIAL ICONS */}
            <div className='border-t border-slate-300 dark:border-slate-800 pt-4 flex gap-3'>
              <a
                href='https://github.com/yan-jan-ram'
                className='w-9 h-9 border border-slate-400 dark:border-slate-700 flex items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800'
              >
                <FaGithub size={18} />
              </a>
              <a
                href='https://www.linkedin.com/in/janaki-ram-yandapalli'
                className='w-9 h-9 border border-slate-400 dark:border-slate-700 flex items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800'
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href='mailto:yandapallijanakiram@gmail.com'
                className='w-9 h-9 border border-slate-400 dark:border-slate-700 flex items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800'
              >
                <MdEmail size={18} />
              </a>
              <a
                href='tel:+919059256791'
                className='w-9 h-9 border border-slate-400 dark:border-slate-700 flex items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800'
              >
                <MdPhone size={18} />
              </a>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <main className='lg:w-2/3 space-y-12'>
            <Section id='about' title='About Me'>
              <p>
                Data Analyst with 2+ years of experience in building interactive
                dashboards, developing ETL workflows, and optimizing data
                models. Skilled in Power BI, Tableau, SQL, and Python.
              </p>
              <p className='mt-3'>
                Strong track record of collaborating with global teams to drive
                operational efficiency and support data-driven decisions.
              </p>
            </Section>

            <Section id='skills' title='Technical Skills'>
              <div className='space-y-6'>
                {skillGroups.map(group => (
                  <div key={group.title}>
                    <h3 className='font-semibold mb-2'>{group.title}</h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                      {group.items.map(item => (
                        <SkillCard
                          key={item.label}
                          icon={item.icon}
                          label={item.label}
                        />
                      ))}
                    </div>
                  </div>
                ))}

                {/* Extra skill tags */}
                <div className='flex flex-wrap gap-2 mt-3 text-xs'>
                  {[
                    'DAX',
                    'Data Modelling',
                    'ETL Workflows',
                    'Data Quality & Validation'
                  ].map(tag => (
                    <span
                      key={tag}
                      className='border border-slate-400 dark:border-slate-700 px-2 py-1 rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Section>

            <Section id='education' title='Education'>
              {education.map(edu => (
                <div
                  key={edu.degree}
                  className='border border-slate-300 dark:border-slate-800 p-4 rounded-lg bg-white dark:bg-slate-900'
                >
                  <h3 className='font-semibold'>{edu.degree}</h3>
                  <p className='text-sm text-slate-500'>{edu.institution}</p>
                  <p className='text-sm text-slate-500'>{edu.period}</p>
                </div>
              ))}
            </Section>

            <Section id='experience' title='Experience'>
              {experience.map(exp => (
                <div
                  key={exp.role}
                  className='border border-slate-300 dark:border-slate-800 p-4 rounded-lg bg-white dark:bg-slate-900'
                >
                  <h3 className='font-semibold'>{exp.role}</h3>
                  <p className='text-sm text-slate-500'>
                    {exp.company} — {exp.location}
                  </p>
                  <p className='text-sm text-slate-500 mb-2'>{exp.period}</p>

                  <ul className='list-disc ml-5 text-sm'>
                    {exp.bullets.map(b => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  <div className='flex flex-wrap gap-2 mt-3 text-xs'>
                    {exp.tags.map(tag => (
                      <span
                        key={tag}
                        className='border border-slate-400 dark:border-slate-700 px-2 py-1 rounded-full'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </Section>

           <Section id="projects" title="Projects">
  <div className="space-y-6">
    {projects.map((proj) => (
      <div
        key={proj.title}
        className="border border-slate-300 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 p-4 sm:p-5 flex flex-col sm:flex-row gap-4"
      >
        {/* Thumbnail */}
        {proj.image && (
          <div className="w-full sm:w-52 flex-shrink-0">
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-full object-cover rounded-xl border border-slate-200 dark:border-slate-700"
            />
          </div>
        )}

        {/* Text content */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100">
                {proj.title}
              </h3>
              {proj.subtitle && (
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {proj.subtitle}
                </p>
              )}
            </div>

            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-slate-300 dark:border-slate-700 px-3 py-1 text-[11px] sm:text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <FaExternalLinkAlt size={10} />
                <span>Open</span>
              </a>
            )}
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-200 mt-1">
            {proj.description}
          </p>

          {/* Tech tags */}
          {proj.tech && (
            <div className="flex flex-wrap gap-2 mt-3">
              {proj.tech.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs bg-indigo-100 text-indigo-700 dark:bg-indigo-600 dark:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</Section>


            <Section id='achievements' title='Achievements'>
              <ul className='list-disc ml-5'>
                {achievements.map(a => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </Section>

            <Section id='contact' title='Contact Me'>
              <p className='mb-3'>
                Interested in collaborating? Feel free to reach out.
              </p>

              <div className='flex gap-3 text-sm'>
                <a
                  href='mailto:yandapallijanakiram@gmail.com'
                  className='border border-indigo-500 px-4 py-1.5 rounded-full'
                >
                  <MdEmail size={18} className='inline mr-2' />
                  Email Me
                </a>
                <a
                  href='https://www.linkedin.com/in/janaki-ram-yandapalli'
                  className='border border-slate-400 dark:border-slate-700 px-4 py-1.5 rounded-full'
                >
                  <FaLinkedin size={18} className='inline mr-2' />
                  LinkedIn
                </a>
              </div>

              <p className='mt-6 text-xs text-slate-500 dark:text-slate-600'>
                © {new Date().getFullYear()} Yandapalli Janakiram. All rights
                reserved.
              </p>
            </Section>
          </main>
        </div>
      </div>
    </div>
  )
}
