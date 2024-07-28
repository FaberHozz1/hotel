import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { take } from 'rxjs';
import { AdminFacade } from 'src/data/facades/admin.facade.';
import { ELOADER_STATUS } from 'src/domain/enums/app.enums';
import { LoaderStatus } from 'src/domain/interfaces/app.interface';

@Component({
  selector: 'app-create-hotel',
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
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './create-hotel.component.html',
  styleUrl: './create-hotel.component.sass',
})
export class CreateHotelComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<CreateHotelComponent>);
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
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public onCreateClick(): void {
    if (this.form.invalid) return;
    this.isLoadingCreateHotel.set(ELOADER_STATUS.LOADING);
    this._adminFacade
      .createHotel(this.form.value)
      .pipe(take(1))
      .subscribe({
        next: () => this.isLoadingCreateHotel.set(ELOADER_STATUS.SUCCESS),
        error: () => this.isLoadingCreateHotel.set(ELOADER_STATUS.ERROR),
      });
  }
}
