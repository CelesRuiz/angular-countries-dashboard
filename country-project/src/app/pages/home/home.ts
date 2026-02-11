import { CountryService } from '../../services/country';
import { Component, inject, OnInit, signal,ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: 
  [MatProgressSpinnerModule,
  MatCardModule,
  CommonModule,
  MatButtonModule,
  MatIconModule,
  ReactiveFormsModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit {

  value =signal(0)
  public searchControl = new FormControl('')
  public regionControl = new FormControl('')

  private service = inject(CountryService)

  public countriesList =signal<any[]>([])

  public filteredCountries = signal<any[]>([])


  public regions = signal<string[]>([])


  ngOnInit(): void {
      this.service.getCountries().subscribe({
        next:(value)=> {
          this.countriesList.set(value)
          this.filteredCountries.set(value)
          const allRegions = value.map((pais:any) => pais.region)
          const uniqueRegions:string[]  = [...new Set(allRegions)]
          this.regions.set(uniqueRegions)
          
          console.log(`Datos llegaron con exito`,this.countriesList())
        },
        error:(err)=> {
          console.error(`Error al traer los paises`,err)
            
        },
      })
      
    this.searchControl.valueChanges.subscribe(() => this.applyFilters())
    this.regionControl.valueChanges.subscribe(() => this.applyFilters())  
    
}

applyFilters() {
  const search = this.searchControl.value?.toLowerCase() || '';
  const regions = this.regionControl.value || '';

  const finalResult = this.countriesList().filter(pais => {
    const matchesName = pais.name.common.toLowerCase().includes(search);
    const matchesRegion = !regions || pais.region === regions;
    
    return matchesName && matchesRegion; 
  });

  this.filteredCountries.set(finalResult);
}

}





