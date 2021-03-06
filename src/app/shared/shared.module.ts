import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ButtonFreeComponent } from './components/button-free/button-free.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, SearchbarComponent, ButtonFreeComponent, LoaderComponent],
    imports: [CommonModule, RouterModule, MaterialModule],
    exports: [HeaderComponent, FooterComponent, SearchbarComponent, ButtonFreeComponent, LoaderComponent]
})
export class SharedModule {}
