type TupleToObject<T extends readonly any[]> = {
  [V in T[number]]: V
}
