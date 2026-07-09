type Props = {
    sectionClass?: string,
    containerClass?: string,
    children: React.ReactNode,
}

const SectionContainer = ({ sectionClass, containerClass, children }: Props) => {
    return (
        <section className={`w-full ${sectionClass}`}>
            <div className={`container-custom page-x-padding ${containerClass}`}>
                {children}
            </div>
        </section>
    )
}

export default SectionContainer