import {Supply} from './supply.model';

export class Product {
    code: string;
    name: string;
    supplies: [string, number][] = [['', 0]];
}
