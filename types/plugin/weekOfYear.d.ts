import { PluginFunc } from '../'

declare const plugin: PluginFunc
export = plugin

declare module '@loveholidays/dayjs' {
  interface Dayjs {
    week(): number

    week(value : number): Dayjs
  }
}
