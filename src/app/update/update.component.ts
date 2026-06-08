import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ExpanceService } from '../expance.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-update',
    imports: [FormsModule],
    templateUrl: './update.component.html',
    styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {

    expanceObj: any = {
        _id: "",
        title: "",
        price: null,
        type: ""
    }

    constructor(public Expance: ExpanceService, public router: Router, public route: ActivatedRoute) { }

    ngOnInit(): void {
        this.Expance.getById(this.route.snapshot.params['id']).subscribe((info: any) => {
            this.expanceObj = info.data
        })
    }

    handleSubmit() {
        this.Expance.updateExpance(this.expanceObj).subscribe(() => {
            alert('Data updated successfully!')
            this.router.navigate(['history'])
        })
    }
}
