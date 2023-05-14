type DeepReadonly<T extends Record<string, any>> = {
  readonly [K in keyof T]: T[K] extends Function ? T[K] : DeepReadonly<T[K]>
}



type t = DeepReadonly<{ a: number; d: () => void }>

type t1 = 1 extends Function ? true : false

type a = keyof 1

type t2 = DeepReadonly<{ d: () => void }>
