import portfolio from './data/portfolio.json'
import { Navigation } from './components/Navigation'
import { Introduction } from './components/sections/Introduction'
import { AboutMe } from './components/sections/AboutMe'
import { IntroductionVideo } from './components/sections/IntroductionVideo'
import { Academics } from './components/sections/Academics'
import { Activities } from './components/sections/Activities'
import { Projects } from './components/sections/Projects'
import { Volunteership } from './components/sections/Volunteership'
import { Research } from './components/sections/Research'
import { Honors } from './components/sections/Honors'
import { Contact } from './components/sections/Contact'
import type { PortfolioData } from './types/portfolio'

const data = portfolio as PortfolioData

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navigation items={data.navigation} />

      <main className="lg:pl-28">
        <Introduction data={data.intro} />
        <AboutMe data={data.about} />
        <IntroductionVideo data={data.introVideo} />
        <Academics data={data.academics} />
        <Activities data={data.activities} />
        <Projects data={data.projects} />
        <Volunteership data={data.sportsVolunteer} />
        <Research data={data.research} />
        <Honors data={data.honors} />
        <Contact data={data.contact} />
      </main>

      <footer className="border-t border-line py-8 text-center lg:pl-28">
        <p className="font-body text-[10px] uppercase tracking-editorial text-ink-muted">
          © {new Date().getFullYear()} {data.contact.name}
        </p>
      </footer>
    </div>
  )
}
