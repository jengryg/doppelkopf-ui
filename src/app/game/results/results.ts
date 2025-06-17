import { Component } from '@angular/core';
import {Roundresult} from './roundresult/roundresult';

@Component({
  selector: 'app-results',
  imports: [
    Roundresult
  ],
  templateUrl: './results.html',
  styleUrl: './results.scss'
})
export class Results {

}
