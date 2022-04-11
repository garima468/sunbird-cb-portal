import { IEnvironment } from "./environment";

export const environment: IEnvironment = {
    production: true,
    name: (window as { [key: string]: any })['env']['name'],
    sitePath: (window as { [key: string]: any })['env']['sitePath'] || '',
    organisation: (window as { [key: string]: any })['env']['organisation'] || '',
    framework: (window as { [key: string]: any })['env']['framework'] || '',
    channelId: (window as { [key: string]: any })['env']['channelId'] || '',
    azureHost: (window as { [key: string]: any })['env']['azureHost'] || '',
    contentHost: (window as { [key: string]: any })['env']['contentHost'] || '',
    azureBucket: (window as { [key: string]: any })['env']['azureBucket'] || '',
    azureOldHost: (window as { [key: string]: any })['env']['azureOldHost'] || '',
    azureOldBuket: (window as { [key: string]: any })['env']['azureOldBuket'] || '',
    portalRoles: (((window as { [key: string]: any })['env']['portalRoles'] || '').split(',')) || [],
    portals: (window as { [key: string]: any })['env']['portals'] || [],

    // mdoPortal: (window as { [key: string]: any })['env']['mdoPath'] || '',
    // spvPortal: (window as { [key: string]: any })['env']['spvPath'] || '',
    // cbcPortal: (window as { [key: string]: any })['env']['cbcPath'] || '',
    // cbpPortal: (window as { [key: string]: any })['env']['cbpPath'] || '',
    // fracPortal: (window as { [key: string]: any })['env']['fracPath'] || '',
    // otherPortalRoles: ((window as { [key: string]: any })['env']['otherPortalRoles'] || '') || {},
}
