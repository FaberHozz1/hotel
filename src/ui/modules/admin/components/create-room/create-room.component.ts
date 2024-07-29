import { KeyValuePipe } from '@angular/common';
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
import { MatSelectModule } from '@angular/material/select';
import { take } from 'rxjs';
import { AdminFacade } from 'src/data/facades/admin.facade.';
import { ELOADER_STATUS } from 'src/domain/enums/app.enum';
import {
  EHOTEL_ROOM_SIZE,
  EHOTEL_ROOM_TYPE,
} from 'src/domain/enums/hotel.enum';
import { LoaderStatus } from 'src/domain/interfaces/app.interface';

@Component({
  selector: 'app-create-room',
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
    MatSelectModule,
    ReactiveFormsModule,
    KeyValuePipe,
  ],
  templateUrl: './create-room.component.html',
  styleUrl: './create-room.component.sass',
})
export class CreateRoomComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<CreateRoomComponent>);
  private _formBuilder = inject(FormBuilder);
  private _adminFacade = inject(AdminFacade);
  public form!: FormGroup;
  public isLoadingCreateRoom = signal<LoaderStatus>(ELOADER_STATUS.INITIAL);
  public LOADER_STATUS = ELOADER_STATUS;
  public types = EHOTEL_ROOM_TYPE;
  public sizes = EHOTEL_ROOM_SIZE;

  public ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.form = this._formBuilder.group({
      type: ['', Validators.required],
      size: ['', Validators.required],
      allowed_guests: ['', Validators.required],
      price: ['', Validators.required],
      tax: ['', Validators.required],
      total_price: [{ value: '', disabled: true }, Validators.required],
    });
  }

  public updateTotalPrice(): void {
    this.form
      .get('total_price')
      ?.setValue(this.form.get('price')?.value + this.form.get('tax')?.value);
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public onCreateClick(): void {
    if (this.form.invalid) return;
    this.isLoadingCreateRoom.set(ELOADER_STATUS.LOADING);
    this._adminFacade
      .createHotel(this.form.value)
      .pipe(take(1))
      .subscribe({
        next: () => this.isLoadingCreateRoom.set(ELOADER_STATUS.SUCCESS),
        error: () => this.isLoadingCreateRoom.set(ELOADER_STATUS.ERROR),
      });
  }
}
