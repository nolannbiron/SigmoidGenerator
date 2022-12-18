export interface CollapseProps {
    children?: React.ReactNode
}

function Collapse({ children }: CollapseProps): JSX.Element {
    return (
        <div className="collapse max-lg:collapse-arrow lg:collapse-open border border-base-300 bg-base-100 dark:bg-base-300 rounded-box">
            <input type="checkbox" className="peer" />
            {children}
        </div>
    )
}

function Header({ children }: { children: React.ReactNode }): JSX.Element {
    return <div className="collapse-title lg:!cursor-default text-xl font-medium">{children}</div>
}

function Body({ children }: { children: React.ReactNode }): JSX.Element {
    return <div className="collapse-content">{children}</div>
}

Collapse.Header = Header
Collapse.Body = Body

export default Collapse
