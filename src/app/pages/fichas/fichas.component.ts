import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-fichas',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    DropdownModule,
    MatIconModule,
    ButtonModule,
    CalendarModule,
    InputSwitchModule,
    FileUploadModule,
    ToastModule,
    InputTextareaModule
  ],
  providers: [MessageService],
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css']
})
export class FichasComponent {
  fichaForm: FormGroup;
  sectores = [
    { name: 'Sector 1', code: 'S1' },
    { name: 'Sector 2', code: 'S2' },
    { name: 'Sector 3', code: 'S3' },
    { name: 'Sector 4', code: 'S4' },
    { name: 'Sector 5', code: 'S5' },
  ];
  vias = [
    { name: 'Via1', code: 'V1' },
    { name: 'Via2', code: 'V2' }
  ];
  tipoPuertas = [
    { name: 'Puerta1', code: 'P1' },
    { name: 'Puerta2', code: 'P2' }
  ];
  condNumes = [
    { name: 'Cond1', code: 'C1' },
    { name: 'Cond2', code: 'C2' }
  ];
  tipoEdificacionOptions = [
    { name: 'Edificación1', code: 'E1' },
    { name: 'Edificación2', code: 'E2' }
  ];
  tipoInteriorOptions = [
    { name: 'Interior1', code: 'I1' },
    { name: 'Interior2', code: 'I2' }
  ];
  codigoUrbanoOptions = [
    { name: 'Urbano1', code: 'U1' },
    { name: 'Urbano2', code: 'U2' }
  ];
  tipo_persona = [
    { name: 'Persona Natural', code: 'PN' },
    { name: 'Persona Jurídica', code: 'PJ' }
  ];

  estadoCivilOptions = [
    { name: 'Soltero', code: 'S' },
    { name: 'Casado', code: 'C' },
    { name: 'Divorciado', code: 'D' },
    { name: 'Viudo', code: 'V' }
  ];

  tipoDocOptions = [
    { name: 'DNI', code: 'DNI' },
    { name: 'RUC', code: 'RUC' },
    { name: 'Carnet Extranjería', code: 'CE' }
  ];

  tipoPersonaJuridicaOptions = [
    { name: 'Sociedad Anónima', code: 'SA' },
    { name: 'Sociedad Limitada', code: 'SL' }
  ];
  ubicacionOptions = [
    { name: 'Ubicacion1', code: 'U1' },
    { name: 'Ubicacion2', code: 'U2' },
  ];
  departamentoOptions = [
    { name: 'Departamento1', code: 'Dep1' },
    { name: 'Departamento2', code: 'Dep2' },
  ];
  provinciaOptions = [
    { name: 'Provincia1', code: 'Prov1' },
    { name: 'Provincia2', code: 'Prov2' },
  ];
  distritoOptions = [
    { name: 'Distrito1', code: 'Dis1' },
    { name: 'Distrito2', code: 'Dis2' },
  ];
  tipoViaOptions = [
    { name: 'Via1', code: 'V1' },
    { name: 'Via2', code: 'V2' },
  ];
  condTitularOptions = [
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
  ];
  formAdquisicionOptions = [
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
  ];
  clasificacionOptions = [
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
  ];
  predioCatastralOptions = [
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
  ];
  codigoUsoOptions = [
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
  ];
  zonificacionOptions = [
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
  ];

  mepOptions = [
    { name: 'MEP1', value: 'MEP1' },
    { name: 'MEP2', value: 'MEP2' },
  ];

  ecsOptions = [
    { name: 'ECS1', value: 'ECS1' },
    { name: 'ECS2', value: 'ECS2' },
  ];

  eccOptions = [
    { name: 'ECC1', value: 'ECC1' },
    { name: 'ECC2', value: 'ECC2' },
  ];

  ucaOptions = [
    { name: 'UCA1', value: 'UCA1' },
    { name: 'UCA2', value: 'UCA2' },
  ];
  codigosInstalacionOptions = [
    { name: 'Codigo 1', value: 'codigo1' },
    { name: 'Codigo 2', value: 'codigo2' }
  ];
  tipoDocDocumentos = [
    { name: 'Tipo 1', value: 'tipo1' },
    { name: 'Tipo 2', value: 'tipo2' }
  ];
  tipoPartidaOptions = [
    { name: 'Tipo 1', value: 'tipo1' },
    { name: 'Tipo 2', value: 'tipo2' }
  ];

