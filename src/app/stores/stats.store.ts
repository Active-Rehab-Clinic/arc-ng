import { Injectable } from '@angular/core';
import { Stat } from '@models/stat.model';

@Injectable({
  providedIn: 'root',
})
export class StatsStore {
  getStats(): Stat[] {
    return [
      {
        label: 'Patients Treated',
        value: '1000+',
        color: 'blue',
        description: 'Successfully treated patients across all specialties',
      },
      {
        label: 'Years Experience',
        value: '13+',
        color: 'green',
        description: 'Combined years of professional rehabilitation experience',
      },
      {
        label: 'Success Rate',
        value: '98%',
        color: 'purple',
        description: 'Patient satisfaction and treatment success rate',
      },
    ];
  }
}
