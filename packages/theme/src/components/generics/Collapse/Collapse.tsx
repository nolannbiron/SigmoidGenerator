import {Card, type CollapseProps} from '@/components'

function Collapse({ children }: CollapseProps): JSX.Element {
    return (
        <Card className="collapse max-lg:collapse-arrow lg:collapse-open">
            <input type="checkbox" className="peer" />
            {children}
        </Card>
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
