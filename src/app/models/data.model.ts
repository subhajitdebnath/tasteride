
export interface Restaurant {
    id: number;
    name: string;
    costForTwo: number;
    type: 'veg' | 'nonveg';
}

export interface Filter {
    name: string;
    value: string | number;
    type: 'cost' | 'type' | 'reset';
}