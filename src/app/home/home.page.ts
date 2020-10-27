import { Component, Output } from '@angular/core';
import { Router } from "@angular/router";

import { LoginService } from "../services/login.service";
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @Output() title = 'Home';

  public email: string;

  public message: string = "";

  constructor(private account: LoginService,
    private router: Router,
    private userService: UserService) {


    // this.account.getUser().then(res => {
    //   this.email = res.email;
    //   this.userService.getData(this.email.substr(0, this.email.indexOf('@'))).subscribe(res => {
    //     console.log(res.data());
        
    //     if(this.checkAdmin()) {
          
    //     }
    //   })
    // });

    // this.userService.getData(this.email.substr(0, this.email.indexOf('@'))).subscribe(res => {
    //   console.log(res.data());
    // })
  }

  cuartoA() {
    this.router.navigate(['/room-a']);
  }

  cuartoB() {
    this.router.navigate(['/room-b']);
  }

  logout() {
    this.account.logout().then(res => {
      
      this.router.navigate(['login']);
    }).catch(res => {
      console.log(res);
    });
  }

  clear() {
    
    this.userService.saveData(this.userJSON(), this.email.substr(0, this.email.indexOf('@'))).then(
      res => {
        this.message = "Crédito eliminado!";
      }
    ).catch(err => this.message = "Hubo un error al eliminar el crédito.")
      ;
  }


  /**
     * userJSON
     */
  public userJSON(adminInfo?) {
    if (!this.checkAdmin()) {
      
    }
    else {
    }
  }

  checkAdmin() {
    if (this.email.startsWith('admin')) {
      return true;
    }
    return false;
  }


}
