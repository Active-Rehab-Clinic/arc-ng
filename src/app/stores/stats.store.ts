import { Injectable } from '@angular/core';

export interface Stat {
  label: string;
  value: string;
  color: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class StatsStore {
  
  getStats(): Stat[] {
    return [
      { 
        label: 'Patients Treated', 
        value: '1000+', 
        color: 'blue',
        description: 'Successfully treated patients across all specialties'
      },
      { 
        label: 'Years Experience', 
        value: '15+', 
        color: 'green',
        description: 'Combined years of professional rehabilitation experience'
      },
      { 
        label: 'Success Rate', 
        value: '98%', 
        color: 'purple',
        description: 'Patient satisfaction and treatment success rate'
      },
      { 
        label: 'Support Available', 
        value: '24/7', 
        color: 'orange',
        description: 'Emergency consultation and support services'
      }
    ];
  }
}