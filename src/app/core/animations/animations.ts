import { trigger, animate, style, transition, query, stagger } from '@angular/animations';

export const animations = [
    trigger('listAnimation', [
        transition('* <=> *', [
            query(':enter',
                [style({
                    opacity: 0, transform: 'translateY(-30px)'
                }), stagger('150ms', animate('150ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })))],
                { optional: true }
            ),
            query(':leave',
                animate('80ms', style({
                    opacity: 0,
                })),
                { optional: true }
            )
        ])
    ])
];
