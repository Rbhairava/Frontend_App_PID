import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-create-owner',
  templateUrl: './create-owner.component.html',
  styles: [
  ]
})
export class CreateOwnerComponent implements OnInit {

  constructor(
    private _tokenService: TokenService,
    private _authService: AuthService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  owner(ownerForm:any) {

  }

}
