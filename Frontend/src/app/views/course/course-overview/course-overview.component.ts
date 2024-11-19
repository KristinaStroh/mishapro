import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { Card } from '../../../../lib/components/card/card.interfaces';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-course-overview',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './course-overview.component.html',
  styleUrl: './course-overview.component.scss'
})
export class CourseOverviewComponent {

  cards: Card[] = [ // aus lib
    {
      id: 12345,
      title: 'Projektseminar Programmieren',
      subtitle: 'Programmier Projekte',
      content: 'In dieser Vorlesung werden Programmierprojekte umgesetzt',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 23456,
      title: 'Wissenschaftlicharbeiten 3',
      subtitle: 'Professor',
      content: 'Die Entwicklung von Anwendungen für das Web ist in den letzten Jahrzehnten exponentiell gewachsen und umfasst eine Vielzahl von Technologien und Methoden. Zu den zentralen Bausteinen moderner Webentwicklung gehören HTML, CSS und JavaScript. Diese drei Sprachen bilden die Grundlage für das, was als Front-End-Entwicklung bekannt ist, und ermöglichen Entwicklern die Gestaltung von ansprechenden und interaktiven Benutzeroberflächen.',
      imageUrl: 'https://via.placeholder.com/150'
    },
  ];

  constructor() {}

    public addCard(): void {
      this.cards.push({ // push um hier das hinzufügen und den Aufruf einer "Add"-Methode zu simulieren
        id: 0, // --> muss durch die API generiert werden
        title: 'Neue Karte',
        subtitle: 'Zusätzliche Karte',
        content: 'Inhalt der neuen Karte.',
        imageUrl: 'https://via.placeholder.com/150'
      });
    }

}

