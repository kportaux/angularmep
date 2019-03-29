import { Component, OnInit } from '@angular/core';

import { Login} from '../login/model/loginmodel';
import {Loginservice} from '../login/service/loginservice.service';
import {Router} from '@angular/router';
/**
 * Composant de bannière d'entête : menu principal
 */
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    /**
     * Objet login lié au service d'identification
     */
    private login: Login;
    /**
     *
     * @param authentication service injecté d'authentification
     */
    constructor(private authentication: Loginservice,
                private router: Router) { }

    /**
     * Initialisation pour retrouver par défaut le User
     */
    ngOnInit() {
        this.authentication.getAuthenticatedUser().
        subscribe((data) => this.login = data);
    }

    /**
     * Déconnexion
     */
    logout() {
        console.log('logout');
        this.authentication.logout().subscribe();
    }

    addLogin() {
      this.router.navigate(['/addLogin']);
    }

    showCustomers() {
      this.router.navigate(['/custom']);
    }

}
