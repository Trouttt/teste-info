import { Component, OnInit } from '@angular/core';
import { VehicleService } from './services/vehicle.service';
import { Vehicle } from './models/vehicle';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <!--The content below is only a placeholder and can be replaced.-->
  <section style="width:100vw;height:100vh;background: linear-gradient(to left,rgb(255,165,0), rgb(255,180,0));">
    <h1 style="text-align:center;color:white;padding-top:2rem;">
      Welcome to Info Cars!
    </h1>
    <section style="width:100%;display:flex;justify-content:center;margin-top:3rem;">
    <table style="background-color:white;border:solid grey 1px;border-radius:1vh;padding:1vh;box-shadow: 10px 10px 5px grey;" class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Modelo</th>
              <th scope="col">Ano do modelo</th>
              <th scope="col">Chassi</th>
              <th scope="col">Placa</th>
              <th scope="col">Renavan</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let vehicle of vehicles">
              <td style="border:solid black 1px;">{{vehicle.id}}</td>
              <td style="border:solid black 1px;">{{vehicle.model}}</td>
              <td style="border:solid black 1px;">{{vehicle.modelYear}}</td>
              <td style="border:solid black 1px;">{{vehicle.chassi}}</td>
              <td style="border:solid black 1px;">{{vehicle.plate}}</td>
              <td style="border:solid black 1px;">{{vehicle.renavan}}</td>
  
            </tr>
          </tbody>
        </table>
    </section>
  </section>
  
  <router-outlet></router-outlet>
`,
  styleUrls: []
})
export class AppComponent implements OnInit {

  vehicle = {} as Vehicle;
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.getVehicles();
  }


  // Chama o serviço para obtém todos os carros
  getVehicles() {
    this.vehicleService.getVehicles().subscribe((vehicles: Vehicle[]) => {
      this.vehicles = vehicles;
      console.log(vehicles);
    });
  }

}