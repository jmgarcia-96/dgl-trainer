import { trigger, transition, style, animate } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('3000ms ease-in', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
]);
