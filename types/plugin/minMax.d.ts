import { PluginFunc, ConfigType } from '../'

declare const plugin: PluginFunc
export = plugin

declare module '@loveholidays/dayjs' {
  export function max(dayjs: Dayjs[]): Dayjs
  export function max(...dayjs: Dayjs[]): Dayjs
  export function min(dayjs: Dayjs[]): Dayjs
  export function min(...dayjs: Dayjs[]): Dayjs
}
