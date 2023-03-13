import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConversorService } from './conversor.service';

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

  constructor (private conversorService: ConversorService){}

  ngOnInit(): void{
    this.visibilidadeValorConvertido = false;
    this.formulario = new FormGroup ({
      valor: new FormControl(null)
    });
  }

  Converter(): void {
    const valor = this.formulario.value.valor;
    this.visibilidadeValorConvertido = true;
    this.conversorService.RealizarConversao().subscribe(resultado => {
      this.valorConvertido = Number((valor * resultado.rates.BRL).toFixed(2));
    })
  }
}
