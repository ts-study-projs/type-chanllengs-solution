type Thenable<T> = { then: (onfulfilled: (arg: T) => any) => any }

type MyAwaited<T> = T extends Promise<infer R>
  ? R extends Promise<any>
    ? MyAwaited<R>
    : R
  : T extends Thenable<infer S>
    ? S
    : never
