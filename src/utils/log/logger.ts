/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  let _log: (item: any) => Console
  namespace NodeJS {
    interface Global {
      _log: any
    }
  }
}

export const setDefaultLogger = () =>
  (global._log = item => console.dir(item, { depth: null, colors: true }))
