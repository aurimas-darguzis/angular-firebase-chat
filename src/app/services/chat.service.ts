import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, FirebaseListObservable  } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';

import { ChatMessage } from '../models/chat-message.model';


@Injectable()
export class ChatService {

  constructor(private af: AngularFireDatabaseModule) { }

  sendMessage (message) {
    // this.af.post(this.url, message);
    return;
  }

}
