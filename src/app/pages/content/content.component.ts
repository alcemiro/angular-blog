import { dataFake } from './../../data/dataFake';
import { title } from 'process';
import { routes } from './../../app.routes';
import { Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit { 
  photoCover: string = ""; 
  contentTitle: string = ""; 
  contentDescription: string = ""; 
  private id: string | null = "0"; 
  
  constructor(private route: ActivatedRoute) {} 
  
  ngOnInit(): void { 
    this.route.paramMap.subscribe(value => 
      { this.id = value.get("id"); 
        this.setValuesToComponent(this.id); // Chame a função aqui 
        }); 
      } 
      
  setValuesToComponent(id: string | null) {
     const result = dataFake.filter(article => 
      article.id.toString() == id)[0]; 
             
              this.contentTitle = result.title;
              this.contentDescription = result.description; 
              this.photoCover = result.photoCover; 
            
}            
}