import {Component,OnInit, Injectable, ViewChild} from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';
import { FileDataBaseService } from './file-data-base.service'
import { TreeModel } from 'ng2-tree';

export class FileNode {
  children: FileNode[];
  name: string;
}

export class FileFlatNode {
  name: string;
  level: number;
  expandable: boolean;
}



interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-process-steps',
  templateUrl: './process-steps.component.html',
  styleUrls: ['./process-steps.component.css']
})
export class ProcessStepsComponent implements OnInit {
  treeControl: FlatTreeControl<FileFlatNode>;
  public tree: TreeModel=
    {
      value: '1. Non-clinical phase ',
      children: [
        {
          value: '1.1. Equipment and software specific activities ',
          children: [
            {
              value: '1.1.1. New equipment',
              children:[
                {
                  value:'1.1.1.1. Installation'
                },
                {
                  value:'1.1.1.2. Acceptance test',
                },{
                  value:'1.1.1.3. Customization and configuration of equipmen',
                },
                {
                  value:'1.1.1.4. New equipment - Commissionin', 
                },
                {
                  value:'1.1.1.5. Data recordin', 
                },
                {
                  value:'1.1.1.6. Preparation of data files for planning computer', 
                },
                {
                  value:'1.1.1.7. Other'
                }
              ]
            },
            {
              value:'1.1.2. Routine machine QA',
              children:[
                {
                  value:'1.1.2.1. Daily consistency checks',
                  children:[
                    {
                      value:'',
                    }
                  ]
                }
              ]
            }  
          ]    
        },
        {
          value: '1.2 Other',
          children: [
            {
              value: '1.1. Equipment and software specific activities ',
              children: [
                {
                  value: '1.1.1. New equipment',
                  children:[
                    {
                      value:'1.1.1.1. Installation'
                    },
                    {
                      value:'1.1.1.2. Acceptance test',
                    },{
                      value:'1.1.1.3. Customization and configuration of equipmen',
                    },
                    {
                      value:'1.1.1.4. New equipment - Commissionin', 
                    },
                    {
                      value:'1.1.1.5. Data recordin', 
                    },
                    {
                      value:'1.1.1.6. Preparation of data files for planning computer', 
                    },
                    {
                      value:'1.1.1.7. Other'
                    }
                  ]
                }      
              ]    
            }  
          ]
        }     
      ]
    };
  public tree1: TreeModel = 
    {
      value: '2 Pretreatement Phase',
      children: [
        {
          value: '2.1. Room design',
          children: [
            {
              value: '2.1.1. Patient safety',
              children:[
                {
                  value:'2.1.1.1. Staff and public safety'
                },
                {
                  value:'2.1.1.2. Environmental controls',
                },{
                  value:'2.1.1.3. Access control',
                },
                {
                  value:'2.1.1.4. Other', 
                },
                {
                  value:'2.1.1.5. Data recordin', 
                },
                {
                  value:'2.1.1.6. Preparation of data files for planning computer', 
                },
                {
                  value:'2.1.1.7. Other'
                }
              ]
            },
            {
              value:'2.1.2. Scientific infrastructure',
              children:[
                {
                  value:'2.1.2.1. Daily consistency checks',
                  children:[
                    {
                      value:'',
                    }
                  ]
                }
              ]
            }  
          ]    
        },
        {
          value: '2.2 Other',
          children: [
            {
              value: '2.1. Equipment and software specific activities ',
              children: [
                {
                  value: '2.1.1. New equipment',
                  children:[
                    {
                      value:'2.1.1.1. Installation'
                    },
                    {
                      value:'2.1.1.2. Acceptance test',
                    },{
                      value:'2.1.1.3. Customization and configuration of equipmen',
                    },
                    {
                      value:'2.1.1.4. New equipment - Commissionin', 
                    },
                    {
                      value:'2.1.1.5. Data recordin', 
                    },
                    {
                      value:'2.1.1.6. Preparation of data files for planning computer', 
                    },
                    {
                      value:'2.1.1.7. Other'
                    }
                  ]
                }      
              ]    
            }  
          ]
        }     
      ]
    }
  ;
  public tree2: TreeModel = 
    {
      value: '3. Treatment phase',
      children: [
        {
          value: '3.1.  Scientific infrastructure',
          children: [
            {
              value: '3.1.1. New equipment',
              children:[
                {
                  value:'3.1.1.1. Implementation of codes of practice for radiation dosimetry '
                },
                {
                  value:'3.1.1.2. Development of dosimetry algorithms for local application',
                },{
                  value:'3.1.1.3. Development of treatment planning algorithms for local application',
                },
                {
                  value:'3.1.1.4. Other', 
                }
              ]
            },
            {
              value:'3.1.2. Booking process (pre-treatment and treatment',
              children:[
                {
                  value:'3.1.2.1. Booking of appointment',
                  children:[
                    {
                      value:'',
                    }
                  ]
                }
              ]
            }  
          ]    
        },
        {
          value: '3.2 Other',
          children: [
            {
              value: '3.2. Equipment and software specific activities ',
              children: [
                {
                  value: '3.2.1. New equipment',
                  children:[
                    {
                      value:'3.2.1.1. Installation'
                    },
                    {
                      value:'3.2.1.2. Acceptance test',
                    },{
                      value:'3.2.1.3. Customization and configuration of equipmen',
                    },
                    {
                      value:'3.2.1.4. New equipment - Commissionin', 
                    },
                    {
                      value:'3.2.1.5. Data recordin', 
                    },
                    {
                      value:'3.2.1.6. Preparation of data files for planning computer', 
                    },
                    {
                      value:'3.2.1.7. Other'
                    }
                  ]
                }      
              ]    
            }  
          ]
        }     
      ]
    };
  public tree3: TreeModel = 
    {
      value: '4. Non-clinical phase ',
      children: [
        {
          value: '4.1. Equipment and software specific activities ',
          children: [
            {
              value: '4.1.1. New equipment',
              children:[
                {
                  value:'4.1.1.1. Installation'
                },
                {
                  value:'4.1.1.2. Acceptance test',
                },{
                  value:'4.1.1.3. Customization and configuration of equipmen',
                },
                {
                  value:'4.1.1.4. New equipment - Commissionin', 
                },
                {
                  value:'4.1.1.5. Data recordin', 
                },
                {
                  value:'4.1.1.6. Preparation of data files for planning computer', 
                },
                {
                  value:'4.1.1.7. Other'
                }
              ]
            },
            {
              value:'4.1.2. Routine machine QA',
              children:[
                {
                  value:'4.1.2.1. Daily consistency checks',
                  children:[
                    {
                      value:'',
                    }
                  ]
                }
              ]
            }  
          ]    
        },
        {
          value: '4.2 Other',
          children: [
            {
              value: '4.2.1 Equipment and software specific activities ',
              children: [
                {
                  value: '4.2.1.1 New equipment',
                  children:[
                    {
                      value:'4.2.1.1.1 Installation'
                    },
                    {
                      value:'4.2.1.1.2 Acceptance test',
                    },{
                      value:'4.2.1.1.3 Customization and configuration of equipmen',
                    },
                    {
                      value:'4.2.1.1.4 New equipment - Commissionin', 
                    },
                    {
                      value:'4.2.1.1.5 Data recordin', 
                    },
                    {
                      value:'4.2.1.1.6 Preparation of data files for planning computer', 
                    },
                    {
                      value:'4.2.1.1.7 Other'
                    }
                  ]
                }      
              ]    
            }  
          ]
        }     
      ]
    }
  
  
  treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;

  dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;

  constructor(private fileDataBase:FileDataBaseService) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
      this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    this.fileDataBase.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  transformer = (node: FileNode, level: number) => {
    let flatNode = new FileFlatNode();
    flatNode.name = node.name;
    flatNode.expandable = !!node.children;
    return flatNode;
  }

  private _getLevel = (node: FileFlatNode) => { return node.level; };

  private _isExpandable = (node: FileFlatNode) => { return node.expandable; };

  private _getChildren = (node: FileNode): Observable<FileNode[]> => {
    return observableOf(node.children);
  }

  hasChild = (_: number, _nodeData: FileFlatNode) => { return _nodeData.expandable; };

  // @ViewChild('tree') tree:any;

  ngAfterViewInit() {
    this.tree.treeControl.expandAll();
  }

  ngOnInit(): void {
  }

}
