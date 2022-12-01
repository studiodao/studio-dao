import type { NextPage } from "next";
import Link from "next/link";

import { BioCard } from "../../Bio";
import { ButtonLink } from "../../Button";
import { juiceboxTreasuryIds, juiceboxUrl } from "../../constants";
import { Container } from "../../Container";
import { Header } from "../../Header";
import { GreenlightPower } from "../../juicebox/GreenlightPower";
import { JuiceboxGraphProvider } from "../../juicebox/JuiceboxGraphProvider";
import { TreasuryBalance } from "../../juicebox/TreasuryBalance";
import { ProjectCard } from "../../ProjectCard";
import { SectionHeading } from "../../SectionHeading";

const AlienToMePage: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="space-y-32 sm:space-y-48">
        <div className="relative">
          <img className="absolute w-full h-full object-cover" src="" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/70 to-zinc-900 md:from-transparent md:to-zinc-900" />

          <div className="relative md:min-h-[480px] lg:min-h-[640px] flex flex-col">
            <div className="bg-zinc-800/90">
              <Container>
                <div className="flex justify-between py-4">
                  <div>
                    <JuiceboxGraphProvider>
                      <TreasuryBalance />
                    </JuiceboxGraphProvider>
                  </div>
                  <div className="hidden sm:block">
                    <JuiceboxGraphProvider>
                      <GreenlightPower />
                    </JuiceboxGraphProvider>
                  </div>
                </div>
              </Container>
            </div>
            <div className="flex-grow flex flex-col justify-end items-center">
              <Container>
                <div className="flex flex-col md:flex-row md:items-end gap-12 md:gap-24 py-12 -mb-16">
                  <div className="space-y-4">
                    <h1 className="text-6xl font-dmserif text-white">
                      Alien to Me
                    </h1>
                    <p>By Connor Kerrigan</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-end gap-12 md:gap-24 py-12 -mb-16">
                  <div className="flex gap-2 w-max">
                    <ButtonLink
                      href={`${juiceboxUrl}/v2/p/${juiceboxTreasuryIds[0]}`}
                      target="_blank"
                      variant="primaryProject"
                    >
                      Buy Superticket
                    </ButtonLink>
                    <ButtonLink
                      href="https://docs.studiodao.xyz/studiodao-explainer/"
                      variant="secondary"
                      target="_blank"
                    >
                      Watch Trailer
                    </ButtonLink>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-end gap-12 md:gap-24 py-12 -mb-16">
                  <p>
                    Discover a new universe with ALIEN TO ME. An animated comedy
                    series from comedian, Connor Kerrigan, and the producers of
                    Netflix’s WENDELL & WILD. Join a struggling alien named
                    Krill, on an intergalactic odyssey of action, adventure, and
                    pyramid scheme cosmetics sales – all in the name of love...
                    or at the very least getting pregnant.
                  </p>
                </div>
              </Container>
            </div>
          </div>
        </div>
        <Container>
          <div className="relative">
            <div className="p-6 w-xl mx-auto bg-zinc-800 rounded-xl border border-zinc-400 min-w-sm">
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div className="">
                  ✦ Support the development of Alien to Me.
                  <div className="flex flex-row text-zinc-500">
                    <span className="text-emerald-600 pr-1">$10,000 </span>{" "}
                    raised{" "}
                    <div className="w-32 bg-gray-200 h-2 rounded-xl m-2">
                      <div className="bg-emerald-600 h-2 rounded-xl w-12"></div>
                    </div>
                    out of <span className="text-white px-1">$25,000</span>{" "}
                    funding goal
                  </div>
                </div>
                <div className="w-max">
                  <div className="flex">
                    <ButtonLink
                      href={`${juiceboxUrl}/v2/p/${juiceboxTreasuryIds[0]}`}
                      target="_blank"
                      variant="primary"
                    >
                      Buy Superticket
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container id="box-office" className="space-y-16">
          <div className="space-y-8 sm:space-y-12">
            <ProjectCard
              title="Get Your Own URKEL"
              subtitle="1000 NFT available at 0.01 eth"
              description={
                <p>
                  Despite his grating voice, generally unlikable demeanor, and
                  incredibly short attention span, URKEL, or Universal Robotic
                  Kinesthetic Experience Liaison, has become the #1 artificially
                  intelligent robotic assistant across the cosmos. Why not
                  welcome an URKEL into your house today? He’ll literally do
                  anything for you… anything.
                </p>
              }
              imageUrl="/projects/hyperspace-banny.png"
              contributeUrl="https://goerli.juicebox.money/v2/p/128"
              learnMoreUrl="https://studio-dao.webflow.io/hyperspace-banny"
              isProjectPage={true}
              perks={
                <>
                  <p>Perks included:</p>
                  <ul className="list-disc px-6">
                    <li>StudioDAO membership</li>
                    <li>
                      Greenlight Power Tokens (1000 per ETH in Funding Cycle #1)
                    </li>
                    <li>Early Access to Alien To Me Episode Releases</li>
                    <li>
                      The undying appreciation of the Alien to Me team for
                      helping to bring this series to life
                    </li>
                  </ul>
                </>
              }
            />
            <ProjectCard
              title="We are Krill’s Free Will"
              subtitle="300 NFT available at 0.10 eth"
              description={
                <p>
                  Can’t seem to take control of your own life? Why not take
                  control of somebody else’s life, specifically, this alien
                  named Krill. In an attempt to sell off his large supply of
                  Rexon Cosmetics products, Krill sold part of his free will to
                  space titan, Taalos. Now Taalos is giving you a chance to get
                  in on the fun too. C’mon you know you want to.
                </p>
              }
              imageUrl="/projects/stag-party.jpg"
              contributeUrl="https://goerli.juicebox.money/v2/p/129"
              learnMoreUrl="https://studio-dao.webflow.io/stag-party"
              isProjectPage={true}
              perks={
                <>
                  <p>All Previous Perks Plus:</p>
                  <ul className="list-disc px-6">
                    <li>
                      Access to the Alien to Me Writer’s Room, where Connor will
                      brainstorm and write new storylines for the next episodes
                      in the series, using input from the community members as
                      inspiration
                    </li>
                    <li>
                      Entered into raffle for 25 custom alien character
                      portraits based of an image of your choosing (a picture of
                      yourself, or anything else you like), hand painted by
                      Connor, and that may be featured in the show, or coming
                      immersive experience
                    </li>
                    <li>
                      Access to exclusive secondary Krill NFT content &
                      activities
                    </li>
                    <li>Livestreams with Connor & Virtual hangouts</li>
                  </ul>
                </>
              }
            />
            <ProjectCard
              title="One with Taalos"
              subtitle="50 NFT available at 1 eth"
              description={
                <p>
                  Put yourself into the Alien to Me universe, become one with
                  the almighty space titan, Taalos! Let him make you in his
                  image.
                </p>
              }
              imageUrl="/projects/beam-eyed-colossi.gif"
              contributeUrl="https://goerli.juicebox.money/v2/p/130"
              learnMoreUrl="https://studio-dao.webflow.io/beam-eyed-colossi"
              isProjectPage={true}
              perks={
                <>
                  <p>All Previous Perks Plus:</p>
                  <ul className="list-disc px-6">
                    <li>
                      Free custom alien character portrait based of an image of
                      your choosing (a picture of yourself, or anything else you
                      like), hand painted by Connor, and that may be featured in
                      the show, or immersive experience
                    </li>
                    <li>
                      One on one consulting and advisory meeting with producer
                      from The Gotham Group
                    </li>
                    <li>Invitation to in-person Alien to Me events</li>
                    <li>Associate Producer Credit </li>
                    <li>Virtual Set Visit</li>
                  </ul>
                </>
              }
            />
          </div>
        </Container>

        <Container id="team" className="space-y-12">
          <SectionHeading title="About the Team" />
          <BioCard
            name="Connor Kerrigan"
            bio="Creator/Writer/Lead Artist - Connor Kerrigan is a Los Angeles based comedian, writer, and animator. Most recently he developed his own half-hour primetime animated adult comedy at Fox. Prior to his work with Fox, he wrote and executive produced a virtual reality comedy series pilot in partnership with Google and animation studio, ShadowMachine, starring Seth Morris, Mary Holland, and Chris Parnell. Connor is a formally trained animator and visual effects artist, who graduated from the USC School of Cinematic Arts. Having spent years doing improv, stand up, and sketch comedy, as well as working as a visual effects artist on multiple Netflix feature films, his work merges adult comedy with cinema quality 3D and 2D animation."
            imageUrl="../images/alien-to-me/connor.jpg"
          />
          <BioCard
            name="The Gotham Group"
            bio="Producers - The Gotham Group is a world-class management and production company representing top creators across film, television, book publishing, and now blockchain media. As producers, The Gotham Group has produced everything from The Mazerunner movies (a billion-dollar franchise for Fox) to prestigious dramas like Kodachrome for Netflix starring Ed Harris, Jason Sudekis, and Elizabeth Olsen to family favorites like Stargirl for Disney+. Gotham is currently in production on Stargirl 2 for Disney+, My Best Friend’s Exorcism for Amazon, and the stop motion animated movie Wendell & Wild for Netflix, and has four series beginning production in Q1 2022."
            imageUrl="../images/alien-to-me/connor.jpg"
          />
        </Container>

        <Container id="budget" className="space-y-12">
          <SectionHeading title="Alien to Me Budget" />
          <div className="max-w-prose mx-auto space-y-3">
            The overall budget for creating and marketing 10 episodes of Alien
            to Me is $300,000. Episode 1 will premiere at the end of Funding
            Cycle #1.
          </div>
          <div className="relative">
            <div className="p-6 w-xl mx-auto bg-zinc-800 rounded-xl border border-zinc-400 min-w-sm">
              <ul className="list-disc ">
                <li className="text-yellow-500">
                  Funding Cycle #1 $25,000 - Episode 2 + community development
                </li>
                <li>Funding Cycle #2 $100,000 - Episodes 3 - 6</li>
                <li>Funding Cycle #3 $25,000 - Distribuiton and Marketing</li>
                <li>Funding Cycle #4 $100,000 - Episodes 7 - 10</li>
                <li>Funding Cycle #5 $25,000 - Distribuiton and Marketing</li>
              </ul>
            </div>
          </div>
        </Container>

        <Container id="budget" className="space-y-12">
          <SectionHeading title="Inspiration" />
          <div className="max-w-prose mx-auto space-y-3">
            Alien to Me came to me out of a desire to see a new type of science
            fiction alien universe, and new aliens within it. I want to see a
            deep, visually rich universe, not dissimilar to your Star Wars and
            Treks, but that was rooted in the comedy of the life of everyday
            aliens. Not another story of war or rebellion, but about dating,
            working, being a loser, dealing with weirdos, taking a shower, just
            existing in the insane science fiction worlds we all love so much.
            Honestly, I think it would suck, but that’s where the comedy came
            from for me. These sci-fi universe’s often fail to consider how the
            logistics and idiosyncrasies of the design or culture, would turn
            regular life into a constant battle for people that aren’t our
            protagonists. They simply gloss over the details. Alien to Me lives
            in the details. Our main character, Krill, is a naive rube, who has
            never left the comfort of his home quadrant, where he lived off his
            rich parent’s money. But, when he leaves home to go in search of his
            ex-girlfriend’s ex-boyfriend to try to get pregnant… it’s
            convoluted, I’m aware… he will discover, life out in the cosmos,
            isn’t all it’s cracked up to be. I hope you’ll come along on this
            journey, and together we can create a truly unique sci-fi comedy
            franchise that can expand for years to come.
          </div>
          <div className="relative">
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <img
                  key={`image${i}`}
                  src="../images/alien-to-me/sample.png"
                  className="   aspect-video object-cover"
                />
              ))}
            </div>
          </div>
        </Container>

        <div className="flex flex-col gap-6 items-center justify-center divide-y divide-zinc-700">
          <Link href="/">
            <a>
              <img src="/logo.svg" className="w-36" alt="StudioDAO logo" />
            </a>
          </Link>
          <nav className="flex">
            {/* <a
              className="inline-flex px-4 sm:px-6 py-4 hover:underline"
              href="#box-office"
            >
              Box Office
            </a> */}
            <a
              className="inline-flex px-4 sm:px-6 py-4 hover:underline"
              href="#faq"
            >
              FAQ
            </a>
            <a
              className="inline-flex px-4 sm:px-6 py-4 hover:underline"
              href="https://twitter.com/studiodao"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a>
            <a
              className="inline-flex px-4 sm:px-6 py-4 hover:underline"
              href="https://discord.com/invite/YxPGn9pcdr"
              target="_blank"
              rel="noreferrer noopener"
            >
              Discord
            </a>
          </nav>
        </div>
      </div>
      <div className="px-6 py-4 mt-16 flex flex-col lg:flex-row gap-x-6 gap-y-8 justify-between text-zinc-600">
        <a
          href="https://juicebox.money/"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Runs with Juicebox, secured by Ethereum
        </a>
        <div className="flex flex-col md:flex-row gap-x-6">
          <span>© 2022 StudioDAO Backlot, LLC.</span>
          <a
            href="https://studio-dao.webflow.io/privacy-policy"
            className="hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="https://studio-dao.webflow.io/terms-of-use"
            className="hover:underline"
          >
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  );
};

export default AlienToMePage;