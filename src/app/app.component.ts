import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currencyConverter';

  formulario: any;
  valorConvertido!: number;
  visibilidadeValorConvertido!: boolean;

  ngOnInit(): void{
    this.formulario = new FormGroup ({
      valor: new FormControl(null)
    });
  }

}
