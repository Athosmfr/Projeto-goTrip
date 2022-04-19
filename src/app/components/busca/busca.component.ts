import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id!: number;
  origem!: string;
  teste!: string;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.origem = params['origem'];
      this.teste = params['teste'];
      // console.log(params['id']);
      // console.log(params['origem']);
      //console.log(params);
      console.log(this.id, this.origem, this.teste);
    });

    // this.route.queryParams.filter(params => params)
    //   .subscribe(params => {
    //     console.log(params); // { order: "popular" }

    //     //this.order = params.order;
    //     //console.log(this.order); // popular
    //   }
    // );
    //const temp = this.route.snapshot.paramMap.get("id");
    //console.log(temp);
    // this.route.paramMap.subscribe(params => {
    //   console.log(params.get("id"));
    // })
    //   .subscribe(params => {
    //     console.log(params); // { order: "popular" }

    //     // this.order = params.order;
    //     // console.log(this.order); // popular
    //   }
    // );
  }

}
