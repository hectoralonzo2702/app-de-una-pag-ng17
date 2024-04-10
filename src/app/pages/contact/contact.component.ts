import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  
  //signo de 👇 admiracion abajo quiere dciar que nunca sera null esta variable
  contactForm!: FormGroup

  //...inyeccion de dependencia y definicion-validaciones de los controles del formulario 
  constructor (private form: FormBuilder){
    this.contactForm = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  
  //metodos/funciones

  //enviar() 
      enviar(event: Event){
        event?.preventDefault();
        console.log(this.contactForm.value)
      }
  
    //hasError
        hasErrors(field: string, typeError: string){

          //this.contactForm.get(field)?... para determinar a cual control de este  formulario corresponde la ejecucion 
          //de hasError que determina el trabajo de ngClass en vista local...
          return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;
            
        }

  
  ngOnInit(): void {
  }
}
