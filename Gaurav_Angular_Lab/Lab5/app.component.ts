import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder,FormGroup,Validators  } from '@angular/forms';
import { product_info } from './product_info'
import { reverseString } from './reverseString.pipe';

import { HttpClient } from '@angular/common/http';  //JSON FILE READING
import { Book } from './Books';                     //JSON FILE READING
import { Router } from '@angular/router';          // for searching in component from routing
import { Lab1o1SmartPhone } from './Lab1o1SmartPhone';

//import * as data from './books.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 /* template : `<ul><h1>This is </h1>
                  <li *ngFor =" let product of products">
                  </li>
  
  </ul>`,*/
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'FirstProject';
  
  constructor(private _router : Router){}

  searchid :any ;

  updateRouteValue() {
    
    alert("this"+this.searchid);
    //this.personList[id][property] = editField;
    this._router.navigate(['/ProductList',this.searchid]);  
  }
   


  /*--------------End :------------------------ Routing search ---------------------------------------------- */
  


  //--------------------------------------- JSON FILE READING STARTS--------------------------------------------------------
  /*
  booksList :any = [];
  book : Book;
  errorMsg :string;
  products :any =[];
  constructor(private httpClient :HttpClient)
  {

  }

  ngOnInit()
  {
    this.httpClient.get("assets/books.json").subscribe(data =>
      {
        console.log(data);
        this.products= data;
      })
      /*(error)=>
      {
        this.errorMsg= error.message;
        alert(this.errorMsg);
      }
      );
  }
*/
 //--------------------------------------------JSON FILE READING ENDS--------------------------------------------

  emsg :string ="India"

  eid   : number  = 42 ;
  ename : string  = 'Death Note' ;
  esal  : number  = 8 ;
  edept : string  = 'Anime'  ;
  empdata =[new product_info(2,4,'Avatar',10,'Action Sci-Fi'), new product_info(0,34,'Harry Potter',9,'Sci-Fi'), new product_info(1,36,'John Wick',8,'Action Thriller')];  
  data = 2548624;
  name  : string ;
  totalemp :number = 0;
//editField :string ;



  // constructor(private myService: MyServiceService){}
  /*
  displayData()
  {
    alert("Inside the caveof light");
    this.myService.add();
    this.myService.delete();
    this.myService.search();
    this.myService.update();
  }
  
  */

  addEmp()
  {
   //alert("Jao ho"+this.eid);
   this.totalemp += 1;
   let emp_obj = new product_info(this.totalemp,this.eid,this.ename,this.esal,this.edept);
   this.empdata.push(emp_obj);
   alert("Data inserted successfully");
  }

  removeEmp(emp_record : product_info)
 {
  alert("Are you sure to remove "+emp_record.ename+"'s data permanently");
  this.empdata =this.empdata.filter(function (product_info) { return product_info.ename != emp_record.ename;});
 }

// Starts : This is for editing after clicking edit button ---------------------------------------------//

editEid   : number;
editName  : string;
editSal   : number;
editDept  : string;
editId    : number;

editButtonEmp(emp_record : product_info)
{
   
   alert("inside");
   this.editEid   = emp_record.eid   ;
   this.editName  = emp_record.ename ;
   this.editSal   = emp_record.esal  ;
   this.editDept  = emp_record.edept ;
   this.editId    = emp_record.id    ;

}

editThroughButton()                 // from the form it is clicked and data is coming with the help of 2 way databinding
{
  let flag = 0;
  console.log(
    this.editEid   + " " +
    this.editName + " " + 
     this.editSal  + " " + 
      this.editDept  
      
  ); 
  for (let i ; i < this.empdata.length ;i++)
   {
    if(this.empdata[i].eid == this.editEid)
    {
      this.empdata[i].eid   = this.editEid   ;
      this.empdata[i].ename = this.editName  ;
      this.empdata[i].esal  = this.editSal   ;
      this.empdata[i].edept = this.editDept  ;
      flag = 1;
    }
    
   }
   if (flag ==1)
   {
     alert("Updation is successful ");
   }else{
    alert("Updation is successful ");
   }
}



// Ends : This is for editing after clicking edit button -----------------------------------------------//

 
/*
 updateList(id: number, property: string, event: any) {
  const editField = event.target.textContent;
  //this.personList[id][property] = editField;
}
  /*
  eid:number =  12   ;
  sal:number    = 1520000;
  hra:number = 100000; 
  DA:number = 200000;
  ded:number= 600000;
  tax :number= 200000;
  gs :number;
  name1:string  ;
  arraycont =['India','Japan','Israel'];
*/
/*
  addcont(){
       //alert(this.name1);
   
       this.arraycont.push(this.name1);
       console.log(this.arraycont);
       //alert(this.arraycont);
  }

displayName(name: string)
{
  alert(" The 'KATANA' is originated in : => "+name);
}*/
  /*test()
{
  let gs= (this.DA)+(this.sal)+(this.hra)-(this.ded+this.tax);
  this.gs=gs;
  alert("Hey user your details are : \n Name \t:"+this.name+
  "\n Eid \t:"+this.eid+" \n Salary \t:"+this.sal +"\n HRA \t:"+this.hra+"\n DA \t:"+this.DA+"\n Gross salary\t :"+gs
  );
}
test1()
{
  alert("Jai Hind");
}
*/


 editField: string;
    personList: Array<any> = [
      { id: 1, name: 'Yemu', age: 30, companyName: 'Katana', country: 'Spain', city: 'Madrid' },
    ];

    awaitingPersonList: Array<any> = [
      { id: 2, name: 'Drac', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow' },
      ];

    updateList(id: number, property: string, event: any) {
      const editField = event.target.textContent;
      //alert(id);
      //this.personList[id][property] = editField;
      this.empdata.forEach(function (value) { if(value.id == id) 
        {
          if(property==="eid"){
           // alert('You want to change your "'+property+'" FROM '+ value.eid+' TO value '+ editField);
            value.eid=editField;}
          else if(property==="ename"){
            //alert('You want to change your "'+property+'" FROM '+ value.ename+' TO value '+ editField);
            value.ename=editField;}
          else if(property==="esal"){
            //alert('You want to change your "'+property+'" FROM '+ value.esal+' TO value '+ editField);
            value.esal=editField;}
          else if(property==="edept"){
            //alert('You want to change your "'+property+'" FROM '+ value.edept+' TO value '+ editField);
            value.edept=editField;}
        }
      });
      alert("Data updated Successfully");
    }

    remove(id: any) {
      this.awaitingPersonList.push(this.personList[id]);
      this.personList.splice(id, 1);
    }

    add() {
      if (this.awaitingPersonList.length > 0) {
        const person = this.awaitingPersonList[0];
        this.personList.push(person);
        this.awaitingPersonList.splice(0, 1);
      }
    }

    changeValue(event: any) {
      this.editField = event.target.textContent;
    }
     
//////////////////////////////////// Sorting ///////////////////////////////////////////////////////


    elements: any = [];
    headElements = ['id', 'Mid','Mname', 'M_ratings','M_genre'];
    
    ngOnInit() {
      let ii : number =1;
      for (let i = 0; i < this.empdata.length; i++) {
        //this.elements.push({ id: i, first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i });
        
        this.elements.push({ id: i,eid: this.empdata[i].eid, ename:this.empdata[i].ename, esal: this.empdata[i].esal,edept: this.empdata[i].edept });
        
      }
      
       /* this.empdata.forEach(function (value) {
          
          this.elements.push({eid: value.eid, ename :value.ename, esal: value.esal, edept :value.edept});
          
        }
        );*/
      
      }

       
  /*--------------Starts :------------------------ Lab1.1 ---------------------------------------------- */
  
   lab1o1data : Array<any> = [{id : 'N1',name: 'Nokia' , cost : 20000 , type : 'SmartPhone'  },
   {id : 'S1',name: 'Samsung' , cost : 2000 , type : 'BasicPhone'  }     ];




  /*--------------Starts :------------------------ Routing search ---------------------------------------------- */

}

