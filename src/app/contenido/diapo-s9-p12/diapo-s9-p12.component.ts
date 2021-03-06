import { Component, OnInit, ViewChildren, QueryList, ElementRef, ChangeDetectorRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-diapo-s9-p12',
  templateUrl: './diapo-s9-p12.component.html',
  styleUrls: ['./diapo-s9-p12.component.scss']
})
export class DiapoS9P12Component implements OnInit {

    height;
    @ViewChildren('contentsRef') contentsRef: QueryList<ElementRef>;
    heightsRef = [];
    
    constructor(private cd: ChangeDetectorRef) { 

    }

    ngOnInit() {
        setTimeout(() => {
            this.setHeight();
        }, 300);
    }

    setHeight() {
        this.cd.detectChanges();
        this.contentsRef.forEach(elem => {
            this.heightsRef.push(elem.nativeElement.offsetHeight);
        })
        this.height = Math.max.apply(null, this.heightsRef) / this.heightsRef.length;
        $(".tab").eq(0).addClass("show");
    }

    showTab(e) {
        for (let i=0; i < 3; i++) {
            if(e === i) {
                $(".content-tabs div").eq(i).addClass("show");
                $(".content-tabs div").eq(i).addClass("visible");
                $(".tabs div").eq(i).addClass("check");
            } else {
                $(".content-tabs div").eq(i).removeClass("show");
                $(".content-tabs div").eq(i).removeClass("visible");
                $(".tabs div").eq(i).removeClass("check");
            }
        }
    }

}
