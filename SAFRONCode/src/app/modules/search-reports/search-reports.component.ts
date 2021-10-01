import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-reports',
  templateUrl: './search-reports.component.html',
  styleUrls: ['./search-reports.component.css']
})
export class SearchReportsComponent implements OnInit {

  constructor() { }

  status: boolean = false;
  mStatus: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }
  xsEvent(){
    this.mStatus = !this.mStatus;       
}
  
  Headlines = [
    {
      name:'Orthovoltage equipment not properly calibrated'
    },
    {
      name:'Dosimeter error: Incorrect use of a calibration certificate'
    },
    {
      name:'Incorrect use of a plane parallel chamber'
    },
    {
      name:'Error in correction for atmospheric pressure'
    },
    {
      name:'Error in correction for atmospheric pressure'
    },
    {
      name:'Lack of consistency between dosimetry at affiliated institutions'
    },
    {
      name:'Incorrect calibration procedures'
    },
    {
      name:'Incorrect calibration of machine output'
    },
    {
      name:'Calibration error after a source change in a Co-60 unit'
    }, 
    {
      name:'Incorrect calibration of machine output'
    }, 
    {
      name:'Dosimeter error: Incorrect use of a calibration certificate'
    }, 
    {
      name:'Incorrect use of a plane parallel chamber'
    }, 
    {
      name:'Dosimeter error: Incorrect use of a calibration certificate'
    }, 
    {
      name:'Incorrect use of a plane parallel chamber'
    }, 
    {
      name:'Error in correction for atmospheric pressure'
    },
    {
      name:'Lack of consistency between dosimetry at affiliated institutions'
    },
    {
      name:'Incorrect calibration procedures'
    },
    {
      name:'Incorrect calibration of machine output'
    },
    {
      name:'Calibration error after a source change in a Co-60 unit'
    },
    {
      name:'Incorrect calibration of machine output'
    },
    {
      name:'Incorrect calibration of machine output'
    },
    {
      name:'Calibration error after a source change in a Co-60 unit'
    },
    {
      name:'Incorrect calibration of machine output'
    },
    {
      name:'Calibration error after a source change in a Co-60 unit'
    },
    {
      name:'Incorrect calibration of machine output'
    },
    {
      name:'Incorrect calibration of machine output'
    },
    {
      name:'Calibration error after a source change in a Co-60 unit'
    },
    {
      name:'Incorrect calibration of machine output'
    },
    {
      name:'Calibration error after a source change in a Co-60 unit'
    },
    {
      name:'Incorrect calibration of machine output'
    },
    {
      name:'Incorrect calibration of machine output'
    },
    {
      name:'Calibration error after a source change in a Co-60 unit'
    },
    {
      name:'Incorrect calibration of machine output'
    }
      
  ];

  ngOnInit(): void {
  }

}
