type MyParameters<T extends (...args: any[]) => any> = T extends (infer R )=>any?R:never
