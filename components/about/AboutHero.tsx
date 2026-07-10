import EyebrowCapsule from "../ui/EyebrowCapsule";
import { Award, Clock, LucideIcon, ShieldCheck, UsersRound } from "lucide-react";

export interface aboutHeroStatsItem {
    id: string,
    icon: LucideIcon,
    heading: string,
    text: string,
}

export const aboutHeroStats: aboutHeroStatsItem[] = [
    {
        id: 'aboutHeroStats1',
        icon: UsersRound,
        heading: "10,000+",
        text: "Clients served",
    },
    {
        id: 'aboutHeroStats2',
        icon: Clock,
        heading: "1 Day",
        text: "Filing turnaround",
    },
    {
        id: 'aboutHeroStats3',
        icon: Award,
        heading: "8+ years",
        text: "Serving Pakistan",
    },
    {
        id: 'aboutHeroStats4',
        icon: ShieldCheck,
        heading: "100%",
        text: "FBR compliance",
    },
];

type Props = {}

const AboutHero = (props: Props) => {
    return (
        <section className="w-full bg-gradient-about-hero">
            <div className="container-custom container-x-padding">
                {/* wrapper */}
                <div className="w-full grid lg:grid-cols-2 gap-8 items-center py-16 lg:py-20">
                    {/* left */}
                    <div className="">
                        <EyebrowCapsule
                            text="who we are"
                            variant="gold"
                        />

                        <h1 className="mt-4 text-4xl md:text-6xl text-white font-extrabold leading-tight">
                            Making Pakistan's tax filing feel effortless.
                        </h1>

                        <p className="mt-4 text-white/75 text-lg">
                            FilerNow is a team of dedicated chartered accountants, tax consultants and legal experts. We turn complex FBR, SECP and IPO processes into a simple WhatsApp conversation.
                        </p>
                    </div>

                    {/* right */}
                    <div className="grid grid-cols-2 gap-small-4">
                        {aboutHeroStats.map((stat) => {

                            const Icon = stat.icon;

                            return (
                                <div
                                    key={stat.id}
                                    className="w-full rounded-card border border-white/10 bg-white/[0.04] backdrop-blur p-5 text-white"
                                >
                                    <Icon className="w-5 h-5 text-tertiary-gold" />
                                    <h2 className="mt-2 text-3xl font-extrabold text-white">{stat.heading}</h2>
                                    <p className="mt-1 text-sm text-white/70">{stat.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHero