import { PluginFunc } from '../'

declare const plugin: PluginFunc
export = plugin

declare module '@loveholidays/dayjs' {

  export function isMoment(input: any): boolean

}
