import ButtonLink from '../../components/ButtonLink'
import ImageGallery from '../../components/ImageGallery'
import ProjectSection from '../../components/ProjectSection'
import Reveal from '../../components/Reveal'

const techstack = [
  'Frontend: React, TypeScript, TanStack Query, Tailwind CSS',
  'Backend: Express, Knex, SQLite',
  'Auth: Auth0',
  'AI/Media: Google Gemini (species identification), Cloudinary (image uploads)',
  'Testing: Vitest',
]

const features = [
  'AI-powered species identification from a photo upload',
  'A collectible card system with HP/Attack stats, rarity tiers, and native/invasive status',
  'Turn-based battles with team selection (choose 3 cards before entering combat)',
  'A badge/achievement system tracking collection and battle milestones',
  'A personalized profile page with editable fields and live battle statistics',
]

export default function Momodex() {
  return (
    <>
      <Reveal>
        <section className="mx-auto max-w-314 border-b-2 border-white px-7 py-8 text-center">
          <h1 className="display display-xl">Momodex</h1>
          <p className="display display-lg mt-2 text-brand-yellow">
            Web development
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <ButtonLink href="https://your-demo-url.example.com" arrow={false}>
              Demo
            </ButtonLink>
            <ButtonLink
              href="https://github.com/your-handle/momodex"
              arrow={false}
            >
              GitHub
            </ButtonLink>
          </div>
        </section>
      </Reveal>

      <ProjectSection title="The brief">
        <p className="body-mono max-w-full">
          Built as a one-week group project during DevAcademy, Momodex is a
          gamified citizen-science app that turns real-world nature observations
          into a collectible card and battle game built to get more people
          outside, observing New Zealand&apos;s native and invasive species, and
          (eventually) contributing that data back to real conservation
          research.
        </p>
      </ProjectSection>

      <ProjectSection flush>
        <ImageGallery
          layout="large-left"
          images={[
            { src: '/images/home.png', alt: 'TODO: describe screenshot 1' },
            { src: '/images/log.png', alt: 'TODO: describe screenshot 2' },
            { src: '/images/cards.png', alt: 'TODO: describe screenshot 3' },
          ]}
        />
      </ProjectSection>

      <Reveal>
        <section className="mx-auto grid max-w-314 border-b-2 border-white py-12 md:grid-cols-2">
          <div className="px-7 pb-8 md:border-r-2 md:border-white md:pb-0">
            <h2 className="display display-lg mb-4 text-brand-yellow">
              Overview
            </h2>
            <p className="body-mono max-w-full">
              Momodex is a trading-card app that turns real-world nature
              spotting into a collectible game.
            </p>
            <dl className="body-mono mt-4 max-w-full">
              <div className="flex gap-2">
                <dt>Timeframe:</dt>
                <dd>1 Week</dd>
              </div>
              <div className="flex gap-2">
                <dt>Team:</dt>
                <dd>5 Fullstack Developers</dd>
              </div>
              <div className="flex gap-2">
                <dt>My Role:</dt>
                <dd>Homepage, Profile Page &amp; Achievement System</dd>
              </div>
            </dl>
          </div>

          <div className="px-7">
            <h2 className="display display-lg mb-4 text-brand-yellow">
              Techstack
            </h2>
            <ul className="body-mono max-w-full list-disc pl-5">
              {techstack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>

      <ProjectSection title="Key features">
        <ul className="body-mono max-w-full list-disc pl-5">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </ProjectSection>

      <ProjectSection flush>
        <ImageGallery
          layout="large-right"
          images={[
            { src: '/images/profile.png', alt: 'TODO: describe screenshot 5' },
            { src: '/images/battle.png', alt: 'TODO: describe screenshot 6' },
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Contributions">
        <p className="body-mono max-w-full">
          I was mainly responsible for the homepage, the profile page, and the
          achievement system. I used my experience in UX/UI to develop
          wireframes and pitch them to my group before bringing them to life in
          code. I populated the database with our initial set of species data,
          and worked on the responsiveness of the entire web application.
        </p>
      </ProjectSection>
    </>
  )
}