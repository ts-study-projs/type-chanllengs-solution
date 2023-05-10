type IsSameType<T, U> = 
  (<G>() => G extends T ? true : false) extends
  (<G>() => G extends U ? true : false) 
  ? true
  : false
  
type _IsSameType<T, U> = T extends U ? (U extends T ? true : false) : false 

// T1是false T2是true
type T1 = IsSameType<{ a: 'A' }, { readonly a: 'A' }>
type T2 = _IsSameType<{ a: 'A' }, { readonly a: 'A' }>


type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer REST
]
  ? IsSameType<First, U> extends true
    ? true
    : Includes<REST, U>
  : false


  // your answers
// type Equal2<T,U> = (<G>()=> G extends T ? 1:2) extends (<G>()=> G extends U ? 1:2) ? true : false
// type Includes<T extends readonly any[], U> = T extends [infer H, ...infer A] ? Equal2<H,U> extends true ? true: Includes<A,U> : false