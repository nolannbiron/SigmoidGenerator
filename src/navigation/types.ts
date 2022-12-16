import { RouteObject } from 'react-router-dom'

export interface PathComponent {
    path: string
    element: JSX.Element
}

export type Route = WithRequired<RouteObject, 'path'> & {
    name: string
    icon?: JSX.Element
    hidden?: boolean
}

export type NavbarRoutes = {
    main: Route[]
    [key: string]: Route[]
}
export interface RoutesConfig {
    navbar: Route[]
    general: PathComponent[]
}
