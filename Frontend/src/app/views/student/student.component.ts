import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MaterialColor } from '../../../lib/enums/material-color';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
  ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent { //unterleiste der Menübar
 
    public title = 'Studenten';
    public color: MaterialColor = 'accent';//farbe untertitle

}
