import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-diapo26',
  templateUrl: './diapo26.component.html',
  styleUrls: ['./diapo26.component.scss']
})
export class Diapo26Component implements OnInit {

    anterior = "";

    constructor() { }

    ngOnInit() {
    }

    acordeon(id){
        let content =$(id+' .content');
        // svg=$(id+' svg');
        console.log($(this.anterior+" .content").css("display"));

        // heightContent=($(content).height()+70)+'px';
        if((this.anterior!=id) && (this.anterior!="")&& ($(this.anterior+" .content").css("display"))!="none") {
            $(this.anterior+" .content").slideToggle(500);      
            $(this.anterior+" .mas").toggleClass('mostrada')     
            $(this.anterior+" .menos").toggleClass('mostrada')     
            $(this.anterior).toggleClass('borde')     
        }

        $(content).slideToggle(500);
        $(id+" .menos").toggleClass('mostrada');    
        $(id+" .mas").toggleClass('mostrada');
        $(id).toggleClass('borde');     
        this.anterior = id;
    } 

}
