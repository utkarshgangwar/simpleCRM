import { Component } from '@angular/core';

@Component({
  selector: 'test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simpleCRM';

  pageHeading = 'Welcome to ARC Tutorials'; // string
  pageCount = 10; // number
  userObject = {
    'firstName': 'ARC',
    'lastName': 'Tutorials'
  } // object
  txtColorVal = 'blue'
  imgUrl = 'test.png';
  imgAlt = 'This is missing Image text';
  isUserLoggedIn = true;

  colVal = 2;


  success_msg = true;
  success_flag = false

  superPower = 'Batman'; // String

  subscribe = true;
  Batman = 'I am Batman'

  tax = 20;

  styleProp = "purple";

  txtColor = 'yellow';

  styleClsProp = 'c3'

  conditionClsProp = 'hgjcgh'

  getClsName(){
    return 'c3'
  }

  getBatman(){
    return 'batman'
  }

  contacts = [
    {
      'firstName': 'ARC',
      'lastName': 'Tutorials',
      'contactId': 1234
    },
    {
      'firstName': 'Mark',
      'lastName': 'Tutorials',
      'contactId': 1234
    },
    {
      'firstName': 'Ben',
      'lastName': 'Tutorials',
      'contactId': 1234
    },
    {
      'firstName': 'ARC',
      'lastName': 'Tutorials',
      'contactId': 1234
    },
    {
      'firstName': 'Mark',
      'lastName': 'Tutorials',
      'contactId': 1234
    },
    {
      'firstName': 'Ben',
      'lastName': 'Tutorials',
      'contactId': 1234
    },
    {
      'firstName': 'ARC',
      'lastName': 'Tutorials',
      'contactId': 1234
    },
    {
      'firstName': 'Mark',
      'lastName': 'Tutorials',
      'contactId': 1234
    },
    {
      'firstName': 'Ben',
      'lastName': 'Tutorials',
      'contactId': 1234
    },
    {
      'firstName': 'ARC',
      'lastName': 'Tutorials',
      'contactId': 1234
    },
    {
      'firstName': 'Mark',
      'lastName': 'Tutorials',
      'contactId': 1234
    },
    {
      'firstName': 'Ben',
      'lastName': 'Tutorials',
      'contactId': 1234
    },
    {
      'firstName': 'ARC',
      'lastName': 'Tutorials',
      'contactId': 1234
    },
    {
      'firstName': 'Mark',
      'lastName': 'Tutorials',
      'contactId': 1234
    },
    {
      'firstName': 'Ben',
      'lastName': 'Tutorials',
      'contactId': 1234
    },   
  ]
  
  sayHellow(){
    console.log('Hellow from ARC Tutorials');
  }

  higlightBGcolor(a,b,c){
    console.log('Hi I am being Higlighted!'+a+b+c);
  }

  inputBox(){
    alert('This is input box');
  }

  username = 'ARC Tutorials';
  month = 12;

  // PIPES
  lowerCaseExample = 'ARC TUTORIALS';
  upperCaseExample = 'learning angular framework';
  dateExample = Date.now();
  jsonExample = { username: "arc", major: "Angular", experience: 10};
  currencyExample = 125;
  percentExample = 0.6767;
}