  declaratoriaFabricaOptions = [
    { name: 'Opción 1', value: 'opcion1' },
    { name: 'Opción 2', value: 'opcion2' }
  ];
  condicionDeclaranteOptions = [
    { name: 'Opción 1', value: 'opcion1' },
    { name: 'Opción 2', value: 'opcion2' },
  ];
  estadoLlenadoOptions = [
    { name: 'Opción A', value: 'opcionA' },
    { name: 'Opción B', value: 'opcionB' },
  ];
  mantenimientoOptions = [
    { name: 'Opción X', value: 'opcionX' },
    { name: 'Opción Y', value: 'opcionY' },
  ];
  tipoDocLitigantes = [
    { name: 'tipoDoc 1', value: 'tD1' },
    { name: 'tipoDoc 2', value: 'tD2' },
  ];
  supervisores = [
    { nombres: 'Supervisor 1', value: 'supervisor1' },
    { nombres: 'Supervisor 2', value: 'supervisor2' },
  ];
  tecnicos = [
    { nombres: 'Técnico 1', value: 'tecnico1' },
    { nombres: 'Técnico 2', value: 'tecnico2' },
  ];
  verificadores = [
    { nombres: 'Verificador 1', value: 'verificador1' },
    { nombres: 'Verificador 2', value: 'verificador2' },
  ];




  constructor(private fb: FormBuilder) {
    this.fichaForm = this.fb.group({
      numeficha: [''],
      nume_ficha_lote: [''],
      nume_ficha_lote2: [''],
      cuc: [''],
      //  
      dpto: [''],
      prov: [''],
      dist: [''],
      sector: [''],
      manzanas: [''],
      lote: [''],
      edifica: [''],
      entrada: [''],
      piso: [''],
      unidad: [''],
      dc: [{ value: '', disabled: true }],
      //  
      codi_cont_rentas: [''],
      codi_pred_rentas: [''],
      //  
      ubicaciones: this.fb.array([this.createUbicacion()]),
      //
      tipoEdificacion: [''],
      tipoInterior: [''],
      numeInterior: [''],
      codigoUrbano: [''],
      nombHabUrba: [''],
      zonaDist: [''],
      mznaDist: [''],
      loteDist: [''],
      subLoteDist: [''],
      //
      tipoPersona: [''],
      estadoCivil: [''],
      tipoDoc1: [''],
      numeDoc1: [''],
      nombres1: [''],
      apePaterno1: [''],
      apeMaterno1: [''],
      tipoDoc2: [''],
      numeDoc2: [''],
      nombres2: [''],
      apePaterno2: [''],
      apeMaterno2: [''],
      numeDoc3: [''],
      razonSocial: [''],
      tipoPersonaJuridica: [''],
      ubicacion_domicilio: [''],
      departamento_domicilio: [''],
      provincia_domicilio: [''],
      distrito_domicilio: [''],
      codigoVia_domicilio: [''],
      tipoVia_domicilio: [''],
      nombreVia_domicilio: [''],
      nMunicipal_domicilio: [''],
      nInterior_domicilio: [''],
      codigoHurbano_domicilio: [''],
      nombreHhurbana_domicilio: [''],
      zona_domicilio: [''],
      manzana_domicilio: [''],
      lote_domicilio: [''],
      subLote_domicilio: [''],
      //
      telefonoDomicilio: [''],
      anexoDomicilio: [''],
      emailDomicilio: [''],
      condicionTitular: [''],
      formaAdquisicion: [''],
      fechaAdquisicion: [''],
      clasificacionPredio: [''],
      predioCatastral: [''],
      codigoUso: [''],
      zonificacion: [''],
      areaTitulo: [''],
      areaVerificada: [''],
      //
      frenteCampo: [''],
      derechaCampo: [''],
      izquierdaCampo: [''],
      fondoCampo: [''],
      frenteColindaCampo: [''],
      derechaColindaCampo: [''],
      izquierdaColindaCampo: [''],
      fondoColindaCampo: [''],
      //
      luz: [false],
      agua: [false],
      telefono: [false],
      desague: [false],
      gas: [false],
      internet: [false],
      tvcable: [false],
      //
      construcciones: this.fb.array([this.createConstruccion()]),
      //
      terrenoLegal: [''],
      construccionLegal: [''],
      terrenoFisico: [''],
      construccionFisico: [''],
      obrasComplementarias: this.fb.array([this.createObraComplementaria()]),
      //
      documentos: this.fb.array([this.createDocumento()]),
      tipoPartida: [''],
      numePartida: [''],
      fojas: [''],
      asiento: [''],
      fechaInscripcion: [''],
      declaratoriaFabrica: [''],
      asieFabrica: [''],
      fechaFabrica: [''],
      en_colindante: [''],
      en_area_publica: [''],
      en_jardin_aislamiento: [''],
      en_area_intangible: [''],
      //
      condicionDeclarante: [''],
      estadoLlenado: [''],
      numeHabitantes: [''],
      numeFamilias: [''],
      mantenimiento: [''],
      litigantes: this.fb.array([this.createLitigante()]),
      //
      observacion: [''],
      num_documento_declarante: [''],
      nombres_declarante: [''],
      apellido_paterno_declarante: [''],
      apellido_materno_declarante: [''],
      fecha_declarante: [''],
      supervisor: [''],
      fecha_supervision: [''],
      tecnico: [''],
      fecha_levantamiento: [''],
      verificador: [''],
      nume_registro: [''],
      fecha_verificacion: ['']





    });
  }
  createUbicacion(): FormGroup {
    return this.fb.group({
      viaId: [''],
      tipoViatipo: [''],
      tipoVianombre: [''],
      tipoPuerta: [''],
      numeMuni: [''],
      condNume: ['']
    });
  }
  createConstruccion(): FormGroup {
    return this.fb.group({
      bloque: [''],
      numPiso: [''],
      fecha: [''],
      mep: [''],
      ecs: [''],
      ecc: [''],
      muros: [''],
      techos: [''],
      pisos: [''],
      puertasVentanas: [''],
      revest: [''],
      banos: [''],
      instElectSanit: [''],
      areaVerificada: [''],
      uca: ['']
    });
  }
  createObraComplementaria(): FormGroup {
    return this.fb.group({
      codi_instalacion: [''],
      fecha: [''],
      mep: [''],
      ecs: [''],
      ecc: [''],
      prodTotal: [''],
      uniMed: [''],
      uca: ['']
    });
  }
  createDocumento(): FormGroup {
    return this.fb.group({
      tipoDocumento: [''],
      numDocumento: [''],
      fecha: [''],
      areaAutorizada: [''],
      urlDoc: ['']
    });
  }

