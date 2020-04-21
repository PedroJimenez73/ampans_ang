import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { ScormStoreService } from 'src/app/servicios/scorm-store.service';

@Component({
  selector: 'app-diapo-s6-p7',
  templateUrl: './diapo-s6-p7.component.html',
  styleUrls: ['./diapo-s6-p7.component.scss']
})
export class DiapoS6P7Component implements OnInit {

    results = [];
    totalAciertos = 0;
    porcentAciertos = 0;
    doughnutChartLabels: Label[];
    doughnutChartData: MultiDataSet;
    doughnutChartType: ChartType = 'doughnut';
    doughnutChartOptions: ChartOptions = {
        responsive: true,
        legend: {
        display: false
        },
    }
    doughnutChartColors = [];
    
    constructor(private scormStoreService: ScormStoreService) { }

    ngOnInit() {
        for (let i = 12; i < 14; i ++) {
            this.results.push(this.scormStoreService.getResults()[i].result);
        }
        this.results.forEach(elem => {
            if(elem) {
                this.totalAciertos++;
            }
        });
        this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
        this.loadChartResultados();
    }
    
    loadChartResultados() {
        let resto = 100 - this.porcentAciertos;
        let color;
        if(this.porcentAciertos >= 50){
            color = '#008489';
        } else if (this.porcentAciertos >= 25){
            color = '#ffb822';
        } else {
            color = '#8f0404';
        }
        this.doughnutChartLabels = ['% Correctas','% Incorrectas'];
        this.doughnutChartData = [[this.porcentAciertos, resto ]];
        this.doughnutChartColors = [
            {
                backgroundColor: [ color, 'lightgrey'],
            },
        ];
    }

}