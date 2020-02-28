import { PluginFunc } from '../'

declare const plugin: PluginFunc
export = plugin

interface DayjsObject {
  years: number
  months: number
  date: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

declare module '@loveholidays/dayjs' {
  interface Dayjs {
    toObject(): DayjsObject
  }
}
