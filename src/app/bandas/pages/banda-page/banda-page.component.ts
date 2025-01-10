import { Component, OnInit } from '@angular/core';
import { BandasService } from '../../services/bandas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Banda } from '../../interfaces/bandas.interface';

@Component({
    selector: 'app-banda-component',
    templateUrl: './banda-page.component.html'
})

export class bandaComponent implements OnInit {

    public banda?: Banda;

    constructor(
        private bandasService: BandasService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit():void {
this.activatedRoute.params
.pipe(
switchMap(({id})=>this.bandasService.getAlbumById(id)),
).subscribe(banda =>{
if(!banda) return this.router.navigate([ '/bandas/lista' ])
    this.banda= banda;
console.log(banda);
return;
})
    }
}