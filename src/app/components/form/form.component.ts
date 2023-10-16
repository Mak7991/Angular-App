import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

/** @title Form field with prefix & suffix */
@Component({
  selector: 'material-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
})
export class FormComponent {
  hide = true;
}
