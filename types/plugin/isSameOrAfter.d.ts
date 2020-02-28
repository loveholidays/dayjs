import { PluginFunc, ConfigType, OpUnitType } from '../'

declare const plugin: PluginFunc
export = plugin

declare module '@loveholidays/dayjs' {
  interface Dayjs {
    isSameOrAfter(date: ConfigType, unit?: OpUnitType): boolean
  }
}
