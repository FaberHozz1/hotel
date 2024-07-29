import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { AdminFacade } from 'src/data/facades/admin.facade.';
import { ELOADER_STATUS } from 'src/domain/enums/app.enum';
import { IHotel } from 'src/domain/interfaces/hotel.interface';
import { LoaderStatus } from 'src/domain/interfaces/app.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { take } from 'rxjs';

@Component({
  selector: 'app-edit-hotel',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  ],
  templateUrl: './edit-hotel.component.html',
  styleUrl: './edit-hotel.component.sass',
})
export class EditHotelComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<EditHotelComponent>);
  readonly hotel = inject<IHotel>(MAT_DIALOG_DATA);
  private _formBuilder = inject(FormBuilder);
  private _adminFacade = inject(AdminFacade);
  public form!: FormGroup;
  public isLoadingCreateHotel = signal<LoaderStatus>(ELOADER_STATUS.INITIAL);
  public LOADER_STATUS = ELOADER_STATUS;
  public ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.form = this._formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
    });
    this.form.setValue(this.hotel);
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public onCreateClick(): void {
    if (this.form.invalid) return;
    this.isLoadingCreateHotel.set(ELOADER_STATUS.LOADING);
    this._adminFacade
      .updateHotel(this.form.value)
      .pipe(take(1))
      .subscribe({
        next: () => this.isLoadingCreateHotel.set(ELOADER_STATUS.SUCCESS),
        error: () => this.isLoadingCreateHotel.set(ELOADER_STATUS.ERROR),
      });
  }
}
