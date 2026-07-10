import AboutCta from "@/components/about/AboutCta";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import EyebrowCapsule from "@/components/ui/EyebrowCapsule";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About - FilerNow",
    description: "Income Tax Return, NTN Registration, Sales Tax Registration, and other services in Pakistan.",
};

type Props = {}

const about = (props: Props) => {
    return (<>
        <AboutHero />

        <OurStory />

        <AboutCta />
    </>)
}

export default about