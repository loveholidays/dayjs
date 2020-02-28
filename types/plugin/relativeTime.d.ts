import { PluginFunc, ConfigType } from '../'

declare const plugin: PluginFunc
export = plugin

declare module '@loveholidays/dayjs' {
  interface Dayjs {
    fromNow(withoutSuffix?: boolean): string
    from(compared: ConfigType, withoutSuffix?: boolean): string
    toNow(withoutSuffix?: boolean): string
    to(compared: ConfigType, withoutSuffix?: boolean): string
  }
}
