import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-execs',
  templateUrl: './execs.component.html',
  styleUrls: ['./execs.component.scss']
})
export class ExecsComponent implements OnInit {
  allExecs = {
    'president': { name: 'Rachel Peters', position: 'President', description: '...'  },
    'vice_pres': { name: 'Akil Hosang', position: 'Vice-President', description: '...'  },
    'media': { name: 'Justin Ramjattan', position: 'Media Manager', description: '...'  },
    'events': { name: 'David Zachary Orr', position: 'Events Coordinator', description: '...'  },
    'secretary': { name: 'Tianna Corrie', position: 'Secretary', description: '...'  },
    'treasurer': { name: 'Randell Persad', position: 'Treasurer', description: '...'  },
    'web1': { name: 'Gabriela Sewdhan', position: 'Web Master', description: '...'  },
    'web2': { name: 'Qarun Bissoondial', position: 'Web Master', description: '...'  },
    'public': { name: 'Keanu Nichols', position: 'Public Relations Officer', description: '...'  },
  };

  constructor() { }

  ngOnInit() {
  }

}
