export interface CollapseProps {
    children?: React.ReactNode
    title: string
}

export default function Collapse({ children, title }: CollapseProps): JSX.Element {
    return (
        <div className="collapse max-lg:collapse-arrow lg:collapse-open border border-base-300 bg-base-100 dark:bg-base-300 rounded-box">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium">
                <div className="font-bold text-base-content text-lg">{title}</div>
            </div>

            <div className="collapse-content">{children}</div>
        </div>
    )
}
