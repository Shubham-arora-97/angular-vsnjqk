import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  brandArr=[
    {
      name : 'Tricon',
      link : 'www.triconinfotech.com',
      logo : 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjP8Ob4otLjAhX84HMBHayUCmsQjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fwww.glassdoor.co.in%252FReviews%252FTricon-Energy-Reviews-E267801.htm%26psig%3DAOvVaw1t-tPD-lNxXNiPEdiPeZv3%26ust%3D1564219788461281&psig=AOvVaw1t-tPD-lNxXNiPEdiPeZv3&ust=1564219788461281',
      desc : 'This is an IT company'
    },
    {
      name : 'Youtube',
      link : 'www.youtube.com',
      logo : 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjbtfqmo9LjAhWCX3wKHT8MAkcQjRx6BAgBEAU&url=https%3A%2F%2Fwww.businessinsider.com%2Fyoutube-changes-logo-updates-app-design-2017-8&psig=AOvVaw3-O3oQlvOoqhY5m6g7S551&ust=1564219884437621',
      desc : 'Youtube'
    }
  ];
removeList(event)
{
for(let item of this.brandArr){
  if(item.name === event){
    item.name = "";
    item.link = "";
    item.logo = "";
    item.desc = "";
  }
}
}
  
}
