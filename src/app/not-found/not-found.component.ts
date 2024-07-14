import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
msg1:string='404 Page';
msg2:string='Page Not Found';
isDisabled=false;
isRedColor=true;
isBlueColor=false;
name='kholoud';
// ngStyle={'color':this.isRedColor?'red':'blue','backgroundColor':this.isRedColor? 'black':'blue'}
ngStyle={'color':this.isRedColor?'red':'blue'}

eventDataBindingMethod(isRedColor:boolean):void
{

  this.isRedColor = isRedColor;
  // if (isRedColor == true)
  // {
  //   this.isRedColor = true;
  // }
  // else 
  // {
  //   this.isRedColor = false;
  // }

}

}
