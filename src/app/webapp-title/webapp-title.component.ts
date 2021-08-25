import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-webapp-title',
  templateUrl: './webapp-title.component.html',
  styleUrls: ['./webapp-title.component.css']
})
export class WebappTitleComponent implements OnInit {
  title: string="The Food Avenue";
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  home(){
    this.router.navigate(['/home']);
  }
}
