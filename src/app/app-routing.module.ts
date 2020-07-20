import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecorridosComponent } from "./features/recorridos/recorridos/recorridos.component";
import { RecorridosEditComponent } from "./features/recorridos/recorridos-edit/recorridos-edit.component";

const routes: Routes = [
  { path: "", redirectTo: "/recorridos", pathMatch: "full" },
  { path: "recorridos-edit/:id", component: RecorridosEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
