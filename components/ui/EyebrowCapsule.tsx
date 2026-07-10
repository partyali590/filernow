type Props = {
    text: string,
    variant?: 'primary' | 'gold',
}

const EyebrowCapsule = ({ text, variant = 'primary' }: Props) => {
    return (
        <div
            className={`max-w-max flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${variant === 'primary'
                ? "text-primary-red border-primary-red/20 bg-primary-light"
                : "text-tertiary-gold border-white/15 bg-white/5"}`}
        >
            <span className={`size-1.5 rounded-full ${variant === 'primary' ? "bg-primary-red" : "bg-tertiary-gold"}`}></span>
            {text}
        </div>
    )
}

export default EyebrowCapsule