  createLitigante(): FormGroup {
    return this.fb.group({
      tipo_doc_litigante: [''],
      nume_doclitigante: [''],
      codi_contribuye: [''],
      nombreslitigante: [''],
      ape_paternolitigante: [''],
      ape_maternolitigante: ['']
    });
  }
  get ubicaciones(): FormArray {
    return this.fichaForm.get('ubicaciones') as FormArray;
  }
  get construcciones(): FormArray {
    return this.fichaForm.get('construcciones') as FormArray;
  }
  get obrasComplementarias(): FormArray {
    return this.fichaForm.get('obrasComplementarias') as FormArray;
  }
  get documentos(): FormArray {
    return this.fichaForm.get('documentos') as FormArray;
  }
  get litigantes(): FormArray {
    return this.fichaForm.get('litigantes') as FormArray;
  }

  addUbicacion() {
    this.ubicaciones.push(this.createUbicacion());
  }

  removeUbicacion(index: number) {
    this.ubicaciones.removeAt(index);
  }



  addConstruccion(): void {
    this.construcciones.push(this.createConstruccion());
  }

  removeConstruccion(index: number): void {
    this.construcciones.removeAt(index);
  }

  aumentarObras() {
    this.obrasComplementarias.push(this.createObraComplementaria());
  }

  removeObra(index: number) {
    this.obrasComplementarias.removeAt(index);
  }

  aumentarDocumentos() {
    this.documentos.push(this.createDocumento());
  }

  removeDocumentos(index: number) {
    this.documentos.removeAt(index);
  }

  aumentarLitigantes() {
    this.litigantes.push(this.createLitigante());
  }

  removeLitigantes(index: number) {
    this.litigantes.removeAt(index);
  }











  onSubmit() {
    console.log(this.fichaForm.value);
  }
}
