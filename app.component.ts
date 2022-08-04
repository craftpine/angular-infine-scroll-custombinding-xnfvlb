import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import { OrdersService } from "./order.service";
import {
  DataStateChangeEventArgs,
  PdfExportProperties,
  ExcelExportProperties,
  ToolbarItems,
  IFilter,
  Filter
} from "@syncfusion/ej2-grids";
import { GridComponent } from "@syncfusion/ej2-angular-grids";
import { ClickEventArgs } from "@syncfusion/ej2-navigations";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  providers: [OrdersService]
})
export class AppComponent {
  public data: Observable<DataStateChangeEventArgs>;
  public pageOptions: Object;
  @ViewChild("grid", { static: true })
  public grid: GridComponent;
  public state: DataStateChangeEventArgs;
  public toolbarOptions: ToolbarItems[];
  constructor(public service: OrdersService) {
    this.data = service;
  }

  public dataStateChange(state: DataStateChangeEventArgs): void {
    console.log(state)
    this.service.execute(state);
  }

  public ngOnInit(): void {
    this.pageOptions = { pageSize: 12 };
    let state = { skip: 0, take: 36 };
    this.service.execute(state);
  }
}
