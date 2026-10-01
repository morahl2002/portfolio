import ProjectSection from '../components/ProjectSection'
import Reveal from '../components/Reveal'
import TimelineEntry from '../components/TimelineEntry'
import {
  background,
  education,
  experience,
  strengths,
} from '../utils/experience'

export default function Experience() {
  const [workStyle, outsideCode] = strengths

  return (
    <>
      <Reveal>
        <section className="mx-auto max-w-314 border-b-2 border-white px-7 py-12 text-center">
          <h1 className="display display-xl">Experience</h1>
          <p className="body-mono mx-auto mt-6 max-w-3xl">{background}</p>
        </section>
      </Reveal>

      <ProjectSection title="Work experience">
        <div className="space-y-10">
          {experience.map((job) => (
            <TimelineEntry
              key={`${job.organisation}-${job.period}`}
              title={job.role}
              subtitle={job.organisation}
              period={job.period}
            >
              <ul className="body-mono mt-3 max-w-full list-disc pl-5">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </TimelineEntry>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection title="Education">
        <div className="space-y-8">
          {education.map((item) => (
            <TimelineEntry
              key={item.qualification}
              title={item.institution}
              subtitle={item.qualification}
              period={item.period}
            />
          ))}
        </div>
      </ProjectSection>

      <Reveal>
        <section className="mx-auto grid max-w-314 border-b-2 border-white py-12 md:grid-cols-2">
          <div className="px-7 pb-8 md:border-r-2 md:border-white md:pb-0">
            <h2 className="display display-lg mb-4 text-brand-yellow">
              {workStyle.label}
            </h2>
            <ul className="body-mono max-w-full list-disc pl-5">
              {workStyle.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="px-7">
            <h2 className="display display-lg mb-4 text-brand-yellow">
              {outsideCode.label}
            </h2>
            <ul className="body-mono max-w-full list-disc pl-5">
              {outsideCode.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>
    </>
  )
}