type Props = {
    children: React.ReactNode,
    sectionClass?: string,
    containerClass?: string,
}

const SectionContainer = ({ children, sectionClass, containerClass }: Props) => {
    return (
        <section className={`w-full ${sectionClass}`}>
            <div className={`container-custom container-x-padding container-y-padding ${containerClass}`}>
                {children}
            </div>
        </section>
    )
}

export default SectionContainer