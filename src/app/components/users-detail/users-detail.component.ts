import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../sevices/users.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  console = console;
  form: FormGroup;
  id: number;
  isAddMode?: boolean;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UsersService) {
    this.id = this.route.snapshot.params.id;
    this.isAddMode = !this.id;
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [null]
    });
  }

  ngOnInit(): void {

    if (!this.isAddMode) {
      this.userService.getFindBy(this.id)
        .pipe(first())
        .subscribe(x => {
          this.form.patchValue(x);
        });
    }
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form?.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createUser();
    } else {
      this.updateUser();
    }
  }

  private createUser(): void {
    console.log(this.form.value);
    this.userService.create(this.form?.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['/users']);
        },
        error: (error: any) => {
          this.loading = false;
          console.log('Error' + error);
        }
      });
  }

  private updateUser(): void {
    this.userService.update(this.id, this.form?.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['/users']);
        },
        error: (error: any) => {
          console.error(error);
          this.loading = false;
        }
      });
  }



}
