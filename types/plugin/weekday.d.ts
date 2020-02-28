import { PluginFunc } from '../'

declare const plugin: PluginFunc
export = plugin

declare module '@loveholidays/dayjs' {
  interface Dayjs {
    weekday(): number

    weekday(value: number): Dayjs
  }
}
