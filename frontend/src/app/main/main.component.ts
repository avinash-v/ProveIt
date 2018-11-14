import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { Router , NavigationStart, NavigationEnd} from '@angular/router';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush,
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user = 'Anonymous';
  login_items = [{ title: 'Profile', link: ['/profile']}, {title : 'Logout', link: ['']}];
  unlogin_items = [{ title: 'Login', link: ['../auth/login']}];
  items = this.unlogin_items;
  loading = false;
  item_menu = [
    {
      title: 'Groups',
      expanded: false,
      icon: 'ion ion-android-radio-button-off',
      children: [
        {
          title: 'SE Research Group',
          link: ['/posts/'+ group_id], // goes into angular `routerLink`
        }
      ],
    },
    {
      title: 'Projects',
      expanded: false,
      icon: 'ion ion-android-radio-button-off',
      children: [
        {
          title: 'SE Project Group',
          link : ['/posts/' + project_id], //goes into angular routerLink, check this
        }
      ],
    },
    {
      title: 'Reimbursements',
      link: [],
    },
  ]; //item menu update this
  constructor(private menuService: NbMenuService,router: Router,private authservice : NbAuthService) {
    this.authservice.onTokenChange()
    .subscribe((token: NbAuthSimpleToken) => {
      if (token.isValid()){
        this.user = token.getPayload();
        this.items = this.login_items;
      }
      else{
        this.user = 'Anonymous';
        this.items = this.unlogin_items;
      }
    } )
    router.events.subscribe(event => {
      if(event instanceof NavigationStart){
        this.loading = true;
      }
      if(event instanceof NavigationEnd){
        this.loading = false;
      }
    })
   }
  ngOnInit() {
  }

}
