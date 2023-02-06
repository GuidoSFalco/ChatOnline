import { Component } from '@angular/core';

declare let $:any

let bandera_nuevoTexto:boolean = true
let bandera_meGusta:boolean = true

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})



export class InicioComponent {
  
  
  public NuevoComentario() {
    if (bandera_nuevoTexto == true) {
      $('.nuevo-comentario-opinion').css('display','block')
      $('.comentario-u-opinion').text('Nuevo Comentario')
      
      bandera_nuevoTexto = false
    } else {
      $('.nuevo-comentario-opinion').css('display','none')
      bandera_nuevoTexto = true
    } 
  }

  public NuevaOpinion() {
    if (bandera_nuevoTexto == true) {
      $('.nuevo-comentario-opinion').css('display','block')
      $('.comentario-u-opinion').text('Nueva Opinion')
      
      bandera_nuevoTexto = false
    } else {
      $('.nuevo-comentario-opinion').css('display','none')
      bandera_nuevoTexto = true
    }
  }

  public meGusta() {
    if (bandera_meGusta == true) {
      $('.noMeGusta').css('display','none')
      $('.meGusta').css('display','block')

      bandera_meGusta = false
    } else {
      $('.noMeGusta').css('display','block')
      $('.meGusta').css('display','none')

      bandera_meGusta = true
    }
  }

}
