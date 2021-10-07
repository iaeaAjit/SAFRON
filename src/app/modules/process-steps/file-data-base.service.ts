import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';

export class FileNode {
  name: string;
  children: FileNode[];
}

const TREE_DATA = [
  {
    'name': '1. Non-clinical phase ',
    'children': [
      {
        'name': '1.1. Equipment and software specific activities ',
        'children': [
          {
            'name': '1.1.1. New equipment',
            'children':[
              {
                'name':'1.1.1.1. Installation'
              },
              {
                'name':'1.1.1.2. Acceptance test',
              },{
                'name':'1.1.1.3. Customization and configuration of equipmen',
              },
              {
                'name':'1.1.1.4. New equipment - Commissionin', 
              },
              {
                'name':'1.1.1.5. Data recordin', 
              },
              {
                'name':'1.1.1.6. Preparation of data files for planning computer', 
              },
              {
                'name':'1.1.1.7. Other'
              }
            ]
          },
          {
            'name':'1.1.2. Routine machine QA',
            'children':[
              {
                'name':'1.1.2.1. Daily consistency checks',
                'children':[
                  {
                    'name':'',
                  }
                ]
              }
            ]
          }  
        ]    
      },
      {
        'name': '1.2 Other',
        'children': [
          {
            'name': '1.1. Equipment and software specific activities ',
            'children': [
              {
                'name': '1.1.1. New equipment',
                'children':[
                  {
                    'name':'1.1.1.1. Installation'
                  },
                  {
                    'name':'1.1.1.2. Acceptance test',
                  },{
                    'name':'1.1.1.3. Customization and configuration of equipmen',
                  },
                  {
                    'name':'1.1.1.4. New equipment - Commissionin', 
                  },
                  {
                    'name':'1.1.1.5. Data recordin', 
                  },
                  {
                    'name':'1.1.1.6. Preparation of data files for planning computer', 
                  },
                  {
                    'name':'1.1.1.7. Other'
                  }
                ]
              }      
            ]    
          }  
        ]
      }     
    ]
  }
];

