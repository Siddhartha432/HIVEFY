import { MetalService } from './../services/ablums.service';
import { Component} from '@angular/core';
@Component({
    selector: 'app-metal',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent{
constructor(public metalService:MetalService){

}
}