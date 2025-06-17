import { Component } from '@angular/core';
import {Bid} from './bid/bid';
import {Declare} from './declare/declare';
import {Call} from './call/call';

@Component({
  selector: 'app-action',
  imports: [
    Bid,
    Declare,
    Call
  ],
  templateUrl: './action.html',
  styleUrl: './action.scss'
})
export class Action {

}