const TREE_DATA1 = [
  {
    name: '2 Pretreatement Phase',
    children: [
      {
        name: '2.1. Room design',
        children: [
          {
            name: '2.1.1. Patient safety',
            children:[
              {
                name:'2.1.1.1. Staff and public safety'
              },
              {
                name:'2.1.1.2. Environmental controls',
              },{
                name:'2.1.1.3. Access control',
              },
              {
                name:'2.1.1.4. Other', 
              },
              {
                name:'2.1.1.5. Data recordin', 
              },
              {
                name:'2.1.1.6. Preparation of data files for planning computer', 
              },
              {
                name:'2.1.1.7. Other'
              }
            ]
          },
          {
            name:'2.1.2. Scientific infrastructure',
            children:[
              {
                name:'2.1.2.1. Daily consistency checks',
                children:[
                  {
                    name:'',
                  }
                ]
              }
            ]
          }  
        ]    
      },
      {
        name: '2.2 Other',
        children: [
          {
            name: '2.1. Equipment and software specific activities ',
            children: [
              {
                name: '2.1.1. New equipment',
                children:[
                  {
                    name:'2.1.1.1. Installation'
                  },
                  {
                    name:'2.1.1.2. Acceptance test',
                  },{
                    name:'2.1.1.3. Customization and configuration of equipmen',
                  },
                  {
                    name:'2.1.1.4. New equipment - Commissionin', 
                  },
                  {
                    name:'2.1.1.5. Data recordin', 
                  },
                  {
                    name:'2.1.1.6. Preparation of data files for planning computer', 
                  },
                  {
                    name:'2.1.1.7. Other'
                  }
                ]
              }      
            ]    
          }  
        ]
      }     
    ]
  }
];
const TREE_DATA2 = [
  {
    name: '3. Treatment phase',
    children: [
      {
        name: '3.1.  Scientific infrastructure',
        children: [
          {
            name: '3.1.1. New equipment',
            children:[
              {
                name:'3.1.1.1. Implementation of codes of practice for radiation dosimetry '
              },
              {
                name:'3.1.1.2. Development of dosimetry algorithms for local application',
              },{
                name:'3.1.1.3. Development of treatment planning algorithms for local application',
              },
              {
                name:'3.1.1.4. Other', 
              }
            ]
          },
          {
            name:'3.1.2. Booking process (pre-treatment and treatment',
            children:[
              {
                name:'3.1.2.1. Booking of appointment',
                children:[
                  {
                    name:'',
                  }
                ]
              }
            ]
          }  
        ]    
      },
      {
        name: '3.2 Other',
        children: [
          {
            name: '3.2. Equipment and software specific activities ',
            children: [
              {
                name: '3.2.1. New equipment',
                children:[
                  {
                    name:'3.2.1.1. Installation'
                  },
                  {
                    name:'3.2.1.2. Acceptance test',
                  },{
                    name:'3.2.1.3. Customization and configuration of equipmen',
                  },
                  {
                    name:'3.2.1.4. New equipment - Commissionin', 
                  },
                  {
                    name:'3.2.1.5. Data recordin', 
                  },
                  {
                    name:'3.2.1.6. Preparation of data files for planning computer', 
                  },
                  {
                    name:'3.2.1.7. Other'
                  }
                ]
              }      
            ]    
          }  
        ]
      }     
    ]
  }
];
const TREE_DATA3 = [
  {
    name: '4. Non-clinical phase ',
    children: [
      {
        name: '4.1. Equipment and software specific activities ',
        children: [
          {
            name: '4.1.1. New equipment',
            children:[
              {
                name:'4.1.1.1. Installation'
              },
              {
                name:'4.1.1.2. Acceptance test',
              },{
                name:'4.1.1.3. Customization and configuration of equipmen',
              },
              {
                name:'4.1.1.4. New equipment - Commissionin', 
              },
              {
                name:'4.1.1.5. Data recordin', 
              },
              {
                name:'4.1.1.6. Preparation of data files for planning computer', 
              },
              {
                name:'4.1.1.7. Other'
              }
            ]
          },
          {
            name:'4.1.2. Routine machine QA',
            children:[
              {
                name:'4.1.2.1. Daily consistency checks',
                children:[
                  {
                    name:'',
                  }
                ]
              }
            ]
          }  
        ]    
      },
      {
        name: '4.2 Other',
        children: [
          {
            name: '4.2.1 Equipment and software specific activities ',
            children: [
              {
                name: '4.2.1.1 New equipment',
                children:[
                  {
                    name:'4.2.1.1.1 Installation'
                  },
                  {
                    name:'4.2.1.1.2 Acceptance test',
                  },{
                    name:'4.2.1.1.3 Customization and configuration of equipmen',
                  },
                  {
                    name:'4.2.1.1.4 New equipment - Commissionin', 
                  },
                  {
                    name:'4.2.1.1.5 Data recordin', 
                  },
                  {
                    name:'4.2.1.1.6 Preparation of data files for planning computer', 
                  },
                  {
                    name:'4.2.1.1.7 Other'
                  }
                ]
              }      
            ]    
          }  
        ]
      }     
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class FileDataBaseService {

  dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Parse the string to json object.
    const dataObject = TREE_DATA;

    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    //     file node as children.
    const data = this.buildFileTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
  buildFileTree(value: any, level: number): FileNode[] {
    console.log(value)
    console.log(level)
    let data: any[] = [];
    for (let k in value) {
      let v = value[k];
      let node = new FileNode();
      node.name = v.name;
      console.log(node)
      console.log(v)
      if (v === null || v === undefined) {
        // no action
      } else if (typeof v === 'object') {
        node.children = this.buildFileTree(v.children, level + 1);
        node = v;
      } 
      data.push(node);
      break
    }
    console.log(data)
    return data;
  }
}
