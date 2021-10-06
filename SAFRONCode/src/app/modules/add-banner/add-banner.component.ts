import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BannerService } from '../../core/services/banner.service';
import { Banner } from '../banner';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.css']
})
export class AddBannerComponent implements OnInit {
  action: any;
  isSubmitted: boolean = false;
  bannerForm!: FormGroup;
  //trModality: any = ['mod1', 'mod2', 'mod3'];
  id: any;
  all_banners: any;
  imageBlob: any;
  editBanner: any;

  constructor(private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _BannerService: BannerService) { }

  ngOnInit(): void {
    let routeURL = this.router.url;
    let path = routeURL.split('/') ? routeURL.split('/')[2] : 'Add';
    this.action = path.split('?') ? path.split('?')[0] : 'Add';

    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log('this.id   ', this.id);
    });

    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

    this.bannerForm = this.fb.group({
      title: ['', [Validators.required]],
      //modality: ['', [Validators.required]],
      url: ['', [Validators.required, Validators.pattern(reg)]],
      sortOrder: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      file: ['', [Validators.required]]
    });

    this._BannerService.getAll().subscribe(data => {
      console.log('data   ', data);
      this.all_banners = data;
      console.log(this.all_banners);

      if (this.action.toLowerCase() == 'edit') {
        this.editBanner = this.all_banners.find((banner: any) => {
          return banner.Id == this.id;
        });
        console.log('this.editBanner  ', this.editBanner);
        if (this.editBanner) {
          this.bannerForm.patchValue({
            title: this.editBanner.Title,
            url: this.editBanner.URL,
            sortOrder: this.editBanner.SortOrder,
            desc: this.editBanner.Description,
            file: this.editBanner.ImageFileName
          });
        }
      }

    });

  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('file', this.bannerFormCtrl.file.value);
    console.log('Uploaded file formData: ', formData);
    /* this.http.post('http://localhost:8001/upload.php', formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      }) */

    this.isSubmitted = true;
    if (this.bannerForm.valid) {

      let bannerFormData = this.bannerForm.value;

      let bannerObj = {
        Title: bannerFormData.title,
        Description: bannerFormData.desc,
        //ImageFileName: bannerFormData.,
        SortOrder: bannerFormData.sortOrder,
        URL: bannerFormData.url
      }
      console.log('bannerObj ', bannerObj);
      if (this.action != 'Add') {
        /* this._BannerService.create(bannerObj)
          .subscribe(banner =>
            this.all_banners.push(banner)
          ); */
      } else {
        /* this._BannerService.update(this.editBanner.Id, bannerObj)
      .subscribe(banner =>
        this.all_banners.push(banner)
      ); */
      }
    }
  }

  // Getter method to access formcontrols
  get bannerFormCtrl() {
    return this.bannerForm.controls;
  }

  // Choose Modality using select dropdown
  /* changeModality(e: any) {
    this.bannerFormCtrl.modality.setValue(e.target.value, {
      onlySelf: true
    })
  } */

  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      const efile = event.target.files[0];
      console.log('efile  ', efile);

      const reader = new FileReader();
      reader.readAsDataURL(efile);
      reader.onload = () => {
        this.imageBlob = reader.result;

        this.bannerForm.patchValue({
          file: this.imageBlob
        });

        console.log('imageDisplay  ', this.imageBlob);
      }
    }
  }

}
