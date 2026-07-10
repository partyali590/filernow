import { CircleCheck } from "lucide-react";
import EyebrowCapsule from "../ui/EyebrowCapsule"

export interface OurValuesDataItem {
    id: string,
    heading: string,
    para: string,
}

export const ourValuesData: OurValuesDataItem[] = [
    {
        id: 'ourValuesData1',
        heading: "Radical simplicity",
        para: "You should never have to understand an FBR form to be a filer.",
    },
    {
        id: 'ourValuesData2',
        heading: "Transparent pricing",
        para: "No hidden fees. You know the price before we start.",
    },
    {
        id: 'ourValuesData3',
        heading: "Real accountability",
        para: "You get a named contact — not a helpdesk ticket.",
    },
    {
        id: 'ourValuesData4',
        heading: "Compliance first",
        para: "We file it right the first time, every time.",
    },
];

type Props = {}

const OurStory = (props: Props) => {
    return (
        <section className="w-full">
            <div className="container-custom container-x-padding container-y-padding">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* our stories */}
                    <div className="w-full flex flex-col gap-4">
                        <EyebrowCapsule
                            text="our story"
                        />
                        <h2 className="heading-h2">
                            From FBR frustration to a one-day filing service.
                        </h2>
                        <p className="para-18">
                            FilerNow started when our founders — practising tax consultants — realised most people avoid tax filing not because they don't want to comply, but because IRIS, SECP and IPO systems weren't built for everyday users.
                        </p>
                        <p className="para-18">
                            We stripped the process down to what actually matters: send us your documents, we do the rest. No jargon, no follow-ups, no visits.
                        </p>
                    </div>

                    {/* our values */}
                    <div className="w-full flex flex-col gap-4">
                        <EyebrowCapsule
                            text="our values"
                        />
                        <h2 className="heading-h2">
                            What guides our work.
                        </h2>

                        <div className="w-full">
                            <div className="flex flex-col gap-4">
                                {ourValuesData.map((value) => (
                                    <div
                                        key={value.id}
                                        className="flex gap-4"
                                    >
                                        <div
                                            className="grid place-items-center size-8 shrink-0 rounded-full bg-primary-light"
                                        >
                                            <CircleCheck size={16}
                                                className="text-primary-red"
                                            />
                                        </div>

                                        <div className="">
                                            <h4 className="para-base font-bold">
                                                {value.heading}
                                            </h4>

                                            <p className="para-small">
                                                {value.para}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurStory