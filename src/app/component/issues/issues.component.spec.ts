import { IssuesComponent } from './issues.component';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../service/app.service';
import { By } from '@angular/platform-browser';
import { element } from 'protractor';

describe('Pruebas para testear componente issue', ()=>{

 let component: IssuesComponent;
 let fixture: ComponentFixture<IssuesComponent>;

 /* Se configura el accesso al componente antes de ejecutar las pruebas */
 beforeEach( ()=>{

   TestBed.configureTestingModule({
    declarations:[IssuesComponent],
    imports:[HttpClientModule,FormsModule],
    providers: [AppService],
   })

   fixture = TestBed.createComponent(IssuesComponent);
   component = fixture.componentInstance;

 })

 it('Se comprueba si el componente Issue existe', ()=>{

  expect(component).toBeTruthy();

 })

 it('se comprueba existencia titulo ', ()=>{
   
  fixture.detectChanges();
  const elem: HTMLElement = fixture.debugElement.query( By.css('.display-4')).nativeElement;
  expect(elem.innerHTML).toContain('Reporte de incidencias')

 })

 it('El método limpiarForm debe limpiar los campos del modal titulo y descripción', async()=>{

  component.alta.titulo = 'Test input';
  component.limpiarForm();
  fixture.detectChanges();
  fixture.whenStable().then(()=>{
    const input = fixture.debugElement.query( By.css('input')).nativeElement;
    expect(input.value).toBe('');
  }).catch((e)=>{
    console.log(e)
  })
  

 })
})