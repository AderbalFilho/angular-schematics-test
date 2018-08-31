import { Component, OnInit } from '@angular/core';
<% if (defaultService) { %>import { <%= classify(name) %>Service } from './<%= name %>.service';<% } %>

@Component({
    selector: 'app-<%=dasherize(name)%>',
    templateUrl: './<%=dasherize(name)%>.component.html',
    styleUrls: ['./<%=dasherize(name)%>.component.css']
})
export class <%= classify(name) %>Component implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}
