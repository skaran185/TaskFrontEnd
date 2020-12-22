import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [CommonModule, TranslateModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, TranslateModule, FormsModule, ReactiveFormsModule],
  providers: [],
})
export class CustomCommonModule {}
