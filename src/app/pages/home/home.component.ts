import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { MailService } from '../../services/mail.service';

const $ = (window as any)['jQuery'];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modalElement: any = [];
  contactForm: any;
  nombre: string;
  email:string;
  whatsapp: string;
  servicio: '';
  mensaje: string;

  constructor(private formBuilder: FormBuilder, private mailService: MailService) {
    this.contactForm = this.formBuilder.group({
      nombre: new FormControl(this.nombre, [Validators.required, Validators.maxLength(20)]),
      email: new FormControl(this.email, [Validators.required, Validators.email]),
      whatsapp: new FormControl(this.whatsapp, [Validators.required]),
      servicio: new FormControl(this.servicio, [Validators.required]),
      mensaje: new FormControl(this.mensaje, [Validators.required])
    });
  }

  modals = [
    {
      id: 'modal-service-1',
      title: 'Asesoría Contable y Fiscal',
      servicios: ['Asesoría y Consultoría Fiscal','Diagnóstico del Sistema de Contabilidad','Elaboración de Contabilidad', 'Reestructura Contable y Financieras','Elaboración y Análisis de Estados Financieros',
      'Presentación de Declaraciones Fiscales y Contabilidad Electrónica','Planeación Fiscal Estratégica','Gestión de Trámites ante Autoridades Fiscales (S.H.C.P., INFONAVIT, IMSS, SAR, Secretaría de Finanzas) Físicos y a través del Buzón Tributario',
      'Facturación Electrónica 3.3'
      ],
    },
    {
      id: 'modal-service-2',
      title: 'Asesoría Administrativa',
      servicios: ['Diagnóstico Administrativo','Reorganización Administrativa','Control Interno','Desarrollo de Manuales, Políticas, Procedimientos y otras Herramientas'
      ],
    },
    {
      id: 'modal-service-3',
      title: 'Asesoría Financiera',
      servicios: ['Análisis de Información Financiera Histórica','Análisis de Costos','Planeación Estratégica','Planeación Financiera','Evaluación de Proyectos de Inversión','Valuación de Empresas','Ingeniería Financiera'
      ],
    },
  
  ];

  formSubmit(contactData: any) {
    this.mailService.sendCocaForm(contactData.nombre, contactData.email,
      contactData.whatsapp, contactData.servicio, contactData.mensaje)
  .subscribe(() => {
    swal.fire(`Gracias ${ contactData.nombre }`,
  'Tu solicitud ha sido recibida, en breve nos pondremos en contacto contigo',
  'success').finally(() => {
    this.contactForm.reset();
    this.servicio = '';
    });
    });
  }

  openModal( modal: string ) {
    $('.modal-content-funcion').removeClass('animate__fadeOutUp').addClass('animate__fadeInDown');
    this.modalElement = $('#modal-' + modal);
    this.modalElement.css('display', 'block');
  }

  closeModal() {
    $('.modal-content-funcion').removeClass('animate__fadeInDown').addClass('animate__fadeOutUp');
    setTimeout(() => {
      $('.modal-funcion').css('display', 'none');
    }, 200);
    }


  ngOnInit(): void {

    $.getScript ('https://platform.twitter.com/widgets.js');

      // Este código cierra el modal si haces click en cuakquier parte
      $(window).click((e: any) => {
        if ( e.target === this.modalElement[0]) {
          this.closeModal();
        }
      });

// Partner Slider

var pSlider = $(".partners-slider");
if (pSlider.length) {
    pSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 1200,
        autoplayHoverPause: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        },
    });
}



       // Enlaces Slider
    var eSlider = $(".enlaces-slider");
    if (eSlider.length) {
        eSlider.owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 2000,
            smartSpeed: 1200,
            autoplayHoverPause: false,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 6
                },
                1200: {
                    items: 6
                }
            },
        });
    }
  }

}
