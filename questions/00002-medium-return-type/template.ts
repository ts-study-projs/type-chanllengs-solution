type MyReturnType<T> = T extends (...agrs: any[]) => infer R ? R : never


