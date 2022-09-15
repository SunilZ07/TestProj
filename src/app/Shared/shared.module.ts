import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonHeaderComponent } from "../component/common-header/common-header.component";

@NgModule({
    imports:[
        CommonModule,
        IonicModule,
        ],
    declarations:[CommonHeaderComponent],
    providers:[],
    exports:[
        CommonHeaderComponent
    ]
})
export class SharedModule{}