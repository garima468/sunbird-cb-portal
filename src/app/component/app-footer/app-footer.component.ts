// import { environment } from './../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { ConfigurationsService, NsInstanceConfig, ValueService } from '@sunbird-cb/utils'

// tslint:disable-next-line
import _ from 'lodash'
import { environment } from 'src/environments/environment'
@Component({
  selector: 'ws-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppFooterComponent implements OnInit {

  isXSmall = false
  termsOfUser = true
  environment!: any
  currentRoute = 'page/home'
  hubsList!: NsInstanceConfig.IHubs[]
  portalUrls!: NsInstanceConfig.IPortalUrls
  private baseUrl = this.configSvc.baseUrl
  constructor(
    private configSvc: ConfigurationsService,
    private valueSvc: ValueService,    
    private router: Router,
    private http: HttpClient,
  ) {
    this.environment = environment
    if (this.configSvc.restrictedFeatures) {
      if (this.configSvc.restrictedFeatures.has('termsOfUser')) {
        this.termsOfUser = false
      }
    }
    this.valueSvc.isXSmall$.subscribe(isXSmall => {
      this.isXSmall = isXSmall
    })
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.bindUrl(event.url.replace('/app/competencies/', ''))
      }
    })
  }

  async ngOnInit() {
    const instanceConfig = this.configSvc.instanceConfig
    if (this.configSvc.portalUrls) {
      this.portalUrls = this.configSvc.portalUrls
    }
    if (instanceConfig && instanceConfig.hubs) {
      this.hubsList = (instanceConfig.hubs || []).filter(i => i.active)
    } else {
      const newInstance = await this.readAgain()
      this.hubsList = (newInstance.hubs || []).filter(i => i.active)
    }   

  }
  async readAgain() {
    const publicConfig: NsInstanceConfig.IConfig = await this.http
      .get<NsInstanceConfig.IConfig>(`${this.baseUrl}/site.config.json`)
      .toPromise()
    return publicConfig
  }
  bindUrl(path: string) {
    if (path) {
      // console.log(path)
      if (path !== '/app/competencies') {
        this.currentRoute = path
      }
    }
  }
  
  hasRole(role: string[]): boolean {
    let returnValue = false
    role.forEach(v => {
      const rolesList = (this.configSvc.userRoles || new Set())
      if (rolesList.has(v.toLowerCase()) || rolesList.has(v.toUpperCase())) {
        returnValue = true
      }
    })
    return returnValue
  }

  isAllowed(portalName: string) {
    const roles = _.get(_.first(_.filter(environment.portals, { id: portalName })), 'roles') || []
    if (!(roles && roles.length)) {
      return true
    }
    const value = this.hasRole(roles)
    return value
  }
  get needToHide(): boolean {
    return this.currentRoute.includes('all/assessment/')
  }

  onClick(event:any) {
    console.log(event.target.parentElement);
    event.target.parentElement.classList.toggle('open');
  }
}
