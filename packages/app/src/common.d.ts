declare type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>

declare type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

declare type PartialOn<T, K extends keyof T> = Omit<T, K> & { [P in K]: Partial<T[P]> }

declare type NullableOn<T, K extends keyof T> = Omit<T, K> & { [P in K]: T[P] | null }

declare type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
