import { Component } from '@angular/core';

@Component({
  selector: 'app-symphonic-metal',
  templateUrl: './symphonic-metal.component.html',
  styleUrl: './symphonic-metal.component.scss'
})
export class SymphonicMetalComponent {
 public banda:string = 'Tristania';
 public origin:string = 'Noruega';
 public integrantes:string[]=[
  'Einar Moen: teclados y programación (1996–2022).',
  'Anders Høyvik Hidle: guitarra principal (1996–2022) y voces guturales (2006–2022).',
  'Mariangela Demurtas: voz femenina (2007–2022).',
  'Ole Vistnes: bajo y coros (2009–2022; miembro de gira 2008–2009).',
  'Gyri Smørdal Losnegaard: guitarra rítmica (2009–2022).',
  'Tarald Lie Jr.: batería (2010–2022; miembro de gira 2005–2010).',
  'Kjetil Nordhus: voces limpias y guitarra acústica (2010–2022; miembro de gira 2009–2010).'
 ];
 public albums:string[]=[
  'Window´s weeds', 'Beyond the Veil',
  'World of Glass','Ashes','Illumination',
  'Rubicon','Darkest White'
 ];
}
