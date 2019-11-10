import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    /*console.log(
      'queryparams: allowEdit: ' +
        this.activatedRoute.snapshot.queryParams['allowEdit']
    );
    console.log('fragment: ' + this.activatedRoute.snapshot.fragment);
    this.activatedRoute.fragment.subscribe();*/
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.allowEdit = +params['allowEdit'] === 1;
    });
    const id = +this.activatedRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });
  }
}
