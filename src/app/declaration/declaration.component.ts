import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'sf-declaration',
  templateUrl: './declaration.component.html',
  styles: []
})
export class DeclarationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addDeclaration(form: NgForm) {
    console.log("redirect")
    window.location.reload()
  }

}
