import { PluginFunc, ConfigType } from '../'

declare const plugin: PluginFunc
export = plugin

declare module '@loveholidays/dayjs' {
  interface Dayjs {
    calendar(referenceTime?: ConfigType, formats?: object): string
  }
}
