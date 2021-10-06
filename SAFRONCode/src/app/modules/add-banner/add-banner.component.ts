import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.css']
})
export class AddBannerComponent implements OnInit {
  action: any;
  isSubmitted: boolean = false;
  bannerForm!: FormGroup;
  trModality: any = ['mod1', 'mod2', 'mod3'];
  id: any;

  constructor(private router: Router, private fb: FormBuilder,private route: ActivatedRoute) { }

  ngOnInit(): void {
    let routeURL = this.router.url;
    this.action = routeURL.split('/') ? routeURL.split('/')[2] : 'Add';

    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log('this.id   ',this.id);
    });
    
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

    this.bannerForm = this.fb.group({
      title: ['', [Validators.required]],
      modality: ['', [Validators.required]],
      url: ['', [Validators.required, Validators.pattern(reg)]],
      sortOrder: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      file: ['', [Validators.required]]
    });
  }

  onSubmit(): boolean {
    const formData = new FormData();
    formData.append('file', this.bannerFormCtrl.file.value);
    console.log('Uploaded file  ',formData);
    /* this.http.post('http://localhost:8001/upload.php', formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      }) */

    this.isSubmitted = true;
    if (!this.bannerForm.valid) {
      return false;
    } else {
    console.log(JSON.stringify(this.bannerForm.value));
    return true;
    }
  }

  // Getter method to access formcontrols
  get bannerFormCtrl(){
    return this.bannerForm.controls;
  }

  // Choose Modality using select dropdown
  changeModality(e:any) {
    this.bannerFormCtrl.modality.setValue(e.target.value, {
      onlySelf: true
    })
  }

  onFileChange(event:any) {
  
    if (event.target.files.length > 0) {
      const efile = event.target.files[0];
      console.log('efile  ',efile);
      this.bannerForm.patchValue({
        file: efile
      });
    }
  }

}
