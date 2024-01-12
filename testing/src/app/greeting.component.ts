import { component } from @angular / core;

@component({
    selector: 'app-hellow-world',
    template: '<h1>{{title}}</h1>',
    styles: [`
        h1{
            color: blue;
        }`]
})
export class HelloWorldComponent {
    title = 'shell scripting activation';
}