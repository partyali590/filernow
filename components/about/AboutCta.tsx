import { ArrowRight } from "lucide-react"
import SectionContainer from "../section/SectionContainer"
import Button from "../btns/Button"

type Props = {}

const AboutCta = (props: Props) => {
    return (
        <SectionContainer containerClass="pt-0">
            <div className="w-full rounded-card bg-gradient-about-cta p-5 md:p-14 shadow-elegent flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-white">
                <div className="">
                    <h2 className="heading-h2 text-white-off">
                        Ready when you are.
                    </h2>

                    <p className="mt-2 para-base text-white-dim">
                        Talk to a real tax expert on WhatsApp in the next 5 minutes.
                    </p>
                </div>

                <Button
                    variant="white"
                >
                    Become a Filer
                    <ArrowRight size={16} />
                </Button>
            </div>
        </SectionContainer>
    )
}

export default AboutCta